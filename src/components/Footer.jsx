import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-[#dfe8e0] bg-[#fbfdfb]">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-gray-600 sm:flex-row sm:text-left">

                <p>
                    বাজার দর — প্রয়োজনীয় পণ্যের দর এক নজরে।
                </p>

                <p>
                    সকল দাম সম্ভাব্য; বাজার অবস্থা ও চাহিদার উপর নির্ভর করে পরিবর্তিত হয়।
                </p>

            </div>
        </footer>
    );
};

export default Footer;