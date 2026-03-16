import { Doctor, Booking } from "./types";

// Fetch all doctors
export async function fetchDoctors(): Promise<Doctor[]> {
  try {
    const res = await fetch("http://localhost:5000/api/doctors");
    const data = await res.json();
    return data.success ? data.data : [];
  } catch (err) {
    console.error("Error fetching doctors:", err);
    return [];
  }
}

// Create a booking
export async function createBooking(
  bookingData: Omit<Booking, "_id">
): Promise<Booking | null> {
  try {
    console.log("Sending booking to backend:", bookingData); // 👈 log request
    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    console.log("Backend response:", data); // 👈 log backend response
    return data.success ? data.data : null;
  } catch (err) {
    console.error("Error creating booking:", err);
    return null;
  }
}


// Fetch all bookings
export async function fetchBookings(): Promise<Booking[]> {
  try {
    const res = await fetch("http://localhost:5000/api/bookings");
    const data = await res.json();
    return data.success ? data.data : [];
  } catch (err) {
    console.error("Error fetching bookings:", err);
    return [];
  }
}
