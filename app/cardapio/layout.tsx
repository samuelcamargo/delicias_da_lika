import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cardápio - Açai e Delícias da Lika | Barueri",
  description: "Confira nosso cardápio completo! Açaí, cupuaçu, casadinho, combos, marmitas, sucos e sobremesas. Peça pelo iFood ou WhatsApp!",
  keywords: "cardápio açaí barueri, cardápio cupuaçu, açaí delivery, combos açaí, marmitas açaí",
};

export default function CardapioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
