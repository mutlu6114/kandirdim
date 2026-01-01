"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 p-2 dark:bg-black">

      <Image
        className="h-full"
        src="/mutlu.png"
        alt="Mutlu gorseli"
        width={1206}
        height={3245}
        priority
        unoptimized
      />

      <button
        onClick={handleClick}
        className="
          fixed
          bottom-6
          font-extrabold
          text-2xl
          left-1/2
          z-100
          -translate-x-1/2
          rounded-full
          bg-red-500
          px-3
          border
          border-red-700
          py-3
          text-white
          backdrop-blur
          transition
          hover:bg-black
        "
      >
       TIKLA BANA
      </button>

      <audio ref={audioRef} src="/KANDIRDIM.mp3" preload="auto" />
    </div>
  );
}
