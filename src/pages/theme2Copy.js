// ─────────────────────────────────────────────────────────────────────────────
// PASTE NEW COPY HERE — section by section
//
// This is the ONLY file to edit to change the words on /theme-2.
// - Replace the text between the quotes. Keep the quotes, commas and brackets.
// - Lists in [ ] render one item per entry; add or remove entries freely.
// - `titleLines` render one line each (each line is its own animated row).
// - Apostrophes: use ’ (curly) inside '…' strings, or wrap the string in "…".
// - A missing key falls back to the main-site text, so nothing breaks.
//
// v1 defaults below are the current main-site copy, verbatim.
// ─────────────────────────────────────────────────────────────────────────────

export const THEME2_COPY = {
  // ── Navigation ─────────────────────────────────────────────────────────────
  nav: {
    brand: 'Karma Roots',
    links: [
      { label: 'What we do', href: '#roots' },
      { label: 'Why us', href: '#why' },
      { label: 'Approach', href: '#approach' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Let’s talk',
    menuTagline: 'Ideas that grow. Stories that stay.',
  },

  // ── 00 Hero ────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: ['STRATEGIC THINKING', 'DISTINCTIVE IDEAS', 'MEANINGFUL GROWTH'],
    titleLines: ['Ideas That Grow.', 'Stories That Stay.'],
    subtitle:
      'Karma Roots is a boutique marketing and communications firm helping businesses find their voice, shape their presence and grow with purpose, because good brands are not just seen, they are remembered.',
    cta: 'Let’s talk',
  },

  // ── 01 Founder ─────────────────────────────────────────────────────────────
  founder: {
    mark: 'Meet the founder',
    name: 'Sandhya Nair',
    role: 'Founder, Karma Roots · Marketing & Communications Leader',
    intro:
      'Sandhya has spent close to two decades leading marketing, communications and PR for some of India’s best-known hospitality groups and a landmark non-profit, from brand standards and launches to media relations and award-winning campaigns. Karma Roots brings that senior, hands-on experience directly to every brand it works with.',
    brandsLabel: 'Brands Sandhya has built for',
    brands: ['The Park Hotels', 'The Lalit', 'Radisson Blu', 'Sarovar Portico', 'Akshaya Patra', 'Inventree', 'Goldfinch Hotels'],
    // [number, label]
    stats: [
      ['18+', 'Years in marketing & PR'],
      ['45+', 'Media features for one group'],
      ['6', 'Languages spoken'],
    ],
    seal: 'FOUNDER ✦ KARMA ROOTS ✦ BRAND STORYTELLER ✦',
  },

  // ── 02 Roots (What we do) ──────────────────────────────────────────────────
  roots: {
    mark: 'What we do',
    titleLines: ['Five roots.', 'One bigger picture.'],
    intro:
      'From defining what a brand stands for to taking it to the right audience, Karma Roots works across the full brand journey, with senior-led thinking at every step.',
    // services: [name, description]
    items: [
      {
        key: 'root',
        no: '01',
        name: 'Root',
        area: 'Strategy & Branding',
        line: 'Build the foundation before you build the noise.',
        body: 'We define what your brand stands for, how it should look, sound and show up, and where it needs to go.',
        services: [
          ['Brand Strategy', 'Purpose, positioning, architecture & brand direction'],
          ['Brand Identity', 'Visual identity, brand language & brand guidelines'],
          ['Founder & Leadership Branding', 'Personal branding, leadership presence & executive positioning'],
          ['Corporate Branding', 'Brand consistency across communication, touchpoints & experiences'],
        ],
      },
      {
        key: 'story',
        no: '02',
        name: 'Story',
        area: 'Content & Communications',
        line: 'Because every brand has a story. The right one changes everything.',
        body: 'We turn ideas into narratives people understand, remember and want to engage with.',
        services: [
          ['Content Strategy', 'Ideas, narratives, content pillars & editorial planning'],
          ['Copywriting', 'Brand copy, campaigns, digital & corporate communication'],
          ['Public Relations', 'Media strategy, outreach, relations & publicity'],
          ['Corporate Communications', 'Internal, external & stakeholder communications'],
        ],
      },
      {
        key: 'reach',
        no: '03',
        name: 'Reach',
        area: 'Digital & Marketing',
        line: 'Be where your audience is. Say something worth stopping for.',
        body: 'We build digital presence with a clear point of view, from everyday content to campaigns that create momentum.',
        services: [
          ['Social Media', 'Strategy, content & channel management'],
          ['Digital Campaigns', 'Campaign ideation, planning & execution'],
          ['Influencer Marketing', 'Influencer, creator & blogger collaborations'],
          ['Digital Brand Building', 'Online visibility, engagement & brand presence'],
        ],
      },
      {
        key: 'experience',
        no: '04',
        name: 'Experience',
        area: 'Launches & Brand Experiences',
        line: 'Make the moment matter.',
        body: 'From a first reveal to a room full of the right people, we create enhanced experiences that give brands something to be remembered for.',
        services: [
          ['Brand Launches', 'Launch strategy, planning & execution'],
          ['Events & Activations', 'Brand experiences, engagements & activations'],
          ['Media Events', 'Press Release, media interactions, brand participation and Awards & Accolades'],
          ['Photography & Videography', 'Brand, people, products, spaces & events, brand films, reels, interviews & event films'],
          ['Visual Content', 'Creative concepts, visual storytelling & campaign assets'],
        ],
      },
      {
        key: 'growth',
        no: '05',
        name: 'Growth',
        area: 'Marketing & Growth Advisory',
        line: 'Big-picture thinking for businesses ready for their next chapter.',
        body: 'We work with businesses on the decisions that shape what comes next, with strategic marketing expertise when and where it matters.',
        services: [
          ['Marketing Strategy', 'Marketing direction, planning & market positioning'],
          ['Campaign Strategy', 'Big ideas, campaign planning & integrated execution'],
          ['Go-to-Market Strategy', 'Launch planning, market entry & audience strategy'],
          ['Presentation & Pitch Strategy', 'Corporate presentations, business pitches & investor-facing storytelling'],
          ['Fractional Marketing Leadership', 'Strategic marketing leadership for businesses that need senior expertise without a full-time function'],
        ],
      },
    ],
  },

  // ── Marquee (scrolling services strip) ─────────────────────────────────────
  marquee: {
    label: 'Services at a glance',
    items: [
      'Brand Strategy',
      'Brand Identity',
      'Founder & Leadership Branding',
      'Corporate Branding',
      'Content Strategy',
      'Copywriting',
      'Public Relations',
      'Corporate Communications',
      'Social Media',
      'Digital Campaigns',
      'Influencer Marketing',
      'Digital Brand Building',
      'Brand Launches',
      'Events & Activations',
      'Media Events',
      'Photography & Videography',
      'Visual Content',
      'Marketing Strategy',
      'Campaign Strategy',
      'Go-to-Market Strategy',
      'Presentation & Pitch Strategy',
      'Fractional Marketing Leadership',
    ],
  },

  // ── 03 Why ─────────────────────────────────────────────────────────────────
  why: {
    mark: 'Why Karma Roots',
    titleLines: ['Not just another', 'pair of hands.'],
    lead: 'We work closely, think deeply and stay involved.',
    body: 'Karma Roots brings senior experience to the table, combining strategic thinking with creative execution. No unnecessary layers, no one-size-fits-all playbooks, no chasing trends for the sake of it.',
    closing: 'Just the right thinking, the right people and ideas that have somewhere to go.',
    // [title, text] — four pillars (each has its own icon, keep four)
    pillars: [
      ['Senior-led', 'Experience and strategic thinking at the core of every engagement.'],
      ['Boutique by design', 'Focused relationships, tailored thinking and work that feels personal.'],
      ['Strategy meets creativity', 'Ideas are strategic when they know where they are going.'],
      ['Built for what’s next', 'We look beyond the immediate brief to understand the bigger opportunity.'],
    ],
  },

  // ── 04 Approach ────────────────────────────────────────────────────────────
  approach: {
    mark: 'Our approach',
    titleLines: ['Root. Build.', 'Reach. Grow.'],
    intro: 'Four stages we take every brand through, from finding its purpose to turning attention into momentum.',
    // [name, text] — four stages (each has its own icon, keep four)
    stages: [
      ['Root', 'Find the purpose. Shape the foundation.'],
      ['Build', 'Create the identity. Craft the story.'],
      ['Reach', 'Take it to the right people, places and platforms.'],
      ['Grow', 'Turn attention into momentum.'],
    ],
    closing: 'Because good marketing isn’t about doing more. It’s about making more of what matters.',
  },

  // ── 05 Partners (Who we work with) ─────────────────────────────────────────
  partners: {
    mark: 'Who we work with',
    title: 'From ambitious businesses and established organisations to founders, leaders and brands entering their next phase.',
    intro: 'We partner with people who value clarity, creativity and conversations that go beyond the brief.',
    groups: ['Ambitious businesses', 'Established organisations', 'Founders & leaders', 'Brands entering their next phase'],
  },

  // ── 06 Testimonials ────────────────────────────────────────────────────────
  // PLACEHOLDER quotes (not real clients) — replace with approved client words.
  testimonials: {
    mark: 'Testimonials',
    items: [
      {
        roots: 'Root & Experience',
        quote:
          'We came in asking for a new logo. Karma Roots asked who we wanted to welcome first. The identity, the story and the launch all grew from that one conversation, and it showed on opening night.',
        role: 'Founder',
        org: 'Boutique resort, Coorg',
      },
      {
        roots: 'Story & Reach',
        quote:
          'I could never explain what we did in a sentence. Karma Roots found our story and took it to the press and the people we needed to reach. And the person we briefed was the person who did the work.',
        role: 'Co-founder & CEO',
        org: 'Climate-tech startup, Bangalore',
      },
      {
        roots: 'Growth',
        quote:
          'We had plenty of hands. What we were missing was senior marketing thinking. Karma Roots led our marketing for a year, set the direction, sharpened our pitch and stayed involved long after the plan was signed off.',
        role: 'Managing Director',
        org: 'Family-owned manufacturing business, Pune',
      },
    ],
  },

  // ── 07 Contact ─────────────────────────────────────────────────────────────
  contact: {
    mark: 'Start a conversation',
    titleLines: ['Let’s grow something', 'worth remembering.'],
    body: 'Have a brand to build, a story to shape, a launch to make happen or a business ready for its next move?',
    cta: 'Start the conversation',
    email: 'hello@karmaroots.in',
  },

  // ── Footer ─────────────────────────────────────────────────────────────────
  footer: {
    tagline: 'Ideas that grow, stories that stay.',
    blurb: 'A boutique marketing and communications firm built on the belief that good brands are not just seen, they are remembered.',
    linksTitle: 'Quick Links',
    links: [
      { label: 'Home', href: '#top' },
      { label: 'About', href: '#intro' },
      { label: 'What We Do', href: '#roots' },
      { label: 'Our Approach', href: '#approach' },
      { label: 'Why Karma Roots', href: '#why' },
      { label: 'Who We Work With', href: '#who' },
      { label: 'Contact', href: '#contact' },
    ],
    servicesTitle: 'Our Services',
    services: [
      'Strategy & Branding',
      'Content & Communications',
      'Digital & Marketing',
      'Launches & Brand Experiences',
      'Marketing & Growth Advisory',
    ],
    contactTitle: 'Get In Touch',
    location: 'Bangalore, India',
    email: 'hello@karmaroots.in',
    phone: '+91 98765 43210',
    closingLines: ['Let’s create', 'something meaningful.'],
    cta: 'Start a Conversation',
    copyright: 'Karma Roots',
    creditLabel: 'Designed by',
    creditName: 'The Website Makers',
  },
}
