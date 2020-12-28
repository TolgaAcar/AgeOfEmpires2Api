const express = require("express");
const router = express.Router();
const Unit = require("../models/unit");

router.get("/", async (req, res) => {
	try {
		const units = await Unit.find();
		res.json(units);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const unit = await Unit.findById(req.params.id);
		res.json(unit);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
