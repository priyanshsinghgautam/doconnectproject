import React, { useState, useEffect } from 'react';
import { Menu, X, PieChart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Page } from '../types';

const NavLink: React.FC<{ page: Page; children: React.ReactNode; className?: string }> = ({ page, children, className }) => {
    const { setCurrentPage } = useAppContext();
    return (
        <a
            href={`#${page}`}
            onClick={(e) => { e.preventDefault(); setCurrentPage(page); }}
            className={className}
        >
            {children}
        </a>
    );
};


const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { setCurrentPage, isLoggedIn, logout } = useAppContext();

    const navItems: { page: Page; label: string }[] = [
        { page: 'home', label: 'Home' },
        { page: 'services', label: 'Services' },
        { page: 'search', label: 'Search Doctors' },
        { page: 'bookings', label: 'My Bookings' },
        { page: 'contact', label: 'Contact' }
    ];

    const handleNavLinkClick = (page: Page) => {
        setCurrentPage(page);
        setMobileMenuOpen(false);
    };
    
    const handleLogout = () => {
        logout();
        setMobileMenuOpen(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="flex items-center space-x-2">
                             <PieChart className="h-8 w-8 text-teal-600" />
                            <span className="text-2xl font-bold text-gray-800">DocConnect</span>
                        </a>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navItems.map(item => (
                             <a key={item.page} href={`#${item.page}`} onClick={(e) => { e.preventDefault(); handleNavLinkClick(item.page) }} className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                                {item.label}
                            </a>
                        ))}
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 transition-colors">
                                Logout
                            </button>
                        ) : (
                            <a href="#login-signup" onClick={(e) => { e.preventDefault(); handleNavLinkClick('login-signup')}} className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 transition-colors">
                               Login / Sign Up
                            </a>
                        )}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-4">
                        {navItems.map(item => (
                            <a key={item.page} href={`#${item.page}`} onClick={(e) => { e.preventDefault(); handleNavLinkClick(item.page) }} className="block py-2 px-3 text-base font-medium text-gray-600 hover:text-teal-600 hover:bg-gray-50">
                                {item.label}
                            </a>
                        ))}
                         {isLoggedIn ? (
                            <button onClick={handleLogout} className="block w-full text-left mt-2 py-2 px-3 text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 transition-colors">
                                Logout
                            </button>
                        ) : (
                            <a href="#login-signup" onClick={(e) => { e.preventDefault(); handleNavLinkClick('login-signup') }} className="block w-full text-left mt-2 py-2 px-3 text-base font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200">
                                Login / Sign Up
                            </a>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;