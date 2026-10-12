import Banner from "@/components/Banner";
import ProductsCard from "@/components/ProductsCard";

export default async function Home() {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
  const data = await res.json();

  const sections = [
    {
      title: "▲ আজ দাম বেড়েছে",
      titleColor: "text-red-600",
      items: data.filter((p) => p.change.dir === "up").slice(0, 6),
    },
    {
      title: "▼ আজ দাম কমেছে",
      titleColor: "text-green-700",
      items: data.filter((p) => p.change.dir === "down").slice(0, 6),
    },
    {
      title: "সব পণ্য",
      titleColor: "text-gray-900",
      subtitle: `মোট ${data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে`,
      items: data,
    },
  ];

  return (
    <div>
      <Banner />

      <div className="mx-auto max-w-5xl bg-green-50/40 p-4">
        {
          sections.map((section) => (
            <section key={section.title} className="mb-8">
              <h2 className={`text-lg font-bold ${section.titleColor}`}>{section.title}</h2>
              {
                section.subtitle && (
                  <p className="mt-1 text-xs text-gray-500">{section.subtitle}</p>
                )
              }

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {
                  section.items.map((p) => (
                    <ProductsCard key={p.id} product={p} />
                  ))
                }
              </div>
            </section>
          ))
        }
      </div>
    </div>
  );
}
