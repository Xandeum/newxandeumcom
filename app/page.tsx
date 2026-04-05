import type { Metadata } from "next";
import {
  AccentCallout,
  CardGrid,
  PageHero,
  SectionFrame,
  SectionTitle,
} from "@/components/page-sections";
import {
  architectureCards,
  audienceCards,
  externalLinks,
  heroStats,
  learnLinks,
  trilemmaCards,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The scaling solution for Solana, rebuilt in Next.js with Xandeum branding.",
};

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="The Scaling Solution"
        title="Where on-chain storage becomes limitless for Solana."
        description="This rebuild keeps the core Xandeum story from the existing public site, but reimagines it with a cleaner Next.js and Tailwind stack that will be much easier to maintain directly in Codex."
        actions={[
          { href: "/learn", label: "Explore the stack" },
          {
            href: externalLinks.docs,
            label: "Read the docs",
            external: true,
            variant: "secondary",
          },
        ]}
        aside={
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
              Solana-native storage
            </p>
            <div className="space-y-4">
              <div className="rounded-[6px] border border-white/10 bg-black/15 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  Core proposition
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Smart contract native storage with random access and serious scale.
                </p>
              </div>
              <div className="rounded-[6px] border border-white/10 bg-black/15 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  Direction
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                  Built for data-intensive dApps, operator participation, and a
                  long-term storage economy around Solana.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <SectionFrame className="pt-0">
        <CardGrid items={heroStats} />
      </SectionFrame>

      <SectionFrame>
        <SectionTitle
          eyebrow="Storage Trilemma"
          title="Xandeum’s public story is built around three promises."
          description="The existing site repeatedly emphasizes that decentralized storage only becomes interesting for real applications when it can scale hard, integrate directly with contracts, and support precise retrieval."
        />
        <div className="mt-8">
          <CardGrid items={trilemmaCards} />
        </div>
      </SectionFrame>

      <SectionFrame>
        <SectionTitle
          eyebrow="How It Fits"
          title="A complementary layer designed to extend Solana, not compete with it."
          description="The rebuild leans into the stronger, more product-oriented framing from recent Xandeum messaging: Solana handles what it does best, and Xandeum expands what developers can store and serve."
        />
        <div className="mt-8">
          <CardGrid items={architectureCards} columns={4} />
        </div>
      </SectionFrame>

      <SectionFrame>
        <SectionTitle
          eyebrow="Who It Serves"
          title="For developers, operators, and ecosystem builders."
          description="The original Wix site speaks to multiple audiences. This version keeps that breadth while organizing the story in a clearer way."
        />
        <div className="mt-8">
          <CardGrid items={audienceCards} />
        </div>
      </SectionFrame>

      <SectionFrame>
        <SectionTitle
          eyebrow="Learn"
          title="Browse the major parts of the Xandeum story."
          description="Instead of burying these topics in a dropdown, this rebuild turns them into clearer landing pages you can expand later."
        />
        <div className="mt-8">
          <CardGrid
            items={learnLinks.map((item) => ({
              title: item.label,
              body: item.description,
              label: "Open page",
              href: item.href,
            }))}
          />
        </div>
      </SectionFrame>

      <AccentCallout
        title="Want the roadmap and live ecosystem updates?"
        body="The public Xandeum marketing stack now spans multiple properties. This site handles the core company and protocol story, while the network and pNode sales properties carry more time-sensitive updates."
        actions={[
          {
            href: externalLinks.network,
            label: "Visit Xandeum Network",
            external: true,
          },
          {
            href: externalLinks.sales,
            label: "View pNode sales",
            external: true,
            variant: "secondary",
          },
        ]}
      />
    </>
  );
}
