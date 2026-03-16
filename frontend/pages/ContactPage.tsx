import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <section className="page py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12">
                            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Get in Touch</h2>
                            <p className="mt-4 text-lg text-gray-500">Have questions or need support? Fill out the form and our team will get back to you shortly.</p>
                            <form action="#" method="POST" onSubmit={(e) => e.preventDefault()} className="mt-8 grid grid-cols-1 gap-y-6">
                                <div>
                                    <label htmlFor="contact-name" className="sr-only">Full name</label>
                                    <input type="text" name="contact-name" id="contact-name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md" placeholder="Full name" />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="sr-only">Email</label>
                                    <input id="contact-email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md" placeholder="Email" />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="sr-only">Message</label>
                                    <textarea id="contact-message" name="message" rows={4} className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md" placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-teal-50 p-8 md:p-12">
                            <h3 className="text-xl font-medium text-teal-800">Contact Information</h3>
                            <p className="mt-6 text-base text-teal-700">Our support team is available 24/7 to assist you.</p>
                            <dl className="mt-8 space-y-6">
                                <dd className="flex text-base text-teal-900">
                                    <Phone className="flex-shrink-0 w-6 h-6 text-teal-700" />
                                    <span className="ml-3">+1 (555) 123-4567</span>
                                </dd>
                                <dd className="flex text-base text-teal-900">
                                    <Mail className="flex-shrink-0 w-6 h-6 text-teal-700" />
                                    <span className="ml-3">support@docconnect.com</span>
                                </dd>
                                <dd className="flex text-base text-teal-900">
                                    <MapPin className="flex-shrink-0 w-6 h-6 text-teal-700" />
                                    <span className="ml-3">123 Health St, Wellness City, 45678</span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;