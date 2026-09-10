/**
 * Centralized Configuration for ApeX Community & Founders (Vansh & Utsav)
 */

export interface FounderProfile {
  id: string;
  name: string;
  handle: string;
  role: string;
  tagline: string;
  photoUrl: string;
  photoPosition?: string;
  links: {
    linkedin: string;
    github: string;
    discord: string;
  };
}

export const COMMUNITY_INFO = {
  name: "ApeX",
  institution: "LNCT University, Bhopal",
  building: "MCA Building",
  location: "LNCT University • Bhopal • MCA Building",
  tagline: "Connect. Learn. Build.",
  description: "A student-led tech community & engineering collective at LNCT University, Bhopal.",
  year: 2026,
  communityDiscord: "https://discord.gg/4ZGSyMJ9k",
  communityGithub: "https://github.com/yadavvansh25",
  communityLinkedin: "https://www.linkedin.com/in/vansh-yadav-5965033a2/",
};

export const PROFILES: FounderProfile[] = [
  {
    id: "vansh",
    name: "Vansh",
    handle: "@yadavvansh25",
    role: "Vibe codder 😎",
    tagline: "Building ApeX, open-source projects & community software at LNCTU.",
    photoUrl: "./avatars/vansh.png",
    photoPosition: "center center",
    links: {
      linkedin: "https://www.linkedin.com/in/vansh-yadav-5965033a2/",
      github: "https://github.com/yadavvansh25",
      discord: "https://discord.gg/4ZGSyMJ9k",
    },
  },
  {
    id: "utsav",
    name: "Utsav",
    handle: "@ut3av",
    role: "DSA with CSS 😏",
    tagline: "Building ApeX, scalable systems, learning ,development & community infrastructure.",
    photoUrl: "./avatars/utsav.png",
    photoPosition: "center center",
    links: {
      linkedin: "https://www.linkedin.com/in/ut3av/",
      github: "https://github.com/ut3av",
      discord: "https://discord.gg/4ZGSyMJ9k",
    },
  },
];

export interface ComingSoonItem {
  id: string;
  title: string;
  description: string;
}

export const COMING_SOON_ITEMS: ComingSoonItem[] = [
  {
    id: "roadmaps",
    title: "Engineering Roadmaps",
    description: "Battle-tested paths for full-stack, DevOps & AI.",
  },
  {
    id: "resources",
    title: "Curated Knowledge Base",
    description: "Exclusive student resources, interview kits & setups.",
  },
  {
    id: "projects",
    title: "Collaborative Labs",
    description: "Ship production-grade products with peers.",
  },
  {
    id: "opportunities",
    title: "Opportunity Radar",
    description: "Hackathons, open-source bounties & internship referrals.",
  },
];
