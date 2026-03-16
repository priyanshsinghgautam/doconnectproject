import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';


const BookingModal: React.FC = () => {
    const { bookingModal, closeBookingModal, addBooking, updateBooking, showToast, doctors, bookings, setCurrentPage } = useAppContext();
    const [patientName, setPatientName] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [reason, setReason] = useState('');
    const [dateError, setDateError] = useState('');

    const isEditMode = bookingModal.mode === 'edit';
    const doctor = doctors.find(d => d.id === bookingModal.doctorId);

    useEffect(() => {
        if (bookingModal.isOpen) {
            if (isEditMode && bookingModal.bookingId) {
                const bookingToEdit = bookings.find(b => b.id === bookingModal.bookingId);
                if (bookingToEdit) {
                    setPatientName(bookingToEdit.patientName);
                    setContact(bookingToEdit.contact);
                    setDate(bookingToEdit.date);
                    setReason(bookingToEdit.reason);
                }
            } else {
                // Reset form for create mode
                setPatientName('');
                setContact('');
                setDate('');
                setReason('');
            }
            // Always reset error on open
            setDateError('');
        }
    }, [bookingModal.isOpen, bookingModal.mode, bookingModal.bookingId, bookings]);


    const handleClose = () => {
        closeBookingModal();
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDateStr = e.target.value;
        setDate(selectedDateStr);

        if (!selectedDateStr) {
            setDateError('Please select a date and time.');
            return;
        }

        const selectedDate = new Date(selectedDateStr);

        // Check if date is in the past
        if (selectedDate < new Date()) {
            setDateError('Cannot book an appointment in the past.');
            return;
        }

        // Check doctor's availability
        if (doctor) {
            const dayOfWeek = selectedDate.getDay(); // 0 = Sunday
            if (!doctor.availability.includes(dayOfWeek)) {
                setDateError('The doctor is not available on the selected day. Please choose another date.');
            } else {
                setDateError('');
            }
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("✅ handleSubmit triggered");
        console.log("bookingModal.doctorId =", bookingModal.doctorId);
        console.log("dateError =", dateError);

        if (dateError || !bookingModal.doctorId) return;

        const bookingData = { patientName, contact, date, reason };

        if (isEditMode && bookingModal.bookingId) {
            const success = await updateBooking(bookingModal.bookingId, bookingData);
            console.log("Update success?", success);
            if (success) {
                try {
                    window.location.hash = "bookings";
                } catch (e) { }
                setCurrentPage("bookings");
            }
        } else {
            const success = await addBooking({
                doctorId: bookingModal.doctorId,
                ...bookingData,
            });
            console.log("Add success?", success);  // ✅ log once
            if (success) {
                try {
                    window.location.hash = "bookings";
                } catch (e) { }
                setCurrentPage("bookings");
            }
        }

        handleClose();
    };

    ; const isFormInvalid = !!dateError || !patientName || !contact || !date || !reason;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleClose}></div>
            <div className="bg-white rounded-lg shadow-xl m-4 sm:max-w-lg sm:w-full z-10 transform transition-all ease-out duration-300 scale-100 opacity-100">
                <div className="p-6">
                    <div className="flex items-start justify-between">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">{isEditMode ? 'Modify Appointment' : `Book Appointment with ${doctor?.name}`}</h3>
                        <button type="button" onClick={handleClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="mt-4">
                        <form id="booking-form" onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="patient-name" className="block text-sm font-medium text-gray-700">Patient Name</label>
                                <input type="text" id="patient-name" value={patientName} onChange={e => setPatientName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="patient-contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
                                <input type="tel" id="patient-contact" value={contact} onChange={e => setContact(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="appointment-date" className="block text-sm font-medium text-gray-700">Preferred Date & Time</label>
                                <input type="datetime-local" id="appointment-date" value={date} onChange={handleDateChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                                {dateError && <p className="text-sm text-red-600 mt-1">{dateError}</p>}
                            </div>
                            <div>
                                <label htmlFor="visit-reason" className="block text-sm font-medium text-gray-700">Reason for Visit</label>
                                <textarea id="visit-reason" rows={3} value={reason} onChange={e => setReason(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="submit" form="booking-form" disabled={isFormInvalid} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-teal-300 disabled:cursor-not-allowed transition-colors">
                        {isEditMode ? 'Update Booking' : 'Confirm Booking'}
                    </button>
                    <button type="button" onClick={handleClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:w-auto sm:text-sm">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;