import React, { useState, useEffect } from 'react';
import {
  Github, Mail, ArrowRight, Briefcase,
  X, Laptop, Globe, Wrench, BookOpen, Monitor,
  LayoutGrid, Layers, MessageCircle, Lock, Clock, ExternalLink,
  Sun, Moon
} from 'lucide-react';

const GithubSVG = ({ size = 18, color }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinSVG = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GmailSVG = ({ size = 18 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size}>
    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
    <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
    <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
    <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
    <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z"/>
  </svg>
);

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [showResumeModal, setShowResumeModal] = useState(false);

  const titles = ["Backend & Full Stack Engineer", "Cloud-Native Systems Builder", "API & Distributed Systems Developer", "Open Source Contributor"];
  const [titleIndex, setTitleIndex] = useState(0);

  const t = (dark, light) => isDark ? dark : light;

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const currentTitle = titles[titleIndex];
    const typeInterval = setInterval(() => {
      if (currentIndex < currentTitle.length) {
        currentText += currentTitle[currentIndex];
        setTypewriterText(currentText);
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setTypewriterText('');
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 50);
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate-in'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filterCategory, isDark]);

  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([{role:'bot', text:'Hi there! 👋 Ask me anything about Mansi\'s background, skills, or projects.'}]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);



  const skillCategories = [
    {
      title: "Languages", icon: <Laptop size={20} />,
      darkBg: "bg-[#ADB2D4]/15 text-[#ADB2D4]", lightBg: "bg-[#ADB2D4]/25 text-[#6B72A8]",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Bash/Shell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
        { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
      ]
    },
    {
      title: "Frameworks & Backend", icon: <Globe size={20} />,
      darkBg: "bg-[#C7D9DD]/15 text-[#C7D9DD]", lightBg: "bg-[#C7D9DD]/40 text-[#4a7a8a]",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ]
    },
    {
      title: "DevOps & Cloud", icon: <Wrench size={20} />,
      darkBg: "bg-[#2a3347]/60 text-[#9098c0]", lightBg: "bg-[#D5E5D5]/60 text-[#4a7a5a]",
      skills: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
        { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" }
      ]
    },
    {
      title: "Databases & Messaging", icon: <BookOpen size={20} />,
      darkBg: "bg-[#ADB2D4]/15 text-[#c0c4e8]", lightBg: "bg-[#ADB2D4]/25 text-[#6B72A8]",
      skills: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
        { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" }
      ]
    },
    {
      title: "AI/ML Libraries", icon: <Monitor size={20} />,
      darkBg: "bg-[#D5E5D5]/15 text-[#a0c8a0]", lightBg: "bg-[#D5E5D5]/50 text-[#3a7a4a]",
      skills: [
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "HuggingFace", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png" },
        { name: "BERT/NLP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
      ]
    }
  ];

  const moreAboutMe = [
    { title: "FULLSTACK", icon: <LayoutGrid size={40} style={{color: "#ADB2D4"}} />, description: "Crafting robust applications to effortlessly manage vast data streams, while sculpting user interfaces that turn interactions into a smooth and intuitive experience." },
    { title: "COMPETITIVE CODING", icon: <Layers size={40} style={{color: "#ADB2D4"}} />, description: `I'm really into DSA and always practicing to learn more because I love it! <a href="https://leetcode.com/u/Mansi1727/" target="_blank" rel="noopener noreferrer" class="text-blue-500 font-bold hover:text-orange-500 transition-colors">Leetcode</a>` },
    { title: "LEADERSHIP", icon: <Briefcase size={40} style={{color: "#ADB2D4"}} />, description: "Eagerly anticipating fresh challenges to fuel personal growth while fostering an environment where others flourish alongside me." },
    { title: "HOBBIES", icon: <MessageCircle size={40} style={{color: "#ADB2D4"}} />, description: "Fueled by an unwavering passion for adventure and a deep love for nature, I'm an avid traveler always seeking new experiences." }
  ];

  const allProjects = [
    { title: "NUMockBuddy", description: "AI-powered mock interview prep for Northeastern students. Features 6 parallel Claude API reviewers, AssemblyAI live transcription, Claude Vision body language analysis, RAG-powered career assistant, and peer volunteer network.", github: "https://github.com/MansiSingh17/NUMockBuddy", illustration: "/numockbuddy.svg", category: "Full Stack" },
    { title: "AuditIQ", description: "Full-stack automation platform for security standard checklists (ISO 27001, GDPR) using NLP models, reducing manual effort by 70%.", github: "https://github.com/MansiSingh17/audit-iq", illustration: "/audit.jpg", category: "Full Stack" },
    { title: "OrbitFiles", description: "Secure cloud storage platform with AI-powered semantic search, file encryption, and seamless collaboration features.", github: "https://github.com/MansiSingh17/orbitfiles", illustration: "/orbit.jpg", category: "Full Stack" },
    { title: "TechCareer Analyzer", description: "ML pipeline processing 10,000+ job postings with BERT and PyTorch for 92% skill extraction accuracy.", github: "https://github.com/MansiSingh17/techcareer-analyzer", illustration: "/techcareer.jpg", category: "AI/ML" },
    { title: "React Gamehub SPA", description: "Complete React Gamehub SPA using Vite with conditional page rendering, custom form validation, and WCAG AA accessibility.", github: "https://github.com/MansiSingh17/Gamehub/tree/main/game-hub", illustration: "/gamehub.png", category: "Frontend" },
    { title: "WeatherNow iOS App", description: "Location-aware iOS weather app built with Swift and SwiftUI delivering real-time updates.", github: "https://github.com/MansiSingh17/WeatherNow", illustration: "/weather.jpg", category: "Mobile" },
    { title: "Seattle Service Hub", description: "AI-powered platform for Seattle with real-time tracking of 5,000+ service requests, interactive maps, and an AI chatbot.", github: "https://github.com/MansiSingh17?tab=repositories", illustration: "/seattle.jpg", category: "Full Stack" },
    { title: "CityPulse Connect", description: "AI-powered city service platform with predictive resolution times, multilingual support, and analytics dashboard.", github: "https://github.com/MansiSingh17/citypulse-connect", illustration: "/citypulse.jpg", category: "AI/ML" },
    { title: "Responsive Web App", description: "Responsive website with adaptive 12-column grid, hamburger nav, JavaScript form validation, and full accessibility.", github: "https://github.com/MansiSingh17/Web-Portal-with-Interactive-Forms", illustration: "/responsive.jpg", category: "Frontend" },
    { title: "Dragon Heaven", description: "Fully responsive multi-page website built with semantic HTML5 and a custom 12-column CSS Grid system.", github: "https://github.com/MansiSingh17/Drageon-Heaven---Multi-Page-Website", illustration: "/dragon.jpg", category: "Frontend" }
  ];

  const filteredProjects = filterCategory === 'All' ? allProjects : allProjects.filter(p => p.category === filterCategory);

  const experiences = [
    {
      company: "Amazon One Medical",
      logoDotBg: "#00a8a8",
      logoDotContent: (
        <div className="flex flex-col items-center justify-center w-full h-full p-1">
          <span style={{fontSize:'9px', fontWeight:'800', color:'white', letterSpacing:'-0.5px', lineHeight:1}}>amazon</span>
          <span style={{fontSize:'7px', fontWeight:'700', color:'#7fffd4', letterSpacing:'0px', lineHeight:1.2}}>one medical</span>
        </div>
      ),
      role: "Incoming SDE Co-op",
      team: "One Medical Product Development",
      period: "Jul 2026 – Jan 2027",
      location: "Santa Clara, CA",
      incoming: true,
      tags: ["Healthcare Tech", "AWS", "Full Stack"],
      achievements: ["Joining the One Medical Product Development team as an SDE Co-op, working on healthcare technology products at Amazon's Santa Clara office."]
    },
    {
      company: "Nokia Solutions",
      logoDotBg: "#005AFF",
      logoDotContent: (
        <span style={{fontSize:'11px', fontWeight:'900', color:'white', letterSpacing:'1px', fontFamily:'Arial, sans-serif'}}>NOKIA</span>
      ),
      role: "Software Developer",
      period: "May 2024 – Aug 2025",
      location: "Gurgaon, India",
      tags: ["Python", "Kafka", "CI/CD", "GPT", "REST APIs"],
      achievements: [
        "Designed an AI-powered internal assistant using Python, REST APIs, and GPT-based NLP to centralize search across 5,000+ internal documents, reducing retrieval time by 70% for 50+ engineers",
        "Implemented automated CI/CD pipelines with monitoring and rollback strategies across 4 engineering teams, reducing deployment failures by 50%",
        "Architected an Apache Kafka-based event reprocessing system for network telemetry pipelines, cutting error rates to <1%",
        "Drove cross-team technical alignment, reducing incident rates by 30% and shortening release cycles from 2 weeks to 1 week"
      ]
    },
    {
      company: "Grant Thornton",
      logoDotBg: "#6B2D8B",
      logoDotContent: (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <span style={{fontSize:'9px', fontWeight:'800', color:'white', letterSpacing:'0px', lineHeight:1.1, textAlign:'center'}}>Grant</span>
          <span style={{fontSize:'9px', fontWeight:'800', color:'white', letterSpacing:'0px', lineHeight:1.1, textAlign:'center'}}>Thornton</span>
        </div>
      ),
      role: "Software Developer (Internal Audit Team)",
      period: "Nov 2022 – May 2024",
      location: "Noida, India",
      tags: ["React", "PostgreSQL", "Docker", "Jenkins", "REST APIs"],
      achievements: [
        "Built a full-stack project management platform with React, Python, and PostgreSQL, centralizing workflows for 3,000+ projects and cutting response time by 35%",
        "Developed containerized CI/CD pipelines using Docker, Jenkins, and Git for 15+ microservices, reducing post-release defects by 60%",
        "Optimized high-traffic REST APIs and frontend performance, reducing response times by 20% supporting 300+ concurrent users"
      ]
    }
  ];

  const education = [
    { school: "Northeastern University", degree: "Master of Science in Information Systems", location: "Seattle, WA", period: "Sep 2025 – May 2027 (Expected)", gpa: "4.0/4.0", courses: ["Database Management Systems","Design Paradigm","Web Development","Cloud Computing"], current: true },
    { school: "Abdul Kalam Technical University", degree: "Bachelor of Technology, Computer Science", location: "India", period: "July 2015 – June 2019", gpa: "8.3/10.0", courses: ["Data Structures","Operating Systems","Computer Networks","Algorithm Design"], current: false }
  ];

  // ── theme tokens ──
  // ── PASTEL palette ──
  const P  = '#ADB2D4';  // lavender (dark accent)
  const PL = '#6B72A8';  // deeper lavender (light accent)
  const bg         = t('bg-[#0d1117]', 'bg-[#EEF1DA]');
  const card       = t('bg-[#1e2535] border-[#2a3347] hover:border-[#ADB2D4]/60', 'bg-white border-[#D4D8EE] hover:border-[#ADB2D4] shadow-sm');
  const txt        = t('text-white', 'text-slate-900');
  const txtMuted   = t('text-[#ADB2D4]', 'text-slate-600');
  const txtFaint   = t('text-[#7a82aa]', 'text-slate-500');
  const divider    = t('border-[#2a3347]', 'border-[#C7D9DD]');
  const navBg      = scrolled ? t('bg-[#0d1117]/95 backdrop-blur-md border-b border-[#2a3347]', 'bg-white/95 backdrop-blur-md border-b border-[#e2e5f0] shadow-sm') : 'bg-transparent';
  const expCardCls = t('bg-[#1e2535] border-[#2a3347]', 'bg-white border-[#D4D8EE] shadow-sm');
  const projCardCls= t('bg-[#1e2535] border-[#2a3347]', 'bg-white border-[#D4D8EE] shadow-sm');
  const moreCls    = t('bg-[#1e2535] border-[#2a3347] hover:border-[#ADB2D4]/60', 'bg-white border-[#D4D8EE] hover:border-[#ADB2D4] shadow-sm');
  const footerCls  = t('bg-[#0d1117] border-t border-[#1e2535]', 'bg-[#D5E5D5] border-t border-[#C7D9DD]');
  const modalCls   = t('bg-[#1e2535] border-[#2a3347]', 'bg-white border-[#D4D8EE]');
  const modalInputCls = t('bg-[#0d1117] border-[#2a3347] text-[#ADB2D4]', 'bg-[#EEF0F8] border-[#D4D8EE] text-slate-500');
  const socialCls  = t('border-[#2a3347] text-[#7a82aa] hover:border-[#ADB2D4] hover:text-[#ADB2D4]', 'border-[#e2e5f0] text-slate-500 hover:border-[#ADB2D4] hover:text-[#ADB2D4]');
  const filterInactive = t('bg-[#1e2535] text-[#7a82aa] hover:bg-[#2a3347] hover:text-[#ADB2D4] border border-[#2a3347]', 'bg-white text-slate-600 hover:bg-[#f1f3f9] border border-[#e2e5f0]');
  const menuCls    = t('bg-[#161b27] border-[#2a3347]', 'bg-[#EEF1DA] border-[#D4D8EE] shadow-lg');
  const accent     = isDark ? P : PL;

  // floating hero tags with brand colors
  const getBotReply = (msg) => {
    const m = msg.toLowerCase();
    if (m.includes('skill') || m.includes('tech') || m.includes('stack') || m.includes('language') || m.includes('framework'))
      return "Mansi's core stack includes Python, Java, TypeScript, React, Spring Boot, Node.js, PostgreSQL, Docker, Kubernetes, AWS, and Kafka. She also works with TensorFlow, PyTorch, and HuggingFace for AI/ML projects! 💻";
    if (m.includes('project') || m.includes('built') || m.includes('work'))
      return "Mansi has built some cool projects! NUMockBuddy (AI mock interview platform with Claude API), AuditIQ (security automation with NLP), OrbitFiles (cloud storage with RAG search), and TechCareer Analyzer (ML pipeline for job market data). Check them out on her GitHub! 🚀";
    if (m.includes('experience') || m.includes('job') || m.includes('work') || m.includes('company') || m.includes('nokia') || m.includes('grant'))
      return "Mansi has 3+ years of professional experience. She worked as a Software Developer at Nokia Solutions (2024-2025) and Grant Thornton (2022-2024). She's also joining Amazon's One Medical team as an SDE Co-op in July 2026! 🏢";
    if (m.includes('amazon') || m.includes('one medical') || m.includes('co-op') || m.includes('intern'))
      return "Mansi is joining Amazon's One Medical Product Development team as an SDE Co-op in Santa Clara, CA from July 2026 to January 2027. Super exciting opportunity in healthcare tech! 🟠";
    if (m.includes('education') || m.includes('degree') || m.includes('university') || m.includes('northeastern') || m.includes('gpa') || m.includes('school'))
      return "Mansi is pursuing her MS in Information Systems at Northeastern University, Seattle with a perfect 4.0 GPA, graduating May 2027. She did her BTech in Computer Science from AKTU, India. 🎓";
    if (m.includes('contact') || m.includes('email') || m.includes('reach') || m.includes('hire') || m.includes('connect'))
      return "You can reach Mansi at mansimaanu8627@gmail.com, connect on LinkedIn at linkedin.com/in/singh-mansi17, or check her GitHub at github.com/MansiSingh17. She's open to new opportunities! 📬";
    if (m.includes('location') || m.includes('where') || m.includes('seattle') || m.includes('city'))
      return "Mansi is currently based in Seattle, WA. She'll be relocating to Santa Clara, CA for her Amazon co-op starting July 2026! 📍";
    if (m.includes('open source') || m.includes('github') || m.includes('contribution'))
      return "Mansi actively contributes to open source! She has contributed to Apache Beam Python SDK and worked on GSoC projects with Kubeflow and Git. Check her GitHub at github.com/MansiSingh17 🔓";
    if (m.includes('leetcode') || m.includes('dsa') || m.includes('algorithm') || m.includes('competitive'))
      return "Mansi loves DSA and competitive programming! You can find her on LeetCode at leetcode.com/u/Mansi1727 and she regularly practices algorithms and data structures. 📊";
    if (m.includes('hello') || m.includes('hi') || m.includes('hey') || m.includes('hola'))
      return "Hi there! 👋 I'm Mansi's portfolio assistant. Ask me about her skills, projects, experience, education, or how to contact her!";
    return "Great question! I can tell you about Mansi's skills, projects, work experience, education, or contact info. What would you like to know? 😊";
  };

  const sendMessage = async (text) => {
    const userMsg = text || chatInput.trim();
    if (!userMsg) return;
    setChatMessages(prev => [...prev, {role:'user', text: userMsg}]);
    setChatInput('');
    setChatLoading(true);
    await new Promise(r => setTimeout(r, 600));
    const reply = getBotReply(userMsg);
    setChatMessages(prev => [...prev, {role:'bot', text: reply}]);
    setChatLoading(false);
  };

  const heroTags = [
    {
      cls: "tag-float-1 absolute -top-4 left-0",
      label: "Full Stack", emoji: "⚡",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#ADB2D4]/50", lightBorder: "border-[#ADB2D4]/60",
      darkText: "text-[#ADB2D4]", lightText: "text-[#6B72A8]",
      icon: null
    },
    {
      cls: "tag-float-2 absolute top-1/4 -left-10",
      label: "Backend Dev", emoji: "🔧",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#D5E5D5]/50", lightBorder: "border-[#D5E5D5]",
      darkText: "text-[#a0c8a0]", lightText: "text-[#3a7a4a]",
      icon: null
    },
    {
      cls: "tag-float-3 absolute bottom-1/4 -left-8",
      label: "ML & AI", emoji: "🤖",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#ADB2D4]/50", lightBorder: "border-[#ADB2D4]/60",
      darkText: "text-[#ADB2D4]", lightText: "text-[#6B72A8]",
      icon: null
    },
    {
      cls: "tag-float-4 absolute -top-4 right-0",
      label: "Cloud & DevOps", emoji: "☁️",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#C7D9DD]/50", lightBorder: "border-[#C7D9DD]",
      darkText: "text-[#C7D9DD]", lightText: "text-[#4a7a8a]",
      icon: null
    },
    {
      cls: "tag-float-5 absolute top-1/4 -right-10",
      label: "Open Source", emoji: "🔓",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#D5E5D5]/50", lightBorder: "border-[#D5E5D5]",
      darkText: "text-[#a0c8a0]", lightText: "text-[#3a7a4a]",
      icon: null
    },
    {
      cls: "tag-float-6 absolute bottom-1/4 -right-8",
      label: "Distributed Systems", emoji: "🏗️",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#ADB2D4]/50", lightBorder: "border-[#ADB2D4]/60",
      darkText: "text-[#ADB2D4]", lightText: "text-[#6B72A8]",
      icon: null
    },
  ];

  return (
    <div className={`min-h-screen ${bg} ${txt} transition-colors duration-300`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Caveat:wght@400;500;600&display=swap');
        * { font-family: 'Inter', sans-serif; }
        @keyframes float  { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-12px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-8px)}  }
        .scroll-animate { opacity:0; transform:translateY(28px); transition:opacity .6s ease,transform .6s ease; }
        .animate-in { opacity:1; transform:translateY(0); }
        .tag-float-1{animation:float  4.0s ease-in-out infinite 0.0s}
        .tag-float-2{animation:floatB 5.0s ease-in-out infinite 0.5s}
        .tag-float-3{animation:float  4.5s ease-in-out infinite 1.0s}
        .tag-float-4{animation:floatB 3.8s ease-in-out infinite 0.2s}
        .tag-float-5{animation:float  5.2s ease-in-out infinite 0.8s}
        .tag-float-6{animation:floatB 4.2s ease-in-out infinite 1.5s}
        .timeline-line{position:absolute;left:21px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,#ADB2D4,#C7D9DD,#D5E5D5);}
        .modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:999;display:flex;align-items:center;justify-content:center;padding:1rem;}
        .exp-card{border-radius:.75rem;padding:1.5rem;border-width:1px;border-style:solid;transition:all .3s ease;}
        .exp-card{border:2px solid rgba(173,178,212,0.4);}.exp-card:hover{box-shadow:0 12px 36px rgba(213,229,213,0.4);transform:translateY(-6px);border-color:#ADB2D4 !important;}
        .scroll-down-indicator{display:flex;flex-direction:column;align-items:center;gap:.25rem;font-size:.75rem;}
        .scroll-mouse{width:24px;height:38px;border-radius:12px;display:flex;justify-content:center;padding-top:6px;border-width:2px;border-style:solid;}
        .scroll-wheel{width:4px;height:8px;border-radius:2px;animation:scrollWheel 1.5s ease-in-out infinite;}
        @keyframes scrollWheel{0%{transform:translateY(0);opacity:1}100%{transform:translateY(10px);opacity:0}}

        .nav-link{position:relative;padding-bottom:2px;}
        .nav-link::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:#ADB2D4;transition:width .25s ease;}
        .nav-link:hover::after{width:100%;}
      `}</style>

      {/* Scroll progress */}
      <div className={`fixed top-0 left-0 w-full h-0.5 z-50 ${t('bg-gray-800','bg-slate-200')}`}>
        <div className="h-full transition-all duration-300" style={{ width: `${scrollProgress}%`, background: accent }} />
      </div>

      {/* NAV */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${navBg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <span className='text-xl font-extrabold font-mono tracking-tight' style={{color: accent}}>&lt;MS/&gt;</span>

            <div className="hidden md:flex items-center space-x-7">
              {['About','Skills','Experience','Projects','Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className={`nav-link text-sm font-semibold transition-colors ${txtMuted} hover:text-[#ADB2D4]`}>{item}</a>
              ))}

              <button onClick={() => setShowResumeModal(true)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg transition-all text-sm font-semibold border"
                style={{borderColor: accent, color: accent}}
                onMouseEnter={e=>{e.currentTarget.style.background=accent; e.currentTarget.style.color=isDark?'#0d1117':'white';}}
                onMouseLeave={e=>{e.currentTarget.style.background=''; e.currentTarget.style.color=accent;}}>
                <Lock size={13} /> Request Resume
              </button>

              {/* Theme toggle - single icon */}
              <button onClick={() => setIsDark(d => !d)}
                className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300 ${t('border-[#2a3347] bg-[#161b27]','border-[#ADB2D4] bg-[#EEF1DA]')}`}
                aria-label="Toggle theme"
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
                {isDark
                  ? <Sun size={16} style={{color:'#fbbf24'}} />
                  : <Moon size={16} style={{color: PL}} />
                }
              </button>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button onClick={() => setIsDark(d => !d)}
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${t('border-[#2a3347] bg-[#161b27]','border-[#ADB2D4] bg-[#EEF1DA]')}`}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
                {isDark ? <Sun size={15} className="text-yellow-400"/> : <Moon size={15} className="text-slate-600"/>}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={txtMuted}>
                {isMenuOpen ? <X size={20}/> : '☰'}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className={`md:hidden pb-4 space-y-2 rounded-lg mt-2 p-4 border ${menuCls}`}>
              {['About','Skills','Experience','Projects','Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-sm font-medium ${txtMuted} hover:text-[#ADB2D4]`}>{item}</a>
              ))}
              <button onClick={() => { setShowResumeModal(true); setIsMenuOpen(false); }}
                className="block w-full text-left py-2 text-sm font-semibold" style={{color:accent}}>Request Resume</button>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className={`relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden`} style={{background: isDark?'#0d1117':'white'}}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(${t('rgba(255,255,255,.15)','rgba(0,0,0,.07)')} 1px,transparent 1px),linear-gradient(90deg,${t('rgba(255,255,255,.15)','rgba(0,0,0,.07)')} 1px,transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left: text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className={`text-base mb-2 ${txtMuted}`}>Hi, I'm</p>
            <h1 className={`text-5xl sm:text-6xl font-bold mb-3 leading-tight ${txt}`}>Mansi Singh</h1>
            <p className="text-xl font-medium mb-6 h-8" style={{color: accent}}>
              <span className={txt}>{typewriterText}</span><span className="animate-pulse" style={{color: accent}}>|</span>
            </p>
            <p className={`text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0 ${t('text-gray-400','text-slate-900')}`}>
              MS in Information Systems at Northeastern University (4.0 GPA). 3+ years at Nokia &amp; Grant Thornton. Incoming Amazon SDE Co-op, One Medical.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <button onClick={() => setShowResumeModal(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all text-sm font-semibold shadow-lg" style={{background: accent, color: isDark?'#0d1117':'white'}}>
                <Lock size={14}/> Request My Resume
              </button>
              <a href="#projects"
                className={`flex items-center gap-2 border px-5 py-2.5 rounded-lg transition-all text-sm font-medium ${t('border-[#2a3347] text-[#ADB2D4] hover:border-[#ADB2D4] hover:text-white','border-[#ADB2D4] text-slate-700 hover:border-[#6B72A8] hover:text-slate-900')}`}>
                View My Work
              </a>
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { href:"https://github.com/MansiSingh17", icon:<GithubSVG size={18} color={isDark ? "white" : "#1a1a1a"} /> },
                { href:"https://www.linkedin.com/in/singh-mansi17/", icon:<LinkedinSVG size={18} /> },
                { href:"mailto:mansimaanu8627@gmail.com", icon:<GmailSVG size={18} /> }
              ].map((s,i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${socialCls}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: photo + floating tags */}
          <div className="order-1 md:order-2 flex justify-center relative py-14">
            {heroTags.map((tag, i) => (
              <div key={i} className={`${tag.cls} ${isDark ? tag.darkBg : tag.lightBg} border ${isDark ? tag.darkBorder : tag.lightBorder} text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2 z-20 shadow-lg`}>
                {tag.icon
                  ? tag.icon
                  : <span className="text-sm">{tag.emoji}</span>
                }
                <span className={isDark ? tag.darkText : tag.lightText}>{tag.label}</span>
              </div>
            ))}

            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-[3px] p-1"
              style={{ borderColor: isDark?'#ADB2D4':'#ADB2D4', background: isDark?'#1e2535':'#e8eaf6' }}>
              <img src="/mansi.jpg" alt="Mansi Singh"
                className="w-full h-full object-cover object-top rounded-full"
                onError={(e) => { e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Mansi"; }}/>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 scroll-down-indicator ${txtFaint}`}>
          <div className='scroll-mouse' style={{borderColor: isDark?'#2a3347':'#ADB2D4'}}>
            <div className='scroll-wheel' style={{background: isDark?'#2a3347':'#ADB2D4'}}/>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* RESUME MODAL */}
      {showResumeModal && (
        <div className="modal-backdrop" onClick={() => setShowResumeModal(false)}>
          <div className={`rounded-2xl p-8 max-w-[440px] w-full relative shadow-2xl border ${modalCls}`} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowResumeModal(false)}
              className={`absolute top-4 right-4 transition-colors ${t('text-gray-500 hover:text-gray-300','text-slate-400 hover:text-slate-700')}`}>
              <X size={18}/>
            </button>
            <h2 className={`text-xl font-bold text-center mb-1 ${txt}`}>Request My Resume</h2>
            <div className={`border-t my-4 ${t('border-gray-700','border-slate-200')}`}/>
            <div className="flex flex-col items-center text-center gap-4">
              <div className='w-14 h-14 rounded-full flex items-center justify-center' style={{background:`${accent}22`, border:`1px solid ${accent}66`}}>
                <Lock size={24} style={{color: accent}}/>
              </div>
              <p className={`text-sm leading-relaxed ${txtMuted}`}>To protect my contact information, I keep my resume behind a request wall.</p>
              <p className={`text-sm font-semibold ${txt}`}>Please request access on the following Google Drive page.</p>
              <div className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm border ${modalInputCls}`}>
                <Clock size={15} className="text-yellow-500 flex-shrink-0"/>
                I typically approve requests within <span className={`font-semibold ml-1 ${txt}`}>48 hours</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowResumeModal(false)}
                className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-all ${t('border-gray-700 text-gray-400 hover:text-white hover:border-gray-500','border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400')}`}>
                Cancel
              </button>
              <a href="https://drive.google.com/your-resume-link" target="_blank" rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all" style={{background: accent, color: isDark?'#0d1117':'white'}}>
                Proceed to Drive <ExternalLink size={14}/>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT */}
      <section id="about" className={`relative z-10 scroll-animate`} style={{background: isDark?'#161b27':'white'}}>
        <div className="flex flex-col md:grid md:grid-cols-2 min-h-[60vh]">
          <div className="w-full h-64 md:h-full bg-cover bg-center" style={{ backgroundImage: 'url(/about-illustration.jpg)' }}/>
          <div className="flex flex-col justify-center px-8 lg:px-14 py-16 space-y-5">
            <h2 className="text-3xl font-bold" style={{color: isDark?"white":"#1e293b"}}>👨‍💻 About Me</h2>
            <div className={`space-y-4 text-sm leading-relaxed ${t('text-[#ADB2D4]','text-slate-700')}`}>
              <p>
                I'm a <strong>Software Developer</strong> pursuing my <strong>Master's in Information Systems</strong> at <strong>Northeastern University</strong> with a perfect <strong>4.0 GPA</strong>. With <strong>3+ years</strong> of professional experience at <strong>Nokia Solutions</strong> and <strong>Grant Thornton</strong>, I specialize in building <strong>scalable full-stack applications</strong>, <strong>distributed backend systems</strong>, and implementing <strong>DevOps best practices</strong> across large engineering teams.
              </p>
              <p>
                I have a strong track record of delivering measurable impact — reduced <strong>deployment failures by 50%</strong>, improved <strong>API response times by 35%</strong> across 3,000+ projects, architected <strong>Kafka-based event pipelines</strong> cutting error rates to under 1%, and built <strong>GPT-powered internal tools</strong> that enhanced team efficiency by <strong>70%</strong> for 50+ engineers.
              </p>
              <p>
                My core stack includes <strong>Python, Java, TypeScript, React, Spring Boot, Node.js, PostgreSQL, Docker, Kubernetes</strong>, and <strong>AWS</strong>. I'm passionate about <strong>system design</strong>, <strong>cloud-native architecture</strong>, and building products that scale.
              </p>
              <p>
                In <strong>July 2026</strong>, I'm joining <strong>Amazon's One Medical</strong> team as an <strong>SDE Co-op</strong> in Santa Clara, working on healthcare technology at scale. I'm actively contributing to <strong>open source</strong> and always looking for opportunities to solve hard engineering problems.
              </p>
            </div>
            <a href="mailto:mansimaanu8627@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all text-sm font-medium w-fit" style={{background: accent, color: isDark?'#0d1117':'white'}}>
              <Mail size={15}/> Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#0d1117':'white'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
<h2 className="text-3xl font-bold" style={{color: isDark ? "white" : "#8B92C4"}}>🎓 Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div key={i} className={`group rounded-2xl transition-all duration-300 ${card}`}
                style={{boxShadow:'none', border:'2px solid', borderColor: isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow=isDark?'0 12px 36px rgba(213,229,213,0.25)':'0 12px 36px rgba(213,229,213,0.5)'; e.currentTarget.style.borderColor='#ADB2D4';}}
                onMouseLeave={e=>{e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor=isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)';}}>
                <div className="p-7">
                <div className={`flex justify-between items-start mb-5 pb-4 border-b ${divider}`}>
                  <div className="flex-1">
                    <h3 className={`text-base font-bold mb-1 transition-colors duration-300 ${t("group-hover:text-white","group-hover:text-slate-900")} ${txt}`}>{edu.degree}</h3>
                    <p className="font-semibold text-sm mb-2 transition-all duration-300 group-hover:opacity-100 opacity-75 group-hover:tracking-wide" style={{color: accent}}>{edu.school}</p>
                    <p className={`text-xs font-medium ${t('text-gray-400','text-slate-900')}`}>📍 {edu.location}</p>
                    <p className={`text-xs font-medium ${t('text-gray-400','text-slate-900')}`}>📅 {edu.period}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end ml-3">
                    {edu.current && <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all duration-300 group-hover:scale-105 inline-block" style={{background: accent, color: isDark?'#0d1117':'white'}}>Current</span>}
                    <span className={`border px-2.5 py-0.5 rounded-full text-xs font-bold ${t('bg-[#D5E5D5]/20 border-[#D5E5D5]/40 text-[#a0c8a0]','bg-[#D5E5D5] border-[#C7D9DD] text-[#3a7a4a]')}`}>GPA: {edu.gpa}</span>
                  </div>
                </div>
                <p className={`text-xs font-bold uppercase tracking-wide mb-3 transition-all duration-300 ${t("text-gray-400 group-hover:text-[#ADB2D4]","text-slate-500 group-hover:text-[#6B72A8]")}`}>Coursework</p>
                {edu.courses.map((c,j) => <p key={j} className={`text-sm font-medium transition-colors duration-300 ${t("text-gray-400 group-hover:text-gray-200","text-slate-700 group-hover:text-slate-900")}`}>• {c}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#161b27':'white'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
<h2 className="text-3xl font-bold" style={{color: isDark ? "white" : "#8B92C4"}}>🛠️ Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <div key={i} className={`group rounded-2xl transition-all duration-300 ${card}`}
                style={{boxShadow:'none', border:'2px solid', borderColor: isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow=isDark?'0 12px 36px rgba(213,229,213,0.25)':'0 12px 36px rgba(213,229,213,0.5)'; e.currentTarget.style.borderColor='#ADB2D4';}}
                onMouseLeave={e=>{e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor=isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)';}}>
                <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-lg transition-all duration-300 group-hover:scale-110 ${isDark ? cat.darkBg : cat.lightBg}`}>{cat.icon}</div>
                  <h3 className={`text-sm font-bold transition-colors duration-300 ${t("group-hover:text-[#ADB2D4]","group-hover:text-[#6B72A8]")} ${txt}`}>{cat.title}</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {cat.skills.map((skill, j) => (
                    <div key={j} className="flex flex-col items-center gap-1.5 group cursor-default">
                      <div className="w-9 h-9 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain"/>
                      </div>
                      <span className={`text-xs font-semibold text-center leading-tight transition-colors duration-300 ${t("text-gray-400 group-hover:text-[#ADB2D4]","text-slate-500 group-hover:text-[#6B72A8]")}`}>{skill.name}</span>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#0d1117':'white'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className={`text-xs uppercase tracking-widest mb-2 ${txtFaint}`}>Where I've worked</p>
<h2 className="text-3xl font-bold" style={{color: isDark ? "white" : "#8B92C4"}}>💼 Experience</h2>
          </div>

          <div className="relative pl-16">
            {/* vertical timeline line */}
            <div className="timeline-line"/>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">

                  {/* company logo dot */}
                  <div className={`absolute -left-16 w-14 h-14 rounded-full border-2 flex items-center justify-center shadow-lg overflow-hidden ${
                    exp.incoming
                      ? ''
                      : t('border-[#2a3347]','border-[#C7D9DD]')
                  }`} style={{ background: exp.logoDotBg }}>
                    {exp.logoDotContent}
                  </div>

                  {/* card */}
                  <div className={`exp-card group ${exp.incoming
                    ? t('border-[#ADB2D4]/50 bg-[#ADB2D4]/5','border-[#6B72A8]/40 bg-[#ADB2D4]/10')
                    : expCardCls
                  }`}>

                    {/* header row */}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                      <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className={`text-base font-bold ${txt}`}>{exp.role}</h3>
                            {exp.incoming && (
                              <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold" style={{background: accent, color: isDark?'#0d1117':'white'}}>Incoming</span>
                            )}
                          </div>
                          <p className='text-sm font-semibold' style={{color: accent}}>{exp.company}</p>
                          {exp.team && <p className={`text-xs mt-0.5 ${txtFaint}`}>{exp.team}</p>}
                      </div>
                      <div className={`flex flex-col sm:items-end gap-1 text-xs shrink-0 ${txtFaint}`}>
                        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-medium ${t('border-gray-700 bg-gray-800/50 text-gray-400','border-slate-300 bg-slate-100 text-slate-900')}`}>
                          📅 {exp.period}
                        </span>
                        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-medium ${t('border-gray-700 bg-gray-800/50 text-gray-400','border-slate-300 bg-slate-100 text-slate-900')}`}>
                          📍 {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* divider */}
                    <div className={`border-t mb-3 ${t('border-gray-800','border-slate-100')}`}/>

                    {/* achievements */}
                    <div className="space-y-2.5 mb-4">
                      {exp.achievements.map((a, j) => (
                        <div key={j} className={`flex items-start gap-2.5 text-sm leading-relaxed ${txtMuted}`}>
                          <ArrowRight className='w-3.5 h-3.5 flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110' style={{color: accent}}/>
                          <span className={`transition-colors duration-300 ${t('group-hover:text-gray-200','group-hover:text-slate-900')} ${t('text-gray-400','text-slate-700')}`}>{a}</span>
                        </div>
                      ))}
                    </div>

                    {/* tech tags */}
                    {exp.tags && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, j) => (
                          <span key={j}
                            className="text-xs px-3 py-1 rounded-full font-medium transition-all duration-300"
                            style={{
                              border: '1.5px solid #D5E5D5',
                              color: isDark ? '#ADB2D4' : '#6B72A8',
                              background: isDark ? 'rgba(213,229,213,0.15)' : 'rgba(213,229,213,0.3)'
                            }}
                            onMouseEnter={e=>{e.currentTarget.style.background='rgba(213,229,213,0.3)'; e.currentTarget.style.borderColor='#ADB2D4'; e.currentTarget.style.transform='scale(1.05)';}}
                            onMouseLeave={e=>{e.currentTarget.style.background=isDark?'rgba(213,229,213,0.15)':'rgba(213,229,213,0.3)'; e.currentTarget.style.borderColor='#D5E5D5'; e.currentTarget.style.transform='';}}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#161b27':'white'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
<h2 className="text-3xl font-bold" style={{color: isDark ? "white" : "#8B92C4"}}>🚀 Featured Projects</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['All','Full Stack','AI/ML','Frontend','Mobile'].map(cat => (
              <button key={cat} onClick={() => setFilterCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filterCategory === cat ? '' : filterInactive} style={filterCategory===cat?{background:accent,color:isDark?'#0d1117':'white'}:{}}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((p, i) => (
              <div key={i} className={`rounded-xl transition-all duration-300 max-w-xs mx-auto w-full ${projCardCls}`}
                style={{boxShadow:'none', border:'2px solid', borderColor: isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow=isDark?'0 12px 36px rgba(213,229,213,0.25)':'0 12px 36px rgba(213,229,213,0.5)'; e.currentTarget.style.borderColor='#ADB2D4';}}
                onMouseLeave={e=>{e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor=isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)';}}>
                <div className="p-3">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden rounded-lg mb-3 h-44">
                    <img src={p.illustration} alt={p.title} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"/>
                  </div>
                </a>
                <h3 className={`text-sm font-bold mb-1.5 leading-tight ${txt}`}>{p.title}</h3>
                <p className={`text-xs leading-relaxed mb-3 line-clamp-3 ${t("text-gray-500","text-slate-800")}`}>{p.description}</p>
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors" style={{color: accent}}>
                  <Github size={13}/> View Code
                </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIT MORE */}
      <section className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#0d1117':'white'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
<h2 className="text-3xl font-bold" style={{color: isDark ? "white" : "#8B92C4"}}>A bit more about me 👩‍💻</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreAboutMe.map((item, i) => (
              <div key={i} className={`group rounded-2xl flex flex-col items-center text-center transition-all duration-300 ${moreCls}`}
                style={{boxShadow:'none', border:'2px solid', borderColor: isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow=isDark?'0 12px 36px rgba(213,229,213,0.25)':'0 12px 36px rgba(213,229,213,0.5)'; e.currentTarget.style.borderColor='#ADB2D4';}}
                onMouseLeave={e=>{e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor=isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)';}}>
                <div className="p-8 flex flex-col items-center w-full">
                {/* icon container with accent bg on hover */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${t('bg-[#2a3347] group-hover:bg-[#ADB2D4]/20','bg-[#EEF1DA] group-hover:bg-[#ADB2D4]/20')}`}>
                  {item.icon}
                </div>
                <div className='w-8 h-0.5 mb-4 rounded-full transition-all duration-300' style={{background: isDark?'#2a3347':'#C7D9DD'}} onMouseEnter={e=>e.target.style.background=accent} onMouseLeave={e=>e.target.style.background=isDark?'#2a3347':'#C7D9DD'}/>
                <h3 className={`text-sm font-bold mb-3 uppercase tracking-widest transition-colors duration-300 ${t('text-[#ADB2D4]','text-slate-700')}`}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${t("text-gray-500","text-slate-800")}`} dangerouslySetInnerHTML={{ __html: item.description }}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`relative z-10 py-16 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#161b27':'white'}}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: isDark ? "white" : "#8B92C4"}}>📬 Let's Connect</h2>
          <p className={`text-sm mb-8 ${txtMuted}`}>Open to collaborations, new opportunities, or just saying hi.</p>
          <div className="flex justify-center gap-4 mb-8">
            {[
              { href:"mailto:mansimaanu8627@gmail.com", icon:<GmailSVG size={20} /> },
              { href:"https://github.com/MansiSingh17", icon:<GithubSVG size={20} color={isDark ? "white" : "#1a1a1a"} /> },
              { href:"https://www.linkedin.com/in/singh-mansi17/", icon:<LinkedinSVG size={20} /> }
            ].map((s,i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${socialCls}`}>
                {s.icon}
              </a>
            ))}
          </div>
          <p className={`text-xs ${txtFaint}`}>📍 Seattle, WA &nbsp;•&nbsp; 📞 (206) 847-4378</p>
        </div>
      </section>

      <footer className={`relative z-10 py-5 px-4 ${footerCls}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-xs ${txtFaint}`}>&copy; 2025 Mansi Singh</p>
        </div>
      </footer>


      {/* CHATBOT */}
      <div className="fixed bottom-8 right-8 z-50">
        {/* "Ask me" hint */}
        {!showChat && (
          <div className="absolute -top-20 -right-2 pointer-events-none" style={{width:'160px'}}>
            <p style={{fontFamily:"'Caveat', cursive", fontSize:'18px', lineHeight:'1.3', color: isDark ? '#9ca3af' : '#64748b', fontWeight:'500'}}>Ask me something about me!</p>
            <svg style={{marginTop:'4px', marginLeft:'60px'}} width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M5 5 Q20 5 20 15 Q20 24 14 26" stroke={isDark?"#9ca3af":"#64748b"} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M10 23 L14 27 L18 23" stroke={isDark?"#9ca3af":"#64748b"} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}

        {/* Chat window */}
        {showChat && (
          <div className={`w-80 rounded-2xl shadow-2xl overflow-hidden mb-4 flex flex-col ${t('bg-[#1a1a2e]','bg-gray-900')}`} style={{height:'480px'}}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{background: accent}}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{background:`${accent}cc`, color: isDark?'#0d1117':'white'}}>🤖</div>
                <div>
                  <p className="text-white text-sm font-bold">Portfolio Assistant</p>
                  <p className="text-xs flex items-center gap-1" style={{color: isDark?'#c8cbee':'white'}}><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"/>Ready to help</p>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} className="text-blue-200 hover:text-white transition-colors"><X size={18}/></button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role==='user' ? 'justify-end' : 'justify-start'} items-end gap-2`}>
                  {msg.role==='bot' && <div className="w-7 h-7 rounded-lg bg-gray-700 flex items-center justify-center text-xs flex-shrink-0">🤖</div>}
                  <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                    msg.role==='user'
                      ? 'rounded-br-sm' : 'rounded-bl-sm'} style={msg.role==='user'?{background:accent,color:isDark?'#0d1117':'white'}:{}
                      : t('bg-gray-700 text-gray-100','bg-gray-800 text-gray-100') + ' rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gray-700 flex items-center justify-center text-xs">🤖</div>
                  <div className="bg-gray-700 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'0ms'}}/>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'150ms'}}/>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'300ms'}}/>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick chips */}
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {['Skills','Projects','Experience','Contact'].map(chip => (
                <button key={chip} onClick={() => sendMessage(chip)}
                  className="text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-300 transition-all" style={{}} onMouseEnter={e=>{e.currentTarget.style.borderColor=accent;e.currentTarget.style.color=accent;}} onMouseLeave={e=>{e.currentTarget.style.borderColor='';e.currentTarget.style.color='';}}>
                  {chip}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 pb-4 flex gap-2">
              <input
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key==='Enter' && sendMessage()}
                placeholder="Type your question..."
                className="flex-1 bg-gray-800 text-white text-xs rounded-full px-4 py-2.5 outline-none border border-gray-700 placeholder-gray-500" style={{outline:'none'}}
              />
              <button onClick={() => sendMessage()}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all flex-shrink-0" style={{background: accent, color: isDark?'#0d1117':'white'}}>
                <ArrowRight size={16}/>
              </button>
            </div>

            <div className="text-center pb-2">
              <p className="text-gray-600 text-[9px] uppercase tracking-widest">Powered by Claude AI</p>
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button onClick={() => setShowChat(c => !c)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 text-2xl" style={{background: accent, color: isDark?'#0d1117':'white', boxShadow:`0 8px 24px ${accent}66`}}>
          {showChat ? <X size={22}/> : '🤖'}
        </button>
      </div>


    </div>
  );
}