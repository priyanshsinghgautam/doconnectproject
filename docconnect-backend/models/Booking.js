import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  patientName: { type: String, required: true },
  contact: { type: String, required: true },
  date: { type: Date, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ["confirmed", "pending", "cancelled"], default: "confirmed" },
  userId: { type: String },
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
