import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { animate } from "motion";
import styles from "./Portfolio.module.css";
import { SiteHeader } from "./SiteHeader";
import { Button } from "./ui/Button";
import { InView, Reveal } from "./ui/Reveal";
import SkillDeck from "./caseStudy/SkillDeck";
import GlowCursor from "./GlowCursor";
import { scrollToSection } from "../utils/scrollToSection";

const WORK_CARDS = [
  {
    tag: "SaaS · Ops Tool · ShareChat",
    title: "Profile Moderation Tool",
    desc: "Redesigned the PMT for ShareChat’s internal team, bringing review time down to 90 seconds per profile and saving ₹4.3 lakh a month.",
    imageSrc: "/case-studies/profile-moderation/section-hero.png",
    imageAlt: "Profile Moderation Tool case study preview",
    href: "/case-studies/profile-moderation-tool",
    metrics: [
      { value: "₹4.3L", label: "saved / month" },
      { value: "−20s", label: "avg. handle time" },
      { value: "50+", label: "employees impacted" },
    ],
  },
  {
    tag: "Case Study 02 · Client Project · B2B · 2025",
    title: "Corporate Gifting Platform",
    desc: "End-to-end product design for Giftbox, a B2B gifting platform with quote-first UX, production ready screens and a design system in six weeks.",
    imageSrc: "/case-studies/giftbox/Giftbox_raze_.png",
    imageAlt: "Giftbox case study preview — B2B corporate gifting platform",
    href: "/case-studies/giftbox",
    metrics: [
      { value: "5", label: "screens designed" },
      { value: "6 wks", label: "end-to-end" },
      { value: "Quote-first", label: "UX model" },
    ],
  },
  {
    tag: "Personal · Design systems · AI",
    title: "AI-first design system",
    desc: "Design infrastructure for B2B and SaaS products, built to work across Figma, code and AI workflows.",
    imageSrc: undefined,
    imageAlt: "AI-first design system case study preview",
    href: "/case-studies/ai-first-design-system",
    metrics: [],
  },
  {
    tag: "Dashboard · Notifications · ShareChat",
    title: "Mastertool Dashboard",
    desc: "Bulk notification scheduler and tagging tools that saved 4,000+ man-hours and ₹9.4L per month in operations costs.",
    imageSrc: undefined,
    imageAlt: "Mastertool Dashboard case study preview",
    href: "#mastertool",
    hidden: true,
    metrics: [
      { value: "₹9.4L", label: "saved / month" },
      { value: "4K+", label: "man-hours saved" },
    ],
  },
  {
    tag: "Web · Consumer · ShareChat",
    title: "Careers & Profile Web Redesign",
    desc: "Revamped three key web surfaces — Careers, Explore, and Profile pages — resulting in a measurable lift in daily active users.",
    imageSrc: undefined,
    imageAlt: "Careers and Profile web redesign preview",
    href: "#careers-profile",
    hidden: true,
    metrics: [{ value: "+0.24%", label: "DAU boost" }],
  },
];

type ExperienceEntry = {
  period: string;
  role: string;
  companies: string[];
  logoSrc: string;
  logoAlt: string;
};

const experience: ExperienceEntry[] = [
  {
    period: "NOV 2024 — PRESENT",
    role: "Freelance UX / Product Designer",
    companies: ["Pillowcase Studio", "RazeHQ", "Fly My Visa", "Snout"],
    logoSrc: "/images/experience/freelance.svg",
    logoAlt: "Freelance",
  },
  {
    period: "MAY 2024 — AUG 2024",
    role: "Contract UX Designer",
    companies: ["Ekai", "IDX Studios"],
    logoSrc: "/images/experience/contract.jpeg",
    logoAlt: "Contract UX",
  },
  {
    period: "DEC 2023 — FEB 2024",
    role: "Freelance UX Designer",
    companies: ["Studio Kitzu"],
    logoSrc: "/images/experience/studio-kitzu.svg",
    logoAlt: "Studio Kitzu",
  },
  {
    period: "NOV 2020 — FEB 2023",
    role: "UX / Visual Designer",
    companies: ["ShareChat"],
    logoSrc: "/images/experience/sharechat.png",
    logoAlt: "ShareChat",
  },
  {
    period: "FEB 2019 — MAY 2020",
    role: "Graphic / Video Designer",
    companies: ["Circle App"],
    logoSrc: "/images/experience/circle-app.png",
    logoAlt: "Circle App",
  },
];

