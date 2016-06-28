var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	firstname: { type: String  },
	lastname: { type: String  }
	// department: { type: String },
	// office_phone: { type: Number },
	// ext: { type: Number },
	// cell: { type: Number },
	// email: { type: String },
	// imagepath: { type: String },
	// note: { type: String },
	// status: { type: String },
	// created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Person', schema);
