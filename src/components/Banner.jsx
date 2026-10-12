import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <section className="bg-[#f0f5f1] px-4 py-6 sm:px-6">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 overflow-hidden rounded-[22px] border border-[#e0e9e1] bg-[#fbfdfb] px-5 py-6 sm:px-8 md:grid-cols-2 md:px-10 md:py-8">

                <div className="order-2 md:order-1">
                    <span className="inline-flex rounded-full bg-[#e2f3e8] px-3 py-1 text-xs font-medium text-green-700">
                        {date}
                    </span>

                    <h1 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#202b23] sm:text-3xl lg:text-[34px]">
                        আজকের বাজারের দাম এক নজরে
                    </h1>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং
                        দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <Link
                        href="/"
                        className="mt-6 inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-green-800 hover:shadow-lg"
                    >
                        সব পণ্য দেখুন
                    </Link>
                </div>
                <div className="order-1 flex items-center justify-center md:order-2 md:justify-end">
                    <Image
                        src="/bazar-hero.png"
                        alt="বাজারের তাজা শাকসবজি ও পণ্যের ঝুড়ি"
                        width={320}
                        height={240}
                        priority
                        className="h-auto w-52 object-contain sm:w-60 md:w-64 lg:w-72"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;