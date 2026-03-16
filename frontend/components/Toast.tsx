import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Toast: React.FC = () => {
    const { toast } = useAppContext();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (toast.message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 2700); // Slightly less than context timer to allow for fade out
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const bgColor = toast.type === 'success' ? 'bg-teal-500' : 'bg-red-500';

    return (
        <div
            role="alert"
            aria-live="polite"
            className={`fixed top-5 right-5 text-white py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${bgColor} ${visible ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <p>{toast.message}</p>
        </div>
    );
};

export default Toast;
