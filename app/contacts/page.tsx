import { FaMapMarkerAlt, FaClock, FaPhone, FaWifi, FaBolt, FaMugHot } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

      {/* HERO с фоном */}
      <section className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/coffee-bar.jpg"
          alt="Nova Coffee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
          <div className="text-center text-zinc-100 max-w-2xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-violet-400 mb-4">
              Найди Nova
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl">
              Мы спрятались от суеты города, но остались в самом его сердце. 
              Заходи на кофе, разговор или паузу для себя.
            </p>
          </div>
        </div>
      </section>

      {/* Контакты — асимметричная сетка */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <FaMapMarkerAlt />, title: "Адрес", text: "Москва, ул. Юннатов, дом 11" },
          { icon: <FaClock />, title: "Часы работы", text: "Ежедневно с 8:00 до 22:00" },
          { icon: <FaPhone />, title: "Телефон", text: "+7 (999) 123-45-67" },
        ].map((item, i) => (
          <div
            key={i}
            className={`relative rounded-2xl overflow-hidden shadow-2xl p-8 bg-zinc-900 border border-white/10 hover:border-orange-500/40 transition ${
              i === 1 ? "md:translate-y-8" : ""
            }`}
          >
            <div className="text-orange-500 text-3xl mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl text-white font-semibold mb-2 text-center">{item.title}</h3>
            <p className="text-zinc-400 text-center">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Карта с градиентом */}
      <section className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.8158312036085!2d37.460251757438904!3d55.8969187305365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b539d5d7f5d261%3A0xa389550a9b4915e8!2zTG91bmdlIGNhZmUgRW1iZXIgfCDQutCw0LvRjNGP0L3QvdCw0Y8g0LIg0KXQuNC80LrQsNGF!5e0!3m2!1sru!2snl!4v1770952822946!5m2!1sru!2snl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70"></div>
      </section>

      {/* Что внутри Nova — горизонтальный скролл */}
      <section className="overflow-x-auto py-12">
        <div className="flex justify-center gap-6 min-w-max scroll-container">
          {[
            { icon: <FaWifi />, title: "Бесплатный Wi-Fi", text: "Работай, залипай или созванивайся без тормозов" },
            { icon: <FaBolt />, title: "Розетки у каждого стола", text: "Твой ноутбук не умрёт раньше идей" },
            { icon: <FaMugHot />, title: "Ручной кофе", text: "Эспрессо, фильтр и альтернативы от бариста" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex-none w-80 bg-slate-950/80 text-zinc-100 p-6 rounded-2xl shadow-md hover:shadow-2xl border border-violet-500/20 hover:border-violet-400/60 transition"
            >
              <div className="text-3xl text-violet-400 mb-4 flex justify-center">{item.icon}</div>
              <p className="font-semibold text-lg mb-2 text-center">{item.title}</p>
              <p className="text-zinc-400 text-sm text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
