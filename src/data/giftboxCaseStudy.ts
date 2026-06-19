/**
 * Giftbox case study content — edit this file to update copy, images, and sections.
 * Image paths are relative to /public (served from site root).
 */

export const GIFTBOX_FIGMA_URL =
  "https://www.figma.com/design/JoTfdOUxCB2aj3FJo830Xv/Resume---Portfolio";

export const GIFTBOX_ASSETS = "/case-studies/giftbox";

export const giftboxCaseStudy = {
  breadcrumb: "Giftbox",
  tag: "Case Study 02 · Client Project · B2B · 2025",
  title: "Corporate gifting has a trust problem.",
  description:
    "HR managers spend days coordinating bulk gifts across vendors they've never met, for prices that aren't fixed, on platforms designed for retail. Giftbox was built to fix that.",
  metrics: [
    { key: "My Role", value: "End-to-end Product Designer" },
    { key: "Scope", value: "UI Design + Design System" },
    { key: "Client", value: "RazeHQ" },
    { key: "Timeline", value: "6 Weeks · 2025" },
  ],
  techChips: ["Figma", "B2B", "Design Systems", "UI Design", "Prototyping"],
  heroImage: {
    src: `${GIFTBOX_ASSETS}/Giftbox_raze_.png`,
    alt: "Giftbox homepage — B2B corporate gifting platform by RazeHQ",
  },

  brief: {
    sectionTag: "01 — The Brief",
    title: "Three problems hiding inside one category",
    subheading:
      "RazeHQ had the vendor relationships and the AI logic. What they didn't have was a product experience that could match their ambition. The brief was to design Giftbox from zero, brand, screens, and system.",
    problems: [
      {
        num: "01",
        title: "No single place to curate",
        desc: "Buyers had to coordinate multiple vendors separately. There was no tool to browse, compare, and build a multi-brand gift box in one place.",
      },
      {
        num: "02",
        title: "Pricing was opaque",
        desc: "B2B bulk pricing varies by quantity and negotiation. Showing a fixed price is a lie. Decision-makers needed a quote flow, not a checkout.",
      },
      {
        num: "03",
        title: "The category looks wrong",
        desc: "Gifting platforms either look like SaaS dashboards or cheap ecommerce. Neither builds trust for bulk procurement decisions worth lakhs.",
      },
    ],
    competitorNote:
      "Competitive analysis informed direction — no whitespace map available.",
  },

  coreDecision: {
    sectionTag: "02 — The Core UX Decision",
    eyebrow: "The Core UX Decision",
    title: "Most gifting platforms are checkout-first. Giftbox needed to be quote-first.",
    body: [
      "Here's why that matters: Bulk B2B orders don't have a fixed price. A cart that shows ₹575 is lying to the buyer. A cart that shows ₹575–₹600 and routes to a vendor negotiation is honest — and that leads to earning trust with procurement managers who've been burned before.",
      "This single decision changed the entire conversion flow. The CTA isn't \"Buy Now.\" It's \"Request Quotes.\" The cart isn't a transaction, it's a brief to vendors.",
    ],
    image: {
      src: `${GIFTBOX_ASSETS}/Cart.png`,
      alt: "Giftbox cart screen showing price ranges and Request Quotes CTA",
    },
  },

  screens: {
    sectionTag: "03 — The Screens",
    eyebrow: "The Screens",
    title: "Five screens. Every decision has a reason.",
    items: [
      {
        num: "01",
        title: "Cart",
        subhead: "The cart that doesn't lie about pricing",
        body: "Instead of a fixed unit price, the cart shows a range (₹575–₹600). It sets expectations before negotiation and reduces buyer friction when the final vendor quote arrives.",
        images: [{ src: `${GIFTBOX_ASSETS}/Cart.png`, alt: "Giftbox cart screen" }],
        callouts: [
          {
            id: "A",
            label: "Price range, not a fixed price",
            desc: "₹575–₹600 signals that final pricing is negotiated. Honest upfront = less friction at the proposal stage.",
          },
          {
            id: "B",
            label: "\"Request Quotes\" replaces checkout",
            desc: "The primary CTA isn't transactional. It opens the quote flow, turning the cart into a vendor brief.",
          },
          {
            id: "C",
            label: "Quantity controls per line item",
            desc: "Different products may need different quantities. The stepper handles this without leaving the cart view.",
          },
        ],
      },
      {
        num: "02",
        title: "Product Listing",
        subhead: "Filters built for how buyers think, not how products are organised",
        body: "An HR manager doesn't think \"show me products under ₹1200.\" They think \"I need Diwali gifts for 200 employees.\" Occasion, Curations, and Budget are first-class filters, not afterthoughts below Price and MOQ.",
        images: [{ src: `${GIFTBOX_ASSETS}/Combo_Boxes.png`, alt: "Giftbox product listing with occasion and curation filters" }],
        callouts: [
          {
            id: "A",
            label: "Occasion filter is first",
            desc: "Diwali, Onboarding, Wellness, Holiday — buyers think by occasion before they think by price.",
          },
          {
            id: "B",
            label: "Curations = editorial collections",
            desc: "Pre-built thematic collections reduce decision fatigue for first-time buyers.",
          },
          {
            id: "C",
            label: "MOQ Range, not just price",
            desc: "Minimum order quantity matters for bulk planning. Both price and MOQ sliders surface together.",
          },
          {
            id: "D",
            label: "AI Assistant is always reachable",
            desc: "Maya floats over the listing. For buyers who don't know what they want, it's a shortcut past the filter-and-browse flow entirely.",
          },
        ],
      },
      {
        num: "03",
        title: "Homepage",
        subhead: "The AI assistant is a feature, not a landing page promise",
        body: "Most platforms bury AI features in a feature list. Maya, the AI gifting assistant, appears as a persistent floating widget with quick-suggestion chips — immediately usable, not something you have to discover.",
        images: [
          {
            src: `${GIFTBOX_ASSETS}/Giftbox_raze.png`,
            alt: "Giftbox homepage with Maya AI assistant widget open",
          },
        ],
        callouts: [
          {
            id: "A",
            label: "Maya",
            desc: "The AI assistant floats on every page. It's not a feature in a menu — it's the fastest path to a curated result.",
          },
          {
            id: "B",
            label: "Quick-suggestion chips",
            desc: "\"Help me create a welcome kit\" — these chips do the work of a search query for buyers who don't know what to type.",
          },
          {
            id: "C",
            label: "Curated collection tabs",
            desc: "Editorial tabs (Diwali Hampers, Eco Friendly, Brand Building) give buyers a starting point without blank-canvas anxiety.",
          },
          {
            id: "D",
            label: "Trust signals above the fold",
            desc: "100+ brands, 5K+ products, 20+ clients — shown as plain numbers, not illustrated icons. Numbers are more credible.",
          },
        ],
      },
      {
        num: "04 & 05",
        title: "Quote Form",
        subhead: "A two-step form with a clear purpose for each step",
        body: "Step 1 is about who you are. Step 2 is about what you need. That distinction — identity then intent — reduces cognitive load and makes each step feel completable in under a minute.",
        images: [
          { src: `${GIFTBOX_ASSETS}/Form_1.png`, alt: "Giftbox quote form — step 1, company identity" },
          { src: `${GIFTBOX_ASSETS}/Form_2.png`, alt: "Giftbox quote form — step 2, preferences and intent" },
        ],
        callouts: [
          {
            id: "A",
            label: "Company name comes before personal name",
            desc: "This is a B2B context. Leading with business identity signals that, and sets the right register for the rest of the form.",
          },
          {
            id: "B",
            label: "WhatsApp as primary contact",
            desc: "Client-requested. It's how vendors and buyers actually communicate in India.",
          },
          {
            id: "C",
            label: "Preferences = vendor-matching brief",
            desc: "Sensitivity, packaging, branding, delivery type — these aren't form fields. They're the spec that gets matched to the right vendor on the backend.",
          },
        ],
      },
    ],
  },

  designSystem: {
    sectionTag: "08 — Design System",
    title: "What I built so the next designer doesn't start from scratch",
    body: [
      "Short. Specific. Shows craft.",
      "Every value in the UI traces to a named token. Colour, type scale, spacing, radius, shadow. The developer never had to guess.",
      "Component count: cards, filters, buttons (primary/outline/ghost), form inputs, quantity steppers, star ratings, chips, modals, toasts. All with documented states.",
    ],
    image: {
      src: `${GIFTBOX_ASSETS}/design-system.png`,
      alt: "Giftbox Figma component library and design token panel",
    },
  },

  reflection: {
    sectionTag: "09 — What This Project Proved",
    title: "What this project proved",
    body: [
      "End-to-end design in six weeks, from zero brand direction to a fully tokenised system and five production-ready screens — is possible when the process is right. Build the system before the screens.",
      "The thing I'd do differently: get 5 buyer interviews before week 3. The IA is solid, but it's built on a founder's model of the buyer, not the buyer's own words.",
    ],
  },

  gallery: {
    sectionTag: "Closing — The Work",
    title: "All five screens",
    images: [
      { src: `${GIFTBOX_ASSETS}/Cart.png`, alt: "Cart screen" },
      { src: `${GIFTBOX_ASSETS}/Combo_Boxes.png`, alt: "Product listing screen" },
      { src: `${GIFTBOX_ASSETS}/Giftbox_raze.png`, alt: "Homepage with Maya assistant" },
      { src: `${GIFTBOX_ASSETS}/Form_1.png`, alt: "Quote form step 1" },
      { src: `${GIFTBOX_ASSETS}/Form_2.png`, alt: "Quote form step 2" },
    ],
  },
} as const;
