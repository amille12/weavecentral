var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { type: String, require: true },
	department: { type: String },
	phone: { type: Number, require: true },
	ext: { type: Number },
	cell: { type: Number },
	email: { type: String },
	imagepath: { type: String },
	note: { type: String },
	status: { type: String },
	created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Person', schema);
