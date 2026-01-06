"use client";

import Image from "next/image";
import { useState } from "react";
import { PlaceholderFrame } from "@/components/screenshot-gallery";

interface AssetHeroProps {
  image?: { src: string; alt: string; caption?: string };
  placeholderLabel: string;
  aspect?: string; // e.g. "16/9" or "4/3"
  className?: string;
}

export default function AssetHero({ image, placeholderLabel, aspect = "16/9", className = "" }: AssetHeroProps) {
  const [error, setError] = useState(false);
  const hasImage = image && !error;

  return (
    <div className={`space-y-3 ${className}`} style={hasImage ? { aspectRatio: aspect } : undefined}>\n      {hasImage ? (
        <Image
          src={image!.src}
          alt={image!.alt}
          width={1600}
          height={900}
          onError={() => setError(true)}
          className="w-full max-h-[420px] rounded-2xl border border-gray-200 bg-gray-50 object-cover md:max-h-[520px] xl:max-h-[620px] dark:border-gray-800 dark:bg-gray-900"
          priority
        />
      ) : (
        <PlaceholderFrame label={placeholderLabel} className="h-48 rounded-2xl text-sm font-medium shadow-sm" />
      )}
      {hasImage && image!.caption && (
        <p className="text-center text-sm italic text-gray-600 dark:text-gray-400">{image!.caption}</p>
      )}
    </div>
  );
}
