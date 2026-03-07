import { useInView } from "../hooks/useInView";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";

const photos = [photo1, photo2, photo3, photo4];

export function GallerySection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{ background: "var(--color-dark)" }}
    >
      <p
        className="text-xs tracking-[0.35em] uppercase mb-10"
        style={{
          fontFamily: "var(--font-montserrat)",
          color: "var(--color-gold)",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        nossa história em fotos
      </p>

      <div className="grid grid-cols-2 gap-3 w-full max-w-[560px]">
        {photos.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-sm"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1)" : "scale(0.96)",
              transition: `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`,
            }}
          >
            <img
              src={src}
              alt={`foto ${i + 1}`}
              className="w-full object-cover object-top block"
              style={{
                height: "260px",
                filter: "brightness(0.92) saturate(1.1)",
                transition: "transform 0.6s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLImageElement).style.transform =
                  "scale(1.04)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLImageElement).style.transform =
                  "scale(1)")
              }
            />
            {}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #1a0a1080 0%, transparent 60%)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
