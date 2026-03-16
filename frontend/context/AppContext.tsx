import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { Page, Doctor, Booking } from '../types';
import { fetchDoctors } from "../api";

interface BookingModalState {
  isOpen: boolean;
  mode: 'create' | 'edit';
  doctorId: string | null;
  bookingId: string | null;
}

interface ConfirmationModalState {
  isOpen: boolean;
  onConfirm: (() => void) | null;
}

interface ToastState {
  message: string;
  type: 'success' | 'error';
}

interface AppContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  doctors: Doctor[];
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, '_id'>) => Promise<boolean>;
  updateBooking: (bookingId: string, updatedData: Partial<Booking>) => Promise<boolean>;
  deleteBooking: (bookingId: string) => Promise<boolean>;
  bookingModal: BookingModalState;
  openBookingModal: (doctorId: string) => void;
  openEditBookingModal: (bookingId: string) => void;
  closeBookingModal: () => void;
  confirmationModal: ConfirmationModalState;
  openConfirmationModal: (onConfirm: () => void) => void;
  closeConfirmationModal: () => void;
  toast: ToastState;
  showToast: (message: string, type?: 'success' | 'error') => void;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [bookingModal, setBookingModal] = useState<BookingModalState>({
    isOpen: false, mode: 'create', doctorId: null, bookingId: null
  });
  const [confirmationModal, setConfirmationModal] = useState<ConfirmationModalState>({
    isOpen: false, onConfirm: null
  });
  const [toast, setToast] = useState<ToastState>({ message: '', type: 'success' });

  // Fetch doctors + bookings
  useEffect(() => {
    fetchDoctors().then(setDoctors);

    if (isLoggedIn) {
      fetch("http://localhost:5000/api/bookings")
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            // ✅ normalize doctorId and _id
            const normalized = result.data.map((b: any) => ({
              ...b,
              _id: String(b._id),
              doctorId: typeof b.doctorId === "object" ? String(b.doctorId._id) : String(b.doctorId),
            }));
            setBookings(normalized);
          }
        })
        .catch(err => console.error("Error fetching bookings:", err));
    }
  }, [isLoggedIn]);

  // --- AUTH ---
  const handleSetCurrentPage = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setBookings([]);
    handleSetCurrentPage('home');
  }, []);

  // --- BOOKINGS ---
const addBooking = useCallback(async (bookingData: Omit<Booking, '_id'>): Promise<boolean> => {
  try {
    console.log("📡 Sending booking data:", bookingData);

    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("❌ Server error:", errText);
      showToast("Booking failed: " + errText, "error");
      return false;
    }

    const result = await res.json();
    console.log("📡 Parsed result:", result);

    if (result.success && result.data) {
      const newBooking: Booking = {
        _id: String(result.data._id),
        doctorId: result.data.doctorId || bookingData.doctorId,
        patientName: result.data.patientName || bookingData.patientName,
        contact: result.data.contact || bookingData.contact,
        date: result.data.date || bookingData.date,
        reason: result.data.reason || bookingData.reason,
      };

      setBookings(prev => [...prev, newBooking]);
      showToast("Appointment booked successfully!");

      window.location.hash = "#home";

      return true;
    } else {
      showToast("Failed to book appointment: " + (result.message || "Unknown error"), "error");
      return false;
    }
  } catch (err) {
    console.error("Booking error:", err);
    showToast("Error while booking appointment.", "error");
    return false;
  }
}, []);


  const updateBooking = useCallback(async (bookingId: string, updatedData: Partial<Booking>): Promise<boolean> => {
    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${bookingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) {
        const errText = await res.text();
        showToast("Failed to update appointment: " + errText, "error");
        return false;
      }

      const result = await res.json();

      if (result.success && result.data) {
        setBookings(prev =>
          prev.map(b => (b._id === bookingId ? { ...b, ...updatedData } : b))
        );
        showToast("Appointment updated successfully!");
        return true;
      } else {
        showToast("Failed to update appointment: " + result.message, "error");
        return false;
      }
    } catch (err) {
      console.error("Update booking error:", err);
      showToast("Error while updating appointment.", "error");
      return false;
    }
  }, []);

  const deleteBooking = useCallback(async (bookingId: string): Promise<boolean> => {
    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${bookingId}`, {
        method: "DELETE",
      });
      const result = await res.json();
      if (result.success) {
        setBookings(prev => prev.filter(b => b._id !== bookingId));
        showToast("Booking deleted successfully!");
        return true;
      } else {
        showToast("Failed to delete booking: " + result.message, "error");
        return false;
      }
    } catch (err) {
      console.error("Delete booking error:", err);
      showToast("Error deleting booking.", "error");
      return false;
    }
  }, []);

  // --- MODALS ---
  const openBookingModal = useCallback((doctorId: string) => {
    setBookingModal({ isOpen: true, mode: 'create', doctorId, bookingId: null });
  }, []);

  const openEditBookingModal = useCallback((bookingId: string) => {
    const bookingToEdit = bookings.find(b => b._id === bookingId);
    if (bookingToEdit) {
      setBookingModal({
        isOpen: true,
        mode: 'edit',
        bookingId: bookingToEdit._id,
        doctorId: bookingToEdit.doctorId,
      });
    }
  }, [bookings]);

  const closeBookingModal = useCallback(() => {
    setBookingModal({ isOpen: false, mode: 'create', doctorId: null, bookingId: null });
  }, []);

  const openConfirmationModal = useCallback((onConfirm: () => void) => {
    setConfirmationModal({ isOpen: true, onConfirm });
  }, []);

  const closeConfirmationModal = useCallback(() => {
    setConfirmationModal({ isOpen: false, onConfirm: null });
  }, []);

  const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: '', type }), 3000);
  }, []);

  return (
    <AppContext.Provider value={{
      currentPage,
      setCurrentPage: handleSetCurrentPage,
      doctors,
      bookings,
      addBooking,
      updateBooking,
      deleteBooking,
      bookingModal,
      openBookingModal,
      openEditBookingModal,
      closeBookingModal,
      confirmationModal,
      openConfirmationModal,
      closeConfirmationModal,
      toast,
      showToast,
      isLoggedIn,
      login,
      logout
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
