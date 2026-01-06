import Image from "next/image";

interface PlaceholderFrameProps {
  label?: string;
  className?: string;
}

export function PlaceholderFrame({ label = "Screenshot coming soon", className }: PlaceholderFrameProps) {
  const baseClasses =
    "flex h-40 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-xs text-gray-500 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400";
  const classes = className ? `${baseClasses} ${className}` : baseClasses;
  return <div className={classes}>{label}</div>;
}

interface GalleryImage {
  src?: string;
  alt?: string;
  caption?: string;
}

interface ScreenshotGalleryProps {
  images?: GalleryImage[];
  altPrefix?: string;
}

export default function ScreenshotGallery({ images, altPrefix = "Screenshot" }: ScreenshotGalleryProps) {
  if (!images || images.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Screenshots</h2>
        <PlaceholderFrame />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Screenshots</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
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
      </div>
    </div>
  );
}
