export const aiFirstDesignSystem = {
  title: "AI-first\ndesign system",
  deck: "Design infrastructure for B2B and SaaS products, built to work across Figma, code and AI workflows.",
  meta: [
    { num: "Personal design system, built solo", lbl: "Project" },
    { num: "Figma, Cursor, Claude", lbl: "Tools" },
    { num: "Design systems, AI tooling, design-to-code", lbl: "Focus" },
    { num: "B2B platforms, SaaS products, dashboards, internal tools", lbl: "Built for" },
  ],
  stages: [
    {
      name: "Tokens",
      desc: "Color, type, spacing, radius and elevation.",
    },
    {
      name: "Components",
      desc: "Buttons, inputs and more, built on tokens.",
    },
    {
      name: "Documentation",
      desc: "One reusable skill documents every component.",
    },
    {
      name: "Component skills",
      desc: "The rules AI agents follow for each component.",
    },
    {
      name: "UI patterns",
      desc: "Skills that combine components into full layouts.",
    },
  ],
  summary: [
    {
      dt: "Problem",
      dd: "Every new product started with the same setup: tokens, styles, components, documentation and common UI patterns.",
    },
    {
      dt: "Approach",
      dd: "Build one system from tokens up, then package its rules as skills so AI agents work inside it instead of inventing UI.",
    },
    {
      dt: "Outcome",
      dd: "A complete survey form generated from the existing Input and Button skills, with no new components and the same visual language.",
    },
  ],
  setup: {
    intro:
      "Starting a design project meant repeating the same early work before any product thinking could begin.",
    chain: [
      "Design tokens",
      "Styles",
      "Components",
      "Documentation",
      "Common UI patterns",
    ],
    after:
      "I wanted to remove that overhead and create a reusable base for the products I work on most: B2B platforms, SaaS products, dashboards and internal tools.",
    question:
      "Can one system be structured well enough for both people and AI tools to work from the same rules?",
  },
  foundation: {
    tokensIntro:
      "I built the system from the bottom up. Five token groups were defined first, then set up as variables in Figma.",
    tokenGroups: ["Color", "Typography", "Spacing", "Radius", "Elevation"],
    button:
      "Before scaling the library, I tested the structure with a single Button component. Its variants, sizes and interaction states had to work entirely within the token system. If Button held, the foundation held.",
    growing:
      "Once the foundation held, I expanded the library to cover what B2B products actually need.",
    components: [
      "Inputs",
      "Forms",
      "Navigation",
      "Tables",
      "Cards",
      "Filters",
      "Modals",
      "Feedback states",
    ],
    caption:
      "IBM Carbon, SAP Fiori and Ant Design informed component behaviour, states, accessibility and edge cases, so I didn’t have to define every convention from scratch.",
  },
  skills: {
    intro:
      "With the library built and tested, I started structuring it for AI agents. It began with documentation, then grew into skills that build on each other.",
    docBand:
      "Documentation skill. Generates consistent documentation for any component: variants, states, usage, behaviour and accessibility.",
    afterMap: [
      "Each component skill carries the rules for using that component correctly. The Form Layout skill doesn’t redefine those rules. It calls them.",
      "Instead of asking AI to invent an interface, the system gives it an existing design language to work within.",
    ],
  },
  test: {
    intro:
      "The real test was whether the system could go beyond individual components. I used the Form Layout skill to generate a complete survey form with name, phone, email, description and actions.",
    from: "“Generate a form.”",
    to: "“Build this form using the system that already exists.”",
    caption:
      "Illustrative recreation of the generated form, annotated with the skill behind each element.",
    callout:
      "The key validation. The workflow reused the existing Input and Button logic instead of generating new components. The new interface kept the same component rules and visual language.",
  },
  value: {
    intro:
      "The biggest value isn’t faster UI generation. It’s separating repeatable system work from product-specific design work.",
    system: ["Tokens", "Components", "States", "Documentation", "Common UI composition"],
    design: [
      "Information architecture",
      "Interaction flows",
      "User needs",
      "Product trade-offs",
      "Visual direction",
    ],
    closeLead: "Less time rebuilding UI infrastructure. ",
    closeRest: "More time solving what is unique to the product.",
  },
  next: [
    {
      title: "Test on more complex patterns",
      body: "Apply the same architecture to data-heavy tables, dashboards, settings and multi-step workflows.",
    },
    {
      title: "Connect design to production code",
      body: "Strengthen the link between Figma variables, design-system rules and code, so the foundation moves smoothly into implementation.",
    },
    {
      title: "Reuse and publish",
      body: "Use the system as shared infrastructure across product and freelance work, and eventually publish parts of it for wider use.",
    },
  ],
} as const;
