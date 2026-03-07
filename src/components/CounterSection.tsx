import { useInView } from "../hooks/useInView";
import { useCounter } from "../hooks/useCounter";

// 📅 Data de início do relacionamento
const START_DATE = new Date("2024-09-21T17:00:00-03:00");

interface CounterItemProps {
  value: number;
  label: string;
  pad?: number;
}

function CounterItem({ value, label, pad = 2 }: CounterItemProps) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg px-7 py-5 min-w-[100px]"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(4px)",
      }}
    >
      <span
        className="leading-none font-bold"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          color: "var(--color-rose)",
        }}
      >
        {String(value).padStart(pad, "0")}
      </span>
      <span
        className="mt-1.5 text-[0.6rem] tracking-[0.2em] uppercase"
        style={{
          fontFamily: "var(--font-montserrat)",
          color: "#d4a0af",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function CounterSection() {
  const { ref, inView } = useInView();
  const elapsed = useCounter(START_DATE);

  const visible = (delay = "0s") => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.8s ease ${delay}, transform 0.8s ease ${delay}`,
  });

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% 50%, #2d0818 0%, var(--color-dark) 80%)",
      }}
    >
      <p
        className="text-[0.65rem] tracking-[0.35em] uppercase mb-3"
        style={{
          fontFamily: "var(--font-montserrat)",
          color: "var(--color-gold)",
          ...visible("0s"),
        }}
      >
        desde o primeiro dia
      </p>

      <h2
        className="text-center leading-[1.3] mb-12"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
          color: "var(--color-cream)",
          ...visible("0.2s"),
        }}
      >
        Juntos há{" "}
        <em style={{ color: "var(--color-rose)" }}>
          {elapsed.totalDays.toLocaleString("pt-BR")}
        </em>{" "}
        dias
      </h2>

      <div
        className="flex flex-wrap gap-4 justify-center max-w-[600px]"
        style={visible("0.4s")}
      >
        <CounterItem value={elapsed.years} label="anos" />
        <CounterItem value={elapsed.months} label="meses" />
        <CounterItem value={elapsed.days} label="dias" />
        <CounterItem value={elapsed.hours} label="horas" />
        <CounterItem value={elapsed.minutes} label="minutos" />
        <CounterItem value={elapsed.seconds} label="segundos" />
      </div>

      <p
        className="italic text-center max-w-md leading-[1.7] mt-12"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(1rem, 3vw, 1.4rem)",
          color: "#d4a0af",
          ...visible("0.6s"),
        }}
      >
        E que sejam infinitos os próximos momentos
        <br />
        que viveremos juntos. ❤️
      </p>
    </section>
  );
}
