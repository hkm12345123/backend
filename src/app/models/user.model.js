const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 6,
		max: 30,
		unique: true
	},
	email: {
		type: String,
		required: true,
		max: 255,
		min: 6,
		unique: true
	},
	password: {
		type: String,
		required: true,
		max: 128,
		min: 6,
	},
	role: {
		type: String,
		enum: ['admin', 'customer'],
		default: 'customer',
	},
	fullName: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: false,
		max: 15,
		min: 8,
		default: '',
	},
	address: {
		type: String,
		default: '',
		required: false,
	},
	dateOfBirth: {
		type: Date,
		required: false,
	},
	listRooms: {
		type: Array,
		default: [],
	},
	createdDate: {
		type: Date,
		default: Date.now,
	},
	modifiedDate: {
		type: Date,
		default: Date.now,
	},
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
