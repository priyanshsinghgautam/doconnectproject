import React from 'react';
import { CalendarOff } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import BookingCard from '../components/BookingCard';

const BookingsPage: React.FC = () => {
    const { bookings, doctors, setCurrentPage } = useAppContext();

    return (
        <section className="page py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">My Appointments</h2>
                <div className="space-y-6">
                    {bookings.length > 0 ? (
                        bookings.map(booking => {
                            const doctor = doctors.find(d => d._id === booking.doctorId);

                            //  fallback doctor object if not found
                            const safeDoctor = doctor || {
                                _id: booking.doctorId,
                                name: "Unknown Doctor",
                                specialization: "Not available",
                                location: "",
                                rating: 0,
                                experience: 0,
                                image: "",
                                clinicAddress: "",
                                availability: []
                            };


                            return (
                                <BookingCard
                                    key={booking.id}
                                    booking={booking}
                                    doctor={safeDoctor}
                                />
                            );
                        })
                    ) : (
                        <div className="text-center py-12 bg-white rounded-lg shadow-md">
                            <CalendarOff className="mx-auto h-12 w-12 text-gray-400" />
                            <h3 className="mt-2 text-sm font-medium text-gray-900">No appointments found</h3>
                            <p className="mt-1 text-sm text-gray-500">
                                You haven't booked any appointments yet.
                            </p>
                            <div className="mt-6">
                                <button
                                    type="button"
                                    onClick={() => setCurrentPage('search')}
                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                >
                                    Book an Appointment
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BookingsPage;
