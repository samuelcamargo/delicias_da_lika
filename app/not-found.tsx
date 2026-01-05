import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-display font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
          Página não encontrada
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          A página que você está procurando não existe.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
        >
          <Home size={20} />
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}

