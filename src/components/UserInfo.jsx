'use client';

import React from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const UserInfo = () => {
    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    const handleSignOut = async() =>{
        await authClient.signOut()
    }

    if (isPending) {
        return (
            <div className="flex items-center gap-3">
                <span className="loading loading-spinner loading-sm text-green-700"></span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3 sm:gap-4">

            {user ? (
                <div className="flex items-center gap-3 rounded-xl border border-green-100 bg-white px-3 py-2 shadow-sm sm:px-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-lg font-bold uppercase text-green-700">
                        {user.name?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </div>

                    <div className="min-w-0">
                        <h2 className="max-w-36 truncate text-sm font-bold text-gray-800 sm:max-w-48">
                            {user.name || 'ব্যবহারকারী'}
                        </h2>

                        <p className="max-w-36 truncate text-xs text-gray-500 sm:max-w-48">
                            {user.email}
                        </p>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="rounded-lg border border-red-200 bg-white px-3 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 sm:px-4"
                    >
                        সাইন আউট
                    </button>
                </div>
            ) : (
                <div className="flex items-center gap-2 sm:gap-3">

                    <Link
                        href="/sign-in"
                        className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-700 sm:px-4"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/sign-up"
                        className="rounded-lg bg-green-700 px-3 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-green-800 sm:px-5"
                    >
                        সাইন আপ
                    </Link>

                </div>
            )}

        </div>
    );
};

export default UserInfo;