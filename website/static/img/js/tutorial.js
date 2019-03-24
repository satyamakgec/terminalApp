var tutorials = {};
var tutorial_per_page_count = 2;
var tutorials_count = 0;
var authorList = [];
var contentTypeList = [];

var filtered_author = "";
var filtered_type = "";
$(document).ready(function () {
    get_data();
});

$(document).on('click', '#prev', function () {
    var page_number = parseInt($(this).attr("page_number"));
    load_data(filtered_author, filtered_type, page_number);
    $('#next').attr("page_number", page_number);
    $('#prev').attr("page_number", page_number - 1);
});
$(document).on('click', '#next', function () {
    var page_number = parseInt($(this).attr("page_number"));
    load_data(filtered_author, filtered_type, page_number);
    $('#next').attr("page_number", page_number + 1);
    $('#prev').attr("page_number", page_number);
});
$(document).on('change', '#authorListfiltervalue', function () {
    var author = filtered_author = $(this).val();
    var type = filtered_type = $('#contentTypefiltervalue').val();
    load_data(author, type, 1);
});
$(document).on('change', '#contentTypefiltervalue', function () {
    var author = filtered_author = $('#authorListfiltervalue').val();
    var type = filtered_type = $(this).val();
    load_data(author, type, 1);
});

function get_data() {
    var request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:5000/v1/typeform/tutorials', true)
    request.send();
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            tutorials = data;
            for(i=0; i < tutorials.length; i++){
                authorList.push(tutorials[i].author);  
                contentTypeList.push(tutorials[i].contentType);  
            }
            authorList = unique(authorList);
            contentTypeList = unique(contentTypeList);
            load_data(null, null, 1);
            populateList();
        } else {
            console.log('error')
        }
    }
}

function load_data(author, type, page_number) {
    if (typeof page_number == undefined || !page_number) {
        page_number = 1;
    }
    var filtered_data = [];
    var start_index = (page_number - 1) * tutorial_per_page_count // inclusive
    var end_index = page_number * tutorial_per_page_count; // exclusive

    for (i = 0; i < tutorials.length; i++) {
        var to_push = true;
        if (author) { // author filter
            filtered_author = author;
            if (tutorials[i].author == author) {
                if (type) { // type filter
                    filtered_type = type;
                    if (tutorials[i].contentType == type) {
                        to_push = true;
                    } else {
                        to_push = false; // type not matched
                    }
                } else {
                    to_push = true;
                }
            } else {
                to_push = false; // author not matched
            }
        } else {
            if (type) { // type filter
                filtered_type = type;
                if (tutorials[i].contentType == type) {
                    to_push = true;
                } else {
                    to_push = false; // type not matched
                }
            } else {
                to_push = true;
            }
        }
        if (to_push) {
            filtered_data.push(tutorials[i]);
        }
    }

    var total_pages = parseInt(Math.ceil(tutorials.length / tutorial_per_page_count));
    var paginated_tutorials = filtered_data.slice(start_index, end_index);
    tutorials_count = filtered_data.length;
    load_view(paginated_tutorials);
    if (page_number == 1) {
        $('#prev').hide();
    } else {
        $('#prev').show();
    }
    if (page_number == total_pages) {
        $('#next').hide();
    } else {
        $('#next').show();
    }
    $('#count').html(page_number + "/" + total_pages);
    if (tutorials_count) {
        if (tutorials_count < tutorial_per_page_count) {
            $('#paginate').hide();
        } else {
            $('#paginate').show();
        }
    } else {
        $('#paginate').hide();
    }
}

function load_view(filtered_data) {
    $('#tutorialBox').html('');
    for (let i = 0; i < filtered_data.length; i++) {
        $("<a class='tutorialLink' href=" + filtered_data[i].url + " target='_blank'><div class='tutorialBoxIN'>" +
            "<div class='tutorialHeading' id='tutorialHeading'> " + filtered_data[i].title + "</div> " +
            "<div class='tutorialDesc' id='tutorialDesc'> " + filtered_data[i].description + "</div> " +
            "<div class='tutorialDetails' id='tutorialDetails'>Published by - <span id='tutorialDetailsAuthor' class='tutorialDetailsAuthor'><b> " + filtered_data[i].author +
            "</b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className='tutorialDetailsType' id='tutorialDetailsType'><b>" + filtered_data[i].contentType + "</b></span> <span class='tutorialDetailsDate'> &nbsp;&nbsp;&nbsp;Posted on: <b>" + filtered_data[i].timestamp + " </b></span></div>" +
            '</div></a>').appendTo('#tutorialBox');
    }
    $('.filterBox').show();

}


function show_pagination() {

}

function populateList() {
    for (j = 0; j < authorList.length; j++) {
        $('<option value="' + authorList[j] + '">' + authorList[j] + '</option>').appendTo('#authorListfiltervalue');
    }

    for (j = 0; j < contentTypeList.length; j++) {
        $('<option value="' + contentTypeList[j] + '">' + contentTypeList[j] + '</option>').appendTo('#contentTypefiltervalue');
    }
}

function unique(array){
    return array.filter(function (e1, index, arr){
        return index == arr.indexOf(e1);
    })
}

// function getData(bearer) {
//   return fetch('localhost:5000/v1/typeform/tutorials', {
//         method: "GET", // *GET, POST, PUT, DELETE, etc.
//   }).then(response => response.json());  
// }





// function combinedData(callback) {
//   getBearerData(function(data) {
//     getVerifiedTutorials(function(verifiedTutorials) {
//       callback({
//         "Bearer": data.Bearer,
//         "ApprovedTutorials": verifiedTutorials
//       });
//     })
//   })
// }

// function getVerifiedTutorials(callback) {
//   $.getJSON('./img/js/verifiedTutorials.json', function(data) {
//     callback(data);
//   });
// }