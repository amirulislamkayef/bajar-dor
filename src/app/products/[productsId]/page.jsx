import React from "react";
import { notFound } from "next/navigation";

const ProductsDetailsPage = async ({ params }) => {
  const { productsId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productsId}`
  );
  const product = await res.json();

  if (!product || !product.markets) {
    notFound();
  }
  const units = { kg: "কেজি", litre: "লিটার", dozen: "ডজন", piece: "পিস" };
  const unitBn = units[product.unit] || product.unit;

  const toBn = (n) => Number(n).toLocaleString("bn-BD");

  const toBnPrice = (n) =>
    Number(n).toLocaleString("bn-BD", {
      minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
      maximumFractionDigits: 2,
    });

  const BADGE = {
    up: { cls: "text-red-600", icon: "▲", text: "বেড়েছে" },
    down: { cls: "text-green-600", icon: "▼", text: "কমেছে" },
    flat: { cls: "text-gray-500", icon: "—", text: "একই আছে" },
  };
  const badge = BADGE[product.change.dir] || BADGE.flat;
  const diff = Math.abs(product.today - product.yesterday);

  const markets = product.markets
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  const minPrice = Math.min(...markets.map((m) => m.min));
  const maxPrice = Math.max(...markets.map((m) => m.max));
  const avgPrice = Math.round(
    markets.reduce((sum, m) => sum + m.avg, 0) / markets.length
  );

  const stats = [
    {
      label: "সর্বনিম্ন দাম",
      value: minPrice,
      color: "text-green-600",
      note: "সবচেয়ে কম দামের বাজার",
    },
    {
      label: "সর্বাধিক দাম",
      value: maxPrice,
      color: "text-red-600",
      note: "সবচেয়ে বেশি দামের বাজার",
    },
    {
      label: "গড় দাম",
      value: avgPrice,
      color: "text-green-600",
      note: `প্রতি ${unitBn}-এর হিসাব`,
    },
  ];

  return (
    <div className="min-h-screen bg-green-50/40 p-4">
      <div className="mx-auto max-w-4xl space-y-4">

        <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-4xl">
              {product.image}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.nameBn}
              </h1>
              <p className="text-sm text-gray-500">
                প্রতি {unitBn} · {product.categoryNameBn}
              </p>
              <p className="mt-1 text-sm text-gray-700">
                গতকালের তুলনায় আজ দাম{" "}
                <span className="font-bold">{badge.text}</span> ·{" "}
                {toBn(diff)} টাকা
              </p>
            </div>
          </div>

          <div className="shrink-0 rounded-xl bg-green-50 px-6 py-4 text-center">
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <p className="text-4xl font-bold text-gray-900">
              {toBn(product.today)}
            </p>
            <p className="text-xs text-gray-500">টাকা / {unitBn}</p>
            <p className={`mt-1 text-xs font-semibold ${badge.cls}`}>
              {badge.icon} {toBn(Math.abs(product.change.pct).toFixed(1))}%
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-gray-100 p-4"
              >
                <p className="text-xs text-gray-500">{s.label}</p>
                <p className={`text-2xl font-bold ${s.color}`}>
                  {toBn(s.value)}{" "}
                  <span className="text-sm font-medium">টাকা</span>
                </p>
                <p className="text-xs text-gray-500">{s.note}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-3 mt-8 text-lg font-bold text-gray-900">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500">
                  <th className="px-4 py-3 text-left font-normal">বাজার</th>
                  <th className="px-4 py-3 text-left font-normal">বিভাগ</th>
                  <th className="px-4 py-3 text-right font-normal">সর্বনিম্ন</th>
                  <th className="px-4 py-3 text-right font-normal">সর্বাধিক</th>
                  <th className="px-4 py-3 text-right font-normal">গড়</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((m, i) => (
                  <tr
                    key={m.market}
                    className={`border-t border-gray-200 ${
                      i % 2 === 1 ? "bg-green-50/60" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {m.market}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{m.division}</td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {toBn(m.min)} টাকা
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {toBn(m.max)} টাকা
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900">
                      {toBnPrice(m.avg)} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;