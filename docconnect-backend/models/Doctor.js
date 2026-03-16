import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  specialization: { type: String, required: true, trim: true },
  location: { type: String, required: true },
  clinicAddress: { type: String, required: true },
  experience: { type: Number, default: 0 },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  contact: { type: String },
  image: { type: String, default: "https://picsum.photos/400/300" },
  availability: { type: [Number], default: [] }
}, { timestamps: true });

export default mongoose.model("Doctor", doctorSchema);