const HERO_METRICS = [
  { value: "₹9.4L", label: "saved/month at ShareChat" },
  { value: "4K+", label: "man-hours saved by design" },
  { value: "1M+", label: "campaign impressions" },
] as const;

function splitMetric(value: string) {
  const match = value.match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: "", number: 0, suffix: value, decimals: 0 };
  }
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return {
    prefix: match[1],
    number: Number(match[2]),
    suffix: match[3],
    decimals,
  };
}

function formatMetric(prefix: string, n: number, suffix: string, decimals: number) {
  const body = decimals > 0 ? n.toFixed(decimals) : String(Math.round(n));
  return `${prefix}${body}${suffix}`;
}

function HeroMetricValue({ value }: { value: string }) {
  const parsed = splitMetric(value);
  const [text, setText] = useState(
    formatMetric(parsed.prefix, 0, parsed.suffix, parsed.decimals),
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || parsed.number === 0) {
      setText(value);
      return;
    }

    const controls = animate(0, parsed.number, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setText(
          formatMetric(parsed.prefix, latest, parsed.suffix, parsed.decimals),
        );
      },
    });

    return () => controls.stop();
  }, [parsed.decimals, parsed.number, parsed.prefix, parsed.suffix, value]);

  return <p className={styles.heroMetricValue}>{text}</p>;
}

function careerYear(period: string) {
  if (/PRESENT/i.test(period)) return "2026";
  const years = period.match(/\d{4}/g);
  return years ? years[0] : period;
}

