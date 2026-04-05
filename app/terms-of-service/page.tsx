import type { Metadata } from "next";
import { SectionFrame } from "@/components/page-sections";
import { termsOfServiceHtml } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Xandeum Terms of Service.",
};

export default function TermsOfServicePage() {
  return (
    <SectionFrame>
      <div className="mx-auto max-w-5xl rounded-[6px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-8">
        <div
          className="legal-copy"
          dangerouslySetInnerHTML={{ __html: termsOfServiceHtml }}
        />
      </div>
    </SectionFrame>
  );
}
