"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import { ArrowRight, ShoppingBag, IceCream, Cake, Instagram } from "lucide-react";

const IFOOD_URL = "https://www.ifood.com.br/delivery/barueri-sp/acai-e-delicias-da-lika-vila-nova/c83c1a0a-806d-4fd6-a8f4-2f76d3e2ff62";
const APP99_URL = "https://oia.99app.com/dlp9/RXGzlK?share_media=WHATSAPP";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="text-primary-500">Açai e Delícias da Lika:</span> O{" "}
              <span className="text-secondary-500">Açaí</span> mais{" "}
              <span className="text-accent-500">cremoso</span> de Barueri!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Açaí e Delícias da Lika nasceu do amor por sabores frescos e da paixão por momentos doces e felizes. Especializados em oferecer o açaí mais cremoso e saboroso de Barueri!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <Button
                href={IFOOD_URL}
                size="lg"
                variant="primary"
                external
                className="group"
              >
                <ShoppingBag size={20} className="mr-2" />
                Pedir no iFood
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                href={APP99_URL}
                size="lg"
                variant="secondary"
                external
                className="group"
              >
                Pedir no 99 Food
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <p className="text-sm text-gray-500">
                📍 Rua Luiz Gianezella, 78 - Vila Nova, Barueri - SP
              </p>
              <a
                href="https://www.instagram.com/acaiedeliciasdalika/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-500 hover:text-primary-600 font-semibold transition-colors"
              >
                <Instagram size={16} />
                <span>Siga-nos no Instagram</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <IceCream className="text-primary-500" size={120} strokeWidth={1.5} />
                </div>
                <div className="text-2xl font-display font-bold text-primary-500 mb-2">
                  AÇAI E DELÍCIAS DA LIKA
                </div>
                <div className="text-gray-600">Açaí, Doces e Tortas</div>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4"
            >
              <Cake className="text-accent-500" size={48} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4"
            >
              <IceCream className="text-secondary-500" size={48} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
