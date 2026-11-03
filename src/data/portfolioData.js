export const portfolioData = {
  personal: {
    name: "Dipu Gochhayat",
    roleTitle: "Aspiring Software Developer",
    roles: [
      "Aspiring Software Developer",
      "B.Tech CSE Student (2028)",
      "Java & Backend Enthusiast",
      "Cybersecurity Explorer"
    ],
    tagline: "Computer Science Engineering student focused on building robust Java & backend systems, exploring cybersecurity, and crafting practical solutions for real-world problems.",
    bio: "I'm a Computer Science Engineering student at Nalanda Institute of Technology, Bhubaneswar. I enjoy turning ideas into useful digital experiences and exploring how technology can solve real-world problems.",
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      college: "Nalanda Institute of Technology, Bhubaneswar",
      graduation: "2028",
      cgpa: "8.15",
      location: "Bhubaneswar, Odisha, India"
    },
    primaryFocus: [
      "Java Development & Object-Oriented Design",
      "Backend Architecture & RESTful APIs",
      "Data Structures & Algorithmic Problem Solving"
    ],
    interests: [
      "Java Development",
      "Backend Development",
      "Cybersecurity & OSINT",
      "Problem Solving"
    ],
    location: "Bhubaneswar, Odisha, India",
    status: "Available for Opportunities",
    email: "alex.morgan.dev@example.com",
    photoUrl: "/avatar.svg",
    resumeUrl: "#resume",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:alex.morgan.dev@example.com"
    }
  },

  stats: [
    { label: "B.Tech CSE (2028)", value: "8.15 CGPA" },
    { label: "Hackathons & Events", value: "3+ Recognized" },
    { label: "Core Competency", value: "Java & Core CS" },
    { label: "College", value: "NIT Bhubaneswar" }
  ],

  skillCategories: [
    {
      category: "Programming",
      description: "Core languages for algorithmic logic and robust application engineering.",
      skills: ["Java", "C"]
    },
    {
      category: "Core Computer Science",
      description: "Strong academic foundations in software systems and structural computation.",
      skills: ["Data Structures & Algorithms", "OOP (Object-Oriented Programming)", "DBMS", "Operating Systems", "Computer Networks"]
    },
    {
      category: "Databases",
      description: "Data modeling, relational storage, and cloud backend integration.",
      skills: ["MySQL", "Firebase"]
    },
    {
      category: "Web Technologies",
      description: "Essential web standards for building clean and structured user interfaces.",
      skills: ["HTML5", "CSS3"]
    },
    {
      category: "Tools & Environments",
      description: "Developer tooling for debugging, Android builds, and security testing.",
      skills: ["VS Code", "Android Studio", "Kali Linux"]
    }
  ],

  projects: [
    {
      id: "safesphere",
      title: "SAFESPHERE",
      subtitle: "Smart SOS Alert Application",
      badge: "Winner – Intra-College Hackathon",
      badgeType: "gold",
      description: "A safety-focused mobile application for emergency alerts and trusted-contact notifications, designed to provide instant response and user location tracking during urgent situations.",
      technologies: ["Android", "Kotlin", "Firebase"],
      role: "Mobile App Lead",
      githubUrl: "https://github.com",
      liveUrl: "#",
      accent: "from-amber-500/20 to-orange-500/10",
      image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "trace-x",
      title: "TRACE-X",
      subtitle: "Digital Footprint Finder",
      badge: "Top 30 Finalist among 160 teams – Chakravyuh 1.0",
      badgeType: "purple",
      description: "A cybersecurity-focused tool for discovering and understanding digital footprints, analyzing exposed user identities, and enhancing personal online privacy awareness.",
      technologies: ["Python", "Linux", "OSINT", "API Integration"],
      role: "Backend Developer",
      githubUrl: "https://github.com",
      liveUrl: "#",
      accent: "from-cyan-500/20 to-blue-500/10",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "e-nirikshan",
      title: "E-NIRIKSHAN",
      subtitle: "Real-Time Monitoring & Inspection",
      badge: "Internal Team Selection – Smart India Hackathon",
      badgeType: "blue",
      description: "A Smart India Hackathon project exploring centralized monitoring, mobile inspections, and geo-tagged reports for transparent, accurate real-time oversight.",
      technologies: ["Android", "Java", "Firebase", "Geo-Tagging"],
      role: "App Developer",
      githubUrl: "https://github.com",
      liveUrl: "#",
      accent: "from-emerald-500/20 to-teal-500/10",
      image: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=800&q=80"
    }
  ],

  achievements: [
    {
      id: "medhamanthan",
      title: "Medhamanthan 1.0",
      year: "2025",
      badge: "Hackathon Winner",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      iconType: "trophy",
      summary: "First prize winner in competitive intra-college hackathon.",
      details: "Awarded 1st Place for building SafeSphere under rapid development constraints, delivering full alert automation, Firebase synchronization, and seamless user experience."
    },
    {
      id: "chakravyuh",
      title: "Chakravyuh 1.0",
      year: "2026",
      badge: "Top 30 Finalist among 160 teams",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      iconType: "award",
      summary: "Shortlisted among the top 18% of competitive engineering teams.",
      details: "Engineered backend data pipelines for Trace-X, a digital footprint identification tool. Validated architecture in front of expert cybersecurity judging panels."
    },
    {
      id: "sih",
      title: "Smart India Hackathon (SIH)",
      year: "2026",
      badge: "Internal Team Selection",
      badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
      iconType: "target",
      summary: "Selected through rigorous institutional screening for SIH.",
      details: "Developed core Android features for E-Nirikshan to enable geo-tagged reporting and mobile real-time inspection, representing Nalanda Institute of Technology."
    }
  ]
};
