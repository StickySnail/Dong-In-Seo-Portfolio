"use client";

import { getPersonalDataWithDescription } from "@/utils/data/personal-data";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiContactsFill } from "react-icons/ri";
import { LuMail, LuPhone, LuCheck, LuCopy, LuX } from "react-icons/lu";

const ContactInfoBox = () => {
    const [personalData, setPersonalData] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const data = await getPersonalDataWithDescription();
            setPersonalData(data);
        }
        fetchData();
    }, []);

    const email = personalData.email || "Email not available";
    const phone = personalData.phone || "Phone number not available";

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => {}, setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    const handleEmailClick = (e) => {
        e.preventDefault();
        window.location.href = `mailto:${email}`;
    };

    const toggleContactInfo = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <Link
                href="#contact"
                className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 inline-block"
                onClick={(e) => {
                    e.preventDefault();
                    toggleContactInfo();
                }}
            >
                <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                    <span>Contact me</span>
                    <RiContactsFill size={16} />
                </button>
            </Link>

            {isOpen && (
                <div className="absolute mt-2 p-[1px] bg-gradient-to-r to-pink-500 from-violet-600 rounded-lg shadow-md w-128 z-10">
                    <div className="bg-[#0d1224] p-6 rounded-lg w-full h-full">
                        <button
                            onClick={toggleContactInfo}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <LuX size={20} />
                        </button>
                        <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-500 text-transparent bg-clip-text">
                            Contact Information
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <LuMail
                                    className="mr-2 text-blue-500"
                                    size={16}
                                />
                                <a
                                    href={`mailto:${email}`}
                                    onClick={handleEmailClick}
                                    className="text-white hover:underline"
                                >
                                    {email}
                                </a>
                            </li>
                            <li className="flex items-center">
                                <LuPhone
                                    className="mr-2 text-blue-500"
                                    size={16}
                                />
                                <span
                                    className="text-gray-300 cursor-pointer hover:text-gray-100 transition-colors duration-200 flex items-center"
                                    onClick={() => copyToClipboard(phone)}
                                >
                                    {phone}
                                    {copied ? (
                                        <LuCheck
                                            className="ml-2 text-green-500"
                                            size={16}
                                        />
                                    ) : (
                                        <LuCopy
                                            className="ml-2 text-gray-400"
                                            size={16}
                                        />
                                    )}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactInfoBox;
