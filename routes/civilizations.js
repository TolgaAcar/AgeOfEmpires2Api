const express = require("express");
const router = express.Router();
const Civilization = require("../models/civilization");

router.get("/", async (req, res) => {
	try {
		const civs = await Civilization.find();
		res.json(civs);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const civ = await Civilization.findById(req.params.id);
		res.json(civ);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
