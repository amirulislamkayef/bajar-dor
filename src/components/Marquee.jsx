import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const data = await res.json()


    return (
        <div className='border-gray-400 mt-4'>
            <MarqueeText duration={10}>
                {
                    data.map(p => <span className='font-semibold' key={p.id}>{p.categoryIcon} {p.nameBn} {p.today}  টাকা/কেজি </span>)
                }
            </MarqueeText>
        </div>
    );
};

export default Marquee;