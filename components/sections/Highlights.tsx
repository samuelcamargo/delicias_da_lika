"use client";

import SectionTitle from "@/components/SectionTitle";
import MenuCard from "@/components/MenuCard";
import { IceCream } from "lucide-react";
import { menuItems } from "@/data/menu";

export default function Highlights() {
  // Selecionar 4 itens em destaque
  const highlights = [
    menuItems.find(item => item.id === "acai-3-complementos-300"),
    menuItems.find(item => item.id === "combo-2-copos-500"),
    menuItems.find(item => item.id === "casadinho-3-complementos-300"),
    menuItems.find(item => item.id === "suco-acai-500"),
  ].filter(Boolean) as typeof menuItems;

  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Confira nossos produtos mais pedidos!">
          <span className="flex items-center justify-center gap-2">
            <IceCream className="text-primary-500" size={32} />
            Destaques
          </span>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
