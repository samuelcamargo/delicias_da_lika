import Link from "next/link";
import { Phone, MapPin, ExternalLink, MessageCircle, IceCream, Instagram } from "lucide-react";
import QRCode from "@/components/QRCode";

const WHATSAPP_NUMBER = "5511914861102";
const WHATSAPP_MESSAGE = "Olá! Gostaria de fazer um pedido no Açai e Delícias da Lika.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const IFOOD_URL = "https://www.ifood.com.br/delivery/barueri-sp/acai-e-delicias-da-lika-vila-nova/c83c1a0a-806d-4fd6-a8f4-2f76d3e2ff62";
const APP99_URL = "https://oia.99app.com/dlp9/RXGzlK?share_media=WHATSAPP";
const INSTAGRAM_URL = "https://www.instagram.com/acaiedeliciasdalika/";

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <IceCream className="text-primary-400" size={28} />
              <h3 className="text-2xl font-display font-bold text-primary-400">
                Açai e Delícias da Lika
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              O melhor açaí cremoso de Barueri! Especializados em oferecer sabores frescos e momentos doces.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin size={18} />
              <span className="text-sm">Rua Luiz Gianezella, 78 - Vila Nova, Barueri - SP</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={18} />
                <span>+55 11 91486-1102</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram size={18} />
                <span>@acaiedeliciasdalika</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={18} />
                <span className="text-sm">Barueri - SP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Início
              </Link>
              <Link
                href="/quem-somos"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Quem Somos
              </Link>
              <Link
                href="/cardapio"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Cardápio
              </Link>
              <a
                href={IFOOD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#EA1D2C] transition-colors"
              >
                <span>Peça no iFood</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={APP99_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <span>Peça no 99 Food</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-4 text-center md:text-left">
                Faça seu pedido pelo WhatsApp
              </h4>
              <p className="text-gray-400 text-sm text-center md:text-left">
                Escaneie o QR Code com seu celular para abrir o WhatsApp e fazer seu pedido!
              </p>
            </div>
            <QRCode size={150} />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Açai e Delícias da Lika. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 63.873.572/0001-03</p>
        </div>
      </div>
    </footer>
  );
}
