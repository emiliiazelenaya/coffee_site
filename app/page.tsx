import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-32">

      {/* HERO: изображение слева, текст справа */}
      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-12">
        <div className="md:w-1/2 relative h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/coffee.jpg"
            alt="Nova Coffee"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="md:w-1/2 text-zinc-100 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-violet-400">
            Кофе, который зажигает город
          </h1>
          <p className="text-zinc-300 text-lg leading-relaxed">
            "Nova" — кофе как искусство, пространство как вдохновение.
              Атмосфера света и музыки для ваших идей и встреч.
          </p>
          <Link
            href="/menu"
            className="inline-block bg-violet-500 text-black px-8 py-4 rounded-full shadow-lg hover:scale-105 transition transform font-semibold"
          >
            Смотреть меню
          </Link>
        </div>
      </section>

      {/* PREMIUM BLOCK: горизонтальные карточки с иконками */}
      <section className="bg-zinc-900/80 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Отборные зерна", desc: "Только премиум арабика", icon: "☕" },
            { title: "Авторские десерты", desc: "Десерты под кофе", icon: "🍰" },
            { title: "Городская атмосфера", desc: "Лофт и комфорт", icon: "🏙️" },
          ].map((card) => (
            <div
              key={card.title}
              className="p-8 rounded-2xl bg-slate-950/80 border border-violet-500/20 shadow-md hover:shadow-2xl hover:border-violet-400/60 transition"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-violet-400 mb-2">{card.title}</h3>
              <p className="text-zinc-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / АТМОСФЕРА: карточки с изображениями */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          { img: "/interior1.jpg", title: "Лофт-зона", desc: "Пространство для работы и встреч" },
          { img: "/interior2.jpg", title: "Комфортные места", desc: "Зоны для отдыха и общения" },
          { img: "/interior3.jpg", title: "Музыка и свет", desc: "Атмосфера города внутри" },
        ].map((item) => (
          <div key={item.title} className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-violet-400">{item.title}</h3>
              <p className="text-zinc-100 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* WHY NOVA: асимметричная сетка */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-violet-400">Почему Nova?</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Мы соединяем качество кофе, авторские рецепты и атмосферу города, 
            чтобы каждая пауза была особенной.
          </p>
          <Link
            href="/about"
            className="inline-block bg-zinc-100 text-black px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
          >
            Подробнее о нас
          </Link>
        </div>
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img src="/coffee-bar.jpg" alt="Nova Bar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-700/60 via-black/40 to-fuchsia-500/40"></div>
        </div>
      </section>
    </div>
  );
}
