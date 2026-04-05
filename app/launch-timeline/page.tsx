import type { Metadata } from "next";
import {
  AccentCallout,
  CardGrid,
  PageHero,
  SectionFrame,
  SectionTitle,
} from "@/components/page-sections";
import { externalLinks, timelineMilestones } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Launch Timeline",
  description: "Selected public milestones in Xandeum’s evolution from launch to storage-layer execution.",
};

export default function LaunchTimelinePage() {
  return (
    <>
      <PageHero
        eyebrow="Launch Timeline"
        title="A staged migration from ambition to implementation."
        description="Public Xandeum messaging has evolved over time. This page organizes that evolution into a timeline that is easier to read than the original Wix presentation."
      />
      <SectionFrame className="pt-0">
        <SectionTitle
          eyebrow="Milestones"
          title="A few markers that shape the current story."
          description="These are selected public moments rather than a complete changelog, but they capture the broad shift in how Xandeum presents itself."
        />
        <div className="mt-8">
          <CardGrid items={timelineMilestones} columns={2} />
        </div>
      </SectionFrame>
      <AccentCallout
        title="Timelines belong where they can breathe."
        body="If you want, the next pass can turn this into a richer visual timeline with release cards, screenshots, and links to official posts."
        actions={[
          {
            href: externalLinks.network,
            label: "Browse network updates",
            external: true,
          },
        ]}
      />
    </>
  );
}
