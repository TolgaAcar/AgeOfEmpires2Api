const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema({
	id: {
		type: Number,
	},
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	expansion: {
		type: String,
	},
	age: {
		type: String,
	},
	created_in: {
		type: String,
	},
	cost: {
		type: Object,
	},
	build_time: {
		type: Number,
	},
	applies_to: {
		type: Array,
	},
	reload_time: {
		type: Number,
	},
	attack_delay: {
		type: Number,
	},
	movement_rate: {
		type: Number,
	},
	line_of_sight: {
		type: Number,
	},
	hit_points: {
		type: Number,
	},
	range: {
		type: Number,
	},
	attack: {
		type: Number,
	},
	armor: {
		type: String,
	},
	accuracy: {
		type: String,
	},
});

module.exports = mongoose.model("unit", unitSchema);
