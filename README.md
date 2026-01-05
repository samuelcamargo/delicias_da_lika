# 🍨 Açai e Delícias da Lika - Site Institucional

Site moderno e responsivo para a açaieteria **Açai e Delícias da Lika**, localizada em Barueri - SP.

## 🚀 Tecnologias

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **QR Code:** qrcode.react
- **Deploy:** Vercel (pronto para deploy)

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Estrutura do Projeto

```
delicias_da_lika/
├── app/
│   ├── layout.tsx            # Layout principal com SEO otimizado
│   ├── page.tsx              # Home page
│   ├── quem-somos/
│   │   └── page.tsx          # Página Quem Somos
│   ├── cardapio/
│   │   ├── layout.tsx         # Layout com metadata
│   │   └── page.tsx          # Página Cardápio
│   ├── globals.css           # Estilos globais
│   └── sitemap.ts            # Sitemap XML para SEO
├── components/
│   ├── Navbar.tsx            # Navegação responsiva
│   ├── Footer.tsx            # Rodapé com contatos
│   ├── WhatsAppButton.tsx    # Botão flutuante WhatsApp
│   ├── QRCode.tsx            # Componente QR Code WhatsApp
│   ├── MenuCard.tsx          # Card de item do cardápio
│   ├── Button.tsx            # Componente de botão reutilizável
│   ├── SectionTitle.tsx      # Título de seção
│   └── sections/
│       ├── Hero.tsx          # Seção hero
│       ├── About.tsx         # Seção sobre
│       └── Highlights.tsx   # Destaques do cardápio
├── data/
│   └── menu.ts               # Dados estruturados do cardápio
└── public/
    ├── images/               # Imagens do cardápio
    └── robots.txt            # Robots.txt para SEO
```

## 🎨 Identidade Visual

- **Cores Primárias:**
  - Roxo Escuro: `#6B21A8` (açaí)
  - Roxo Claro: `#A855F7`
  - Rosa: `#EC4899`
  - Fundo Creme: `#FEFBF3`

- **Fontes:**
  - Títulos: Fredoka (Google Fonts)
  - Textos: Nunito (Google Fonts)

## 📱 Funcionalidades

- ✅ Design responsivo (Mobile-First)
- ✅ Navbar fixa e responsiva
- ✅ Hero section com CTA animado
- ✅ Seção sobre a empresa
- ✅ Cardápio completo com filtros por categoria
- ✅ Botão flutuante do WhatsApp com tooltip
- ✅ QR Code do WhatsApp
- ✅ Footer com informações de contato
- ✅ Links para iFood e 99 Food
- ✅ Integração com Instagram (incentivos para seguir)
- ✅ Animações suaves com Framer Motion
- ✅ SEO extremamente otimizado
- ✅ Structured Data (JSON-LD) para LocalBusiness
- ✅ Sitemap XML

## 🔧 Configuração

### Links de Contato

Os links de contato estão configurados em:
- **WhatsApp:** `components/WhatsAppButton.tsx` e `components/Footer.tsx` (+55 11 91486-1102)
- **Instagram:** `components/Footer.tsx`, `components/sections/About.tsx`, `components/sections/Hero.tsx` e `app/quem-somos/page.tsx` ([@acaiedeliciasdalika](https://www.instagram.com/acaiedeliciasdalika/))
- **iFood:** `components/Footer.tsx` e seções (link do iFood)
- **99 Food:** `components/Footer.tsx` e seções (link do 99 Food)

## 🚢 Deploy na Vercel

1. Faça push do código para um repositório Git (GitHub, GitLab, etc)
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em "Add New Project"
4. Conecte o repositório
5. A Vercel detectará automaticamente o Next.js e fará o deploy

Ou use a CLI da Vercel:
```bash
npm i -g vercel
vercel
```

## 📸 Imagens

As imagens do cardápio estão em `public/images/` e foram organizadas por categoria. As imagens originais estão na pasta `demo_img/` (não commitada no Git).

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linter
npm run lint
```

## 📞 Contato

- **WhatsApp:** +55 11 91486-1102
- **Instagram:** [@acaiedeliciasdalika](https://www.instagram.com/acaiedeliciasdalika/)
- **iFood:** [Peça no iFood](https://www.ifood.com.br/delivery/barueri-sp/acai-e-delicias-da-lika-vila-nova/c83c1a0a-806d-4fd6-a8f4-2f76d3e2ff62)
- **99 Food:** [Peça no 99 Food](https://oia.99app.com/dlp9/RXGzlK?share_media=WHATSAPP)
- **Endereço:** Rua Luiz Gianezella, 78 - Vila Nova, Barueri - SP, CEP: 06420-090
- **CNPJ:** 63.873.572/0001-03
- **Horários:** Seg-Dom 10:30-23:40 (Quinta até 20:00)

## 📝 Licença

Este projeto foi desenvolvido para a Açai e Delícias da Lika.

## 🎯 SEO

O site está extremamente otimizado para busca orgânica com:
- Metadata completo em todas as páginas
- Structured Data (JSON-LD) para LocalBusiness
- Sitemap XML dinâmico
- Robots.txt otimizado
- Open Graph tags
- Twitter Cards
- URLs semânticas
- Alt text em todas as imagens
