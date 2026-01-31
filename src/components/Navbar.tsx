'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Only trigger visibility change after scrolling past a small threshold
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false); // Scrolling DOWN -> Hide
                } else {
                    setIsVisible(true);  // Scrolling UP -> Show
                }
            } else {
                setIsVisible(true); // Always show at top
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]); // Now this dependency is correct and stable

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
                <h1 className="text-xl font-bold text-cyan-400">Mohammed Al-Hashimi</h1>
                <ul className="flex space-x-6 text-sm font-semibold">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/About"}>About</Link></li>
                    <li><Link href={"/Projects"}>Projects</Link></li>
                    <li><Link href={"/Experience"}>Experience</Link></li>
                    <li><Link href={"/Contact"}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
