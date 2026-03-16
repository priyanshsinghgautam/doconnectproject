import React from 'react';
import { SPECIALIZATIONS } from '../constants';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
    return (
        <section className="page py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Our Services</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Comprehensive Healthcare Specializations
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We connect you with specialists across a wide range of medical fields to cater to all your health needs.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {SPECIALIZATIONS.map(spec => <ServiceCard key={spec} specialization={spec} />)}
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;