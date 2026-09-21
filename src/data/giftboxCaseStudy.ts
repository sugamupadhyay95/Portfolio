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
    title: "Bulk gifting required more than a retail checkout",
    subheading:
      "RazeHQ had vendor relationships and AI capabilities. The brief was to translate them into a product experience that supported corporate gifting, from discovery to a vendor-ready enquiry.",
    body: [
      "Three challenges shaped the design:",
      "1. Fragmented product discovery",
      "2. Variable pricing",
      "3. A need for credibility",
    ],

      problems: [
      {
        num: "01",
        title: "Fragmented product discovery",
        desc: "Buyers had to coordinate with vendors separately to explore products and assemble multi-brand gifts. Giftbox needed to bring browsing, comparison, and curation into a shared workflow.",
      },
      {
        num: "02",
        title: "Variable pricing",
        desc: "Bulk prices change with order quantity and negotiation. Displaying a fixed price at checkout could create a mismatch between the buyer’s expectations and the vendor’s final quote.",
      },
      {
        num: "03",
        title: "A need for credibility",
        desc: "The platforms reviewed leaned towards either dense dashboards or retail storefronts. Giftbox needed an inviting catalogue with clear purchasing information to support procurement decisions worth lakhs.",
      },
    ],
  },

  coreDecision: {
    sectionTag: "02 — Approach",
    eyebrow: "Approach",
    title: "Approach",
    intro:
      "Competitive analysis and the founder’s industry knowledge shaped the initial design direction. Assumptions about buyer needs still needed validation through direct user research.",
    subheading: "Designing around the buying decision",
    body: [
      "The central UX decision was to make Giftbox quote-first.",
      "The cart would collect the buyer’s requirements before a vendor confirmed pricing. Product selection led to “Request Quotes,” with price ranges setting expectations before negotiation.",
    ],
    prioritiesIntro: "I organised the experience around three priorities:",
    priorities: [
      {
        title: "Context-led discovery",
        desc: "Structure the information architecture around occasion, curated collections, budget, and minimum order quantity.",
      },
      {
        title: "Clear pricing expectations",
        desc: "Show indicative ranges and make the next step explicit through CTA language.",
      },
      {
        title: "A structured vendor brief",
        desc: "Gather selected products, quantities, business details, and gifting preferences through the enquiry flow.",
      },
    ],
    closing: [
      "Maya, the AI gifting assistant, provided a guided discovery route alongside browsing and filtering. My role was to design how buyers accessed and interacted with it within the product.",
    ],
    consistencyHeading: "Building consistency into the UI",
    consistencyBody:
      "I established design tokens and reusable components to support the six-week scope. Shared foundations for colour, typography, spacing, radius, and elevation kept the screens consistent and made specifications explicit for developer handoff.",
  },

  screens: {
    sectionTag: "03 — Solution",
    eyebrow: "Solution",
    title: "Solution",
    items: [
      {
        title: "A cart built for quote requests",
        body: "Price ranges set expectations before vendor negotiation. Inline quantity controls support bulk planning, while “Request Quotes” turns the selected products into a vendor brief.",
        images: [{ src: `${GIFTBOX_ASSETS}/Cart.png`, alt: "Giftbox cart screen" }],
      },
      {
        title: "Filters that support gifting decisions",
        body: "Occasion, curated collections, budget, and minimum order quantity help buyers narrow their choices. Maya, the AI assistant, stays accessible for guided discovery.",
        images: [
          {
            src: `${GIFTBOX_ASSETS}/Combo_Boxes.png`,
            alt: "Giftbox product listing with occasion and curation filters",
          },
        ],
      },
      {
        title: "Clear starting points on the homepage",
        body: "Curated collection tabs and Maya’s suggested prompts help buyers begin exploring. Brand, product, and client figures appear above the fold as trust signals.",
        images: [
          {
            src: `${GIFTBOX_ASSETS}/Giftbox_raze.png`,
            alt: "Giftbox homepage with Maya AI assistant widget open",
          },
        ],
      },
      {
        title: "A focused two-step quote form",
        body: "The form groups business and contact details in the first step, followed by gifting preferences in the second. Packaging, branding, and delivery requirements create a structured brief for vendor matching. WhatsApp is the primary contact method, as requested by the client.",
        images: [
          { src: `${GIFTBOX_ASSETS}/Form_1.png`, alt: "Giftbox quote form — step 1, company identity" },
        ],
      },
      {
        title: "A reusable design system",
        body: "Named tokens define colour, typography, spacing, radius, and elevation. Reusable components with documented states support UI consistency, developer handoff, and future screens.",
        images: [
          {
            src: `${GIFTBOX_ASSETS}/design-system.png`,
            alt: "Giftbox Figma component library and design token panel",
          },
        ],
      },
    ],
  },

  outcomes: {
    title: "Outcomes",
    subheading: "A complete product design foundation in six weeks",
    body: [
      "I delivered the visual direction, five high-fidelity screen designs, prototype, and tokenised component library.",
      "The design connected product discovery, curation, quantity selection, and quote requests into one journey. It also defined where AI assistance could support browsing and how buyer requirements would be collected for vendors.",
      "The outcome at this stage was a design and handoff foundation. Post-launch metrics were not available to assess conversion, task completion, or buyer satisfaction.",
    ],
  },

  reflection: {
    sectionTag: "09 — Reflection",
    title: "Reflection",
    body: [
      "The main limitation was relying on the founder’s understanding of buyers. That gave the project a starting point, but left assumptions about navigation, pricing comprehension, and enquiry requirements untested.",
      "I would bring five buyer interviews into the process before week three, then use task-based usability testing to check whether buyers could find suitable gifts, interpret the price ranges, and complete a quote request without assistance.",
      "The strongest lesson was that the pricing model shaped the interaction design across the product. Once the journey centred on requesting a quote, the cart, CTA language, and form each had a clearer purpose.",
    ],
  },
} as const;
