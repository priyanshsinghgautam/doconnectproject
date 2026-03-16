import React from 'react';
import { Doctor } from '../types';
import { MapPin, Briefcase, Hospital } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface DoctorCardProps {
    doctor: Doctor;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex items-center">
            {[...Array(fullStars)].map((_, i) => <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            {[...Array(emptyStars)].map((_, i) => <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
        </div>
    );
};


const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
    const { openBookingModal, isLoggedIn, setCurrentPage } = useAppContext();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const availability = Array.isArray(doctor.availability) ? doctor.availability : [];

    const availableDays = days.map((day, index) => (
        <span
            key={day}
            className={`text-xs font-medium ${availability.includes(index)
                    ? 'text-green-700 bg-green-100'
                    : 'text-gray-500 bg-gray-100'
                } px-2 py-1 rounded-full`}
        >
            {day}
        </span>
    ));



    const handleBookClick = () => {
        if (isLoggedIn) {
            openBookingModal(doctor._id);
        } else {
            setCurrentPage('login-signup');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col">
            <img className="w-full h-48 object-cover" src={doctor.image} alt={`Dr. ${doctor.name}`} onError={(e) => { e.currentTarget.src = 'https://picsum.photos/400/300'; }} />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                <p className="text-teal-600 font-semibold">{doctor.specialization}</p>
                <div className="flex items-center mt-2">
                    <RatingStars rating={doctor.rating} />
                    <span className="text-gray-600 text-sm ml-2">{doctor.rating} ({Math.floor(Math.random() * 200) + 50} reviews)</span>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                    <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-gray-500" />{doctor.location}</p>
                    <p className="flex items-center"><Briefcase className="w-4 h-4 mr-2 text-gray-500" />{doctor.experience} years of experience</p>
                    <p className="flex items-center"><Hospital className="w-4 h-4 mr-2 text-gray-500" />{doctor.clinicAddress}</p>
                </div>
                <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Availability This Week</h4>
                    <div className="flex flex-wrap gap-2">
                        {availableDays}
                    </div>
                </div>
                <div className="mt-auto pt-6">
                    <button onClick={handleBookClick} className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors shadow hover:shadow-lg">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;