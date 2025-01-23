import React from "react";

interface NutritionFactsProps {
  facts: {
    fat: string;
    solidsNotFat: string;
    protein: string;
    carbohydrate: string;
    minerals: string;
    energyValue: string;
  };
}

const NutritionFacts = ({ facts }: NutritionFactsProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
      <h3 className="text-lg font-semibold mb-3 text-primary">Nutrition Facts</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(facts).map(([key, value]) => (
          <div key={key} className="text-center p-2 bg-secondary/10 rounded-lg hover:scale-105 transition-transform">
            <p className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
            <p className="font-semibold text-primary">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionFacts;