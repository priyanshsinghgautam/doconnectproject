
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SearchPage from './pages/SearchPage';
import BookingsPage from './pages/BookingsPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import { useAppContext } from './context/AppContext';
import BookingModal from './components/BookingModal';
import ConfirmationModal from './components/ConfirmationModal';
import Toast from './components/Toast';

const App: React.FC = () => {
    const { currentPage, bookingModal, confirmationModal, toast, setCurrentPage } = useAppContext();

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'services':
                return <ServicesPage />;
            case 'search':
                return <SearchPage />;
            case 'bookings':
                return <BookingsPage />;
            case 'contact':
                return <ContactPage />;
            case 'login-signup':
                return <AuthPage />;
            default:
                return <HomePage />;
        }
    };

React.useEffect(() => {
  const applyHash = () => {
    const h = window.location.hash.replace("#", "");
    if (
      h &&
      ["home", "services", "search", "bookings", "contact", "login-signup"].includes(
        h
      )
    ) {
      setCurrentPage(h as any);
    }
  };
  applyHash();
  window.addEventListener("hashchange", applyHash);
  return () => window.removeEventListener("hashchange", applyHash);
}, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
            {bookingModal.isOpen && <BookingModal />}
            {confirmationModal.isOpen && <ConfirmationModal />}
            {toast.message && <Toast />}
        </div>
    );
};

export default App;
