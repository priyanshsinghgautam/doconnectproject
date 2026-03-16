import React from 'react';
import { PieChart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Page } from '../types';

const FooterLink: React.FC<{ page: Page; children: React.ReactNode }> = ({ page, children }) => {
    const { setCurrentPage } = useAppContext();
    return (
        <li>
            <a href={`#${page}`} onClick={(e) => { e.preventDefault(); setCurrentPage(page); }} className="text-base text-gray-400 hover:text-white">
                {children}
            </a>
        </li>
    );
};

const Footer: React.FC = () => {
    const { setCurrentPage } = useAppContext();
    return (
        <footer className="bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="flex items-center space-x-2">
                            <PieChart className="h-8 w-8 text-teal-400" />
                            <span className="text-2xl font-bold">DocConnect</span>
                        </a>
                        <p className="text-gray-400 text-base">Your health, our priority. Connecting patients with trusted doctors seamlessly.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Navigation</h3>
                                <ul className="mt-4 space-y-4">
                                    <FooterLink page="home">Home</FooterLink>
                                    <FooterLink page="search">Find Doctors</FooterLink>
                                    <FooterLink page="services">Services</FooterLink>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                                <ul className="mt-4 space-y-4">
                                    <FooterLink page="contact">Contact Us</FooterLink>
                                    <li><a href="#" className="text-base text-gray-400 hover:text-white">FAQ</a></li>
                                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-base text-gray-400 text-center">
                    <p>&copy; {new Date().getFullYear()} DocConnect. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;