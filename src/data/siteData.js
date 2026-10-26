/**
 * Single source of truth for portfolio content.
 * Edit this file to update profile, terminal demo, projects, and contact info.
 */

export const profile = {
  name: "Bikash Khanal",
  nameLines: ["BIKASH", "KHANAL"],
  shortName: "BK",
  title: "Network & Linux Engineer",
  pageTitle: "Bikash Khanal | Network & Linux Engineer",
  tagline:
    "CCNA-trained network engineer in the making. I configure, secure and troubleshoot networks, and I live in the Linux terminal.",
  location: "Nepal",
  email: "bikashkhanal007@gmail.com",
  socials: {
    github: "https://github.com/Bikashxkhanal",
    linkedin: "https://www.linkedin.com/in/bikash-khanal-51b84a27b/", 
  },
  cvUrl: "/bikashkhanal.pdf",
  metaDescription:
    "Bikash Khanal — Network & Linux Engineer in training. CCNA curriculum completed, Ubuntu Linux practice, home labs, and prior full-stack experience.",
  ogImage: "/profile.png",
};

/** Boot / splash lines shown before the curtain reveal */
export const bootLines = [
  "[ OK ] Initializing network stack...",
  "[ OK ] Loading interfaces eth0 wlan0",
  "[ OK ] Mounting lab environment",
  "[ OK ] Welcome, Bikash",
];

/**
 * Hero MacBook terminal script.
 * Each item: { cmd, output } — output is an array of line objects for coloring.
 * type: 'plain' | 'kv' | 'comment' | 'success'
 */
export const terminalScript = [
  {
    cmd: "whoami",
    output: [{ type: "plain", text: "bikash-khanal" }],
  },
  {
    cmd: "cat profile.txt",
    output: [
      { type: "kv", key: "name", value: "Bikash Khanal" },
      { type: "kv", key: "role", value: "Network & Linux Engineer (in training)" },
      { type: "kv", key: "location", value: "Nepal" },
      { type: "kv", key: "focus", value: "Routing, Switching, Linux Administration" },
      {
        type: "kv",
        key: "status",
        value: "Open to junior network / NOC / sysadmin roles",
      },
    ],
  },
  {
    cmd: "cat certs.conf",
    output: [
      { type: "plain", text: "[certifications]" },
      {
        type: "kv",
        key: "CCNA",
        value: '"curriculum completed"',
        comment: "in progress ",
      },
      { type: "kv", key: "Linux", value: '"Ubuntu fundamentals"' },
      {
        type: "kv",
        key: "Introduction to Networks",
        value: '"completed"',
  
      },
      {
        type: "kv",
        key: "Switching, Routing and Wireless Essentials",
        value: '"completed"',
  
      },
    ],
  },
  {
    cmd: "cat skills.conf",
    output: [
      {
        type: "kv",
        key: "routing",
        value: "[ OSPF, EIGRP, static, inter-VLAN ]",
      },
      {
        type: "kv",
        key: "switching",
        value: "[ VLAN, STP, EtherChannel, trunking ]",
      },
      { type: "kv", key: "services", value: "[ DHCP, DNS, NAT, ACL ]" },
      {
        type: "kv",
        key: "tools",
        value: "[ Cisco Packet Tracer, Wireshark, Ubuntu, bash, ssh ]",
      },
    ],
  },
  {
    cmd: "ls ~/labs",
    output: [
      {
        type: "plain",
        text: "vlan-lab/  ospf-lab/  nat-acl-lab/  ubuntu-server/",
      },
    ],
  },
  {
    cmd: "ping -c 1 opportunity",
    output: [
      {
        type: "success",
        text: "64 bytes from opportunity: icmp_seq=1 ttl=64 time=0.07 ms",
      },
    ],
  },
];

export const about = {
  eyebrow: "// about",
  heading: "From the browser to the network stack.",
  paragraphs: [
    "I started as a full-stack web developer, building React apps, Node APIs, and real-time systems. That work taught me how services talk to each other. Now I am moving closer to the wire: routing, switching, security, and Linux administration.",
    "I have completed the full CCNA curriculum and practice daily on Ubuntu. I build home labs in Packet Tracer and on real Linux boxes: VLANs, OSPF, NAT/ACLs, DNS/DHCP, while keeping my full-stack background as a secondary strength for automation and tooling.",
  ],
};

export const education = [
  {
    degree: "Bachelor of Computer System and Information Technology",
    institution: "Pokhara University",
    duration: "2024 – present",
    location: "Kathmandu, Nepal",
  },
];

/**
 * Projects grid data.
 * icon: network | server | terminal | shield | router | globe | database | message
 * github: use "#" for placeholders until the repo is ready
 */
export const projects = [
  {
    title: "Personal Portfolio",
    description:
      "React portfolio site with terminal-style hero, dark/light theme, and responsive design. Built with React, Tailwind CSS, and Vite. and deployed using GitHub Pages.",
    tags: ["React", "Tailwind CSS", "Vite", "GitHub Pages"],
    icon: "FullStack",
    github: "https://github.com/Bikashxkhanal/personal-web-page",
  },

  {
    title: "KDS Business System",
    description:
      "Client-focused business management portal - centralized records, billing, and secure multi-user access.",
    tags: ["React", "MongoDB", "Node.js", "Tailwind"],
    icon: "globe",
    link: "https://kds.bikashkhanal07.com.np", // EDIT
  },

  {
    title: "VLAN & Inter-VLAN Lab",
    description:
      "Segmented LAN design with trunking and inter-VLAN routing - practice topology for access & distribution layers.",
    tags: ["VLAN", "Trunking", "Packet Tracer", "Routing"],
    icon: "network",
    github: "#",
  },
  {
    title: "OSPF Multi-Area Lab",
    description:
      "Multi-area OSPF topology with route summarization and neighbor troubleshooting across simulated routers.",
    tags: ["OSPF", "Routing", "Packet Tracer", "Wireshark"],
    icon: "router",
    github: "#",
  },
  {
    title: "NAT & ACL Lab",
    description:
      "Perimeter control lab - static/dynamic NAT and extended ACLs to filter and translate traffic securely.",
    tags: ["NAT", "ACL", "Security", "Cisco"],
    icon: "shield",
    github: "#",
  },
  
  {
    title: "Inventory Management System",
    description:
      "Multi-warehouse stock and procurement portal with role-based access structured data flows across business nodes.",
    tags: ["React", "MySQL", "PHP", "Redux"],
    icon: "database",
    github: "https://github.com/Bikashxkhanal/Inventory-Management-System", // EDIT
  },
  
  {
    title: "Ubuntu Server (DNS/DHCP)",
    description:
      "Linux server lab provisioning DNS and DHCP services - bash, ssh, and service hardening basics.",
    tags: ["Ubuntu", "DNS", "DHCP", "bash"],
    icon: "terminal",
    github: "#",
  },
];

export const contact = {
  heading: "Let's connect",
  blurb:
    "Open to junior network, NOC, and Linux sysadmin roles - or a ping about labs and collaboration.",
  successMessage: "Message sent. Ping received.",
  errorMessage: "Transmission failed. Please try again.",
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
