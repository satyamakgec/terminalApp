const _ = require('lodash');
const rq = require('request-promise');
const fs = require("fs");
const APIError = require('../../utils/APIError');
const { env, approvedTutorialsPath, bearer } = require('../../../config/vars');
//const { typeFormAPIFailure } = require('../../middlewares/error');

var options = {
    method: 'GET',
    uri: 'https://api.typeform.com/forms/BknR0R/responses?since=2019-03-01T00%3A00%3A00&until=2020-07-10T00%3A00%3A00',
    headers: {
        'User-Agent': 'Request-Promise',
        'Content-Type': 'application/json',
        authorization: `bearer ${bearer}`
    },
    json: true // Automatically parses the JSON string in the response
};

/**
 * Get all the approved tutorials
 * @public
 */
exports.getApprovedTutorials = async () => {
    var obj = JSON.parse(fs.readFileSync(approvedTutorialsPath, 'utf8'));
    let result = new Array();
    let fetchedResponse = await getTutorials();
    if (fetchedResponse.status != 200) {
        throw tutorialFetchingError(fetchedResponse.message);
    } else {
        let approvedArray = Object.keys(obj).map(
            function(key) {
                return obj[key];
            }
        );
        for (let i = 0; i < fetchedResponse.data.total_items; i++) {
            for (let j = approvedArray.length - 1; j >= 0; j--) {
                if ( approvedArray[j].emailId == fetchedResponse.data.items[i].answers[3].text && approvedArray[j].title == fetchedResponse.data.items[i].answers[0].text) {
                    let radioOptions = _.flattenDeep(fetchedResponse.data.items[i].answers[6].choices.labels);
                    result.push({
                        "title": fetchedResponse.data.items[i].answers[0].text,
                        "description": fetchedResponse.data.items[i].answers[1].text,
                        "author": fetchedResponse.data.items[i].answers[2].text,
                        "email": fetchedResponse.data.items[i].answers[3].text,
                        "contentType":fetchedResponse.data.items[i].answers[4].text,
                        "url": fetchedResponse.data.items[i].answers[5].url,
                        "labels": radioOptions,
                        "timestamp": getSubmitDate(fetchedResponse.data.items[i].submitted_at)
                    });
                }
            }
        }
        return result;
    }
}

/**
 * Filtered the tutorial by the author name
 * @public
 */

exports.getFilteredTutorialByAuthorList = async (filteredBy) => {
    let approvedTutorials;
    try {
        approvedTutorials = await this.getApprovedTutorials();
        let fileterdList = new Array();
        for (let i = 0; i < approvedTutorials.length; i++) {
            if ((approvedTutorials[i].author).toLowerCase() == filteredBy.toLowerCase()) {
                fileterdList.push(approvedTutorials[i]);
            }
        }
        return fileterdList;
    } catch(error) {
        throw error;
    }   
}

/**
 * Filtered the tutorial by given content type
 * @public
 */

exports.getFilteredTutorialByContentList = async (filteredBy) => {
    let approvedTutorials;
    try {
        approvedTutorials = await this.getApprovedTutorials();
        let fileterdList = new Array();
        for (let i = 0; i < approvedTutorials.length; i++) {
            if ((approvedTutorials[i].contentType).toLowerCase() == filteredBy.toLowerCase()) {
                fileterdList.push(approvedTutorials[i]);
            }
        }
        return fileterdList;
    } catch(error) {
        throw error;
    }
}


const getTutorials = async () => {
    return new Promise((resolve, reject) => {
        rq(options).then((_tutorials) => {
            return resolve(handler(_tutorials, 200, "success"));
        }).catch((error) => {
            return reject(handler("", 500, error.message));
        });  
    });
}

const handler = (obj, status, message) => {
    return ({
        "status": status,
        "data": obj,
        "message": message
    });
}

function getSubmitDate(data) {
    let date = data.substring(0, data.indexOf('T'));
    var year = date.substring(0, 4);
    var month = date.substring(5, 7);
    if (date.substring(5, 6) == 0) {
        month = date.substring(6, 7);
    }
    var day = date.substring(8, 11);
    var months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ];
    month = months[month];
    return day + ', ' + month + ' ' + year;
}

  /**
   * Return new validation error
   * if error is a mongoose duplicate key error
   *
   * @param {Error} error
   * @returns {Error|APIError}
   */
    function tutorialFetchingError(error) {
        if (error.message) {
            return new APIError({
                message: 'Fetching Data Failure',
                errors: [{
                    field: 'bearer token',
                    location: 'header',
                    messages: ['possibly bearer token failure', error.message],
                }],
                status: httpStatus.CONFLICT,
                isPublic: true,
                stack: error.stack,
            });
        }
        return error;
    }