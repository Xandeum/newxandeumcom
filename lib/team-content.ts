export type TeamSocialLink = {
  label: string;
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: TeamSocialLink[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Bernie Blume",
    role: "Founder & CEO Xandeum Labs",
    bio:
      "Bernie is a serial entrepreneur. He started Antsle in San Diego, reinventing the Private Cloud. Ran Xionet in Germany for 10 years with 100 employees, helping large telecoms (Vodafone, Deutsche Telekom, Telekom Austria) developing and testing their mission-critical IT systems. Managed large software projects at Lufthansa and IBM. Contributing to Xandeum software development to quite some degree these days.",
    image: "/team/bernie.png",
    socials: [
      { label: "X", href: "https://x.com/bernieblume" },
      { label: "Telegram", href: "https://t.me/allbloomin" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/bernieblume/" },
      {
        label: "Email",
        href: "mailto:bernie_blu@xandeum.com?subject=Hey%20Bernie!",
      },
    ],
  },
  {
    name: "Brad Kuhl",
    role: "Community Management",
    bio:
      "Brad went from Xandeum enthusiast to team member. Early on, he was helping the community through his role as an early node owner anyhow. He was recently onboarded to officially take on the community management role, as well as running our own Xandeum Solana validator node.",
    image: "/team/brad.png",
    socials: [
      { label: "X", href: "https://x.com/kuhlbrad" },
      { label: "Telegram", href: "https://t.me/kuhlbrad" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/brad-kuhl-217b77122",
      },
      {
        label: "Email",
        href: "mailto:brad_kuh@xandeum.com?subject=Hey%20Brad!",
      },
    ],
  },
  {
    name: "Dr. Anthony Blenn",
    role: "Director of Xandeum Foundation",
    bio:
      "Anthony is a testament to the power of belief in a project. Starting as an early Xandeum enthusiast and investor, he has transitioned into a valuable member of the Xandeum Assets SEZC team. His firsthand experience and unwavering support provide invaluable insight into the needs and aspirations of our community.",
    image: "/team/anthony.png",
    socials: [
      {
        label: "Email",
        href: "mailto:anthony_ble@xandeum.com?subject=Hey%20Anthony!",
      },
    ],
  },
  {
    name: "Kaveen Laksitha",
    role: "Development",
    bio:
      "Doing the real work - developing the front end and back end for our blockchain-related software. He is a wizard in JavaScript/React as well as Rust and Anchor. Consumes a lot of coffee and tea.",
    image: "/team/kaveen.png",
    socials: [],
  },
  {
    name: "Isha Mandaviya",
    role: "Development",
    bio:
      "A dedicated blockchain developer with a passion for leveraging technology to drive innovation. Skilled in blockchain platforms, smart contracts, and DApp deployment, Isha's technical proficiency spans Solidity, Rust, and JavaScript. She has contributed to projects on the Ethereum blockchain and is committed to continuous learning and promoting blockchain adoption across various industries. On her free time, Isha enjoys traveling and exploring new places.",
    image: "/team/isha.png",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/isha-mandviya-543b5918b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        label: "Email",
        href: "mailto:isha_man@xandeum.com?subject=Hey%20Isha!",
      },
    ],
  },
  {
    name: "Abishek Faliya",
    role: "Development",
    bio:
      "Abhi is deeply immersed in blockchain technology, specializing in blockchain development and solutions. With expertise in Rust, Solana, and previous experience working on Ethereum, He thrives in crafting innovative solutions for this ever-evolving ecosystem. He embraces miscellaneous tasks and adapt to new challenges with ease. Beyond blockchain, he's a passionate esports enthusiast, staying up-to-date with the latest gaming trends.",
    image: "/team/abhi.png",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/abhishek-faliya-3291a1215/",
      },
      {
        label: "Email",
        href: "mailto:abhishek_fal@xandeum.com?subject=Hey%20Abhishek!",
      },
    ],
  },
  {
    name: "Emil Mendoza",
    role: "Anything numbers (a.k.a. Finance)",
    bio:
      "Any company will fail without a competent and motivated person in charge of finance and all other metrics. Emil has proven he is that person for startups, the federal government and Antsle. Happy to have Emil on board for Xandeum.",
    image: "/team/emil.png",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/emil-jude-mendoza-cpa-423b7449/",
      },
      {
        label: "Email",
        href: "mailto:emil_men@xandeum.com?subject=Hey%20Emil!",
      },
    ],
  },
  {
    name: "Eric Schuster",
    role: "Advertising Specialist",
    bio:
      "Always crunching numbers and optimizing our online marketing campaigns with new ideas. Eric is passionate about collecting and analyzing data and leveraging the findings. Besides work, he studies materials science and likes to play strategy games.",
    image: "/team/eric.png",
    socials: [
      {
        label: "Email",
        href: "mailto:eric_schu@xandeum.com?subject=Hey%20Eric!",
      },
    ],
  },
  {
    name: "Verena Blume",
    role: "Marketing Specialist",
    bio:
      "Verena brings a unique perspective to the team, combining a deep understanding of Xandeum's inner workings with a strong background in technology. Verena's sharp intellect and collaborative spirit foster a dynamic and innovative environment within the team. Her passion for Xandeum's success fuels her drive to contribute and continuously push the boundaries.",
    image: "/team/verena.png",
    socials: [
      {
        label: "Email",
        href: "mailto:verena_blu@xandeum.com?subject=Hey%20Verena!",
      },
    ],
  },
];
