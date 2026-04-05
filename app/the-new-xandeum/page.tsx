import type { Metadata } from "next";
import {
  AccentCallout,
  PageHero,
  SectionFrame,
} from "@/components/page-sections";

export const metadata: Metadata = {
  title: "The New Xandeum",
  description: "Legacy Xandeum route preserved during the site migration.",
};

export default function TheNewXandeumPage() {
  return (
    <>
      <PageHero
        eyebrow="Legacy Route"
        title="The new Xandeum is now represented through the updated brand and vision pages."
        description="This legacy path has been preserved so older backlinks and bookmarks continue to work after the migration."
      />
      <SectionFrame className="pt-0">
        <div className="rounded-[6px] border border-white/10 bg-white/[0.04] p-6 text-sm leading-8 text-[var(--text-muted)]">
          If this route was used in older marketing materials, it now acts as a
          bridge into the updated site structure. The clearest modern entry
          points are the home page, vision page, and the Xandeum Network site.
        </div>
      </SectionFrame>
      <AccentCallout
        title="Recommended next stop"
        body="Use this route as a compatibility layer, or convert it to a redirect once you are sure no legacy campaigns still rely on its own page."
        actions={[
          { href: "/vision", label: "Open vision page" },
          {
            href: "https://www.xandeum.network/",
            label: "Visit network site",
            external: true,
            variant: "secondary",
          },
        ]}
      />
    </>
  );
}
