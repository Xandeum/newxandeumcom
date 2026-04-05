import type { Metadata } from "next";
import {
  CardGrid,
  PageHero,
  SectionFrame,
  SectionTitle,
} from "@/components/page-sections";
import { architectureCards } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Storage Layer",
  description: "How the Xandeum storage layer is positioned in the public product story.",
};

export default function StorageLayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Storage Layer"
        title="Storage that behaves like infrastructure, not an afterthought."
        description="This page intentionally simplifies the story into clear building blocks so it remains editable. If you later want a deeper technical explainer, we can expand it from here."
      />
      <SectionFrame className="pt-0">
        <SectionTitle
          eyebrow="Architecture"
          title="Four ideas that define the storage layer."
          description="The official messaging spans docs, blogs, and marketing pages. This version condenses the important pieces into a structure that is easier to maintain."
        />
        <div className="mt-8">
          <CardGrid items={architectureCards} columns={2} />
        </div>
      </SectionFrame>
      <SectionFrame>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[6px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Why it matters
            </p>
            <p className="mt-3 text-sm leading-8 text-[var(--text-muted)]">
              A storage layer only becomes strategically interesting when it
              unlocks applications that feel impossible or clumsy on current
              primitives. That is the bar this site now communicates more
              directly.
            </p>
          </article>
          <article className="rounded-[6px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              What comes next
            </p>
            <p className="mt-3 text-sm leading-8 text-[var(--text-muted)]">
              Search, analytics, richer developer tooling, and stronger example
              applications would all make this page substantially more concrete
              in a future content pass.
            </p>
          </article>
        </div>
      </SectionFrame>
    </>
  );
}
