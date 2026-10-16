"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import type { CamperImage } from "@/types/camper";
import css from "./CamperGallery.module.css";

export default function CamperGallery({ images, name }: { images: CamperImage[]; name: string }) {
  const [thumbs, setThumbs] = useState<SwiperType | null>(null);
  const sorted = [...images].sort((a, b) => a.order - b.order);

  return (
    <div className={css.gallery}>
      <Swiper
        modules={[FreeMode, Thumbs]}
        thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
        spaceBetween={10}
        className={css.main}
      >
         {sorted.map((img, index) => (
    <SwiperSlide key={img.id}>
      <Image
        src={img.original}
        alt={name}
        width={638}
        height={505}
        priority={index === 0}
        className={css.image}
      />
    </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbs}
        slidesPerView={4}
        spaceBetween={32}
        freeMode
        watchSlidesProgress
        className={css.thumbs}
      >
        {sorted.map((img) => (
          <SwiperSlide key={img.id}>
            <Image src={img.thumb} alt="" width={136} height={144} className={css.thumb} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}