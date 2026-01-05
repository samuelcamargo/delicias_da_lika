import { Metadata } from "next";
import { Clock, MapPin, Phone, Heart, Instagram } from "lucide-react";
import QRCode from "@/components/QRCode";

export const metadata: Metadata = {
  title: "Quem Somos - Açai e Delícias da Lika | Barueri",
  description: "Conheça a história da Açai e Delícias da Lika. Especializados em oferecer o açaí mais cremoso e saboroso de Barueri.",
};

export default function QuemSomos() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-500 mb-6">
            Quem Somos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Açaí e Delícias da Lika nasceu do amor por sabores frescos e da paixão por momentos doces e felizes.
          </p>
        </div>

        {/* História */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900">
                Nossa História
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                Açaí e Delícias da Lika nasceu do amor por sabores frescos e da paixão por momentos doces e felizes. 
                Especializados em oferecer o açaí mais cremoso e saboroso de Barueri!
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Nossa missão é proporcionar experiências deliciosas através de produtos de alta qualidade, 
                preparados com ingredientes frescos e muito carinho. Cada açaí, cupuaçu ou combo é feito 
                pensando em proporcionar o melhor sabor e satisfação aos nossos clientes.
              </p>
              <p className="text-lg leading-relaxed">
                Estamos localizados na Vila Nova, Barueri, e atendemos toda a região através de delivery 
                via iFood, 99 Food e WhatsApp. Venha conhecer o melhor açaí de Barueri!
              </p>
            </div>
          </div>
        </div>

        {/* Informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Horários */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900">
                Horários de Funcionamento
              </h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span className="font-semibold">Segunda-feira</span>
                <span>10:30 às 23:40</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Terça-feira</span>
                <span>10:30 às 23:40</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Quarta-feira</span>
                <span>10:30 às 23:40</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Quinta-feira</span>
                <span>10:30 às 20:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Sexta-feira</span>
                <span>10:30 às 23:40</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Sábado</span>
                <span>10:30 às 23:40</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Domingo</span>
                <span>10:30 às 23:40</span>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900">
                Localização
              </h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Endereço:</p>
                <p>Rua Luiz Gianezella, 78</p>
                <p>Vila Nova</p>
                <p>Barueri - SP</p>
                <p>CEP: 06420-090</p>
              </div>
              <div>
                <p className="font-semibold mb-2">CNPJ:</p>
                <p>63.873.572/0001-03</p>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code WhatsApp */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white text-center mb-8">
          <h3 className="text-3xl font-display font-bold mb-4">
            Faça seu pedido pelo WhatsApp!
          </h3>
          <p className="text-lg opacity-90 mb-8">
            Escaneie o QR Code ou clique no botão flutuante
          </p>
          <div className="flex justify-center">
            <QRCode size={200} />
          </div>
        </div>

        {/* Instagram Section */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="flex justify-center mb-4">
            <Instagram size={64} className="text-white" />
          </div>
          <h3 className="text-3xl font-display font-bold mb-4">
            Siga-nos no Instagram!
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Acompanhe nossas novidades, promoções e veja fotos incríveis dos nossos produtos. 
            Fique por dentro de tudo que acontece na Açai e Delícias da Lika!
          </p>
          <a
            href="https://www.instagram.com/acaiedeliciasdalika/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Instagram size={24} />
            <span>@acaiedeliciasdalika</span>
          </a>
        </div>
      </div>
    </div>
  );
}
