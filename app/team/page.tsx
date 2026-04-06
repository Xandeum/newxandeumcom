import type { Metadata } from "next";
import Image from "next/image";
import {
  PageHero,
  SectionFrame,
  SectionTitle,
} from "@/components/page-sections";
import { teamMembers } from "@/lib/team-content";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the people building and supporting Xandeum Labs.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The people behind Xandeum's storage layer."
        description="This roster is rebuilt from the original public team page and refreshed with the new image set, so the migration now has real faces, bios, and working outbound links."
      />
      <SectionFrame className="pt-0">
        <SectionTitle
          eyebrow="Roster"
          title="Public team information, rebuilt for the new site."
          description="Where the original Wix source exposed clear social profiles, those links are carried over here. Ambiguous links were left out rather than pointing to the wrong person."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-[6px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-[0_24px_60px_rgba(0,0,0,0.26)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,163,77,0.18),transparent_58%),linear-gradient(180deg,#16255f,#0d1437)]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                    Team
                  </p>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                    {member.name}
                  </h2>
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    {member.role}
                  </p>
                </div>
                <p className="text-sm leading-7 text-[var(--text-muted)]">
                  {member.bio}
                </p>
                {member.socials.length ? (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {member.socials.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                        className="inline-flex rounded-[6px] border border-white/12 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[var(--accent)]/60 hover:bg-[var(--accent)]/12 hover:text-[var(--accent)]"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </SectionFrame>
    </>
  );
}
