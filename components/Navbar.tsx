"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, IceCream } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <IceCream className="text-primary-500" size={32} />
            <span className="text-2xl md:text-3xl font-display font-bold text-primary-500">
              Açai e Delícias da Lika
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            >
              Início
            </Link>
            <Link
              href="/quem-somos"
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            >
              Quem Somos
            </Link>
            <Link
              href="/cardapio"
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            >
              Cardápio
            </Link>
            <a
              href="https://www.ifood.com.br/delivery/barueri-sp/acai-e-delicias-da-lika-vila-nova/c83c1a0a-806d-4fd6-a8f4-2f76d3e2ff62"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-semibold transition-colors shadow-lg"
            >
              Pedir no iFood
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-primary-500 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/quem-somos"
                className="block py-2 text-gray-700 hover:text-primary-500 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                href="/cardapio"
                className="block py-2 text-gray-700 hover:text-primary-500 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Cardápio
              </Link>
              <a
                href="https://www.ifood.com.br/delivery/barueri-sp/acai-e-delicias-da-lika-vila-nova/c83c1a0a-806d-4fd6-a8f4-2f76d3e2ff62"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pedir no iFood
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
