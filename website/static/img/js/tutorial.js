var tutorials = {};
var tutorial_per_page_count = 50;
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

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    // closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), authorList);



function authorFilterValueSet() {
    // console.log(document.getElementById("myInput").value);
    author = document.getElementById("myInput").value;
    var type = filtered_type = $('#contentTypefiltervalue').val();

    load_data(author, type, 1);
}


$(document).on('click', '#next', function () {
    var page_number = parseInt($(this).attr("page_number"));
    load_data(filtered_author, filtered_type, page_number);
    $('#next').attr("page_number", page_number + 1);
    $('#prev').attr("page_number", page_number);
});
// $(document).on('change', '#myInput', function () {
//     var author = filtered_author = $(this).val();
//     var type = filtered_type = $('#contentTypefiltervalue').val();
//     load_data(author, type, 1);
// });
$(document).on('change', '#contentTypefiltervalue', function () {
    var author = filtered_author = $('#myInput').val();
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
        console.log(data);

        if (request.status >= 200 && request.status < 400) {
            tutorials = data;
            for (i = 0; i < tutorials.length; i++) {
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
    if (typeof filtered_data !== 'undefined' && filtered_data.length > 0) {
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
    } else {
        $('#tutorialBox').html('<div class="noData" style="text-align:center;padding: 5rem 0;">No data found</div>');
    }

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

function unique(array) {
    return array.filter(function (e1, index, arr) {
        return index == arr.indexOf(e1);
    })
}