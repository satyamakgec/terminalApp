const Joi = require('joi');

module.exports = {

  // GET /v1/typeform/tutorials
    tutorialsFilter: {
        query: {
            filteredBy: Joi.string().required(),
        },
    }
};
