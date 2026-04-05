import type { Metadata } from "next";
import {
  AccentCallout,
  CardGrid,
  PageHero,
  SectionFrame,
  SectionTitle,
} from "@/components/page-sections";
import { externalLinks, validatorCards } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Validators",
  description: "Operator-focused guidance for validators and infrastructure contributors in the Xandeum ecosystem.",
};

export default function ValidatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Validators"
        title="Operator participation is a core part of the Xandeum story."
        description="Across docs and public updates, validators and pNode operators show up as first-class ecosystem participants. This page keeps that orientation while staying readable for newcomers."
        actions={[
          {
            href: externalLinks.docs,
            label: "Validator docs",
            external: true,
          },
          {
            href: externalLinks.sales,
            label: "pNode sales",
            external: true,
            variant: "secondary",
          },
        ]}
      />
      <SectionFrame className="pt-0">
        <CardGrid items={validatorCards} />
      </SectionFrame>
      <SectionFrame>
        <SectionTitle
          eyebrow="Operator checklist"
          title="The docs suggest a very hands-on operator mindset."
          description="Storage and validator participation are not passive. The public material emphasizes uptime, healthy disks, correct networking, and active troubleshooting."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            "Verify storage and disk layout before assuming software is the problem.",
            "Keep an eye on connectivity, reachability, and service restarts.",
            "Treat stake visibility, rewards, and node health as ongoing operational work.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[6px] border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-[var(--text-muted)]"
            >
              {item}
            </div>
          ))}
        </div>
      </SectionFrame>
      <AccentCallout
        title="This page can grow with the operator journey."
        body="If you want a stronger migration later, I can turn this into a proper onboarding flow with hardware tiers, step-by-step setup, and FAQ blocks sourced from the docs."
      />
    </>
  );
}
