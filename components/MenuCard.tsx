"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { MenuItem } from "@/data/menu";

const WHATSAPP_NUMBER = "5511914861102";
const IFOOD_URL = "https://www.ifood.com.br/delivery/barueri-sp/acai-e-delicias-da-lika-vila-nova/c83c1a0a-806d-4fd6-a8f4-2f76d3e2ff62";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
  const whatsappMessage = `Olá! Gostaria de pedir: ${item.name}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        {item.size && (
          <p className="text-primary-500 text-sm font-semibold mb-4">
            {item.size}
          </p>
        )}
        <div className="flex items-center justify-between mb-4">
          <div>
            {item.originalPrice && (
              <p className="text-gray-400 text-sm line-through">
                R$ {item.originalPrice.toFixed(2).replace(".", ",")}
              </p>
            )}
            <p className="text-2xl font-display font-bold text-primary-500">
              R$ {item.price.toFixed(2).replace(".", ",")}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a
            href={IFOOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#EA1D2C] hover:bg-[#D01C2A] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            iFood
          </a>
        </div>
      </div>
    </motion.div>
  );
}
