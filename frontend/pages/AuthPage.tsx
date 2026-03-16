import React, { useState } from 'react';
import { PieChart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const AuthPage: React.FC = () => {
    const { setCurrentPage, login } = useAppContext();
    const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');

    const handleTabClick = (tab: 'signin' | 'signup') => {
        setActiveTab(tab);
    };

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        login();
        setCurrentPage('search');
    };

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        login();
        setCurrentPage('search');
    };


    return (
        <section className="page py-12 bg-gray-50">
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <div className="flex justify-center">
                            <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="flex items-center space-x-2">
                                <PieChart className="h-10 w-auto text-teal-600" />
                                <span className="text-3xl font-bold text-gray-800">DocConnect</span>
                            </a>
                        </div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            {activeTab === 'signin' ? 'Sign in to your account' : 'Create your new account'}
                        </h2>
                    </div>

                    <div className="bg-white shadow-xl rounded-xl p-8">
                        <div>
                            <div className="border-b border-gray-200">
                                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                    <button
                                        onClick={() => handleTabClick('signin')}
                                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'signin' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        onClick={() => handleTabClick('signup')}
                                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'signup' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                    >
                                        Create Account
                                    </button>
                                </nav>
                            </div>
                        </div>

                        {activeTab === 'signin' && (
                            <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <input id="email-address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Email address" />
                                    <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-slate-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Password" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                                    </div>
                                    <div className="text-sm"><a href="#" className="font-medium text-teal-600 hover:text-teal-500"> Forgot your password? </a></div>
                                </div>
                                <div><button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Sign in</button></div>
                            </form>
                        )}

                        {activeTab === 'signup' && (
                            <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <input id="signup-name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Full Name" />
                                    <input id="signup-email" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-slate-400 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Email address" />
                                    <input id="signup-password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-slate-400 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Password" />
                                    <input id="signup-confirm-password" name="confirm-password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-slate-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Confirm Password" />
                                </div>
                                <div><button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Create Account</button></div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthPage;