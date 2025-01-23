import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";

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
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-black border-b-2 border-black pb-2">Nutrition Facts</h3>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableCell className="font-semibold text-black">Nutrient</TableCell>
            <TableCell className="font-semibold text-black">Amount</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(facts).map(([key, value]) => (
            <TableRow key={key} className="hover:bg-gray-50/50">
              <TableCell className="capitalize text-gray-800">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </TableCell>
              <TableCell className="font-medium text-black">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NutritionFacts;