export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  size?: string;
}

export const menuItems: MenuItem[] = [
  // Açaí no Copo
  {
    id: "acai-puro-300",
    name: "Açaí no copo puro com aprox. 300 ml",
    description: "Açaí no copo puro com aprox. 300 ml",
    price: 17.28,
    originalPrice: 19.20,
    image: "/images/acai_puro_300ml.png",
    category: "Açaí no Copo",
    size: "300ml",
  },
  {
    id: "acai-3-complementos-300",
    name: "Copo de Açaí + 3 Complementos com aprox. 300 ml",
    description: "Copo de Açaí + 3 Complementos a sua escolha cada com aprox. 300 ml. Obs.: Não enviamos complementos separados.",
    price: 22.80,
    image: "/images/acai_puro_granola_leite_banana300ml.png",
    category: "Açaí no Copo",
    size: "300ml",
  },
  {
    id: "acai-puro-500",
    name: "Copo de Açaí puro com aprox. 500 ml",
    description: "Copo de Açaí puro com aprox. 500 ml",
    price: 22.44,
    originalPrice: 26.40,
    image: "/images/acai_puro_300ml.png",
    category: "Açaí no Copo",
    size: "500ml",
  },
  {
    id: "acai-4-complementos-500",
    name: "Copo de Açaí + 4 Complementos a sua escolha de 500 ml",
    description: "Copo de Açaí + 4 Complementos a sua escolha de 500 ml. Obs.: Não enviamos complementos separados.",
    price: 30.00,
    image: "/images/acai_puro_granola_leite_banana300ml.png",
    category: "Açaí no Copo",
    size: "500ml",
  },
  {
    id: "acai-puro-700",
    name: "Copo de açaí puro - 700 ml",
    description: "Copo de Açaí puro com aprox. 700 ml",
    price: 29.70,
    originalPrice: 33.00,
    image: "/images/acai_puro_300ml.png",
    category: "Açaí no Copo",
    size: "700ml",
  },
  {
    id: "acai-5-complementos-700",
    name: "Copo de açaí + 5 complementos grátis - 700 ml",
    description: "Copo de Açaí + 5 Complementos a sua escolha de 700 ml. Obs.: Não enviamos complementos grátis separados.",
    price: 38.00,
    image: "/images/acai_puro_granola_leite_banana300ml.png",
    category: "Açaí no Copo",
    size: "700ml",
  },
  
  // Cupuaçu no Copo
  {
    id: "cupuacu-puro-300",
    name: "Copo de Cupuaçu puro - 300 ml",
    description: "Copo de cupuaçu aprox. 300 ml",
    price: 19.20,
    image: "/images/acai_puro_300ml.png",
    category: "Cupuaçu no Copo",
    size: "300ml",
  },
  {
    id: "cupuacu-3-complementos-300",
    name: "Cupuaçu + 3 Complementos a sua escolha 300 ml",
    description: "Copo de Cupuaçu + 3 Complementos a sua escolha - 300 ml. Obs.: Não enviamos complementos separados.",
    price: 20.52,
    originalPrice: 22.80,
    image: "/images/acai_puro_granola_leite_banana300ml.png",
    category: "Cupuaçu no Copo",
    size: "300ml",
  },
  {
    id: "cupuacu-puro-500",
    name: "Copo de cupuaçu aprox. 500 ml",
    description: "Copo de cupuaçu aprox. 500 ml",
    price: 23.76,
    originalPrice: 26.40,
    image: "/images/acai_puro_300ml.png",
    category: "Cupuaçu no Copo",
    size: "500ml",
  },
  {
    id: "cupuacu-4-complementos-500",
    name: "Copo de Cupuaçu + 4 Complementos grátis a sua escolha - 500 ml",
    description: "Copo de Cupuaçu + 4 Complementos grátis a sua escolha - 500 ml. Obs.: Não enviamos complementos grátis separados.",
    price: 30.00,
    image: "/images/acai_puro_granola_leite_banana300ml.png",
    category: "Cupuaçu no Copo",
    size: "500ml",
  },
  {
    id: "cupuacu-5-complementos-700",
    name: "Copo de Cupuaçu + 5 Complementos grátis a sua escolha - 700 ml",
    description: "Copo de Cupuaçu + 5 Complementos grátis a sua escolha - 700 ml. Obs.: Não enviamos complementos grátis separados.",
    price: 38.00,
    image: "/images/acai_puro_granola_leite_banana300ml.png",
    category: "Cupuaçu no Copo",
    size: "700ml",
  },
  
  // Casadinho (Açaí + Cupuaçu)
  {
    id: "casadinho-puro-300",
    name: "Copo de Casadinho (açaí e cupuaçu) puro - 300 ml",
    description: "Copo de Casadinho (açaí e cupuaçu) aprox. 300 ml",
    price: 19.20,
    image: "/images/acai_puro_e_cupuacu_300ml.png",
    category: "Casadinho",
    size: "300ml",
  },
  {
    id: "casadinho-3-complementos-300",
    name: "Casadinho (açaí e cupuaçu) + 3 Complementos a sua escolha 300 ml",
    description: "Copo Casadinho (açaí e cupuaçu) + 3 Complementos a sua escolha - 300 ml. Obs.: Não enviamos complementos separados.",
    price: 20.52,
    originalPrice: 22.80,
    image: "/images/acai_e_cupuacu_mesclado_granola_leite_banana300ml.png",
    category: "Casadinho",
    size: "300ml",
  },
  {
    id: "casadinho-puro-500",
    name: "Copo de Casadinho (açaí e cupuaçu) aprox. 500 ml",
    description: "Copo de Casadinho (açaí e cupuaçu) aprox. 500 ml",
    price: 23.76,
    originalPrice: 26.40,
    image: "/images/acai_puro_e_cupuacu_300ml.png",
    category: "Casadinho",
    size: "500ml",
  },
  {
    id: "casadinho-4-complementos-500",
    name: "Copo Casadinho (açaí e cupuaçu) + 4 Complementos a sua escolha - 500 ml",
    description: "Copo Casadinho (açaí e cupuaçu) + 4 Complementos a sua escolha - 500 ml. Obs.: Não enviamos complementos separados.",
    price: 27.00,
    originalPrice: 30.00,
    image: "/images/acai_e_cupuacu_mesclado_granola_leite_banana300ml.png",
    category: "Casadinho",
    size: "500ml",
  },
  
  // Combos
  {
    id: "combo-2-copos-300",
    name: "Combo 2 Copos de Açaí e/ou Cupuaçu 300 ml",
    description: "Combo de 2 Copos de Açaí e/ou Cupuaçu Obs.: Os dois copos serão exatamente iguais.",
    price: 32.64,
    originalPrice: 38.40,
    image: "/images/combo_acai_puro_300ml.png",
    category: "Combos",
    size: "300ml",
  },
  {
    id: "combo-2-copos-3-complementos-300",
    name: "Combo 2 Copos de Açaí e/ou Cupuaçu + 3 Complementos grátis, cada copo - 300 ML",
    description: "Combo 2 Copos de Açaí e/ou Cupuaçu + 3 Complementos a sua escolha cada copo de 300 ml. Obs.: Não enviamos complementos separados.",
    price: 36.72,
    originalPrice: 40.80,
    image: "/images/combo_acai_puro_granola_leite_banana300ml.png",
    category: "Combos",
    size: "300ml",
  },
  {
    id: "combo-2-copos-500",
    name: "Combo 2 Copos de Açaí e/ou Cupuaçu aprox. 500 ml",
    description: "Combo de 2 Copos de Açaí e/ou Cupuaçu Obs.: Os dois copos serão exatamente iguais.",
    price: 41.65,
    originalPrice: 49.00,
    image: "/images/combo_acai_puro_300ml.png",
    category: "Combos",
    size: "500ml",
  },
  {
    id: "combo-2-copos-4-complementos-500",
    name: "Combo 2 Copos de Açaí e/ou Cupuaçu + 4 Complementos a sua escolha copo 500ml",
    description: "Combo 2 Copos de Açaí e/ou Cupuaçu + 4 Complementos a sua escolha cada copo de 500 ml. Obs.: Não enviamos complementos separados.",
    price: 46.75,
    originalPrice: 55.00,
    image: "/images/combo_acai_puro_granola_leite_banana300ml.png",
    category: "Combos",
    size: "500ml",
  },
  
  // Marmitas
  {
    id: "marmita-pura-300",
    name: "Açaí e/ou Cupuaçu na marmita puro com aprox. 300 ml",
    description: "Açaí e/ou Cupuaçu na marmita puro com aprox. 300 ml",
    price: 22.80,
    image: "/images/combo_3_marmitas_300_pura.png",
    category: "Marmitas",
    size: "300ml",
  },
  {
    id: "marmita-3-complementos-300",
    name: "Açaí e/ou Cupuaçu na marmita + 3 Complementos com aprox. 300 ml",
    description: "Açaí e/ou Cupuaçu na marmita + 3 Complementos a sua escolha cada com aprox. 300 ml. Obs.: Não enviamos complementos separados.",
    price: 19.20,
    image: "/images/combo_1_marmitas_300.png",
    category: "Marmitas",
    size: "300ml",
  },
  {
    id: "marmita-pura-500",
    name: "Açaí e/ou Cupuaçu na marmita puro com aprox. 500 ml",
    description: "Açaí e/ou Cupuaçu na marmita puro com aprox. 500 ml",
    price: 30.00,
    image: "/images/combo_3_marmitas_500_pura.png",
    category: "Marmitas",
    size: "500ml",
  },
  {
    id: "marmita-4-complementos-500",
    name: "Açaí e/ou Cupuaçu na marmita + 4 Complementos a sua escolha de 500 ml",
    description: "Açaí e/ou Cupuaçu na marmita + 4 Complementos a sua escolha de 500 ml. Obs.: Não enviamos complementos separados.",
    price: 27.00,
    image: "/images/combo_1_marmitas_500.png",
    category: "Marmitas",
    size: "500ml",
  },
  {
    id: "marmita-pura-700",
    name: "Açaí e/ou Cupuaçu na marmita puro - 700 ml",
    description: "Açaí e/ou Cupuaçu na marmita puro com aprox. 700 ml",
    price: 38.00,
    image: "/images/combo_3_marmitas_700_pura.png",
    category: "Marmitas",
    size: "700ml",
  },
  {
    id: "marmita-5-complementos-700",
    name: "Açaí e/ou Cupuaçu na marmita + 5 complementos grátis - 700 ml",
    description: "Açaí e/ou Cupuaçu na marmita + 5 Complementos a sua escolha de 700 ml. Obs.: Não enviamos complementos grátis separados.",
    price: 35.00,
    image: "/images/combo_1_marmitas_700.png",
    category: "Marmitas",
    size: "700ml",
  },
  
  // Sucos
  {
    id: "suco-acai-500",
    name: "Suco de Açaí 500ml",
    description: "Delicioso suco de açaí batido com água ou leite, podendo acrescentar leite condensado e mais 2 complementos a sua escolha.",
    price: 22.10,
    originalPrice: 26.00,
    image: "/images/acai_puro_garrafinha_500ml.png",
    category: "Sucos",
    size: "500ml",
  },
  
  // Sobremesas
  {
    id: "torta-maca",
    name: "Torta de maçã estilo americana - Fatia",
    description: "Farinha de trigo, ovo, manteiga, mix de maçãs vermelha e verde, canela, açúcar, amido de milho, limão siciliano.",
    price: 18.90,
    image: "/images/torta.jpeg",
    category: "Sobremesas",
  },
];

export const categories = [
  "Todos",
  "Açaí no Copo",
  "Cupuaçu no Copo",
  "Casadinho",
  "Combos",
  "Marmitas",
  "Sucos",
  "Sobremesas",
];


