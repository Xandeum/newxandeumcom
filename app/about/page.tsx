import type { Metadata } from "next";
import {
  AccentCallout,
  CardGrid,
  PageHero,
  SectionFrame,
  SectionTitle,
} from "@/components/page-sections";
import { companyFacts, externalLinks } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description: "About Xandeum Labs and the public-facing mission behind the protocol.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Xandeum Labs is building a storage-forward future for Solana."
        description="The original site mixes corporate, protocol, and ecosystem messaging together. This page separates them a bit more cleanly while staying loyal to the same brand direction."
      />
      <SectionFrame className="pt-0">
        <SectionTitle
          eyebrow="At a glance"
          title="The essentials."
          description="A compact fact block is easier to maintain than long generic paragraphs, especially as the business and protocol continue to evolve."
        />
        <div className="mt-8">
          <CardGrid
            items={companyFacts.map((fact) => ({
              title: fact.label,
              body: fact.value,
            }))}
            columns={4}
          />
        </div>
      </SectionFrame>
      <SectionFrame>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[6px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Mission
            </p>
            <p className="mt-3 text-sm leading-8 text-[var(--text-muted)]">
              Xandeum’s public materials consistently frame the company around a
              single hard problem: enabling storage-heavy decentralized
              applications without giving up the properties that make blockchains
              valuable in the first place.
            </p>
          </article>
          <article className="rounded-[6px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Why this rebuild
            </p>
            <p className="mt-3 text-sm leading-8 text-[var(--text-muted)]">
              Moving out of Wix makes the site faster to iterate, easier to
              version, and much more realistic to maintain alongside protocol and
              ecosystem updates.
            </p>
          </article>
        </div>
      </SectionFrame>
      <AccentCallout
        title="Ready for a deeper content migration."
        body="This Next.js version gives you a strong branded baseline. If you want, the next pass can focus on legal pages, exact copy migration, or adding real team images and media assets."
        actions={[
          {
            href: externalLinks.network,
            label: "Visit network site",
            external: true,
          },
        ]}
      />
    </>
  );
}
