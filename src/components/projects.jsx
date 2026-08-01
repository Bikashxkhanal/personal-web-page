import React, { useState } from "react";

const projects = [
  {
    title: "Video Streaming Platform(Backend)",
    description: "A high-performance backend infrastructure for video streaming services.",
    longDescription: "This project focused on building a scalable backend capable of handling high-bandwidth video delivery. I implemented a robust architecture that handles everything from secure user authentication to adaptive bitrate streaming logic.",
    features: [
      "JWT-based Secure Authentication & Authorization",
      "Chunked Video Upload with Progress Tracking",
      "Automated Video Transcoding Pipeline",
      "Scalable API with Redis Caching",
      "Dynamic Watch History and Recommendation Engine"
    ],

    techStack: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
  },
  {
    title: "Inventory Management System",
    description: "An enterprise-grade stock tracking and procurement management system.",
    longDescription: "A comprehensive solution designed for medium-to-large businesses to manage their global supply chain. The system provides real-time visibility into stock levels across multiple warehouses, with automated procurement triggers.",
    features: [
      "Real-time Multi-warehouse Stock Synchronization",
      "Predictive Analytics for Inventory Procurement",
      "Detailed Financial Reporting & Audit Logs",
      "Role-based Access Control for Staff"
    ],
    problem: "Manual inventory tracking led to a 15% discrepancy in annual stock audits. The automated system reduced this to less than 0.5% while decreasing manual data entry by 70%.",
    techStack: ["React", "Tailwind CSS", "MySQL", "PHP", "TanStack Query", "Redux"],
  },
  {
    title : "Chat Application",
    description : "The Chat Application is a scalable, secure, and white-label real-time messaging platform designed to provide seamless communication for organizations, educational institutions, and businesses. ",
    features : [
   `    
          ### **User Authentication**
          The chat application provides a secure authentication system that enables users to register, log in, and access the platform using JWT-based authentication. Protected routes and authorization mechanisms ensure that only authenticated users can access messaging services and personal data.
`,

`### **Real-Time Messaging**

The application enables instant one-to-one messaging through Socket.IO, allowing users to send and receive messages with minimal latency. Real-time communication ensures a seamless messaging experience without requiring page refreshes.
`,
`### **Conversation Management**

Users can create, access, and manage conversations efficiently. The system organizes conversations with recent activity, displays the latest message preview, and maintains participant information for quick navigation.`,

`### **Message Synchronization**

Messages are synchronized across connected devices in real time, ensuring that users always view the latest conversation state. This provides a consistent messaging experience regardless of the device being used.
`,
`### **Message Delivery and Read Receipts**

The application tracks the status of every message through stages such as **Sending**, **Sent**, **Delivered**, and **Seen**. Read receipts provide confirmation when recipients have viewed messages, improving communication transparency.`,

`### **Typing Indicators**

Typing indicators notify participants when another user is composing a message and automatically disappear when typing stops. This feature creates a more natural and interactive communication experience.`,

`### **Online Presence**

The system displays users' online and offline status in real time. Presence information is updated instantly whenever users connect or disconnect, allowing participants to know the availability of others.`,

`### **Profile Management**

Users can personalize their accounts by updating profile information, including profile pictures, display names, and other personal details. Profile updates are reflected throughout the application.`,

`
### **Search Functionality**

A built-in search feature enables users to quickly locate conversations, contacts, and messages, improving navigation and reducing the time required to retrieve previous communications.`,

`### **Socket-Based Event System**

The application follows an event-driven architecture using Socket.IO to handle events such as message delivery, typing notifications, online presence, conversation joining, and read receipts. This ensures all connected clients remain synchronized in real time.`,

`### **Custom JavaScript/TypeScript SDK**

A reusable JavaScript/TypeScript SDK simplifies integration of the chat system into web applications. The SDK provides type-safe APIs, socket management, event handling, and communication services, reducing development effort for client applications.`,

`### **RESTful API Integration**

The backend exposes RESTful APIs for user authentication, conversation management, messaging, profile management, and file uploads. These APIs provide standardized communication between the frontend and backend services.`,

`### **Redis Integration**

Redis is utilized to improve system performance through caching, temporary data storage, OTP management, and session optimization. This reduces database load and enhances response times.`,

`### **Scalable Backend Architecture**

The backend is developed using Node.js, Express.js, TypeScript, MongoDB, Redis, and Socket.IO, providing a modular and scalable architecture capable of supporting a large number of concurrent users and real-time connections.
`,
`### **Security and Authorization**

The application incorporates multiple security mechanisms, including JWT authentication, password hashing, request validation, socket authentication, and conversation participant verification. These measures ensure secure communication and protect user data from unauthorized access.`,

`### **White-Label Architecture**

The platform is designed as a white-label messaging solution that can be integrated into institutional or enterprise applications. Organizations can customize the branding, user interface, and authentication mechanisms while leveraging the same secure and scalable messaging infrastructure.`, 

    ],
  problem : `Existing messaging platforms and SDKs often lack white-label support, limiting organizations from fully customizing branding and user experience. Many commercial solutions are proprietary, costly, and create vendor lock-in, making integration and scalability challenging. Building a secure real-time messaging system from scratch requires significant development effort and expertise. Therefore, there is a need for a customizable, scalable, and developer-friendly white-label chat SDK that can be seamlessly integrated into existing applications. 
  
  Unlike traditional messaging platforms that are tied to a specific brand or ecosystem, this application allows institutions to integrate the messaging system into their own products while maintaining complete control over branding, authentication, users, and data. The application is built using a modern full-stack architecture with React, TypeScript, Node.js, Express.js, MongoDB, Redis, Socket.IO, and a custom JavaScript/TypeScript SDK, ensuring high performance, reliability, and ease of integration. It supports real-time communication, offline message synchronization, secure authentication, and scalable backend services capable of handling thousands of concurrent users. The system follows a modular architecture where the frontend communicates with REST APIs for data retrieval and uses WebSocket connections for instant messaging events. Redis is utilized for caching, OTP storage, and message/event optimization, while MongoDB stores user profiles, conversations, and message history. The application is designed to support both one-to-one and future group conversations with efficient conversation management. 
  
  `,
  techStack : [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redis",
  "Socket.IO",
  "JavaScript",
  "JWT (JSON Web Tokens)",
  "REST API",
  "pnpm",
  "TurboRepo",
  "Git",
  "GitHub"
]

  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen px-8 md:px-24 py-32 relative">
      <div className="max-w-7xl mx-auto mb-24">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-4 block font-mono">Portfolio</span>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">Featured <span className="text-gray-500">Works</span></h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="glass-card p-16 rounded-sm flex flex-col cursor-pointer group hover:bg-white transition-all duration-700 min-h-[400px]"
          >
            <div className="group-hover:opacity-0 transition-opacity duration-500 flex flex-col h-full">
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
                {project.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed font-light">
                {project.description}
              </p>
              <div className="mt-auto pt-12 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-white">
                 Inspect Project
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
              </div>
            </div>
            {/* Hover Reveal Indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
               <span className="text-black text-[11px] uppercase tracking-[0.5em] font-black">Open Details</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[110] bg-[#0a0a0a] overflow-y-auto animate-fade-in">
          <div className="min-h-screen flex flex-col">
            {/* Modal Header */}
            <div className="px-8 md:px-24 py-12 flex items-center justify-between border-b border-white/5">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-mono">Case Study</span>
              <button 
                onClick={() => setSelectedProject(null)}
                className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white hover:text-gray-400 transition-colors"
              >
                Close Project
                <div className="w-12 h-px bg-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </button>
            </div>

            {/* Modal Content */}
            <div className="max-w-6xl mx-auto w-full px-8 md:px-24 py-24 flex-grow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                
                {/* Left Side: Title & About */}
                <div className="lg:col-span-7 space-y-16">
                  <div>
                    <h3 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter uppercase leading-none">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-400 text-xl leading-relaxed font-light italic">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-white font-black mb-8 border-l-2 border-white pl-6">Problem & Objective</h4>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">{selectedProject.problem}</p>
                  </div>
                </div>

                {/* Right Side: Features & Tech */}
                <div className="lg:col-span-5 space-y-16">
                   <div>
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-black mb-8 uppercase">Key Features</h4>
                    <ul className="space-y-6">
                      {selectedProject.features.map((f, i) => (
                        <li key={i} className="text-white font-light flex items-start gap-4 text-sm leading-relaxed">
                          <span className="text-gray-600 font-mono">0{i+1}</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-black mb-8 uppercase">Technical Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className="px-4 py-2 border border-white/5 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold bg-white/5 hover:border-white/20 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 md:px-24 py-16 border-t border-white/5 text-center">
               <p className="text-[10px] uppercase tracking-[0.5em] text-gray-700 font-mono">End of Document</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
