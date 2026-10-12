'use client'
import React from 'react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: '/'
        })
        if (data) {
            toast.success('Sign Up Successfull')
            redirect("/")

        }
        if (error) {
            toast.error('Please Try Again')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="min-h-screen bg-[#f0f5f1] flex items-center justify-center px-4 py-10">
                    <div className="w-full max-w-2xl">

                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                সাইন আপ করুন
                            </h1>

                            <p className="text-gray-500 mt-3 text-base">
                                আপনার অ্যাকাউন্টে লগইন করে বাজারদর দেখুন
                            </p>
                        </div>

                        <div className="card bg-[#fbfdfb] border border-[#dfe8e0] shadow-sm rounded-2xl">
                            <div className="card-body p-6 md:p-10">

                                <fieldset className="fieldset">

                                    <label className="label text-sm font-semibold text-gray-800">
                                        নাম
                                    </label>

                                    <input
                                        name="name"
                                        type="text"
                                        className="input input-bordered w-full bg-transparent border-[#dce5de] focus:outline-green-600 rounded-xl h-12"
                                        placeholder="আপনার নাম লিখুন"
                                        required
                                    />

                                    <label className="label mt-3 text-sm font-semibold text-gray-800">
                                        ইমেইল
                                    </label>

                                    <input
                                        name="email"
                                        type="email"
                                        className="input input-bordered w-full bg-transparent border-[#dce5de] focus:outline-green-600 rounded-xl h-12"
                                        placeholder="you@example.com"
                                        required
                                    />

                                    <label className="label mt-3 text-sm font-semibold text-gray-800">
                                        পাসওয়ার্ড
                                    </label>

                                    <input
                                        name="password"
                                        type="password"
                                        className="input input-bordered w-full bg-transparent border-[#dce5de] focus:outline-green-600 rounded-xl h-12"
                                        placeholder="আপনার পাসওয়ার্ড লিখুন"
                                        required
                                    />

                                    <button
                                        type="submit"
                                        className="btn w-full mt-5 h-12 bg-green-700 hover:bg-green-800 text-white border-none rounded-xl text-base shadow-md"
                                    >
                                        সাইন আপ করুন
                                    </button>

                                </fieldset>

                                <div className="divider text-gray-400 text-sm my-6">
                                    অথবা
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    <button
                                        type="button"
                                        className="btn h-12 bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 rounded-xl"
                                    >

                                        Google দিয়ে চালিয়ে যান
                                    </button>

                                    <button
                                        type="button"
                                        className="btn h-12 bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 rounded-xl"
                                    >
                                        GitHub দিয়ে চালিয়ে যান
                                    </button>

                                </div>
                            </div>
                        </div>

                        {/* Back Home */}
                        <div className="text-center mt-6">
                            <Link
                                href="/"
                                className="text-sm text-gray-500 hover:text-green-700 transition"
                            >
                                হোম পেজে ফিরে যান
                            </Link>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;

