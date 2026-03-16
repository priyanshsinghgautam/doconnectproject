export type Page =
    | "home"
    | "services"
    | "search"
    | "bookings"
    | "contact"
    | "login-signup";

export type Specialization =
    | "Cardiology"
    | "Dermatology"
    | "Neurology"
    | "Pediatrics"
    | "Psychiatry"
    | "Orthopedics"
    | "Gynecology"
    | "Dentistry"
    | "Oncology"
    | "General Medicine";

export interface Doctor {
    _id: string; // comes from MongoDB
    name: string;
    specialization: string;
    location: string;
    rating: number;
    experience: number;
    image: string;
    clinicAddress: string;
    availability: number[];
}

export interface Booking {
    _id: string; // comes from MongoDB
    doctorId: string; // references Doctor._id
    patientName: string;
    contact: string;
    date: string; // ISO string format
    reason: string;
    status?: string; // optional (your backend defaults to "confirmed")
    userId?: string;  // ✅ add this
}
