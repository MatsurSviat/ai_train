import React from "react";

type PricingCardProps = {
    plan: string;
    price: string;
    features: string[];
    isFeatured?: boolean;
};



export const PricingCard: React.FC<PricingCardProps> = ({
                                                            plan,
                                                            price,
                                                            features,
                                                            isFeatured = false,
                                                        }) => {
    return (
        <div
            className={`flex flex-col items-center justify-between p-6 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition
        ${isFeatured ? "bg-slate-800 text-white scale-105 z-10" : "bg-white text-slate-800"}
        ${isFeatured ? "shadow-xl" : "hover:shadow-lg"}
        sm:w-80 w-full`}
    tabIndex={0}
    >
    <h3 className="text-lg font-medium mb-2">{plan}</h3>
        <div className="text-4xl font-bold mb-4">${price}</div>
    <ul className="w-full space-y-3 mb-6 text-sm text-center">
        {features.map((feature, index) => (
                <li key={index} className="border-t pt-2 first:border-t-0 first:pt-0">
                {feature}
                </li>
))}
    </ul>
    <button
    className={`mt-auto w-full text-sm font-semibold py-2 px-4 rounded 
          ${isFeatured ? "bg-white text-slate-800" : "bg-slate-800 text-white"}
          hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition`}
>
    SUBSCRIBE
    </button>
    </div>
);
};
