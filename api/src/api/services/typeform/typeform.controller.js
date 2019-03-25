const httpStatus = require('http-status');
const service = require('./typeform.service');
const { handler: errorHandler } = require('../../middlewares/error');

/**
 * Return the approved tutorials
 * @public
 */
exports.tutorials = async (req, res, next) => {
    try {
        const response = await service.getApprovedTutorials();
        return res.status(httpStatus.OK).json(response);
    } catch(error) {
        return next(error);
    }
}


/**
 * Return the filered list of tutorials
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.filteredTutorialByAuthor = async(req, res, next) => {
    try {
        const response = await service.getFilteredTutorialByAuthorList(req.query.filteredBy);
        return res.status(httpStatus.OK).json(response);
    } catch(error) {
        return next(error);
    }
}

/**
 * Return the filered list of tutorials
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.filteredTutorialByContent = async(req, res, next) => {
    try {
        const response = await service.getFilteredTutorialByContentList(req.query.filteredBy);
        return res.status(httpStatus.OK).json(response);
    } catch(error) {
        return next(error);
    }
}

