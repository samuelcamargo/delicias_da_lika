"use client";

import { QRCodeSVG } from "qrcode.react";

const WHATSAPP_NUMBER = "5511914861102";
const WHATSAPP_MESSAGE = "Olá! Gostaria de fazer um pedido no Açai e Delícias da Lika.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

interface QRCodeProps {
  className?: string;
  size?: number;
}

export default function QRCode({ className = "", size = 200 }: QRCodeProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <QRCodeSVG value={WHATSAPP_URL} size={size} />
      </div>
      <p className="mt-4 text-sm text-gray-600 text-center max-w-xs">
        Escaneie o QR Code para fazer seu pedido pelo WhatsApp
      </p>
    </div>
  );
}
