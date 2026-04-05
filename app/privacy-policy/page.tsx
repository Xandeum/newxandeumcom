import type { Metadata } from "next";
import {
  AccentCallout,
  PageHero,
  SectionFrame,
} from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy route preserved during the Xandeum site migration.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This route has been preserved so existing xandeum.com links continue to resolve during the migration out of Wix."
      />
      <SectionFrame className="pt-0">
        <div className="rounded-[6px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm leading-8 text-[var(--text-muted)]">
            The exact Privacy Policy text from the current live site still needs
            to be migrated into this Next.js version. I am keeping the route
            live now to prevent broken links, but the real policy text should be
            inserted before production cutover.
          </p>
        </div>
      </SectionFrame>
      <AccentCallout
        title="Production note"
        body="This path now resolves, but the official privacy copy still needs a direct migration from the current site."
      />
    </>
  );
}
