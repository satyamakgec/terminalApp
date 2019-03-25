const express = require('express');
const validate = require('express-validation');
const controller = require('./typeform.controller');
const { tutorialsFilter } = require('./typeform.validation');


const router = express.Router();

/**
 * @api {get} v1/typeform/tutorials Register
 * @apiDescription Return a list of approved tutorials
 * @apiVersion 1.0.0
 * @apiName tutorials
 * @apiGroup typeform
 * @apiPermission public
 *
 * @apiSuccess (Created 201) {String}  result.title    Title of the tutorial
 * @apiSuccess (Created 201) {String}  result.description   Descriptiton of the tutorial
 * @apiSuccess (Created 201) {String}  result.author     Author of the tutorial
 *                                                
 * @apiSuccess (Created 201) {string}  result.email     Email of the tutorial
 *                                                 
 * @apiSuccess (Created 201) {String}  result.contentType     Type of content of the tutorial
 *
 * @apiSuccess (Created 201) {String}  result.url         URL of the tutorial
 * @apiSuccess (Created 201) {String}  result.labels      Tags of the tutorial
 * @apiSuccess (Created 201) {Date}    result.timestamp   Timestamp
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */
router.route('/tutorials')
    .get(controller.tutorials);


/**
 * @api {get} v1/typeform/tutorials/author
 * @apiDescription Get the filtered tutorials by author
 * @apiVersion 1.0.0
 * @apiName tutorials/author
 * @apiGroup typeform
 * @apiPermission public
 *
 * @apiSuccess (Created 201) {String}  result.title    Title of the tutorial
 * @apiSuccess (Created 201) {String}  result.description   Descriptiton of the tutorial
 * @apiSuccess (Created 201) {String}  result.author     Author of the tutorial
 *                                                
 * @apiSuccess (Created 201) {string}  result.email     Email of the tutorial
 *                                                 
 * @apiSuccess (Created 201) {String}  result.contentType     Type of content of the tutorial
 *
 * @apiSuccess (Created 201) {String}  result.url         URL of the tutorial
 * @apiSuccess (Created 201) {String}  result.labels      Tags of the tutorial
 * @apiSuccess (Created 201) {Date}    result.timestamp   Timestamp
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */
router.route('/tutorials/author')
    .get(validate(tutorialsFilter), controller.filteredTutorialByAuthor);

/**
 * @api {get} v1/typeform/tutorials/contentType
 * @apiDescription Get the filtered tutorials by contentType
 * @apiVersion 1.0.0
 * @apiName tutorials/contentType
 * @apiGroup typeform
 * @apiPermission public
 *
 * @apiSuccess (Created 201) {String}  result.title    Title of the tutorial
 * @apiSuccess (Created 201) {String}  result.description   Descriptiton of the tutorial
 * @apiSuccess (Created 201) {String}  result.author     Author of the tutorial
 *                                                
 * @apiSuccess (Created 201) {string}  result.email     Email of the tutorial
 *                                                 
 * @apiSuccess (Created 201) {String}  result.contentType     Type of content of the tutorial
 *
 * @apiSuccess (Created 201) {String}  result.url         URL of the tutorial
 * @apiSuccess (Created 201) {String}  result.labels      Tags of the tutorial
 * @apiSuccess (Created 201) {Date}    result.timestamp   Timestamp
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */
router.route('/tutorials/contentType')
    .get(validate(tutorialsFilter), controller.filteredTutorialByContent);

module.exports = router;
