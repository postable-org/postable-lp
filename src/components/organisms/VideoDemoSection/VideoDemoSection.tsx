"use client";

import { useState } from "react";
import { Badge } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";

const YOUTUBE_ID = "dQw4w9WgXcQ";

export const VideoDemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <Badge variant="default">Demonstração</Badge>
          <Typography variant="h2" className="max-w-2xl text-[#0A0A0A]">
            Veja como funciona na prática.
          </Typography>
        </div>

        <div className="max-w-4xl mx-auto">
          {isPlaying ? (
            <div className="aspect-video rounded-xl border border-[#E0E0E0] shadow-sm overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&hl=pt-BR&cc_lang_pref=pt-BR&cc_load_policy=1`}
                title="Postable — demonstração do produto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <button
              type="button"
              aria-label="Reproduzir vídeo de demonstração do Postable"
              onClick={() => setIsPlaying(true)}
              className="group w-full aspect-video rounded-xl border border-[#E0E0E0] shadow-sm bg-[#F5F5F5] flex flex-col items-center justify-center gap-4 transition-colors duration-200 ease-out hover:bg-[#EBEBEB] focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0A0A0A] transition-transform duration-200 ease-out group-hover:scale-110">
                <Icon name="play" size={28} className="text-white translate-x-0.5" />
              </div>
              <Typography variant="caption" className="text-[#6B6B6B]">
                Clique para assistir a demonstração
              </Typography>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
