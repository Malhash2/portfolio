'use client'; // This is crucial as we are using hooks (useState, useEffect)

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        // Only trigger visibility change after scrolling past a small threshold (e.g., 100px)
        if (window.scrollY > 100) {
            // Scrolling down
            if (window.scrollY > lastScrollY) {
                setIsVisible(false); // Hide the navbar
            }
            // Scrolling up
            else if (window.scrollY < lastScrollY) {
                setIsVisible(true); // Show the navbar
            }
        } else {
            // Always show the navbar at the very top of the page
            setIsVisible(true);
        }

        // Update the last scroll position
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]); // Re-run effect when lastScrollY updates

    return (
        <nav
            className={`
                fixed top-0 w-full z-50 
                bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 
                transition-transform duration-300 ease-in-out
                ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
            `}
        >
            <div className="max-w-5xl mx-auto text-white px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-green-400">Mohammed Al-Hashimi</h1>
                <ul className="flex space-x-6 text-sm font-semibold">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/Projects"}>Projects</Link></li>
                    <li><Link href={"/Experience"}>Experience</Link></li>
                    <li><Link href={"/Contact"}>Contact</Link></li>

                </ul>
            </div>
        </nav>
    )
}
