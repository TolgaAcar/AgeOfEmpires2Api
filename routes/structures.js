const express = require("express");
const router = express.Router();
const Structure = require("../models/structure");

router.get("/", async (req, res) => {
	try {
		const strucutres = await Structure.find();
		res.json(strucutres);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const structure = await Structure.findById(req.params.id);
		res.json(structure);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
