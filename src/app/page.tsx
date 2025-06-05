import { PricingCard } from "./PricingCard";

export const pricingCardData = [
  {
    plan: "Standard",
    price: "100",
    features: ["50,000 Requests", "4 contributors", "Up to 3 GB storage space"],
    isFeatured: false,
  },
  {
    plan: "Pro",
    price: "200",
    features: [
      "100,000 Requests",
      "7 contributors",
      "Up to 6 GB storage space",
    ],
    isFeatured: true,
  },
  {
    plan: "Expert",
    price: "500",
    features: [
      "200,000 Requests",
      "11 contributors",
      "Up to 10 GB storage space",
    ],
    isFeatured: false,
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex">
          {pricingCardData.map((card) => (
            <PricingCard
              key={card.plan}
              plan={card.plan}
              price={card.price}
              features={card.features}
              isFeatured={card.isFeatured}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
