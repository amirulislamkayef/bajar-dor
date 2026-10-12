import Image from 'next/image';
import UserInfo from './UserInfo';
import NavLinks from './NavLinks';


const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <header className="border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo-icon.png"
                        alt="বাজার দর"
                        width={42}
                        height={42}
                        priority
                        className="rounded-xl"
                    />

                    <div>
                        <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
                            বাজার দর
                        </h1>

                        <p className="text-xs text-gray-500">
                            {date}
                        </p>
                    </div>
                </div>
                <UserInfo></UserInfo>

            </div>
            <NavLinks></NavLinks>
        </header>
    );
};

export default Header;