export const portfolioData = {
  personal: {
    name: "Dipu Gochhayat",
    roleTitle: "Aspiring Software Developer",
    roles: [
      "Aspiring Software Developer",
      "Java & Backend Developer",
      "B.Tech CSE Student (2028)",
      "Cybersecurity Explorer",
      "Problem Solver & Builder"
    ],
    greeting: "Hello, I'm",
    tagline: "Computer Science Engineering student focused on building robust Java & backend systems, exploring cybersecurity, and crafting practical solutions for real-world impact.",
    bio: "I'm a Computer Science Engineering student at Nalanda Institute of Technology, Bhubaneswar. I enjoy turning ideas into useful digital experiences and exploring how technology can solve real-world problems. My primary focus is Java development and backend engineering, while I continue exploring cybersecurity and software development.",
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      college: "Nalanda Institute of Technology, Bhubaneswar",
      period: "2024 – 2028",
      graduation: "2028",
      cgpa: "8.15",
      location: "Bhubaneswar, Odisha, India",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks"
      ]
    },
    primaryInterests: [
      "Java Development",
      "Backend Development",
      "Cybersecurity",
      "Problem Solving",
      "Software Engineering"
    ],
    location: "Bhubaneswar, Odisha, India",
    email: "gochhayatdipu009@gmail.com",
    photoUrl: "/profile.png",
    photoTransparentUrl: "/profile-transparent.png",
    socials: {
      github: "https://github.com/dipu-gochhayat",
      linkedin: "https://www.linkedin.com/in/dipu-gochhayat/",
      email: "mailto:gochhayatdipu009@gmail.com"
    }
  },

  strengths: [
    {
      title: "Backend Architecture",
      description: "Building reliable, scalable backend logic and RESTful APIs with clean object-oriented Java.",
      icon: "Server"
    },
    {
      title: "Core CS Foundations",
      description: "Strong structural knowledge in Data Structures, Algorithms, DBMS, and Operating Systems.",
      icon: "Code2"
    },
    {
      title: "Security Instinct",
      description: "Exploring OSINT, digital footprints, and proactive vulnerability awareness using Kali Linux.",
      icon: "Shield"
    },
    {
      title: "Hackathon Innovation",
      description: "Intra-college hackathon winner and Smart India Hackathon internal team selection with rapid prototyping.",
      icon: "Rocket"
    }
  ],

  projects: [
    {
      id: "safesphere",
      title: "SAFESPHERE",
      subtitle: "Smart SOS Alert Application",
      description: "A safety-focused mobile application designed for emergency alerts and trusted-contact notifications with real-time location dispatch.",
      technologies: ["Android", "Kotlin", "Firebase"],
      achievement: "Winner – Intra-College Hackathon",
      badgeType: "gold",
      role: "Mobile App Lead",
      githubUrl: "https://github.com/dipu-gochhayat",
      liveUrl: null,
      iconType: "shield"
    },
    {
      id: "trace-x",
      title: "TRACE-X",
      subtitle: "Digital Footprint Finder",
      description: "A cybersecurity-focused tool designed to discover and understand digital footprints, analyzing exposed user identities and enhancing online privacy.",
      technologies: ["Python", "Linux", "OSINT", "Backend APIs"],
      achievement: "Top 30 Finalist among 160 teams – Chakravyuh 1.0",
      badgeType: "purple",
      role: "Backend Developer",
      githubUrl: "https://github.com/dipu-gochhayat",
      liveUrl: null,
      iconType: "search"
    },
    {
      id: "e-nirikshan",
      title: "E-NIRIKSHAN",
      subtitle: "Real-Time Monitoring & Inspection",
      description: "A Smart India Hackathon project exploring centralized monitoring, mobile inspections, and geo-tagged reports for transparent, accurate real-time oversight.",
      technologies: ["Android", "Java", "Firebase", "Geo-Tagging"],
      achievement: "Internal Team Selection – Smart India Hackathon",
      badgeType: "cyan",
      role: "App Developer",
      githubUrl: "https://github.com/dipu-gochhayat",
      liveUrl: null,
      iconType: "activity"
    }
  ],

  skills: {
    categories: [
      {
        id: "programming",
        title: "Programming",
        skills: [
          { name: "Java", color: "#f89820", icon: "FaJava" },
          { name: "C", color: "#00599c", icon: "SiC" }
        ]
      },
      {
        id: "core-cs",
        title: "Core Computer Science",
        skills: [
          { name: "Data Structures & Algorithms", color: "#64ffda", icon: "Code2" },
          { name: "Object-Oriented Programming", color: "#a855f7", icon: "Layers" },
          { name: "Database Management Systems", color: "#3b82f6", icon: "Database" },
          { name: "Operating Systems", color: "#ec4899", icon: "Cpu" },
          { name: "Computer Networks", color: "#06b6d4", icon: "Network" }
        ]
      },
      {
        id: "databases",
        title: "Databases",
        skills: [
          { name: "MySQL", color: "#4479a1", icon: "SiMysql" },
          { name: "Firebase", color: "#ffca28", icon: "SiFirebase" }
        ]
      },
      {
        id: "web",
        title: "Web Development",
        skills: [
          { name: "HTML5", color: "#e34f26", icon: "SiHtml5" },
          { name: "CSS3", color: "#1572b6", icon: "SiCss3" }
        ]
      },
      {
        id: "tools",
        title: "Developer Tools",
        skills: [
          { name: "VS Code", color: "#007acc", icon: "SiVisualstudiocode" },
          { name: "Android Studio", color: "#3ddc84", icon: "SiAndroidstudio" },
          { name: "Kali Linux", color: "#557c94", icon: "SiKalilinux" },
          { name: "Git", color: "#f05032", icon: "SiGit" },
          { name: "GitHub", color: "#ffffff", icon: "FaGithub" }
        ]
      }
    ]
  },

  achievements: [
    {
      id: "medhamanthan",
      title: "Medhamanthan 1.0",
      year: "2025",
      badge: "Winner – Intra-College Hackathon",
      badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      description: "Secured 1st Place for building SafeSphere under rapid development constraints, delivering full alert automation, Firebase synchronization, and seamless user experience.",
      highlight: "1st Place Winner"
    },
    {
      id: "chakravyuh",
      title: "Chakravyuh 1.0",
      year: "2026",
      badge: "Top 30 Finalist among 160 teams",
      badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      description: "Selected among the top 18% of competitive engineering teams nationwide. Engineered backend data pipelines for Trace-X, a digital footprint identification tool.",
      highlight: "Top 30 / 160 Teams"
    },
    {
      id: "sih",
      title: "Smart India Hackathon",
      year: "2026",
      badge: "Internal Team Selection",
      badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      description: "Selected through rigorous institutional screening to represent Nalanda Institute of Technology in the prestigious Smart India Hackathon.",
      highlight: "College Representative"
    }
  ]
};
