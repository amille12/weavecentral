var Person = require('../models/Directory.js');
var mongoose = require('mongoose');

module.exports = {
	findAll: function(req, res, next) {
		Person
		.find({})
		.exec(function(err, result) {
			if(err) return next(err);
			res.status(200).json(result);
		});
	},

	findOne: function(req, res, next) {
		Person
		.findById(req.params.id)
		.populate('Person')
		.exec(function(err, result) {
				if(err) return next(err);
				res.status(200).json(result);
		});

	},

	create: function(req, res, next) {
		Person
		.create(req.body, function(err, result) {
			if(err) return next(err);
			res.status(200).json(result);
		});

	},

	update: function(req, res, next) {
		Person.findOneAndUpdate(
			{ _id: mongoose.Types.ObjectId(req.params.id) },
			req.body,
			{ new: true },
			function(err, result){
				if(err) return next(err);
				res.status(200).json(result);
			}
		);

	},

	destroy: function(req, res, next) {
		Person.findByIdAndRemove(req.params.id, function(err, result){
				if(err) return next(err);
				res.status(200).json(result);
			});
		}
	}
