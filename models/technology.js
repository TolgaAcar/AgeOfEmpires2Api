const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema({
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
	develops_in: {
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
});

module.exports = mongoose.model("technology", technologySchema);
