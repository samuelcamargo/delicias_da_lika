"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import MenuCard from "@/components/MenuCard";
import { IceCream } from "lucide-react";
import { menuItems, categories, MenuItem } from "@/data/menu";

export default function Cardapio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredItems =
    selectedCategory === "Todos"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Confira nosso cardápio completo!">
          <span className="flex items-center justify-center gap-2">
            <IceCream className="text-primary-500" size={32} />
            Cardápio
          </span>
        </SectionTitle>

        {/* Filtros */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-primary-50 border-2 border-primary-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
