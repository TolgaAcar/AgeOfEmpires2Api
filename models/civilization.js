const mongoose = require("mongoose");

const civilizationSchema = new mongoose.Schema({
	id: {
		type: Number,
	},
	name: {
		type: String,
	},
	banner: {
		type: String,
	},
	expansion: {
		type: String,
	},
	army_type: {
		type: String,
	},
	unique_unit: {
		type: Array,
	},
	unique_tech: {
		type: Array,
	},
	team_bonus: {
		type: String,
	},
	civilization_bonus: {
		type: Array,
	},
});

module.exports = mongoose.model("civilization", civilizationSchema);
