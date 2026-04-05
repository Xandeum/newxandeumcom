# Xandeum URL Migration Report

Date: 2026-04-03

## Method

- Inspected the live `https://www.xandeum.com/` homepage and extracted internal links from the rendered HTML.
- Fetched the main linked internal pages directly from the live site and extracted any additional `https://www.xandeum.com/...` links found there.
- Verified current live status codes for the discovered internal routes.
- Compared those live routes with the routes currently implemented in this Next.js rebuild.

## Live Internal Routes Found

These routes currently return `200` on the live Wix site:

- `/`
- `/launch-timeline`
- `/vision`
- `/storage-layer`
- `/xand-tokenomics`
- `/validators`
- `/team`
- `/about`
- `/terms-of-service`
- `/privacy-policy`
- `/the-new-xandeum`
- `/blog-feed.xml`

This route currently returns `404` on the live Wix site:

- `/pnode-waitlist`

## Current Coverage In This Next.js Rebuild

These routes are implemented in the new app:

- `/`
- `/launch-timeline`
- `/vision`
- `/storage-layer`
- `/xand-tokenomics`
- `/validators`
- `/team`
- `/about`
- `/terms-of-service`
- `/privacy-policy`
- `/the-new-xandeum`
- `/pnode-waitlist`

## Coverage Status

### Covered

- `/`
- `/launch-timeline`
- `/vision`
- `/storage-layer`
- `/xand-tokenomics`
- `/validators`
- `/team`
- `/about`
- `/terms-of-service`
- `/privacy-policy`
- `/the-new-xandeum`

### Covered With Placeholder Content

These routes resolve, but still need exact migrated content before production cutover:

- `/terms-of-service`
- `/privacy-policy`

### Extra Compatibility Route

This route exists in the new app even though it currently returns `404` on the live Wix site:

- `/pnode-waitlist`

### Still Missing

This path is live on the current site but is not yet implemented in the Next.js rebuild:

- `/blog-feed.xml`

## External Links Found On The Live Homepage

These are not internal routes and do not need local page implementations, but they should be preserved intentionally:

- `https://docs.xandeum.network`
- `https://xandeum.myspreadshop.com/`
- `https://app-rm.roadmunk.com/rm3/published-depiction/baf80d14c10f0103beefcad150e41fbce7e8b8ea`
- `https://discord.com/invite/mGAxAuwnR9`
- `https://xandeum.us16.list-manage.com/subscribe?...`
- `https://x.com/XandeumNetwork`
- `https://www.youtube.com/@BlockchainBernie`
- `https://www.facebook.com/xandeumlabs`

## Notes

- The site `robots.txt` references `/sitemap.xml`, but that URL currently returns a Wix `404`, so it could not be used as a reliable inventory source.
- The homepage HTML references `/blog-feed.xml`, which is live and should be preserved if feed consumers still rely on it.
- Route coverage is in good shape for the visible public site navigation.
- The main remaining cutover risk is content parity on legal pages rather than missing navigation routes.

## Recommended Next Steps

1. Add a `blog-feed.xml` route or redirect strategy.
2. Replace placeholder legal pages with the exact live Terms and Privacy text.
3. If a zero-risk cutover is required, perform one more crawl from a full site export or Wix admin inventory to catch any hidden legacy pages not linked publicly.
