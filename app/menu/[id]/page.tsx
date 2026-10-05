import { dishes } from "../../data/dishes";  
import Link from "next/link";

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = dishes.find((d) => d.id === id);

  if (!dish) return <div className="text-center text-zinc-400 py-20">Блюдо не найдено</div>;

  const recommended = dishes.filter(d => d.id !== id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32 text-zinc-100">

      {/* Hero с фоном и названием */}
      <section className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-500">{dish.name}</h1>
        </div>
      </section>

      {/* Описание и ингредиенты */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-zinc-400 text-lg leading-relaxed">
            {dish.description}
          </p>

          <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Ингредиенты и особенности</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>100% премиум-арабика</li>
              <li>Свежие молоко и натуральные сиропы</li>
              <li>Подача в стильной керамике</li>
              <li>Бархатная текстура и чистый вкус</li>
            </ul>

            {/* Цена и кнопка на карточке */}
            <div className="flex items-center gap-6 mt-6">
              <div className="text-3xl font-bold text-orange-500">{dish.price}</div>
              <button className="px-6 py-3 rounded-full bg-orange-500 text-black font-semibold shadow-lg hover:scale-105 transition transform">
                Добавить в корзину
              </button>
            </div>
          </div>

          <Link
            href="/menu"
            className="inline-block mt-6 text-zinc-400 hover:text-orange-500 transition"
          >
            ← Назад в меню
          </Link>
        </div>

        {/* Дополнительное изображение или декор (если есть) */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </section>

      {/* Рекомендации — горизонтальный скролл */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-orange-500">Похожие напитки</h2>
        <div className="flex gap-6 overflow-x-auto py-4 scroll-container">
          {recommended.map((item) => (
            <Link
              key={item.id}
              href={`/menu/${item.id}`}
              className="flex-none w-64 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <div className="p-4 bg-zinc-900 border-t border-white/10">
                <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                <p className="text-orange-500 mt-1">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
