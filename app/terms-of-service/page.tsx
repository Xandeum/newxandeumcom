import type { Metadata } from "next";
import {
  AccentCallout,
  PageHero,
  SectionFrame,
} from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service route preserved during the Xandeum site migration.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="This route has been preserved so existing xandeum.com links continue to resolve during the migration out of Wix."
      />
      <SectionFrame className="pt-0">
        <div className="rounded-[6px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm leading-8 text-[var(--text-muted)]">
            The exact Terms of Service copy from the current live site has not
            been migrated verbatim into this rebuild yet. Before switching
            production traffic, this page should be replaced with the official
            legal text from the existing Xandeum site so the migrated site keeps
            both URL continuity and legal parity.
          </p>
        </div>
      </SectionFrame>
      <AccentCallout
        title="Production note"
        body="This path now works and will no longer 404, but it still needs the exact legal copy before launch."
      />
    </>
  );
}
