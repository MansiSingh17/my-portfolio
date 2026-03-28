import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, ArrowRight, Award, Briefcase, Download, 
  ChevronUp, X, Laptop, Globe, Wrench, BookOpen, Monitor, 
  LayoutGrid, Layers, MessageCircle 
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  
  const titles = ["Software Developer", "Full Stack Engineer", "Data Science & ML Enthusiast", "Competitive Programmer"];
  const [titleIndex, setTitleIndex] = useState(0);

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
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 50);
      setShowBackToTop(scrollTop > 500);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filterCategory]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Custom Gradient for Backgrounds
  const customGradientStyle = {
    background: 'linear-gradient(135deg, rgba(173, 178, 212, 0.3) 0%, rgba(199, 217, 221, 0.3) 33%, rgba(213, 229, 213, 0.3) 66%, rgba(238, 241, 218, 0.3) 100%)'
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: <Laptop size={20} />,
      bgClass: "bg-blue-100 text-blue-600",
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
      title: "Frameworks & Backend",
      icon: <Globe size={20} />,
      bgClass: "bg-teal-100 text-teal-600",
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
      title: "DevOps & Cloud",
      icon: <Wrench size={20} />,
      bgClass: "bg-gray-100 text-gray-600",
      skills: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" }
      ]
    },
    {
      title: "Databases & Messaging",
      icon: <BookOpen size={20} />,
      bgClass: "bg-purple-100 text-purple-600",
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
      title: "AI/ML Libraries",
      icon: <Monitor size={20} />,
      bgClass: "bg-emerald-100 text-emerald-600",
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
    {
      title: "FULLSTACK",
      icon: <LayoutGrid size={40} className="text-primary" />,
      description: "Crafting robust applications to effortlessly manage vast data streams, while sculpting user interfaces that turn interactions into a smooth and intuitive experience. Embracing full-stack development, I seamlessly integrate backend and frontend elements for a holistic digital journey."
    },
    {
      title: "COMPETITIVE CODING",
      icon: <Layers size={40} className="text-primary" />,
      description: `I'm really into DSA and always practicing to learn more and more because I love it! <a href="https://leetcode.com/u/Mansi1727/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-slate-800 font-bold hover:text-orange-500 transition-colors ml-1"><img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="Leetcode" class="w-4 h-4" />Leetcode</a>`
    },
    {
      title: "LEADERSHIP",
      icon: <Briefcase size={40} className="text-primary" />,
      description: "Eagerly anticipating fresh challenges to fuel personal growth while fostering an environment where others flourish alongside me."
    },
    {
      title: "HOBBIES",
      icon: <MessageCircle size={40} className="text-primary" />,
      description: "Fueled by an unwavering passion for adventure and a deep love for nature, I'm an avid traveler always seeking new experiences. Off the road, you'll often find me in the gym, pushing my limits and embracing my commitment to health, strength, and fitness."
    }
  ];

  const allProjects = [
    {
    title: "NUMockBuddy — AI Mock Interview Platform",
    description: "AI-powered mock interview prep built exclusively for Northeastern University students. Features 6 parallel Claude API reviewers, AssemblyAI live transcription, Claude Vision body language analysis, RAG-powered career assistant, and a peer volunteer network with Google Meet integration.",
    tech: ["Next.js 14", "Claude API", "AssemblyAI", "LangChain", "PostgreSQL", "Monaco IDE"],
    github: "https://github.com/MansiSingh17/NUMockBuddy",
    live: "https://numockbuddy.netlify.app/",
    illustration: "/numockbuddy.svg",
    category: "Full Stack"
    },
    {
      title: "AuditIQ - Audit Quality Assistant",
      description: "Full-stack automation platform for security standard checklists (ISO 27001, GDPR) using NLP models, reducing manual effort by 70%.",
      tech: ["React", "Spring Boot", "Python", "AWS S3", "Docker"],
      github: "https://github.com/MansiSingh17/audit-iq", 
      illustration: "/audit.jpg",
      category: "Full Stack"
    },
    {
      title: "OrbitFiles - Cloud Storage Platform",
      description: "Secure cloud storage platform with AI-powered semantic search, file encryption, and seamless collaboration features.",
      tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Drizzle ORM", "Clerk"],
      github: "https://github.com/MansiSingh17/orbitfiles",
      illustration: "/orbit.jpg",
      category: "Full Stack"
    },
    {
      title: "TechCareer Analyzer - ML Career Path Predictor",
      description: "Engineered ML pipeline processing 10,000+ job postings using pandas/NumPy and implementing BERT with PyTorch for 92% skill extraction accuracy. Built TensorFlow classification models to predict salary ranges based on skill combinations with 85% accuracy.",
      tech: ["Python", "TensorFlow", "PyTorch", "BERT", "pandas", "Matplotlib"],
      github: "https://github.com/MansiSingh17/techcareer-analyzer", 
      illustration: "/techcareer.jpg",
      category: "AI/ML"
    },
    {
      title: "React Gamehub SPA",
      description: "Complete React Gamehub SPA using Vite with conditional page rendering, custom form validation, and five interactive features including adaptive hamburger navigation, theme switching, and modal dialogs. Implemented WCAG AA accessibility standards with semantic HTML, keyboard controls, and skiplinks across all views.",
      tech: ["React", "Vite", "CSS3", "WCAG AA", "Semantic HTML"],
      github: "https://github.com/MansiSingh17/Gamehub/tree/main/game-hub", 
      illustration: "/gamehub.png",
      category: "Frontend"
    },
    {
      title: "WeatherNow - iOS Weather Application",
      description: "A modern, location-aware iOS weather app built with Swift and SwiftUI, delivering real-time updates with a beautiful, animated interface.",
      tech: ["Swift", "SwiftUI", "CoreLocation", "OpenWeatherMap API", "MVVM"],
      github: "https://github.com/MansiSingh17/WeatherNow",
      illustration: "/weather.jpg",
      category: "Mobile"
    },
    {
      title: "Seattle Service Hub",
      description: "AI-powered platform for Seattle with real-time tracking of 5,000+ service requests, interactive maps, and an AI chatbot.",
      tech: ["React", "Leaflet.js", "Node.js", "Seattle Open Data API"],
      github: "https://github.com/MansiSingh17?tab=repositories", 
      illustration: "/seattle.jpg", 
      category: "Full Stack"
    },
    {
      title: "CityPulse Connect",
      description: "AI-powered city service platform with predictive resolution times, multilingual support, and a comprehensive analytics dashboard.",
      tech: ["React 18", "Vite", "Recharts", "Tailwind CSS"],
      github: "https://github.com/MansiSingh17/citypulse-connect",
      illustration: "/citypulse.jpg",
      category: "AI/ML"
    },
    {
      title: "Responsive Web App",
      description: "Responsive website featuring adaptive 12-column grid layouts, custom hamburger navigation, and JavaScript-driven form validation with real-time error handling. Implemented accessibility best practices including skiplinks, keyboard controls, and screen reader compatibility.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Accessibility"],
      github: "https://github.com/MansiSingh17/Web-Portal-with-Interactive-Forms", 
      illustration: "/responsive.jpg",
      category: "Frontend"
    },
    {
      title: "Dragon Heaven",
      description: "Fully responsive, accessible multi-page website built with semantic HTML5 and a custom 12-column CSS Grid system.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/MansiSingh17/Drageon-Heaven---Multi-Page-Website", 
      illustration: "/dragon.jpg",
      category: "Frontend"
    }
  ];

  const filteredProjects = filterCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filterCategory);

  const experiences = [
    {
      company: "Nokia Solutions",
      role: "Software Developer",
      period: "May 2024 – Aug 2025",
      location: "Gurgaon, India",
      achievements: [
        "Designed an AI-powered internal assistant using Python, REST APIs, and GPT-based NLP to centralize search across 5,000+ internal documents, reducing information retrieval time by 70% for 50+ engineers",
        "Implemented automated CI/CD pipelines with monitoring and rollback strategies across 4 engineering teams to replace unstable manual releases, reducing deployment failures by 50%",
        "Architected an Apache Kafka-based event reprocessing system for network telemetry pipelines to automatically recover schema/validation failures in thousands of JSON packets, cutting error rates to <1% and eliminating manual backlog",
        "Authored production design documents and drove cross-team technical alignment across 4 engineering teams to standardize system architecture, reducing incident rates by 30% and shortening release cycles from 2 weeks to 1 week"
      ]
    },
    {
      company: "Grant Thornton",
      role: "Software Developer (Internal Audit Team)",
      period: "Nov 2022 – May 2024",
      location: "Noida, India",
      achievements: [
        "Built a full-stack project management platform with React, Python, and PostgreSQL to replace fragmented tracking tools, centralizing workflows for 3,000+ projects and cutting operational response time by 35%",
        "Developed containerized CI/CD pipelines using Docker, Jenkins, and Git with automated testing and quality gates for 15+ microservices, hardening the release process and reducing post-release defects by 60%",
        "Optimized high-traffic REST APIs and frontend performance by improving database queries and caching strategies, reducing response times by 20% and supporting 300+ concurrent users"
      ]
    },
    // {
    //   company: "Newgen Software India",
    //   role: "Technology Analyst (IT Audit)",
    //   period: "Jul 2019 – Nov 2022",
    //   location: "India",
    //   achievements: [
    //     "Supported IT audit and compliance engagements for 20+ enterprise clients and built small Python/SQL automations to streamline reporting."
    //   ]
    // }
  ];

  const education = [
    {
      school: "Northeastern University",
      degree: "Master of Science in Computer Engineering - Information Systems",
      location: "Seattle, WA",
      period: "Sep 2025 – May 2027 (Expected)",
      gpa: "4.0/4.0",
      courses: [
        "Database Management Systems",
        "Design Paradigm",
        "Web Development",
        "Cloud Computing"
      ],
      icon: "🎓",
      gradient: "from-primary to-secondary",
      current: true
    },
    {
      school: "Abdul Kalam Technical University",
      degree: "Bachelor of Technology, Computer Science",
      location: "India",
      period: "July 2015 – June 2019",
      gpa: "8.3/10.0",
      courses: [
        "Data Structures",
        "Operating Systems",
        "Computer Networks",
        "Algorithm Design"
      ],
      icon: "🎓",
      gradient: "from-secondary to-primary",
      current: false
    }
  ];

  return (
    <div className="min-h-screen relative transition-colors duration-500 bg-white">

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <style>{`
        /* Load a handwriting/chalk font */
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

        .chalk-font {
          font-family: 'Patrick Hand', cursive;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .card-tilt {
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }
        .card-tilt:hover {
          transform: perspective(1000px) rotateX(1deg) rotateY(-1deg) scale(1.01);
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-1 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg text-black'
          : 'bg-transparent text-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <span className="text-lg font-bold">
              Mansi Singh
            </span>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="hover:text-primary transition-colors text-sm font-medium">About</a>
              <a href="#education" className="hover:text-primary transition-colors text-sm font-medium">Education</a>
              <a href="#skills" className="hover:text-primary transition-colors text-sm font-medium">Skills</a>
              <a href="#experience" className="hover:text-primary transition-colors text-sm font-medium">Experience</a>
              <a href="#projects" className="hover:text-primary transition-colors text-sm font-medium">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors text-sm font-medium">Contact</a>
              
              <a
                href="/Mansi_Singh_Resume.pdf"
                download
                className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-3 py-1.5 rounded-lg hover:shadow-lg transition-all text-sm"
              >
                <Download size={14} />
                Resume
              </a>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={20} /> : '☰'}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 bg-white rounded-lg mt-2 p-4 shadow-lg text-black">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2">About</a>
              <a href="#education" onClick={() => setIsMenuOpen(false)} className="block py-2">Education</a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block py-2">Skills</a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block py-2">Experience</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2">Projects</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Dark Overlay */}
      <section 
        className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 scroll-animate bg-cover bg-center bg-no-repeat pt-20"
        style={{ backgroundImage: 'url(/hero-background.jpg)' }}
      >
        {/* BLACK Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10 text-white">
          
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Hi, I'm <br />
              <span className="text-primary">Mansi Singh</span> 👋
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-6 font-semibold h-10">
              {typewriterText}<span className="animate-pulse">|</span>
            </p>
            
            {/* UPDATED FONT SIZE (SMALLER) - Now xl/2xl instead of 2xl/3xl */}
            <p className="text-xl md:text-2xl text-primary mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed tracking-wide font-bold">
              MS in Computer Engineering - Information Systems at Northeastern University
            </p>
            
            {/* CTA Badge */}
            <div className="flex justify-center md:justify-start mb-8">
              <div className="inline-flex items-center gap-3 bg-primary text-black px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-default">
                <span className="text-xl">🎯</span>
                <span className="font-bold text-base">Seeking Software Developer Internship - Summer 2026</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6">
              <a 
                href="mailto:mansimaanu8627@gmail.com"
                className="group transition-all duration-300 transform hover:scale-110"
              >
                <div className="w-14 h-14 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-md backdrop-blur-sm">
                  <Mail size={24} className="text-white" />
                </div>
              </a>
              
              <a 
                href="https://github.com/MansiSingh17" 
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 transform hover:scale-110"
              >
                <div className="w-14 h-14 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-md backdrop-blur-sm">
                  <Github size={24} className="text-white" />
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/singh-mansi17/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 transform hover:scale-110"
              >
                <div className="w-14 h-14 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-md backdrop-blur-sm">
                  <Linkedin size={24} className="text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Image & Blob */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-float-slow -z-10 blur-md"></div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 p-2 bg-white/10 backdrop-blur-md rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out border border-white/20">
               <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                  <img
                    src="/mansi.jpg" 
                    alt="Mansi Singh"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Mansi"; 
                    }}
                  />
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section - FIXED OVERLAP ISSUE */}
      <section id="about" className="relative z-10 min-h-screen scroll-animate bg-white">
        <div className="flex flex-col md:grid md:grid-cols-2 h-auto md:min-h-screen">
          {/* Left: Image as background - Mobile height fixed, Desktop full */}
          <div 
            className="w-full h-64 md:h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/about-illustration.jpg)' }}
          >
          </div>
          
          {/* Right: Content */}
          <div className="space-y-6 flex flex-col justify-center px-8 lg:px-12 py-16 bg-white">
            <h2 className="text-4xl font-bold text-slate-800" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="mr-3">👨‍💻</span>About Me
            </h2>
            
            <div className="space-y-4 text-base text-black leading-relaxed">
              <p>
                I'm a Software Developer currently pursuing my Master's in Information Systems at Northeastern University 
                with a perfect 4.0 GPA. With over 3 years of professional experience at Nokia Solutions and Grant Thornton, 
                I specialize in building scalable full-stack applications and implementing DevOps practices.
              </p>
              <p>
                My expertise spans across modern web technologies, cloud infrastructure, and AI-driven solutions. 
                I've successfully reduced deployment failures by 50%, improved response times by 35% across 3,000+ 
                projects, and built AI assistants that enhanced team efficiency by 70%.
              </p>
              <p>
                I also excel in creating user interfaces with React and Redux for real-time trade monitoring. Eager to tackle new challenges and contribute to innovative projects, I'm looking for opportunities to leverage my skills and grow professionally.
              </p>
              <p className="font-medium">
                Let's collaborate and create something exceptional!
              </p>

              <div className="pt-4">
                <a
                  href="mailto:mansimaanu8627@gmail.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  <Mail size={18} />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - CUSTOM GRADIENT BG */}
      <section id="education" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 scroll-animate" style={customGradientStyle}>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="mr-3">🎓</span>Education
          </h2>
          <p className="text-slate-700 text-center mb-12 text-base">Academic foundation and continuous learning</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-primary"
              >
                <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-slate-200">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg font-bold text-primary mb-2">
                      {edu.school}
                    </p>
                    <div className="text-slate-600 text-sm space-y-1">
                      <p className="flex items-center gap-2">
                        <span>📍</span>
                        {edu.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📅</span>
                        {edu.period}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    {edu.current && (
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                        Current
                      </span>
                    )}
                    <div className="bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                      <span>⭐</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3">Relevant Coursework:</h4>
                  <div className="space-y-1.5">
                    {edu.courses.map((course, i) => (
                      <p 
                        key={i}
                        className="text-sm text-slate-700 leading-relaxed"
                      >
                        • {course}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - WHITE BG + GAP BELOW */}
      <section id="skills" className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 scroll-animate bg-white mb-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="mr-3">🛠️</span>Technical Skills
            </h2>
            <p className="text-slate-600 text-base">Technologies and tools I excel at</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${category.bgClass} shadow-sm`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i}
                      className="flex flex-col items-center gap-2 group cursor-default"
                    >
                      <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110 duration-200">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-600 text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - CUSTOM BG + GAP BELOW */}
      <section id="experience" className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 scroll-animate pb-24 mb-24" style={customGradientStyle}>
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="mr-3">💼</span>Work Experience
            </h2>
          </div>
            
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 scroll-animate hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-primary font-medium text-base">{exp.company}</p>
                  </div>
                  <div className="text-sm text-slate-500 sm:text-right mt-2 sm:mt-0 font-medium">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                
                {exp.award && (
                  <div className="flex items-start gap-2 p-3 mb-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-100 text-sm">
                     <Award className="w-4 h-4 flex-shrink-0 mt-0.5" />
                     <p className="font-medium leading-snug">{exp.award}</p>
                  </div>
                )}
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-black leading-relaxed">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - WHITE BG + GAP + NO BUTTON */}
      <section id="projects" className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 scroll-animate bg-white pt-24 mb-24">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-slate-800 mb-6 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="mr-3">🚀</span>Featured Projects
          </h2>
          <p className="text-slate-700 text-center mb-12 text-base">Showcasing my best work across various domains</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['All', 'Full Stack', 'AI/ML', 'Frontend', 'Mobile'].map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-5 py-1.5 rounded-full font-semibold transition-all duration-300 text-sm ${
                  filterCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-3 max-w-[320px] mx-auto hover:-translate-y-1 transition-all duration-300">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48">
  <img 
    src={project.illustration} 
    alt={project.title} 
    className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500" 
  />
</div>
                </a>
                
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors"
                  >
                    <Github size={14} />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bit More About Me Section - CUSTOM GRADIENT BG */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 scroll-animate" style={customGradientStyle}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Bit More About Me !!! 👩‍💻
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moreAboutMe.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center h-full"
              >
                <div className="mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-700 mb-4 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p 
                  className="text-slate-500 text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - WHITE BG */}
      <section id="contact" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 scroll-animate bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="mr-3">📬</span>Let's Connect
          </h2>
          <p className="text-base text-slate-700 mb-2">
            I'm actively seeking Software Developer Internship opportunities for Summer 2026!
          </p>
          <p className="text-base text-slate-700 mb-10">
            Open to discussing new opportunities, collaborations, or just connecting with fellow developers.
          </p>
          
          <div className="flex justify-center gap-6 mb-10">
            <a 
              href="mailto:mansimaanu8627@gmail.com"
              className="group transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-14 h-14 bg-slate-700 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                <Mail size={24} className="text-white" />
              </div>
            </a>
            
            <a 
              href="https://github.com/MansiSingh17" 
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-14 h-14 bg-slate-700 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                <Github size={24} className="text-white" />
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/singh-mansi17/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-14 h-14 bg-slate-700 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                <Linkedin size={24} className="text-white" />
              </div>
            </a>
          </div>
          
          <div className="text-center text-slate-600">
            <p className="flex items-center justify-center gap-2 text-base font-medium">
              <span>📍 Seattle, WA</span>
              <span>•</span>
              <span>📞 (206) 847-4378</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-4 sm:px-6 lg:px-8 text-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-1 font-medium text-sm">&copy; 2025 Mansi Singh. Built with React & Tailwind CSS.</p>
          <p className="text-xs text-slate-600">Seattle, WA | Software Developer | AWS Certified</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}