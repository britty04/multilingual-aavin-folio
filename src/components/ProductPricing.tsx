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
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4 text-black">Available Quantities</h3>
      <div className="flex flex-wrap gap-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="bg-white border-2 border-black/10 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <p className="text-lg font-medium text-black group-hover:text-gray-800">{option.quantity}</p>
            <p className="text-2xl font-bold text-black mt-1">{option.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPricing;