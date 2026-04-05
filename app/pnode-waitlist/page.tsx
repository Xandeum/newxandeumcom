import type { Metadata } from "next";
import {
  AccentCallout,
  PageHero,
  SectionFrame,
} from "@/components/page-sections";

export const metadata: Metadata = {
  title: "pNode Waitlist",
  description: "Legacy pNode waitlist route preserved during the site migration.",
};

export default function PnodeWaitlistPage() {
  return (
    <>
      <PageHero
        eyebrow="Legacy Route"
        title="pNode interest and sales now live on the dedicated Xandeum sales site."
        description="This route is preserved so legacy xandeum.com links keep working, even though the current pNode flow is handled on a separate property."
      />
      <SectionFrame className="pt-0">
        <div className="rounded-[6px] border border-white/10 bg-white/[0.04] p-6 text-sm leading-8 text-[var(--text-muted)]">
          If older traffic still lands here, send people to the current pNode
          sales and information hub. This keeps the historical URL alive while
          acknowledging that the active funnel has moved.
        </div>
      </SectionFrame>
      <AccentCallout
        title="Current destination"
        body="The active pNode sales and information flow is hosted on xandeum.co."
        actions={[
          {
            href: "https://www.xandeum.co/",
            label: "Open pNode sales site",
            external: true,
          },
        ]}
      />
    </>
  );
}
