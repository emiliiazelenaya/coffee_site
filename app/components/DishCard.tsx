import Link from "next/link";

export default function DishCard({ dish }) {
  return (
    <Link href={`/menu/${dish.id}`}>
      <div className="
        group relative
        rounded-2xl
        bg-slate-950/80
        border border-violet-500/20
        overflow-hidden
        hover:border-violet-400/60
        transition
        cursor-pointer
      ">

        {/* Изображение */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="
              w-full h-full object-cover
              opacity-90
              group-hover:opacity-100
              group-hover:scale-105
              transition
              duration-500
            "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>

        {/* Контент */}
        <div className="p-6 flex flex-col justify-between h-44">
          <div>
            <h3 className="text-xl font-semibold text-white tracking-wide">
              {dish.name}
            </h3>
            <p className="text-zinc-400 text-sm mt-2 line-clamp-3">
              {dish.description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-violet-400 font-bold text-lg">
              {dish.price}
            </span>
            <span className="text-xs uppercase tracking-widest text-zinc-500">
              View
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
}
