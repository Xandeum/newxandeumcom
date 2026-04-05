import type { Metadata } from "next";
import {
  CardGrid,
  PageHero,
  SectionFrame,
  SectionTitle,
} from "@/components/page-sections";
import { leadershipCards, teamPillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Team",
  description: "Leadership and operating principles behind Xandeum Labs.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="A lean public-facing team page with room to grow."
        description="Because the Wix site makes team content awkward to extract cleanly, this migration starts with the leadership roles that are clearly public and then describes the broader operating model without inventing detail."
      />
      <SectionFrame className="pt-0">
        <SectionTitle
          eyebrow="Leadership"
          title="Named public leadership."
        />
        <div className="mt-8">
          <CardGrid items={leadershipCards} columns={2} />
        </div>
      </SectionFrame>
      <SectionFrame>
        <SectionTitle
          eyebrow="Operating model"
          title="The broader team story is best told through capabilities."
          description="This keeps the page useful today and makes it easy to swap in exact bios later if you want a more literal migration."
        />
        <div className="mt-8">
          <CardGrid items={teamPillars} />
        </div>
      </SectionFrame>
    </>
  );
}
