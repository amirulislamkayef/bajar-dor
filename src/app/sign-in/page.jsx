'use client'
import React from 'react';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import toast from 'react-hot-toast';

const SignInPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: '/'
        })
        if (data) {
            toast.success('Sign In Successfull')
            redirect("/")

        }
        if (error) {
            toast.error('Please Try Again')
        }
    }
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="min-h-screen bg-[#f0f5f1] flex items-center justify-center px-4 py-10">
                    <div className="w-full max-w-md">

                        <div className="text-center mb-7">
                            <h1 className="text-3xl font-bold text-gray-900">
                                সাইন ইন করুন
                            </h1>

                            <p className="text-gray-500 mt-2">
                                আপনার অ্যাকাউন্টে লগইন করে বাজারদর দেখুন
                            </p>
                        </div>

                        <div className="card bg-[#fbfdfb] border border-[#dfe8e0] shadow-sm rounded-2xl">
                            <div className="card-body p-6 sm:p-8">

                                <fieldset className="fieldset">

                                    <label className="label text-sm font-semibold text-gray-800">
                                        ইমেইল
                                    </label>

                                    <input
                                        name="email"
                                        type="email"
                                        className="input w-full bg-transparent border-[#dce5de] focus:outline-green-600 rounded-xl"
                                        placeholder="you@example.com"
                                        required
                                    />

                                    <label className="label mt-3 text-sm font-semibold text-gray-800">
                                        পাসওয়ার্ড
                                    </label>

                                    <input
                                        name="password"
                                        type="password"
                                        className="input w-full bg-transparent border-[#dce5de] focus:outline-green-600 rounded-xl"
                                        placeholder="আপনার পাসওয়ার্ড লিখুন"
                                        required
                                    />

                                    <button
                                        type="submit"
                                        className="btn w-full mt-4 bg-green-700 hover:bg-green-800 text-white border-none rounded-xl text-base shadow-md"
                                    >
                                        সাইন ইন করুন
                                    </button>

                                </fieldset>

                                <div className="divider text-gray-400 text-sm my-5">
                                    অথবা
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        type="button"
                                        className="btn bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 rounded-xl"
                                    >
                                        Google
                                    </button>

                                    <button
                                        onClick={handleGithubSignIn}
                                        type="button"
                                        className="btn bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 rounded-xl"
                                    >
                                        GitHub
                                    </button>

                                </div>
                                <p className="text-center text-sm text-gray-600 mt-6">
                                    অ্যাকাউন্ট নেই?{" "}
                                    <a
                                        href="/signup"
                                        className="text-green-700 font-semibold hover:underline"
                                    >
                                        সাইন আপ করুন
                                    </a>
                                </p>

                            </div>
                        </div>
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

export default SignInPage;