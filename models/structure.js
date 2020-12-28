const mongoose = require("mongoose");

const structureSchema = new mongoose.Schema({
	id: {
		type: Number,
	},
	name: {
		type: String,
	},
	expansion: {
		type: String,
	},
	age: {
		type: String,
	},
	cost: {
		type: Object,
	},
	build_time: {
		type: Number,
	},
	hit_points: {
		type: Number,
	},
	line_of_sight: {
		type: Number,
	},
	armor: {
		type: String,
	},
	special: {
		type: Array,
	},
});

module.exports = mongoose.model("structure", structureSchema);
