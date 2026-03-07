import { useInView } from "../hooks/useInView";

export function MessageSection() {
  const { ref, inView } = useInView();

  const transition = (delay = "0s") => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
  });

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #fdf0f4 0%, #f9e4eb 50%, #f5dce5 100%)",
      }}
    >
      {}
      <p
        className="absolute top-10 left-1/2 -translate-x-1/2 text-5xl tracking-widest"
        style={{ color: "var(--color-rose)", opacity: 0.12 }}
      >
        ✦ ✦ ✦
      </p>

      <p
        className="text-xs tracking-[0.3em] uppercase mb-5"
        style={{
          fontFamily: "var(--font-montserrat)",
          color: "var(--color-rose)",
          ...transition("0s"),
        }}
      >
        uma mensagem para você
      </p>

      <h2
        className="text-center leading-[1.4] max-w-2xl"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          color: "var(--color-burgundy)",
          ...transition("0.2s"),
        }}
      >
        Entre todas as mulheres incríveis do mundo,{" "}
        <em style={{ color: "var(--color-rose)" }}>a minha favorita é você.</em>
      </h2>

      {}
      <div
        className="my-7 h-px w-16"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-rose), transparent)",
          ...transition("0.3s"),
        }}
      />

      <p
        className="text-center max-w-lg leading-[1.8]"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
          color: "#7a4555",
          ...transition("0.5s"),
        }}
      >
        Você é minha parceira, meu lar, minha pessoa favorita.
        <br />
        Cada momento ao seu lado é um presente que nunca vou parar de agradecer.
        <br />
        Obrigado por ser exatamente quem você é —{" "}
        <em style={{ color: "var(--color-rose)" }}>Ana Clara</em>.
      </p>
    </section>
  );
}
