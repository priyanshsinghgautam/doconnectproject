import React from 'react';
import { Search, CalendarCheck, Star, ShieldCheck, MapPin, Bell } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Feature: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="relative">
        <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                {icon}
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{title}</p>
        </dt>
        <dd className="mt-2 ml-16 text-base text-gray-500">{children}</dd>
    </div>
);

const HomePage: React.FC = () => {
    const { setCurrentPage, isLoggedIn } = useAppContext();

    const handleHeroBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (isLoggedIn) {
            setCurrentPage('search');
        } else {
            setCurrentPage('login-signup');
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <div className="relative z-10 px-4 py-10 text-center lg:text-left sm:px-6 sm:py-16 md:py-20 lg:w-1/2 lg:max-w-2xl lg:py-32">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block">Find Your Doctor,</span>
                                <span className="block text-teal-600">Book with Ease.</span>
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                Connecting you with the best healthcare professionals. Schedule your appointments seamlessly and take control of your health journey.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="#search" onClick={handleHeroBookClick} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10">
                                        Book Appointment
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[36rem]">
                            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Doctor with stethoscope" />
                        </div>
                    </div>
                </div>
            </div>


            {/* Why Choose Us Section */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A Better Way to Manage Your Health
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            We provide a streamlined experience to find and book appointments with top-rated doctors.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
                            <Feature icon={<Search />} title="Verified Doctors">Access a network of highly qualified and verified healthcare professionals.</Feature>
                            <Feature icon={<CalendarCheck />} title="Easy Scheduling">Book appointments in just a few clicks. View real-time availability and choose a time that works for you.</Feature>
                            <Feature icon={<Star />} title="Patient Reviews">Make informed decisions with genuine reviews and ratings from other patients.</Feature>
                            <Feature icon={<ShieldCheck />} title="Secure Platform">Your personal and health information is kept confidential and secure at all times.</Feature>
                            <Feature icon={<MapPin />} title="Location Based Search">Easily find trusted doctors and clinics near your location for convenient access to healthcare.</Feature>
                            <Feature icon={<Bell />} title="Appointment Reminders">Receive timely reminders for your upcoming appointments so you never miss a check-up.</Feature>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;