const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const Patient = require("./models/Patient"); // New model to store patient info and CT image
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Upload Patient Details and CT Scan
app.post("/api/upload", upload.single("ctImage"), async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const ctImagePath = req.file.path; // The uploaded image file path

    const newPatient = new Patient({
      name,
      age,
      email,
      ctImage: ctImagePath,
    });

    await newPatient.save();
    res.status(200).json({ message: "Patient data uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error uploading patient data." });
  }
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
