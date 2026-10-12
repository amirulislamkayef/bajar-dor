import React from "react";

const GlobalLoading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f8faf9]">
            <div className="flex flex-col items-center">

                <div className="relative flex h-16 w-16 items-center justify-center">
                    <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>

                    <div className="h-8 w-8 rounded-full bg-green-600"></div>
                </div>

                {/* Brand */}
                <h2 className="mt-6 text-xl font-bold text-gray-800">
                    Wait
                </h2>
            </div>
        </div>
    );
};

export default GlobalLoading;