import React from 'react';
import Link from 'next/link';

const NavLinks = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const data = await res.json()
  
    console.log(data);
    
    return (
        <div className='flex gap-7 mt-5 justify-center'>
            {
                data.map((n,ind) => <Link key={ind} href={`/category`}>{n.icon}{n.nameBn}</Link>)
            }
        </div>
    );
};

export default NavLinks;