export function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-16"
      style={{ background: 'var(--color-dark)' }}
    >
      {/* radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #3d0a1e 0%, var(--color-dark) 70%)',
        }}
      />

      <p
        className="relative z-10 text-xs tracking-[0.35em] uppercase opacity-0"
        style={{
          fontFamily: 'var(--font-montserrat)',
          color: 'var(--color-gold)',
          animation: 'fadeUp 0.8s ease forwards 0.3s',
        }}
      >
        08 de março · Dia Internacional da Mulher
      </p>

      <h1
        className="relative z-10 text-center leading-[1.05] opacity-0 my-4"
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(3rem, 12vw, 7rem)',
          color: 'var(--color-cream)',
          animation: 'fadeUp 1s ease forwards 0.6s',
        }}
      >
        Feliz{' '}
        <em style={{ color: 'var(--color-rose)' }}>
          Dia das
          <br />
          Mulheres
        </em>
      </h1>

      <p
        className="relative z-10 italic opacity-0"
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(1rem, 3vw, 1.4rem)',
          color: '#d4a0af',
          animation: 'fadeUp 1s ease forwards 1s',
        }}
      >
        Para a mais incrível de todas
      </p>

      <div
        className="relative z-10 mt-8 text-2xl opacity-0"
        style={{
          animation:
            'fadeUp 1s ease forwards 1.4s, pulse-heart 2s ease-in-out infinite 2.4s',
        }}
      >
        🌸
      </div>

      <p
        className="absolute bottom-8 text-[0.65rem] tracking-[0.3em] uppercase z-10"
        style={{
          fontFamily: 'var(--font-montserrat)',
          color: '#ffffff33',
          animation: 'bounce-hint 2s ease-in-out infinite 2.5s',
        }}
      >
        ↓ &nbsp; continue
      </p>
    </section>
  )
}
