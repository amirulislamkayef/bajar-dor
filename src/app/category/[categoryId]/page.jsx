import React from "react";
import { notFound } from "next/navigation";
import ProductsCard from "@/components/ProductsCard";
import SortSelect from "@/components/SortSelet";

const CategoryPage = async ({ params, searchParams }) => {
  const { categoryId } = await params;
  const { sort = "default" } = await searchParams;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`
  );
  const data = await res.json();

  const products = Array.isArray(data)
    ? data.filter((p) => p.category === categoryId)
    : [];

  if (products.length === 0) {
    notFound();
  }

  const sorted = [...products];
  if (sort === "price-asc") sorted.sort((a, b) => a.today - b.today);
  if (sort === "price-desc") sorted.sort((a, b) => b.today - a.today);
  if (sort === "change-desc")
    sorted.sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct));

  const toBn = (n) => Number(n).toLocaleString("bn-BD");

  return (
    <div className="min-h-screen bg-green-50/40 p-4">
      <div className="mx-auto max-w-5xl space-y-4">

        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-3xl">
            {products[0].categoryIcon}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {products[0].categoryNameBn}
            </h1>
            <p className="text-sm text-gray-500">
              {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <span className="text-sm text-gray-500">সাজান</span>
          <SortSelect current={sort} />
        </div>

        <p className="text-sm text-gray-500">
          মোট {toBn(sorted.length)}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (
            <ProductsCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
