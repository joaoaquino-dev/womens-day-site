import { useState, useEffect } from "react";

export interface TimeElapsed {
  totalDays: number;
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCounter(since: Date): TimeElapsed {
  const calculate = (): TimeElapsed => {
    const now = new Date();
    const diff = now.getTime() - since.getTime();

    const totalDays = Math.floor(diff / 86_400_000);

    // desconta anos completos
    const years =
      now.getFullYear() -
      since.getFullYear() -
      (now.getMonth() < since.getMonth() ||
      (now.getMonth() === since.getMonth() && now.getDate() < since.getDate())
        ? 1
        : 0);

    // desconta meses completos após os anos
    let months =
      now.getMonth() -
      since.getMonth() -
      (now.getDate() < since.getDate() ? 1 : 0);
    if (months < 0) months += 12;

    // desconta dias completos após os meses
    const anchorDay = since.getDate();
    let days = now.getDate() - anchorDay;
    if (days < 0) {
      const daysInLastMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0,
      ).getDate();
      days += daysInLastMonth;
    }

    // horas, minutos, segundos do restante
    const remainMs = diff % 86_400_000;
    const hours = Math.floor(remainMs / 3_600_000);
    const minutes = Math.floor((remainMs % 3_600_000) / 60_000);
    const seconds = Math.floor((remainMs % 60_000) / 1_000);

    return { totalDays, years, months, days, hours, minutes, seconds };
  };

  const [elapsed, setElapsed] = useState<TimeElapsed>(calculate);

  useEffect(() => {
    const id = setInterval(() => setElapsed(calculate()), 1000);
    return () => clearInterval(id);
  }, []);

  return elapsed;
}
