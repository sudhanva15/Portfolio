"use client";

import Image from "next/image";
import { useState } from "react";
import { siteCopy } from "@/content/siteCopy";
import PlaceholderFrame from "@/components/placeholder-frame";

interface GalleryImage {
  src?: string;
  alt?: string;
  caption?: string;
}

interface ScreenshotGalleryProps {
  images?: GalleryImage[];
  altPrefix?: string;
  maxVisible?: number;
  enableExpand?: boolean;
}

export default function ScreenshotGallery({
  images,
  altPrefix = "Screenshot",
  maxVisible,
  enableExpand = false,
}: ScreenshotGalleryProps) {
  if (!images || images.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Screenshots</h2>
        <PlaceholderFrame />
      </div>
    );
  }

  const [expanded, setExpanded] = useState(false);
  const visibleCount = maxVisible && maxVisible > 0 ? Math.min(maxVisible, images.length) : images.length;
  const visibleImages = images.slice(0, visibleCount);
  const hiddenImages = images.slice(visibleCount);
  const showExpandTile = enableExpand && !expanded && hiddenImages.length > 0;

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Screenshots</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {visibleImages.map((image, index) => (
          <div key={image.src ?? `${altPrefix}-${index}`} className="space-y-3">
            <div className="group overflow-hidden rounded-2xl border shadow-sm backdrop-blur-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-slate-800/70 dark:bg-slate-900/70 border-slate-200/80 bg-white/80 wire-surface">
              {image.src ? (
                <div className="relative aspect-square bg-gray-100 sm:aspect-video dark:bg-gray-950">
                  <Image
                    src={image.src}
                    alt={image.alt ?? `${altPrefix} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                  />
                </div>
              ) : (
                <PlaceholderFrame />
              )}
            </div>
            {image.caption && (
              <p className="text-center text-sm italic text-gray-600 dark:text-gray-400">{image.caption}</p>
            )}
          </div>
        ))}
        {showExpandTile && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-label={`Show ${hiddenImages.length} more screenshots`}
            className="group relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-sm font-semibold uppercase tracking-[0.2em] text-gray-600 shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
          >
            {hiddenImages[0]?.src && (
              <Image
                src={hiddenImages[0].src}
                alt=""
                fill
                className="object-cover blur-sm brightness-75"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                aria-hidden="true"
              />
            )}
            <span className="relative z-10 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-800 shadow-sm dark:bg-gray-950/80 dark:text-gray-100">
              +{hiddenImages.length} more
            </span>
          </button>
        )}
      </div>
      {expanded && hiddenImages.length > 0 && (
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">More screenshots</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {hiddenImages.map((image, index) => (
              <div key={image.src ?? `${altPrefix}-more-${index}`} className="space-y-3">
                <div className="group overflow-hidden rounded-2xl border shadow-sm backdrop-blur-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-slate-800/70 dark:bg-slate-900/70 border-slate-200/80 bg-white/80 wire-surface">
                  {image.src ? (
                    <div className="relative aspect-square bg-gray-100 sm:aspect-video dark:bg-gray-950">
                      <Image
                        src={image.src}
                        alt={image.alt ?? `${altPrefix} ${visibleCount + index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <PlaceholderFrame />
                  )}
                </div>
                {image.caption && (
                  <p className="text-center text-sm italic text-gray-600 dark:text-gray-400">{image.caption}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