export function Portfolio() {
  const { hash } = useLocation();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const frame = requestAnimationFrame(() => scrollToSection(id));
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  const heroInner = (
    <div className={`${styles.heroContent} container`}>
      <h1 className={styles.heroName}>
        Sugam
        <br className={styles.nameBreak} /> Upadhyay
      </h1>
      <p className={styles.lede}>
        UX designer simplifying complex products and AI-assisted workflows.
      </p>
      <div className={styles.heroActions}>
        <Button href="#work">View work →</Button>
        <Button variant="ghost" href="#contact">
          Let&apos;s talk
        </Button>
      </div>
    </div>
  );

  return (
    <div className={styles.frame} data-node-id="643:1449">
      <SiteHeader />

      <main id="top">
        <section className={styles.hero} aria-label="Introduction">
          {reduceMotion ? (
            heroInner
          ) : (
            <GlowCursor
              className={styles.heroGlow}
              color="#d0bcff"
              secondaryColor="#67E8F9"
              trailLength={40}
              trailWidth={8}
              trailTaper={0.8}
              followSpeed={0.16}
              glowIntensity={1.9}
              glowSpread={1.2}
              hotspot={0.65}
              brightness={1.25}
              opacity={1}
              pulseSpeed={1.1}
              noiseStrength={0.035}
              idleFade
              idleTimeout={700}
              fadeDuration={900}
              blendMode="screen"
            >
              {heroInner}
            </GlowCursor>
          )}
        </section>

        <section className={`${styles.belief} container`} aria-label="About and career">
          <div className={styles.beliefGrid}>
            <div className={styles.beliefText}>
              <Reveal>
                <p className={styles.beliefLead}>
                 Product thinker, following curiosity into systems, AI, and code.
                  Over the last 5 years, I’ve worked on enterprise tools and startup products, shaping flows, interfaces, and systems with founders and developers. Building AI-first design system and agents to cut repetitive work and spend more time on product problems.
             
                </p>
                <ul className={styles.beliefMetrics} aria-label="Impact metrics">
                  {HERO_METRICS.map((item) => (
                    <li key={item.label}>
                      <HeroMetricValue value={item.value} />
                      <p className={styles.heroMetricLabel}>{item.label}</p>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" href="#about" className={styles.beliefMore}>
                  Read more
                </Button>
              </Reveal>
            </div>
            <aside className={styles.career} aria-label="Career timeline">
              <Reveal className={styles.timelinePhoto}>
                <img
                  className={styles.timelinePhotoImg}
                  src="/images/portrait.jpg"
                  alt="Sugam Upadhyay"
                  width={960}
                  height={960}
                  loading="lazy"
                />
                <span className={styles.badgeCircle} aria-hidden="true">
                  <svg className={styles.badgeBurst} viewBox="0 0 100 100">
                    <defs>
                      <radialGradient
                        id="burst-grad"
                        gradientUnits="userSpaceOnUse"
                        cx="50"
                        cy="50"
                        r="15"
                      >
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#ffd8e4" />
                      </radialGradient>
                    </defs>
                    <g className={styles.badgeSpokes} stroke="url(#burst-grad)">
                      {Array.from({ length: 20 }, (_, i) => {
                        const a = (i / 20) * Math.PI * 2;
                        const x2 = 50 + Math.cos(a) * 15;
                        const y2 = 50 + Math.sin(a) * 15;
                        return (
                          <line
                            key={i}
                            x1={50 + Math.cos(a) * 2}
                            y1={50 + Math.sin(a) * 2}
                            x2={x2}
                            y2={y2}
                          />
                        );
                      })}
                    </g>
                  </svg>
                  <svg className={styles.badgeRing} viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="badge-arc"
                        d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#badge-arc">
                        6+ YEARS UX · PRODUCT DESIGN · SHARECHAT ·
                      </textPath>
                    </text>
                  </svg>
                </span>
              </Reveal>
              {experience.map((entry) => (
                <InView key={entry.period} className={styles.timelineGroup}>
                  <p className={styles.timelineYear}>{careerYear(entry.period)}</p>
                  <div className={styles.timelineItem}>
                    <span className={styles.timelineLogo}>
                      <img
                        src={entry.logoSrc}
                        alt=""
                        width={56}
                        height={56}
                        loading="lazy"
                      />
                    </span>
                    <span>
                      <strong>
                        {entry.companies.length > 1
                          ? entry.logoAlt
                          : entry.companies[0]}
                      </strong>
                      <em>{entry.role}</em>
                    </span>
                  </div>
                </InView>
              ))}
            </aside>
          </div>
        </section>

        <section className={styles.section} id="work">
          <Reveal className={styles.sectionHead}>
            <h2 className="display-title">Case studies</h2>
            <p className="head-sub">
              A few case studies in product design. The problems, the bets, and
              what shipped.
            </p>
          </Reveal>

          <div className={styles.cardGrid}>
            {WORK_CARDS.filter((card) => !card.hidden).map((card) => {
              const body = (
                <>
                  <div
                    className={styles.cardMedia}
                    data-placeholder={card.imageSrc ? undefined : ""}
                  >
                    {card.imageSrc ? (
                      <img src={card.imageSrc} alt="" loading="lazy" />
                    ) : (
                      <span className={styles.cardMediaTag}>{card.tag}</span>
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{card.title}</h3>
                    <p className={styles.cardMeta}>{card.desc}</p>
                  </div>
                </>
              );

              return card.href.startsWith("/") ? (
                <Link key={card.title} className={styles.card} to={card.href}>
                  {body}
                </Link>
              ) : (
                <a key={card.title} className={styles.card} href={card.href}>
                  {body}
                </a>
              );
            })}
          </div>
        </section>

        <section className={styles.section} id="about">
          <Reveal className={styles.sectionHead}>
            <h2 className="display-title">About</h2>
          </Reveal>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutIntro}>
              <div className={styles.aboutCopy}>
                <p>
                Hi, I'm an independent UX designer with 7 years of design experience, including the last 5 in UX. </p>
                <p>
                I've designed consumer experiences at scale for ShareChat, as well as B2B/SaaS tools and operational systems that teams depend on every day. Since going independent, I've worked across corporate gifting, visa services, and brand and studio projects
                </p>
                <p>
                Figma, user research, and interaction design are where I live day to day. I've also been deepening my understanding of AI, LLMs, and how design translates into code. I've put that into practice by building an AI-Assisted workflow, developing a personalised case-study skill and building this portfolio with Claude code.
                </p>
                <blockquote className={styles.aboutQuote}>
                  At the core of my work is a simple belief, The best products feel effortless.
                </blockquote>
              </div>
              <div className={styles.skillSet}>
                <SkillDeck />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <Reveal className={styles.sectionHead}>
            <h2 className={`${styles.ctaTitle} display-title`}>
              Let&apos;s work together
            </h2>
            <p className="head-sub">
              Available for full-time roles, contracts, and freelance projects.
              Based in India, open to remote.
            </p>
          </Reveal>
          <div className={styles.heroActions}>
            <Button href="mailto:sugam95.upadhyay@gmail.com">Get in touch</Button>
            <Button
              variant="ghost"
              href="https://www.linkedin.com/in/sugamupadhyay/"
              external
            >
              Connect on LinkedIn
            </Button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <small>© 2026 Sugam Upadhyay</small>
        <span>Designed &amp; built with intention</span>
      </footer>
    </div>
  );
}
