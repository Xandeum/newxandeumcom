import type { Metadata } from "next";
import {
  AccentCallout,
  CardGrid,
  PageHero,
  SectionFrame,
} from "@/components/page-sections";
import { externalLinks, learnLinks } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Learn",
  description: "Explore the major protocol, product, and ecosystem topics behind Xandeum.",
};

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="A clearer landing page for the ideas behind Xandeum."
        description="The original site grouped these topics into a Learn menu. This rebuild gives each one a dedicated route so the content can evolve without fighting a page builder."
      />
      <SectionFrame className="pt-0">
        <CardGrid
          items={learnLinks.map((item) => ({
            title: item.label,
            body: item.description,
            label: "Open page",
            href: item.href,
          }))}
        />
      </SectionFrame>
      <AccentCallout
        title="Need the deeper technical layer?"
        body="The marketing site should stay approachable, while docs can carry operator setup, implementation details, and developer references."
        actions={[
          {
            href: externalLinks.docs,
            label: "Open docs",
            external: true,
          },
        ]}
      />
    </>
  );
}
