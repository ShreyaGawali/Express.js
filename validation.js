const Joi = require('joi');

function createShipSchema(req, res, next) {
    const schema = Joi.object({
        billing_first_name: Joi.string().required(),
        billing_last_name: Joi.string().required(),
        email:Joi.string().required().email(),
        password:Joi.string().required(),
        billing_address: Joi.string().required(),
        billing_zipcode: Joi.number().integer().required(),
        billing_country:Joi.string().required(),
        billing_city:Joi.string().required(),
        order_id:Joi.number().integer().required(),
        status:Joi.string().required()
    });
    validateRequest(req, res, next, schema);
}

function validateRequest(req, res, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
       // next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
       res.send(error);
    } else {
        req.body = value;
        next();
    }
}

module.exports = { createShipSchema}