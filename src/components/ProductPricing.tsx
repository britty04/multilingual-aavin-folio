import React from "react";

interface PriceOption {
  quantity: string;
  price: string;
}

interface ProductPricingProps {
  options: PriceOption[];
}

const ProductPricing = ({ options }: ProductPricingProps) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-3 text-primary">Available Quantities</h3>
      <div className="flex flex-wrap gap-3">
        {options.map((option, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <p className="text-sm text-gray-600">{option.quantity}</p>
            <p className="font-semibold text-primary">{option.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPricing;