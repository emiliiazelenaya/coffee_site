import { dishes } from "../data/dishes";
import DishCard from "../components/DishCard";

export default function Menu() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-zinc-100 space-y-12">

      {/* Заголовок */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-violet-400">
          Меню Nova
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
          Кофе, десерты и авторские напитки, созданные для пауз и городского настроения.
        </p>
      </div>

      {/* Сетка напитков */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>

    </div>
  );
}
