import React from 'react';
import { Booking, Doctor } from '../types';
import { Calendar, User } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface BookingCardProps {
    booking: Booking;
    doctor?: Doctor;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking, doctor }) => {
    const { deleteBooking, openConfirmationModal, showToast, openEditBookingModal } = useAppContext();
    const appointmentDate = new Date(booking.date);

    if (!doctor) {
        return <div className="bg-white rounded-lg shadow-md p-6 text-red-500">Doctor not found for this booking.</div>;
    }
    
    const handleCancel = () => {
        openConfirmationModal(() => {
            deleteBooking(booking._id);
            showToast("Appointment cancelled.", 'success');
        });
    };

    const handleModify = () => {
        openEditBookingModal(booking._id);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:flex md:items-center md:justify-between">
                <div className="md:flex md:items-center">
                    <img className="h-20 w-20 rounded-full object-cover md:mr-6" src={doctor.image} alt={`Dr. ${doctor.name}`} />
                    <div>
                        <p className="text-xl font-bold text-gray-900">{doctor.name}</p>
                        <p className="text-teal-600">{doctor.specialization}</p>
                        <p className="text-gray-600 mt-2 flex items-center"><Calendar className="inline w-4 h-4 mr-2" /> {appointmentDate.toLocaleString()}</p>
                        <p className="text-gray-600 flex items-center"><User className="inline w-4 h-4 mr-2" /> Patient: {booking.patientName}</p>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                    <button onClick={handleModify} className="text-sm bg-teal-100 text-teal-700 px-3 py-1 rounded-md hover:bg-teal-200 transition-colors">
                        Modify
                    </button>
                    <button onClick={handleCancel} className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-md hover:bg-red-200 transition-colors">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;