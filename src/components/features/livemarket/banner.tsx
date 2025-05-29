import Image from "next/image";

export function LiveMarketBanner() {
  return (
    <div className="relative w-full aspect-video h-full overflow-hidden rounded">
      <Image
        fill
        className="object-cover"
        src="/images/banners/livemarket.png"
        alt="Live Market Banner"
        sizes="100vw"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/70 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
      <h2 className="absolute left-8 bottom-8 text-white text-5xl font-bold">
        ВСЕ О РЫНКЕ ОБЛИГАЦИЙ КАЗАХСТАНА
      </h2>
    </div>
  );
}
