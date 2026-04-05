import Link from "next/link";
import type { ReactNode } from "react";

type Action = {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: Action[];
  aside?: ReactNode;
};

type CardItem = {
  title?: string;
  body?: string;
  value?: string;
  label?: string;
  role?: string;
  date?: string;
  href?: string;
};

function ActionLink({ action }: { action: Action }) {
  const className =
    action.variant === "secondary"
      ? "inline-flex rounded-[6px] border border-white/12 bg-white/4 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/22 hover:bg-white/8"
      : "inline-flex rounded-[6px] border border-[var(--accent)]/60 bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]";

  if (action.external) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-14 pt-14 sm:px-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:px-10 lg:pb-20 lg:pt-20">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>
        {actions ? (
          <div className="flex flex-wrap gap-3">
            {actions.map((action) => (
              <ActionLink key={action.href + action.label} action={action} />
            ))}
          </div>
        ) : null}
      </div>
      {aside ? (
        <div className="rounded-[6px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_0_80px_rgba(10,20,40,0.55)]">
          {aside}
        </div>
      ) : null}
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base leading-8 text-[var(--text-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function CardGrid({
  items,
  columns = 3,
}: {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}) {
  const columnClass =
    columns === 2
      ? "lg:grid-cols-2"
      : columns === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3";

  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${columnClass}`}>
      {items.map((item) => (
        <article
          key={item.title ?? item.value ?? item.label ?? item.date ?? item.body}
          className="rounded-[6px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
        >
          {item.date ? (
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              {item.date}
            </p>
          ) : null}
          {item.value ? (
            <p className="text-3xl font-semibold tracking-[-0.03em] text-white">
              {item.value}
            </p>
          ) : null}
          {item.role ? (
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[var(--text-muted)]">
              {item.role}
            </p>
          ) : null}
          {item.title ? (
            <h3 className="mt-3 text-xl font-semibold text-white">
              {item.title}
            </h3>
          ) : null}
          {item.body ? (
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              {item.body}
            </p>
          ) : item.label ? (
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              {item.label}
            </p>
          ) : null}
          {item.label && item.href ? (
            <Link
              href={item.href}
              className="mt-4 inline-flex text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
            >
              {item.label}
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function SectionFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20 ${className}`.trim()}
    >
      {children}
    </section>
  );
}

export function AccentCallout({
  title,
  body,
  actions,
}: {
  title: string;
  body: string;
  actions?: Action[];
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
      <div className="rounded-[6px] border border-[var(--accent)]/20 bg-[linear-gradient(135deg,rgba(255,122,26,0.16),rgba(255,255,255,0.04))] p-8 shadow-[0_0_90px_rgba(255,122,26,0.12)]">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-muted)]">
          {body}
        </p>
        {actions ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {actions.map((action) => (
              <ActionLink key={action.href + action.label} action={action} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
