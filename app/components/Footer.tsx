export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-slate-950 text-zinc-400 border-t border-violet-500/20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* Бренд */}
        <div>
          <h3 className="text-white text-xl font-semibold tracking-widest">NOVA</h3>
          <p className="mt-3 text-sm leading-relaxed">
            Городская кофейня для тех, кто ценит вкус, паузы и живые разговоры.
          </p>
        </div>

        {/* Навигация */}
        <div>
          <h4 className="text-white font-medium mb-3">Навигация</h4>
          <ul className="space-y-2 text-sm">
            <li>Главная</li>
            <li>Напитки</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h4 className="text-white font-medium mb-3">Мы на связи</h4>
          <p className="text-sm">hello@nova.coffee</p>
          <p className="text-sm mt-2">Instagram · Telegram</p>
        </div>

      </div>

      <div className="border-t border-white/10 text-center py-6 text-sm">
        © 2026 NOVA Coffee
      </div>
    </footer>
  );
}
