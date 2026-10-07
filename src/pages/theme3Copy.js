// ─────────────────────────────────────────────────────────────────────────────
// PASTE NEW COPY HERE — section by section
//
// This is the ONLY file to edit to change the words on /theme-3.
// - Replace the text between the quotes. Keep the quotes, commas and brackets.
// - Lists in [ ] render one item per entry; add or remove entries freely.
// - `titleLines` render one line each (each line is its own animated row).
// - Apostrophes: use ’ (curly) inside '…' strings, or wrap the string in "…".
// - A missing key falls back to the main-site text, so nothing breaks.
//
// v1: "Editorial Ivory" concept copy. More confident, more editorial, written
// with an Indian boutique sensibility. Founder name, brand names, stats and
// contact details are kept factual from the main site.
// ─────────────────────────────────────────────────────────────────────────────

export const THEME3_COPY = {
  // ── Navigation ─────────────────────────────────────────────────────────────
  nav: {
    brand: 'Karma Roots',
    links: [
      { label: 'The work', href: '#roots' },
      { label: 'The difference', href: '#why' },
      { label: 'The method', href: '#approach' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Begin a conversation',
    menuTagline: 'Rooted brands. Remembered stories.',
  },

  // ── 00 Hero ────────────────────────────────────────────────────────────────
  // Hero title is set very large on this theme: keep each line short.
  hero: {
    eyebrow: ['Bangalore', 'Brand & Communications', 'Boutique by design'],
    titleLines: ['Rooted.', 'Remembered.'],
    subtitle:
      'Karma Roots is a boutique marketing and communications house for brands that would rather be remembered than merely seen. We find the story at the root of a business, and give it the voice, presence and patience to grow.',
    cta: 'Begin a conversation',
  },

  // ── 01 Founder ─────────────────────────────────────────────────────────────
  founder: {
    mark: 'The founder',
    name: 'Sandhya Nair',
    role: 'Founder · Marketing & Communications Leader',
    intro:
      'For close to two decades, Sandhya has shaped how some of India’s most storied hospitality houses and a landmark non-profit speak to the world: brand standards, hotel openings, press that travelled, campaigns that won. At Karma Roots, that same senior hand stays on every brief, from the first conversation to the final word.',
    brandsLabel: 'Houses she has helped shape',
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
    mark: 'The work',
    titleLines: ['Five disciplines.', 'One point of view.'],
    intro:
      'Strategy, story, reach, experience and growth. We practise them as one craft, so what a brand believes, says and does finally sound like the same voice.',
    // services: [name, description]
    items: [
      {
        key: 'root',
        no: '01',
        name: 'Root',
        area: 'Strategy & Branding',
        line: 'Before the noise, the foundation.',
        body: 'We decide, with you, what your brand stands for, how it looks and sounds, and where it is going. Everything else is built on this.',
        services: [
          ['Brand Strategy', 'Purpose, positioning, architecture & direction'],
          ['Brand Identity', 'Visual identity, brand language & guidelines'],
          ['Founder & Leadership Branding', 'Personal brand, leadership presence & executive positioning'],
          ['Corporate Branding', 'One consistent brand across every touchpoint and experience'],
        ],
      },
      {
        key: 'story',
        no: '02',
        name: 'Story',
        area: 'Content & Communications',
        line: 'Every brand has a story. The right telling changes everything.',
        body: 'We shape ideas into narratives that people understand at once, remember later and want to repeat.',
        services: [
          ['Content Strategy', 'Ideas, narratives, content pillars & editorial planning'],
          ['Copywriting', 'Brand, campaign, digital & corporate writing'],
          ['Public Relations', 'Media strategy, outreach, relations & publicity'],
          ['Corporate Communications', 'Internal, external & stakeholder communications'],
        ],
      },
      {
        key: 'reach',
        no: '03',
        name: 'Reach',
        area: 'Digital & Marketing',
        line: 'Be where your audience is. Be worth the pause.',
        body: 'A digital presence with a point of view, from the everyday post to the campaign that sets things in motion.',
        services: [
          ['Social Media', 'Strategy, content & channel management'],
          ['Digital Campaigns', 'Ideation, planning & execution'],
          ['Influencer Marketing', 'Creator, influencer & blogger collaborations'],
          ['Digital Brand Building', 'Visibility, engagement & presence online'],
        ],
      },
      {
        key: 'experience',
        no: '04',
        name: 'Experience',
        area: 'Launches & Brand Experiences',
        line: 'Make the moment the memory.',
        body: 'From the first reveal to a room full of the right people, we stage experiences that give a brand something to be talked about for.',
        services: [
          ['Brand Launches', 'Launch strategy, planning & execution'],
          ['Events & Activations', 'Brand experiences, engagements & activations'],
          ['Media Events', 'Press releases, media interactions, brand participation, awards & accolades'],
          ['Photography & Videography', 'People, products, spaces & events; brand films, reels, interviews & event films'],
          ['Visual Content', 'Creative concepts, visual storytelling & campaign assets'],
        ],
      },
      {
        key: 'growth',
        no: '05',
        name: 'Growth',
        area: 'Marketing & Growth Advisory',
        line: 'Senior counsel for the next chapter.',
        body: 'We sit with leadership on the decisions that shape what comes next, bringing seasoned marketing judgement exactly where it is needed.',
        services: [
          ['Marketing Strategy', 'Direction, planning & market positioning'],
          ['Campaign Strategy', 'Big ideas, campaign planning & integrated execution'],
          ['Go-to-Market Strategy', 'Launch planning, market entry & audience strategy'],
          ['Presentation & Pitch Strategy', 'Corporate presentations, pitches & investor storytelling'],
          ['Fractional Marketing Leadership', 'A senior marketing lead for businesses not yet ready for a full-time function'],
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
    mark: 'The difference',
    titleLines: ['Small by choice.', 'Senior by default.'],
    lead: 'The person you meet is the person who does the work.',
    body: 'Karma Roots is deliberately small. No account layers, no borrowed playbooks, no chasing the trend of the week. Strategy and craft sit at the same table, and so do you.',
    closing: 'Fewer clients. Deeper attention. Work that holds its value.',
    // [title, text] — four pillars (each has its own icon, keep four)
    pillars: [
      ['Senior hands', 'Two decades of judgement in every engagement, not just the pitch.'],
      ['Boutique by design', 'A short client list, so every brand gets considered, personal attention.'],
      ['Strategy, then craft', 'Ideas earn their place when they know where they are going.'],
      ['Built to last', 'We read past the brief to the larger opportunity behind it.'],
    ],
  },

  // ── 04 Approach ────────────────────────────────────────────────────────────
  approach: {
    mark: 'The method',
    titleLines: ['Root. Build.', 'Reach. Grow.'],
    intro: 'Four unhurried stages, from finding a brand’s purpose to turning attention into momentum.',
    // [name, text] — four stages (each has its own icon, keep four)
    stages: [
      ['Root', 'Find the purpose. Lay the foundation.'],
      ['Build', 'Shape the identity. Write the story.'],
      ['Reach', 'Carry it to the right people, places and platforms.'],
      ['Grow', 'Turn attention into lasting momentum.'],
    ],
    closing: 'Good marketing is not about doing more. It is about making more of what matters.',
  },

  // ── 05 Partners (Who we work with) ─────────────────────────────────────────
  partners: {
    mark: 'In good company',
    title: 'Ambitious businesses, established institutions, founders and leaders, and brands stepping into their next chapter.',
    intro: 'We work best with people who value clarity, care about craft and want a conversation that goes past the brief.',
    groups: ['Ambitious businesses', 'Established institutions', 'Founders & leaders', 'Brands in their next chapter'],
  },

  // ── 06 Testimonials ────────────────────────────────────────────────────────
  // PLACEHOLDER quotes (not real clients) — replace with approved client words.
  testimonials: {
    mark: 'In their words',
    items: [
      {
        roots: 'Root & Experience',
        quote:
          'We asked for a new logo. Karma Roots asked who we wanted to welcome first. The identity, the story and the launch all grew from that one question, and on opening night, you could feel it.',
        role: 'Founder',
        org: 'Boutique resort, Coorg',
      },
      {
        roots: 'Story & Reach',
        quote:
          'I could never say what we did in one sentence. They found the sentence, then took it to the press and the people we needed. And the person we briefed was the person who did the work.',
        role: 'Co-founder & CEO',
        org: 'Climate-tech startup, Bangalore',
      },
      {
        roots: 'Growth',
        quote:
          'We had plenty of hands. What we lacked was senior marketing judgement. Karma Roots led our marketing for a year, set the direction, sharpened our pitch and stayed close long after the plan was signed.',
        role: 'Managing Director',
        org: 'Family-owned manufacturing business, Pune',
      },
    ],
  },

  // ── 07 Contact ─────────────────────────────────────────────────────────────
  contact: {
    mark: 'Begin',
    titleLines: ['Every lasting brand', 'starts with a conversation.'],
    body: 'A brand to build, a story to tell, a launch to stage or a business ready for its next chapter? Write to us. Sandhya reads every note herself.',
    cta: 'Begin a conversation',
    email: 'hello@karmaroots.in',
  },

  // ── Footer ─────────────────────────────────────────────────────────────────
  footer: {
    tagline: 'Rooted brands. Remembered stories.',
    blurb: 'A boutique marketing and communications house in Bangalore, for brands that would rather be remembered than merely seen.',
    linksTitle: 'Index',
    links: [
      { label: 'Home', href: '#top' },
      { label: 'The founder', href: '#founder' },
      { label: 'The work', href: '#roots' },
      { label: 'The method', href: '#approach' },
      { label: 'The difference', href: '#why' },
      { label: 'In good company', href: '#who' },
      { label: 'Contact', href: '#contact' },
    ],
    servicesTitle: 'Disciplines',
    services: [
      'Strategy & Branding',
      'Content & Communications',
      'Digital & Marketing',
      'Launches & Brand Experiences',
      'Marketing & Growth Advisory',
    ],
    contactTitle: 'Correspondence',
    location: 'Bangalore, India',
    email: 'hello@karmaroots.in',
    phone: '+91 98765 43210',
    closingLines: ['Let’s make something', 'worth remembering.'],
    cta: 'Begin a conversation',
    copyright: 'Karma Roots',
    creditLabel: 'Designed by',
    creditName: 'The Website Makers',
  },
}
