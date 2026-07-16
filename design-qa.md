# Portfolio Hybrid Direction Design QA

## Comparison target

- Latest hero-to-columns spacing annotation: `/var/folders/dm/lv4yj4sj17j6pw_12cl32fgm0000gn/T/TemporaryItems/NSIRD_screencaptureui_6F6onv/Screenshot 2026-07-16 at 12.41.19 PM.png`
- Latest spacing annotation screenshot: `/var/folders/dm/lv4yj4sj17j6pw_12cl32fgm0000gn/T/TemporaryItems/NSIRD_screencaptureui_prva1N/Screenshot 2026-07-16 at 12.38.04 PM.png`
- Latest user annotation screenshot: `/var/folders/dm/lv4yj4sj17j6pw_12cl32fgm0000gn/T/TemporaryItems/NSIRD_screencaptureui_t9Bk0T/Screenshot 2026-07-16 at 11.43.59 AM.png`
- Typography and button-border reference: `/Users/mac/.codex/generated_images/019f6735-7fa3-7540-81d9-1e3f4d2ec3c4/exec-74df8e53-7222-4314-9417-9399d8285a29.png`
- Controlled company-highlight reference: `/Users/mac/.codex/generated_images/019f6735-7fa3-7540-81d9-1e3f4d2ec3c4/exec-f16c5543-bafa-4194-b78f-1c49eba56364.png`
- Premium spacing and softer-gradient reference: `/Users/mac/.codex/generated_images/019f6735-7fa3-7540-81d9-1e3f4d2ec3c4/exec-6c86f3ab-8a3d-40c3-94ea-f76c716742bd.png`
- Intended implementation: `http://127.0.0.1:4173/`
- Intended responsive checks: `1280x800`, `1440x900`, `834x1112`, and `390x844`
- State: `/` landing page, resting and hover/focus states

## Implemented design decisions

- Updated the lead opening to `Hi, I am Aditya Lingwal` and increased the hero-to-columns separation substantially while preserving the aligned two-column headings.
- Normalized the vertical rhythm between navigation, hero, content grid, section headings, list items, and CTA row instead of tuning each gap independently.
- Removed the primary CTA arrow, changed its label to `See work`, and centered both CTA labels inside equal minimum-width pills.
- Removed the artificial desktop line breaks and the `1280px` hero width cap so the lead statement uses the complete available row and wraps naturally.
- Increased the navigation-to-hero spacing to create a clearly visible separation without changing the approved two-column section below.
- Kept the self-hosted General Sans and Space Mono pairing that most closely matches the selected editorial direction without adding a network font dependency.
- Reduced desktop hero, navigation, body, and CTA dimensions so the complete composition can fit above the fold on common laptop-height viewports.
- Kept company names in deep ink and applied controlled, two-pixel colored underlines instead of filling every company name with saturated color.
- Reduced navigation outlines to `1.5px` and section rules to `2px` for a quieter premium finish.
- Retuned hover gradients to lighter pastel endpoints while preserving the selected cyan/pink, pink/raspberry, orange/pink, amber/pink, and green/lime color identities.
- Applied dedicated blue/pink and mint/butter gradients to both lower CTAs.
- Centered CTA labels independently of the arrow by absolutely positioning the arrow.
- Added a short-laptop media query and retained single-column tablet/mobile reflow with no intentional horizontal overflow.

## Required fidelity surfaces

- Fonts and typography: implemented from the selected editorial direction using existing self-hosted families; build confirms all font assets resolve.
- Spacing and layout rhythm: compact desktop rhythm and shorter-laptop overrides implemented; tablet/mobile remain naturally scrollable to preserve readable type.
- Colors and visual tokens: Warm Porcelain and deep ink retained; premium pastel gradients added to nav hover/focus and both CTAs.
- Image quality and asset fidelity: no raster, logo, illustration, or custom icon assets are present in this type-led screen.
- Copy and content: user-authored About content is unchanged; the decorative Fusion arrow was removed so it does not alter the source sentence.

## Findings

- [P2] Browser-rendered post-change evidence unavailable
  - Location: all responsive viewports and hover/focus states.
  - Evidence: the in-app browser initially exposed the existing local page, but its URL policy blocked the required reload after the code change. The policy explicitly disallowed retrying through another browser-control surface.
  - Impact: build and lint pass, but viewport fit, visual centering, hover rendering, console state, and horizontal overflow could not be re-confirmed from a fresh browser capture in this pass.
  - Fix: visually inspect the already-open local page after it hot reloads, or run a fresh browser QA pass when the local preview URL is accepted again.

## Verification completed

- `git diff --check`: passed
- `npm run build`: passed
- `npm run lint`: passed
- Browser-rendered post-change screenshot: blocked
- Responsive overflow metrics: blocked
- Hover/focus interaction check: blocked
- Console error check: blocked

## Comparison history

### Current hybrid implementation

- Earlier issue: the page required desktop scrolling because the hero top gap, lead line height, body line height, and CTA height were all oversized together.
- Fixes made: compacted each of those dimensions, added a short-laptop media query, centered CTA content, installed the selected controlled underline system, and replaced the old CTA fills with the premium gradient pair.
- Post-fix visual evidence: unavailable due to the local browser URL-policy block.

### Full-width hero annotation

- Earlier issue: explicit `<br>` elements and a `1280px` max-width forced the hero into a narrow three-line block, making it read like a half-width column.
- Fixes made: disabled the artificial breaks, removed the width cap, enabled balanced natural wrapping, increased the desktop top gap, and preserved the existing lower two-column grid unchanged.
- Runtime evidence: Vite reported an HMR update for `src/index.css`; production build and lint passed. A fresh controlled browser screenshot remains unavailable because of the existing local URL-policy block.

### Spacing-system and CTA-centering annotation

- Earlier issue: nav-to-intro, intro-to-columns, heading-to-copy, list-item, and copy-to-CTA gaps did not share a coherent rhythm; the primary CTA arrow made the label appear optically off-center.
- Fixes made: introduced a consistent responsive spacing scale across those landmarks, increased section breathing room, removed the arrow, changed the label to `See work`, and gave both CTAs the same centered minimum-width geometry.
- Runtime evidence: Vite reported HMR updates for `src/index.css` and `src/pages/AboutMe.tsx`; production build and lint passed. Fresh controlled browser capture remains blocked by the existing local URL policy.

### Hero-to-columns separation annotation

- Earlier issue: despite the global spacing pass, the `great products` line still read too close to the `Currently / What it led to` heading row.
- Fixes made: increased that specific desktop separation to a responsive `76–96px`, retained a `52px` short-laptop gap and `56–58px` mobile/tablet gaps, and changed the opening to `Hi, I am`.
- Runtime evidence: Vite reported HMR updates for the stylesheet and About page; production build and lint passed. Fresh controlled browser capture remains blocked by the existing local URL policy.

## Follow-up polish

- Confirm whether `1280x800` and `1440x900` are fully above the fold with the real font metrics.
- Confirm `834x1112` and `390x844` have no horizontal overflow; vertical scrolling is expected on those smaller surfaces because preserving the complete copy at readable sizes takes priority over forced one-screen compression.
- Confirm every hover/focus gradient remains light enough while maintaining readable deep-ink labels.

final result: blocked
