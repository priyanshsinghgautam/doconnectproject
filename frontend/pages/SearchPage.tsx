import React, { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import DoctorCard from '../components/DoctorCard';
import { SPECIALIZATIONS } from '../constants';

const SearchPage: React.FC = () => {
    const { doctors } = useAppContext();
    const [name, setName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [city, setCity] = useState('');
    const [rating, setRating] = useState('');

    const clearFilters = () => {
        setName('');
        setSpecialization('');
        setCity('');
        setRating('');
    };

    const filteredDoctors = useMemo(() => {
        return doctors.filter(doc => {
            const nameMatch = doc.name?.toLowerCase().includes(name.toLowerCase());
            const specMatch = !specialization || doc.specialization === specialization;
            const cityMatch = doc.location?.toLowerCase().includes(city.toLowerCase());
            const ratingMatch = !rating || doc.rating >= parseFloat(rating);

            return nameMatch && specMatch && cityMatch && ratingMatch;
        });
    }, [doctors, name, specialization, city, rating]);

    return (
        <section className="page py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold mb-4">Find a Doctor</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Doctor's Name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                        
                        <select value={specialization} onChange={e => setSpecialization(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md">
                            <option value="">All Specializations</option>
                            {SPECIALIZATIONS.map(spec => <option key={spec} value={spec}>{spec}</option>)}
                        </select>
                        
                        <input value={city} onChange={e => setCity(e.target.value)} type="text" placeholder="City (e.g., Delhi)" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                        
                        <select value={rating} onChange={e => setRating(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md">
                            <option value="">Any Rating</option>
                            <option value="4">4 Stars & Up</option>
                            <option value="3">3 Stars & Up</option>
                            <option value="2">2 Stars & Up</option>
                        </select>

                        <button onClick={clearFilters} className="w-full bg-slate-200 text-slate-800 px-4 py-2 rounded-md hover:bg-slate-300">Clear Filters</button>
                    </div>
                </div>

                <div className="mb-4 text-gray-600 font-medium">
                    Showing {filteredDoctors.length} of {doctors.length} doctors.
                </div>

                {filteredDoctors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredDoctors.map(doc => <DoctorCard key={doc._id} doctor={doc} />)}
                    </div>
                ) : (
                    <p className="text-gray-600 col-span-full text-center py-10">No doctors found matching your criteria.</p>
                )}
            </div>
        </section>
    );
};

export default SearchPage;
