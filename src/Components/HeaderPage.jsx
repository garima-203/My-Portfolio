import React  from 'react';
import { NavLink } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Header() {
    return (
        <Disclosure as="nav">
            {({ open, close }) => (
                <>
                    <div className="relative z-20 px-2 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="relative flex justify-between items-center h-16">
                            
                    <div className="left-0 absolute flex items-center">
                                <img src="..\logo.svg" alt="Logo" className="mt-7 h-14" />
                            </div>

                            <div className="right-0 absolute inset-y-0 flex items-center sm:hidden">
                                 <DisclosureButton className="inline-flex relative justify-center items-center bg-gray-700 p-2 rounded-md text-gray-400 hover:text-blue-400 focus:outline-none group">
                                    <Bars3Icon aria-hidden="true" className={`block h-6 w-6 ${open ? 'hidden' : 'block'}`} />
                                    <XMarkIcon aria-hidden="true" className={`block h-6 w-6 ${open ? 'block' : 'hidden'}`} /> 
                                </DisclosureButton> 
                            </div>
                            <div className="flex flex-1 justify-center sm:justify-center items-center sm:items-center">
                                <div className="sm:block hidden sm:ml-6">
                                    <div className="flex space-x-4">
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-blue-400  shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] rounded-md px-3 py-2 text-sm font-medium'
                                                    : 'text-white hover:shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] hover:border-purple-600 hover:text-blue-400 rounded-md px-3 py-2 text-sm font-medium'
                                            }
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            to="/About"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-blue-400 shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] rounded-md px-3 py-2 text-sm font-medium'
                                                    : 'text-white hover:shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] hover:text-blue-400 rounded-md px-3 py-2 text-sm font-medium'
                                            }
                                        >
                                            About
                                        </NavLink>
                                        <NavLink
                                            to="/Skills"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-blue-400 shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] rounded-md px-3 py-2 text-sm font-medium'
                                                    : 'text-white hover:shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] hover:text-blue-400 rounded-md px-3 py-2 text-sm font-medium'
                                            }
                                        >
                                            Skills
                                        </NavLink>
                                        <NavLink
                                            to="/Project"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-blue-400 shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] rounded-md px-3 py-2 text-sm font-medium'
                                                    : 'text-white hover:shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] hover:text-blue-400 rounded-md px-3 py-2 text-sm font-medium'
                                            }
                                        >
                                            Project
                                        </NavLink>
                                        <NavLink
                                            to="/Contact"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-blue-400 shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] rounded-md px-3 py-2 text-sm font-medium'
                                                    : 'text-white hover:shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] hover:text-blue-400 rounded-md px-3 py-2 text-sm font-medium'
                                            }
                                        >
                                            Contact
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="top-16 right-0 left-0 z-50 absolute sm:hidden bg-gray-950">
                        <div className="flex flex-col justify-center items-center space-y-1 px-2 pt-2 pb-3">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-400 shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] block rounded-md px-3 py-2 text-base font-medium'
                                        : 'text-white hover:bg-white hover:text-blue-400 block rounded-md px-3 py-2 text-base font-medium'
                                }
                                onClick={() => close()}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/About"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-400 shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] block rounded-md px-3 py-2 text-base font-medium'
                                        : 'text-white hover:bg-white hover:text-blue-400 block rounded-md px-3 py-2 text-base font-medium'
                                }
                                onClick={() => close()}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/Skills"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-400 shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] block rounded-md px-3 py-2 text-base font-medium'
                                        : 'text-white hover:bg-white hover:text-blue-400 block rounded-md px-3 py-2 text-base font-medium'
                                }
                                onClick={() => close()}
                            >
                                Skills
                            </NavLink>
                            <NavLink
                                to="/Project"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-400 shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] block rounded-md px-3 py-2 text-base font-medium'
                                        : 'text-white hover:bg-white hover:text-blue-400 block rounded-md px-3 py-2 text-base font-medium'
                                }
                                onClick={() => close()}
                            >
                                Project
                            </NavLink>
                            <NavLink
                                to="/Contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-400 shadow-[0_0_10px_3px_rgba(234,76,137,0.8),0_0_10px_3px_rgba(80,80,255,0.6)] block rounded-md px-3 py-2 text-base font-medium'
                                        : 'text-white hover:bg-white hover:text-blue-400 block rounded-md px-3 py-2 text-base font-medium'
                                }
                                onClick={() => close()}
                            >
                                Contact
                            </NavLink>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}

export default Header;
