import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./db.js";
import Doctor from "./models/Doctor.js";

async function seedDoctors() {
  try {
    await connectDB();

    await Doctor.deleteMany({});
    await Doctor.insertMany([
        {
            name: "Dr. John Doe",
            specialization: "Cardiologist",
            location: "New York",
            rating: 4.5,
            experience: 10,
            image: "https://picsum.photos/400/300",
            clinicAddress: "123 Main Street, NY",
            availability: [1, 3, 5],
        },
        {
            name: "Dr. Sarah Smith",
            specialization: "Dermatologist",
            location: "Los Angeles",
            rating: 4.2,
            experience: 8,
            image: "https://picsum.photos/400/301",
            clinicAddress: "456 Sunset Blvd, LA",
            availability: [2, 4, 6],
        },
        {
            name: "Dr. Arjun Sharma",
            specialization: "Cardiologist",
            location: "Delhi",
            rating: 4.5,
            experience: 12,
            image: "https://picsum.photos/400/300?random=1",
            clinicAddress: "Apollo Hospital, Delhi",
            availability: [1, 2, 4],
        },
        {
            name: "Dr. Neha Verma",
            specialization: "Dermatologist",
            location: "Mumbai",
            rating: 4.2,
            experience: 8,
            image: "https://picsum.photos/400/300?random=2",
            clinicAddress: "Lilavati Hospital, Mumbai",
            availability: [0, 3, 5],
        },
        {
            name: "Dr. Rajesh Gupta",
            specialization: "Orthopedic Surgeon",
            location: "Bangalore",
            rating: 4.7,
            experience: 15,
            image: "https://picsum.photos/400/300?random=3",
            clinicAddress: "Fortis Hospital, Bangalore",
            availability: [2, 4, 6],
        },
        {
            name: "Dr. Priya Iyer",
            specialization: "Pediatrician",
            location: "Chennai",
            rating: 4.3,
            experience: 10,
            image: "https://picsum.photos/400/300?random=4",
            clinicAddress: "Rainbow Children’s Hospital, Chennai",
            availability: [1, 3, 5],
        },
        {
            name: "Dr. Karan Mehta",
            specialization: "Neurologist",
            location: "Hyderabad",
            rating: 4.8,
            experience: 18,
            image: "https://picsum.photos/400/300?random=5",
            clinicAddress: "Yashoda Hospital, Hyderabad",
            availability: [2, 4, 6],
        },
        {
            name: "Dr. Sneha Kapoor",
            specialization: "Gynecologist & Obstetrician",
            location: "Pune",
            rating: 4.6,
            experience: 11,
            image: "https://picsum.photos/400/300?random=6",
            clinicAddress: "Jehangir Hospital, Pune",
            availability: [1, 2, 5],
        },
        {
            name: "Dr. Rohan Malhotra",
            specialization: "General Physician",
            location: "Jaipur",
            rating: 4.4,
            experience: 9,
            image: "https://picsum.photos/400/300?random=7",
            clinicAddress: "Manipal Hospital, Jaipur",
            availability: [0, 2, 4],
        },
        {
            name: "Dr. Anjali Desai",
            specialization: "Ophthalmologist",
            location: "Ahmedabad",
            rating: 4.1,
            experience: 7,
            image: "https://picsum.photos/400/300?random=8",
            clinicAddress: "Shalby Hospital, Ahmedabad",
            availability: [1, 3, 6],
        },
        {
            name: "Dr. Vikram Reddy",
            specialization: "ENT Specialist",
            location: "Kolkata",
            rating: 4.3,
            experience: 13,
            image: "https://picsum.photos/400/300?random=9",
            clinicAddress: "AMRI Hospital, Kolkata",
            availability: [2, 4, 6],
        },
        {
            name: "Dr. Pooja Singh",
            specialization: "Dentist",
            location: "Lucknow",
            rating: 4.7,
            experience: 14,
            image: "https://picsum.photos/400/300?random=10",
            clinicAddress: "Mayo Dental Clinic, Lucknow",
            availability: [0, 3, 5],
        },
        {
            name: "Dr. Abhishek Nair",
            specialization: "Psychiatrist",
            location: "Thiruvananthapuram",
            rating: 4.6,
            experience: 16,
            image: "https://picsum.photos/400/300?random=11",
            clinicAddress: "KIMS Hospital, Thiruvananthapuram",
            availability: [1, 2, 4],
        },
        {
            name: "Dr. Swati Bansal",
            specialization: "Pulmonologist",
            location: "Chandigarh",
            rating: 4.2,
            experience: 10,
            image: "https://picsum.photos/400/300?random=12",
            clinicAddress: "PGIMER, Chandigarh",
            availability: [2, 4, 6],
        },
        {
            name: "Dr. Arvind Joshi",
            specialization: "Gastroenterologist",
            location: "Indore",
            rating: 4.5,
            experience: 12,
            image: "https://picsum.photos/400/300?random=13",
            clinicAddress: "CHL Hospital, Indore",
            availability: [1, 3, 5],
        },
        {
            name: "Dr. Meera Kulkarni",
            specialization: "Endocrinologist",
            location: "Nagpur",
            rating: 4.3,
            experience: 9,
            image: "https://picsum.photos/400/300?random=14",
            clinicAddress: "Wockhardt Hospital, Nagpur",
            availability: [0, 2, 4],
        },
        {
            name: "Dr. Sandeep Rao",
            specialization: "Urologist",
            location: "Surat",
            rating: 4.4,
            experience: 13,
            image: "https://picsum.photos/400/300?random=15",
            clinicAddress: "Sunshine Hospital, Surat",
            availability: [1, 3, 6],
        },
    ]);

    console.log("✅ Doctors seeded!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error seeding doctors:", error);
    process.exit(1);
  }
}

seedDoctors();