import React from 'react';
import Link from 'next/link';

const units = { kg: "কেজি", litre: "লিটার", dozen: "ডজন", piece: "পিস" };
const toBn = (n) => Number(n).toLocaleString("bn-BD");

const arrows = {
    up: { cls: "bg-red-50 text-red-600", icon: "▲" },
    down: { cls: "bg-green-50 text-green-600", icon: "▼" },
    flat: { cls: "bg-gray-100 text-gray-500", icon: "—" },
};

const ProductsCard = ({ product }) => {

    const p = product;
    const badge = arrows[p.change.dir] || arrows.flat;

    return (
        <Link href={`/products/${product.id}`}>
            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl">
                        {p.image}
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">{p.nameBn}</h3>
                        <p className="text-xs text-gray-500">প্রতি {units[p.unit] || p.unit}</p>
                    </div>
                </div>

                <div className="mt-4 flex items-end justify-between">
                    <div>
                        <p className="text-xs text-gray-500">আজকের দাম</p>
                        <p className="text-lg font-bold text-gray-900">{toBn(p.today)} টাকা</p>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badge.cls}`}>
                        {badge.icon} {toBn(Math.abs(p.change.pct).toFixed(1))}%
                    </span>
                </div>
            </div>
        </Link>
    );
}
export default ProductsCard;