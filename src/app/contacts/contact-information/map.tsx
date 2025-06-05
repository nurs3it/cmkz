"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { ContactInformation } from "@/types/contact";

interface Props {
  coordinates: ContactInformation["coordinates"];
  pointName: string;
}

export default function ContactInformationMap({
  coordinates,
  pointName,
}: Props) {
  const { latitude, longitude, zoom } = coordinates;
  const mapRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleYmapsLoad = () => {
    if (typeof ymaps === "undefined" || !mapRef.current) return;

    ymaps.ready(() => {
      const map = new ymaps.Map(mapRef.current!, {
        center: [longitude, latitude],
        zoom: zoom ?? 9,
        controls: ["zoomControl", "fullscreenControl"],
        searchControlProvider: "yandex#search",
      });

      const placemark = new ymaps.Placemark(
        [longitude, latitude], // координаты точки
        {
          hintContent: pointName,
          balloonContent: pointName,
        },
        {
          preset: "islands#icon",
          iconColor: "#ff0000",
        },
      );

      map.geoObjects.add(placemark);
    });
  };

  return (
    <div>
      {isClient && (
        <>
          <Script
            src="https://api-maps.yandex.ru/2.1/?lang=en_RU"
            onLoad={handleYmapsLoad}
            strategy="afterInteractive"
          />
          <div
            ref={mapRef}
            className="w-full h-[200px] max-h-[200px] border rounded overflow-hidden"
          />
        </>
      )}
    </div>
  );
}
