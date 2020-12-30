require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");

mongoose
	.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((result) => {
		app.listen(process.env.PORT || 3000);
	})
	.catch((err) => {
		console.log(err);
	});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const civilizationsRouter = require("./routes/civilizations");
app.use("/civilizations", civilizationsRouter);

const structuresRouter = require("./routes/structures");
app.use("/structures", structuresRouter);

const technologiesRouter = require("./routes/technologies");
app.use("/technologies", technologiesRouter);

const unitsRouter = require("./routes/units");
app.use("/units", unitsRouter);
