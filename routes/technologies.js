const express = require("express");
const router = express.Router();
const Technology = require("../models/technology");

router.get("/", async (req, res) => {
	try {
		const technologies = await Technology.find();
		res.json(technologies);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const technology = await Technology.findById(req.params.id);
		res.json(technology);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
