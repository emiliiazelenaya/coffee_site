import Link from "next/link";

export default function Header() {
  return (
    <header className="
      sticky top-0 z-50
      bg-slate-950/80
      backdrop-blur-md
      border-b border-violet-500/20
    ">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Логотип */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_16px_rgba(139,92,246,0.9)]" />
          <span className="text-xl font-bold tracking-widest text-white">
            NOVA
          </span>
        </Link>

        {/* Навигация */}
        <nav className="flex gap-8 text-sm text-zinc-300">
          <Link href="/" className="hover:text-white hover:underline underline-offset-4 transition">Главная</Link>
          <Link href="/menu" className="hover:text-white hover:underline underline-offset-4 transition">Напитки</Link>
          <Link href="/about" className="hover:text-white hover:underline underline-offset-4 transition">О нас</Link>
          <Link href="/contacts" className="hover:text-white hover:underline underline-offset-4 transition">Контакты</Link>
        </nav>

      </div>
    </header>
  );
}
