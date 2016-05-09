var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { type: String, require: true },
	phone: { type: Number, require: true },
	department: { type: String },
	cell: { type: Number },
	description: { type: String },
	created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Person', schema);
