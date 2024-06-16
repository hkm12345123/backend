const { Joi } = require('express-validation');

const createDeviceValidation = {
    body: Joi.object({
        deviceName: Joi.string().required(),
        status: Joi.string(),
        roomId: Joi.string(),
    })
};

module.exports = createDeviceValidation;
