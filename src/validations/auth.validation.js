// Validation
const { Joi } = require('express-validation');

// Validate register user
const registerValidation = {
	body: Joi.object({
		username: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string().required(),
		// role: Joi.string().valid(
		// 	'admin',
		// 	'user',
		// ),		
		fullName: Joi.string(),		
	})
};

// Validate login user
const loginValidation = {
	body: Joi.object({
		username: Joi.string().required(),
    	password: Joi.string().required()
	})
};

// Validate forget password
const forgetPasswordValidation = {
	body: Joi.object({
	  email: Joi.string().email().required()
	})
}

module.exports = { 
	registerValidation, 
	loginValidation,
	forgetPasswordValidation
};
