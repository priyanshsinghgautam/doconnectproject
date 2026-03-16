import express from "express";
import Doctor from "../models/Doctor.js";

const router = express.Router();

// GET /api/doctors
router.get("/", async (req, res) => {
  try {
    const { name, specialization, location, page = 1, limit = 20 } = req.query;
    const query = {};

    if (name) query.name = { $regex: name, $options: "i" };
    if (specialization) query.specialization = { $regex: specialization, $options: "i" };
    if (location) query.location = { $regex: location, $options: "i" };

    const doctors = await Doctor.find(query)
      .limit(parseInt(limit))
      .skip((page - 1) * limit);

    res.json({ success: true, data: doctors });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/doctors
router.post("/", async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ success: true, data: doctor });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
