import { useTranslation } from '@/hooks/useTranslation';

interface ProofStat {
  value: string;
  description: string;
}

export const TrustStrip = () => {
  const { t } = useTranslation();

  const PROOF_STATS: ProofStat[] = [
    { value: t("trustStrip.stats.0.value"), description: t("trustStrip.stats.0.description") },
    { value: t("trustStrip.stats.1.value"), description: t("trustStrip.stats.1.description") },
    { value: t("trustStrip.stats.2.value"), description: t("trustStrip.stats.2.description") },
    { value: t("trustStrip.stats.3.value"), description: t("trustStrip.stats.3.description") },
  ];

  // Duplicate for seamless marquee
  const allStats = [...PROOF_STATS, ...PROOF_STATS];

  return (
    <section
      className="relative overflow-hidden py-6"
      style={{ background: '#080912', borderTop: '1px solid rgba(56,189,248,0.12)', borderBottom: '1px solid rgba(56,189,248,0.12)' }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-24"
        style={{ background: 'linear-gradient(90deg, #080912, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-24"
        style={{ background: 'linear-gradient(270deg, #080912, transparent)' }}
        aria-hidden="true"
      />

      {/* Marquee track */}
      <div
        className="flex items-center whitespace-nowrap"
        style={{ animation: 'marquee 24s linear infinite' }}
        aria-hidden="true"
      >
        {allStats.map((stat, i) => (
          <div key={i} className="inline-flex items-center gap-10 mx-10">
            <div className="flex flex-col items-center gap-0.5 text-center">
              <span
                className="font-[family-name:var(--font-dm-sans)] font-bold text-2xl"
                style={{ color: '#38BDF8' }}
              >
                {stat.value}
              </span>
              <span
                className="font-[family-name:var(--font-inter)] text-xs tracking-wide"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                {stat.description}
              </span>
            </div>
            <span
              className="text-lg font-light"
              style={{ color: 'rgba(56,189,248,0.2)' }}
              aria-hidden="true"
            >
              ·
            </span>
          </div>
        ))}
      </div>

      {/* Accessible version (screen readers) */}
      <div className="sr-only">
        <div className="flex flex-wrap gap-8 justify-center">
          {PROOF_STATS.map((stat) => (
            <div key={stat.value}>
              <strong>{stat.value}</strong> — {stat.description}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
