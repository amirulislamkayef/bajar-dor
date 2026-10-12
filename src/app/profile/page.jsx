'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const UserProfilePage = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [name, setName] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();

        const { error } = await authClient.updateUser({ name });

        if (error) {
            toast.error('Update failed');
        } else {
            toast.success('Profile updated!');
            setName('');
        }
    };

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push('/');
        router.refresh();
    };

    if (!user) return <p className="p-10">Loading...</p>;

    return (
        <div className="min-h-screen bg-[#f0f5f1] px-4 py-10">
            <div className="mx-auto max-w-4xl">

                <h1 className="mb-1 text-2xl font-bold">আমার প্রোফাইল</h1>
                <p className="mb-6 text-sm text-gray-500">
                    আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                </p>

                <div className="mb-5 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5">
                    <div>
                        <h2 className="font-bold">{user.name}</h2>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    <button
                        onClick={handleSignOut}
                        className="btn btn-outline btn-error btn-sm"
                    >
                        সাইন আউট
                    </button>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h2 className="mb-6 font-bold">তথ্য</h2>

                    <form onSubmit={handleUpdate}>
                        <label className="mb-2 block text-sm">নাম</label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={user.name}
                            className="input input-bordered w-full"
                            required
                        />

                        <button
                            type="submit"
                            className="btn mt-4 w-full border-none bg-green-700 text-white hover:bg-green-800"
                        >
                            আপডেট
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UserProfilePage;