import type { Metadata } from "next";
import {
  CardGrid,
  PageHero,
  SectionFrame,
  SectionTitle,
} from "@/components/page-sections";
import { audienceCards, trilemmaCards } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Vision",
  description: "The product vision behind Xandeum’s storage thesis.",
};

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision"
        title="Make storage-heavy Web3 applications feel possible, not theoretical."
        description="The strongest throughline across Xandeum’s public materials is simple: decentralized applications become far more compelling when storage stops being the limiting factor."
      />
      <SectionFrame className="pt-0">
        <SectionTitle
          eyebrow="Core Ideas"
          title="A practical vision with product consequences."
          description="This is not just about more bytes. It is about what developers can build once storage behaves like part of the platform."
        />
        <div className="mt-8">
          <CardGrid items={trilemmaCards} />
        </div>
      </SectionFrame>
      <SectionFrame>
        <SectionTitle
          eyebrow="Outcomes"
          title="The vision matters because different groups get different leverage from it."
        />
        <div className="mt-8">
          <CardGrid items={audienceCards} />
        </div>
      </SectionFrame>
    </>
  );
}
