import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f0f5f1] px-4">
            <div className="w-full max-w-lg rounded-2xl border border-[#dfe8e0] bg-[#fbfdfb] p-8 text-center shadow-sm sm:p-12">

                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">
                    🛒
                </div>

                <h1 className="text-7xl font-extrabold text-green-700">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-gray-800">
                    পেজটি খুঁজে পাওয়া যায়নি!
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                    দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
                    পেজটি সরানো হয়েছে অথবা ঠিকানা ভুল হতে পারে।
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                    <Link
                        href="/"
                        className="btn rounded-lg border-none bg-green-700 px-6 text-white hover:bg-green-800"
                    >
                        🏠 হোম পেজে ফিরে যান
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="btn rounded-lg border border-gray-200 bg-white px-6 text-gray-700 hover:bg-gray-100"
                    >
                        ← আগের পেজে যান
                    </button>

                </div>

                <p className="mt-8 text-xs text-gray-400">
                    বাজার দর — আপনার প্রতিদিনের বাজারের সঙ্গী
                </p>

            </div>
        </div>
    );
};

export default NotFound;