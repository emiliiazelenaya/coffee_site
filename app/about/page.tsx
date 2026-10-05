export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

      {/* HERO-заголовок с фоном */}
      <section className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/coffee.jpg"
          alt="Nova Coffee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
          <div className="text-center text-zinc-100 max-w-2xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-violet-400 mb-4">
              NOVA
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl">
              Городская кофейня для тех, кто ценит паузы, аромат кофе и атмосферу лофта.
            </p>
          </div>
        </div>
      </section>

      {/* Атмосфера — сетка фото */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { img: "/interior1.jpg", title: "Лофт-зона" },
          { img: "/interior2.jpg", title: "Комфортные места" },
          { img: "/interior3.jpg", title: "Музыка и свет" },
          { img: "/interior4.jpg", title: "Уютные уголки" },
          { img: "/interior5.jpg", title: "Барная стойка" },
          { img: "/interior6.jpg", title: "Классная кухня" },
        ].map((item, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden shadow-2xl h-64 md:h-72">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <h3 className="text-zinc-100 font-semibold text-lg">{item.title}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* Философия — горизонтальный скролл */}
      <section className="flex justify-center py-12">
        <div className="flex gap-6 min-w-max">
          {[
            { title: "Настоящий кофе", desc: "Ручная работа, премиум арабика, локальные обжарщики" },
            { title: "Люди важнее", desc: "Мы знаем наших гостей и ценим каждую встречу" },
            { title: "Замедление", desc: "Островок спокойствия в шумном городе" },
          
          ].map((card, i) => (
            <div
              key={i}
              className="flex-none w-80 bg-slate-950/80 text-zinc-100 p-6 rounded-2xl shadow-md hover:shadow-2xl border border-violet-500/20 hover:border-violet-400/60 transition"
            >
              <h3 className="text-xl font-semibold text-violet-400 mb-2">{card.title}</h3>
              <p className="text-zinc-300 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Команда — асимметричная сетка */}
      <section className="grid md:grid-cols-4 gap-6">
        {[
          ["Никита", "Шеф-бариста"],
          ["Алина", "Менеджер"],
          ["Олег", "Обжарка"],
          ["София", "Десерты"],
        ].map(([name, role], i) => (
          <div
            key={i}
            className={`relative rounded-2xl overflow-hidden shadow-2xl ${
              i % 2 === 0 ? "h-64 md:h-72" : "h-56 md:h-64"
            }`}
          >
            <img
              src={`/team${i + 1}.jpg`}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-center">
              <p className="text-zinc-100 font-semibold">{name}</p>
              <p className="text-zinc-400 text-sm">{role}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
