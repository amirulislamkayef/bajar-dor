import React from 'react';
import Link from 'next/link';

const NavLinks = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const data = await res.json()

    return (
        <div className='flex gap-7 mt-5 justify-center'>
            {
                data.map((n) => (
                    <Link key={n.id} href={`/category/${n.slug}`}>
                        {n.icon}{n.nameBn}
                    </Link>
                ))
            }
        </div>
    );
};

export default NavLinks;