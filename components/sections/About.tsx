"use client";

import { motion } from "framer-motion";
import { Heart, Clock, MapPin, Instagram } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada açaí é preparado com carinho e ingredientes frescos, garantindo o melhor sabor.",
    },
    {
      icon: Clock,
      title: "Horário Estendido",
      description: "Atendemos de segunda a domingo, das 10:30 às 23:40 (quinta até 20:00).",
    },
    {
      icon: MapPin,
      title: "Delivery Rápido",
      description: "Peça pelo iFood ou 99 Food e receba seu açaí cremoso em casa!",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-500 mb-4">
            Por que escolher a Açai e Delícias da Lika?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos especialistas em oferecer o açaí mais cremoso e saboroso de Barueri!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Peça pelo iFood, 99 Food ou WhatsApp!
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Entre em contato e descubra como podemos tornar seu dia mais doce com nossos açaís cremosos e deliciosos.
          </p>
          <a
            href="https://www.instagram.com/acaiedeliciasdalika/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Instagram size={20} />
            <span>Siga-nos no Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
