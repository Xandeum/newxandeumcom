import type { Metadata } from "next";
import {
  AccentCallout,
  CardGrid,
  PageHero,
  SectionFrame,
  SectionTitle,
} from "@/components/page-sections";
import { externalLinks, tokenomicsCards } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "XAND Tokenomics",
  description: "A high-level overview of how XAND is framed across the Xandeum ecosystem.",
};

export default function TokenomicsPage() {
  return (
    <>
      <PageHero
        eyebrow="XAND Tokenomics"
        title="A coordination layer for governance, rewards, and ecosystem participation."
        description="Rather than guessing at precise allocations or recreating a complicated token chart, this rebuild keeps the tokenomics page high-level and honest about the role XAND plays in the public ecosystem story."
      />
      <SectionFrame className="pt-0">
        <CardGrid items={tokenomicsCards} />
      </SectionFrame>
      <AccentCallout
        title="Exact token detail belongs in living docs."
        body="If you want to migrate precise supply, vesting, and governance mechanics next, we should source those directly from the current official token documentation and model them as a dedicated data section."
        actions={[
          {
            href: externalLinks.docs,
            label: "Open docs",
            external: true,
          },
        ]}
      />
      <SectionFrame>
        <SectionTitle
          eyebrow="Design principle"
          title="Keep the public-facing story understandable."
          description="Marketing pages should help people understand why the token exists. The exact mechanics can live one click deeper where they are easier to keep accurate."
        />
      </SectionFrame>
    </>
  );
}
