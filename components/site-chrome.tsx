import Image from "next/image";
import Link from "next/link";
import { externalLinks, learnLinks, primaryNav } from "@/lib/site-content";

function BrandMark() {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src="/xandeum-logo.png"
        alt="Xandeum"
        width={2032}
        height={489}
        className="h-auto w-[280px] max-w-full object-contain sm:w-[340px]"
      />
      <p className="pl-1 text-sm text-white/90">Scalable storage for Solana</p>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(7,20,39,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="shrink-0">
            <BrandMark />
          </Link>
          <a
            href={externalLinks.sales}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-[6px] border border-[var(--accent)]/50 bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)] md:inline-flex"
          >
            pNode Sales
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[6px] border border-transparent px-3 py-2 text-sm text-white/78 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={externalLinks.docs}
            target="_blank"
            rel="noreferrer"
            className="rounded-[6px] border border-transparent px-3 py-2 text-sm text-white/78 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
          >
            Docs
          </a>
          <a
            href={externalLinks.network}
            target="_blank"
            rel="noreferrer"
            className="rounded-[6px] border border-transparent px-3 py-2 text-sm text-white/78 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
          >
            Network
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[rgba(4,12,24,0.92)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-10">
        <div className="space-y-4">
          <BrandMark />
          <p className="max-w-xl text-sm leading-7 text-[var(--text-muted)]">
            This site is a Next.js and Tailwind rebuild of the public Xandeum
            marketing presence, designed so future edits can happen directly in
            Codex instead of Wix.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/92">
            Learn
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {learnLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--text-muted)] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/92">
            Destinations
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--text-muted)]">
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <a href={externalLinks.docs} target="_blank" rel="noreferrer">
              Docs
            </a>
            <a href={externalLinks.network} target="_blank" rel="noreferrer">
              Xandeum Network
            </a>
            <a href={externalLinks.sales} target="_blank" rel="noreferrer">
              Xandeum pNode Sales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
