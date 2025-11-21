import Image from "next/image";

interface PlaceholderFrameProps {
  label?: string;
  className?: string;
}

export function PlaceholderFrame({ label = "Screenshot coming soon", className }: PlaceholderFrameProps) {
  const baseClasses =
    "flex h-40 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400";
  const classes = className ? `${baseClasses} ${className}` : baseClasses;
  return <div className={classes}>{label}</div>;
}

interface ScreenshotGalleryProps {
  images?: string[];
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
        {images.map((src, index) => (
          <div
            key={src}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            {src ? (
              <div className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-950">
                <Image
                  src={src}
                  alt={`${altPrefix} ${index + 1}`}
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
        ))}
      </div>
    </div>
  );
}
