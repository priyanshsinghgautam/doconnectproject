import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Specialization } from '../types';
import { useAppContext } from '../context/AppContext';
import { SERVICE_ICONS } from '../constants';

interface ServiceCardProps {
    specialization: Specialization;
}

// A helper to safely get an icon component by name
const getIcon = (name: string): React.ComponentType<LucideIcons.LucideProps> => {
    const icon = (LucideIcons as any)[name];
    return icon || LucideIcons.Stethoscope;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ specialization }) => {
    const { setCurrentPage } = useAppContext();

    const handleFindSpecialist = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // Here you could add logic to pre-filter the search page
        setCurrentPage('search');
    };
    
    const IconComponent = getIcon(SERVICE_ICONS[specialization]);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl">
            <div className="inline-block p-4 bg-teal-100 rounded-full mb-4">
                <IconComponent className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">{specialization}</h3>
            <p className="text-gray-600 mt-2">Find expert {specialization.toLowerCase()}s for specialized care.</p>
            <a
                href="#search"
                onClick={handleFindSpecialist}
                className="mt-4 inline-block text-teal-600 font-semibold hover:underline"
            >
                Find a Specialist &rarr;
            </a>
        </div>
    );
};

export default ServiceCard;