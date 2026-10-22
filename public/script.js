

/* ========== i18n: English (default) & Khmer ========== */
const LANG_KEY = 'portfolio-lang';
const savedWeatherMode = typeof localStorage !== 'undefined' ? localStorage.getItem('portfolio-weather-mode') : null;
let weatherState = savedWeatherMode !== null ? parseInt(savedWeatherMode, 10) : 0; // 0-6: Visual/Audio modes, 7: Clean Normal (Off)
if (isNaN(weatherState) || weatherState < 0 || weatherState > 7) weatherState = 0;
// On mobile devices (< 768px), enforce strictly 2 options: Mode 0 (Rain + Snow + Lightning) or Mode 7 (Clean Normal Mode)
if (typeof window !== 'undefined' && window.innerWidth < 768 && weatherState !== 7) {
  weatherState = 0;
}

const I18N = { en: {}, km: {} };

Object.assign(I18N.en, {
  'page.title': 'Rotana NOB | Software & Web App Builder - Portfolio',
  'nav.home': 'Home',
  'nav.projects': 'Projects',
  'nav.certificates': 'Certificates',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.hire': 'Contact',
  'nav.themeToggle': 'Toggle light / dark theme',
  'hero.badge': 'Available for work',
  'hero.nameLine1': 'Rotana NOB',
  'hero.nameAccent': 'Software & Web App Builder',
  'hero.bio': 'I craft immersive web experiences with clean code and pixel-perfect design. Passionate about Firebase, real-time apps, and pushing the web forward — one commit at a time.',
  'hero.viewProjects': 'View Projects',
  'hero.getInTouch': 'Get In Touch',
  'hero.statProjects': 'Projects Done',
  'hero.statYears': 'Years Experience',
  'hero.statCerts': 'Certificates',
  'hero.statCardTitle': 'Firebase ',
  'hero.statCardSub': 'Cloud & Realtime Database',
  'hero.photoMainHint': 'Your Profile Photo<br /><small>Replace with &lt;img src="Assets/IMG/profile_main.png"&gt;</small>',
  'hero.photo2Hint': 'Photo 2<br />Replace',
  'projects.sectionTag': 'Portfolio',
  'projects.titleBefore': 'Featured',
  'projects.titleHighlight': 'Projects',
  'projects.desc': 'A showcase of things I\'ve built — from real-time Firebase apps to full-stack platforms and creative experiments. And also have backend and server.',
  'proj1.placeholder': 'Project Screenshot / Demo',
  'proj1.title': 'BacII Calculator',
  'proj1.desc': 'BacII Calculator is a high-precision tool designed for students to calculate their National High School Exam (BacII) results. It features a complex algorithm strictly aligned with the Ministry of Education, Youth and Sports (MoEYS) scoring standards to ensure 100% technical accuracy. Built with HTML5, JavaScript, and Tailwind CSS, it offers a seamless real-time calculation experience, automatic grade determination (A-F), and subject-specific analytics. Integrated with Firebase for reliable performance.',
  'proj2.placeholder': 'Video Demo',
  'proj2.title': 'Rotana E-Learning (Old Version)',
  'proj2.desc': 'Rotana E-Learning is a comprehensive IT and CS education platform built with Firebase (80% complete). It offers a social experience where students can post, react, and comment on each other\'s updates. Features include a Leaderboard, AI Chatbot, Blue Verification, Profile Settings, and a vast library of courses in Khmer and English. Powered by Progressive Web App (PWA) technology.',
  'proj3.placeholder': 'Multiple Demos Available',
  'proj3.title': 'YoungPOS Cambodia(Startup)',
  'proj3.desc': 'YoungPOS is a newly launched business management startup co-founded by a team of 3 people. This all-in-one POS system is specially designed for startups and mid-sized businesses, featuring two specialized platforms: Young-Dash (for owners) and Young-POS (for staff), plus an integrated Digital Menu. Built with Flutter, React Native, PHP, and React.js, and hosted on Dunpenh Cloud with Cloudflare. We are currently rolling out the system for active use by businesses while preparing for App Store expansion. Moreover, we use local cloud to protect data and increase performance.',
  'proj4.title': 'Moon Coffee',
  'proj4.desc': 'MOON-Coffee is a high-performance coffee shop web application designed with a premium, app-like experience. It features a complete online ordering system, integrated QR payment, and a dedicated user account system for order history and favorites. The ecosystem includes a powerful Admin Page for shop management and real-time Telegram Bot alerts for instant order notifications. Built as a Progressive Web App (PWA) and powered by Firebase (Firestore, Real-time DB, Auth).​ Currently, it is 50% complete.',
  'proj5.title': 'YOUNG SMS',
  'proj5.desc': 'YOUNG SMS (Student Management System) is a professional full-stack web application built for educational institutions to efficiently manage their academic operations in real-time. It features a comprehensive Dashboard with key analytics (student count, course count, enrollment, average scores, attendance rate), complete Student Management (CRUD operations with status filtering), Course Management, Attendance Tracking (mark, filter, and update records), Grade Management with automatic letter grade calculation, a Notification System (create, target by role, and manage alerts), and detailed Reports with analytics insights. Built with React.js on the frontend, Node.js & Express on the backend, and powered by Firebase (Firestore, Realtime Database, Authentication, and Firebase Hosting) for a seamless cloud-based experience. Features JWT-based secure authentication, session persistence, and bilingual support (EN/KH). Developed as an AEU University assignment project.',
  'proj6.title': 'BanLuy (បានលុយ)',
  'proj6.desc': 'BanLuy (បានលុយ) is a modern freelancer marketplace platform connecting skilled professionals with clients across Cambodia. It features a Dual Role System (Freelancer & Client accounts), complete Job Management (post jobs, submit proposals, hire, and manage projects through their lifecycle), Real-time Chat powered by Socket.io for seamless client-freelancer communication, a Rating & Review System for post-project feedback, and Advanced Search with filters by category, skills, budget, and experience level. The platform is built with a mobile-first responsive design using React 18 + Vite and TailwindCSS on the frontend, Node.js + Express on the backend, and MongoDB as the database. It features JWT-based authentication, bcrypt password hashing, and full Khmer language UI support with Khmer fonts (Battambang, Kantumruy Pro). Key pages include Homepage, Job Listings, Freelancer Directory, Dashboard, Real-time Chat, and Profile Settings. Currently 50% complete and under active development.',
  'proj7.title': 'Rotana E-Learning V2',
  'proj7.desc': 'Rotana E-Learning V2 is the completely redesigned version of the original Rotana E-Learning platform, rebuilt from the ground up with a modern React 18 + TypeScript + Vite architecture for superior performance and maintainability. This free IT and Coding education platform in Khmer features 20+ professional courses (HTML, CSS, JavaScript, React, Python, Mobile App Dev, SQL, Docker, and more), an Interactive Quiz System with automated scoring and professional certificate generation upon passing, Firebase Authentication & Firestore for secure login and real-time data syncing (community posts, leaderboards, user progress), an AI Chatbot Tutor powered by the Gemini API to assist students in Khmer, and a comprehensive Learning Dashboard tracking study time with Cambodia timezone (UTC+7) alignment, course progress, favorites, and completed lessons. The backend uses Node.js + Express, with Firebase and Cloudflare integration. Features ultimate SEO (JSON-LD, Open Graph, Twitter cards, dynamic sitemap), PWA installability, responsive glassmorphism UI, and Google Analytics. Currently under active development.',
  'common.badgeImage': 'Image',
  'common.badgeVideo': 'Video',
  'common.badgeIframe': 'Iframe',
  'common.code': 'Code',
  'common.live': 'Live',
  'common.demo1': 'Tutorial 1',
  'common.demo2': 'Tutorial 2',
  'common.demo3': 'Tutorial 3',
  'common.fbDemo1': 'Demo 1',
  'common.fbDemo2': 'Demo 2',
  'common.fbDemo3': 'Demo 3',
  'common.fbSection': 'Facebook Demos',
  'common.github': 'Code',
  'common.dashApp': 'Young-Dash',
  'common.posApp': 'Young-POS',
  'certs.sectionTag': 'Achievements',
  'certs.titleBefore': 'Certificates &',
  'certs.titleHighlight': 'Awards',
  'certs.desc': 'Credentials and recognition from courses, competitions, and industry platforms that shaped my skills.',
  'certs.featuredBadge': '  Recognition',
  'certs.featuredTitle': 'Professional Identity & Excellence',
  'certs.featuredDesc': 'This representation highlights my commitment to digital innovation, branding, and professional growth. A symbol of the dedication I bring to every project.',
  'cert.view': 'View Images ',
  'cert.details': 'View Details',
  'cert1.issuer': 'Google',
  'cert1.title': 'IT Security: Defense against the digital dark arts',
  'cert2.issuer': 'Google',
  'cert2.title': 'System Administration and IT Infrastructure Services',
  'cert3.issuer': 'freeCodeCamp',
  'cert3.title': 'Front End Development Libraries',
  'cert4.issuer': 'freeCodeCamp',
  'cert4.title': 'JavaScript Algorithms and Data Structures',
  'cert5.issuer': 'Coursera',
  'cert5.title': 'Build a free website with WordPress',
  'cert6.issuer': 'Coursera',
  'cert6.title': 'Use WordPress to Create a Blog for your Business',
  'cert7.issuer': 'freeCodeCamp',
  'cert7.title': 'Responsive Web Design',
  'cert8.issuer': 'TVET Cambodia',
  'cert8.title': 'Internship Certificate — Graphic Design',
  'cert9.issuer': 'SETEC Institute',
  'cert9.title': 'Internship Certificate — SETEC',
  'cert10.issuer': 'freeCodeCamp',
  'cert10.title': 'JavaScript Algorithms and Data Structures',
  'cert11.issuer': 'freeCodeCamp',
  'cert11.title': 'Front End Development Libraries',
  'cert12.issuer': 'Coursera Project',
  'cert12.title': 'WordPress for Business',
  'cert13.issuer': 'Coursera Project',
  'cert13.title': 'Build Website WordPress',
  'cert14.issuer': 'Ministry of Education (MoEYS)',
  'cert14.title': 'Lower Secondary School Certificate (Grade 9 / Diploma)',
  'cert15.issuer': 'Ministry of Education (MoEYS)',
  'cert15.title': 'High School (Grade 12 / BacII)',
  'cert16.issuer': 'CTH',
  'cert16.title': 'CTH Mind Map Certification',
  'cert17.issuer': 'LinkedIn Learning',
  'cert17.title': 'LinkedIn Marketing Fundamentals / Advertising',
  'cert18.issuer': 'SETEC Institute',
  'cert18.title': 'Management Information System (MIS) - Transcript',
  'cert19.issuer': 'Asia Euro University',
  'cert19.title': 'Computer Science (CS) - Transcript',
  'about.sectionTag': 'About Me',
  'about.titleBefore': 'Skills &',
  'about.titleHighlight': 'Expertise',
  'about.p1': 'I\'m a passionate developer with a love for building fast, scalable, and beautiful web applications. My core stack revolves around <strong style="color:var(--text-primary)">React, Firebase, and basic Node.js</strong>, and I\'m constantly exploring new tools to sharpen my craft.',
  'about.p2': 'When I\'m not coding, you\'ll find me contributing to open source, mentoring juniors, or brewing the perfect cup of coffee before a deep work session.',
  'skill.frontend': 'React & JavaScript',
  'skill.firebase': 'Firebase (Auth, Firestore, Storage)',
  'skill.realtimedb': 'Realtime Database & Cloud Storage',
  'skill.htmlcss': 'HTML5 & CSS3',
  'skill.next': 'Build with AI (Human-like Workflow & Multilingual)',
  'skill.cpp': 'Java & C#',
  'skill.cplusplus': 'C++',
  'skill.jsts': 'JS / TS',
  'skill.git': 'Git & GitHub',
  'skill.ai': 'AI Tool Coding',
  'contact.sectionTag': 'Contact',
  'contact.titleBefore': 'Let\'s',
  'contact.titleHighlight': 'Connect',
  'contact.desc': 'Have a project in mind? I\'d love to hear about it. Drop me a message and let\'s make something great together.',
  'form.name': 'Name',
  'form.email': 'Email',
  'form.message': 'Message',
  'form.namePh': 'Your full name',
  'form.emailPh': 'your@email.com',
  'form.telegram': 'Telegram (Optional)',
  'form.telegramPh': 't.me/yourusername',
  'form.linkedin': 'LinkedIn (Optional)',
  'form.linkedinPh': 'linkedin.com/in/yourprofile',
  'form.msgPh': 'Tell me about your project or idea...',
  'form.send': 'Send Message',
  'form.sending': 'Sending...',
  'form.success': '✓ Message sent! I\'ll get back to you within 24 hours.',
  'form.error': '✗ Something went wrong. Please try again.',
  'contact.labelEmail': 'Email',
  'contact.labelLoc': 'Location',
  'contact.labelResp': 'Response Time',
  'contact.valLoc': 'Phnom Penh, Cambodia',
  'contact.valResp': 'Within 24 hours',
  'contact.findMe': 'Find me on',
  'footer.heading': 'Let\'s build something amazing together.',
  'footer.copy': '© 2025 Rotana NOB. All rights reserved.',
  'weather.btnTitle': 'Change Visual Mode (3D, Video, Weather)',
  'weather.mode0': '⚡ Ultimate Cyber Storm (Mix of All)',
  'weather.mode1': '🎬 Cyber Video',
  'weather.mode2': '🌧️ Cyber Rain',
  'weather.mode3': '⚡ Fierce Thunderstorm',
  'weather.mode4': '❄️ Cosmic Snow',
  'weather.mode5': '🌌 3D Cyber Mesh',
  'weather.mode6': '✨ Zen Aurora',
  'weather.mode7': '🌿 Clean Normal Mode (All Off)',
  'weather.ind0': '⚡ Ultimate Cyber Storm (Lightning + Rain + Snow + 3D)',
  'weather.ind1': '🎬 Cyber Video',
  'weather.ind2': '🌧️ Cyber Rain',
  'weather.ind3': '⚡ Fierce Thunderstorm',
  'weather.ind4': '❄️ Cosmic Snow',
  'weather.ind5': '🌌 3D Cyber Mesh',
  'weather.ind6': '✨ Zen Aurora',
  'weather.ind7': '🌿 Clean Normal Mode (3D & Videos Off - Zero CPU)',
  'weather.mobileOption1': '⚡ Rain + Snow + Lightning',
  'weather.mobileOption2': '🌿 Clean Normal Mode',
  'mute.btnTitle': 'Toggle Sound (Mute/Unmute)',
  'mute.unmuted': '🔊 Sound Active',
  'mute.muted': '🔇 Sound Muted',
  'nav.resume': 'Resume',
  'resume.sectionTag': 'My Story',
  'resume.titleBefore': 'My',
  'resume.titleHighlight': 'Journey',
  'resume.desc': 'A timeline of my education and professional experience — where I\'ve been and what I\'ve built along the way.',
  'resume.edu': 'Education',
  'resume.exp': 'Experience',
  'resume.edu1.date': '2025 – Present',
  'resume.edu1.title': 'Asia Euro University',
  'resume.edu1.place': 'Phnom Penh, Cambodia',
  'resume.edu1.desc': 'Currently pursuing higher education in Computer Science.',
  'resume.edu2.date': '2023 – 2025',
  'resume.edu2.title': 'SETEC Institute',
  'resume.edu2.place': 'Phnom Penh, Cambodia',
  'resume.edu2.desc': 'Completed associate degree at SETEC Institute in Management information systems.',
  'resume.edu3.date': '2019 – 2022',
  'resume.edu3.title': 'Preah Sihanouk High School',
  'resume.edu3.place': 'Kampong Cham Province, Cambodia',
  'resume.edu3.desc': 'Completed upper secondary education with a scoreboard 79.491.',
  'resume.edu4.date': '2008 – 2019',
  'resume.edu4.title': 'Toul Thmor Secondary School',
  'resume.edu4.place': 'Kampong Cham, Cambodia',
  'resume.edu4.desc': 'Completed lower and upper secondary education with grade "Very Good" and foundational knowledge across all subjects.',
  'resume.exp1.title': 'Web Developer Freelancer & Startup Founder Cloud POS',
  'resume.exp1.place': 'Freelance / Startup',
  'resume.exp1.date': '2025 – Present',
  'resume.exp1.desc': 'Developing bespoke web solutions as a freelancer while building "Cloud POS", a startup web application for business management with team.',
  'resume.exp2.title': 'Assistant IT Support',
  'resume.exp2.place': 'SETEC IT Department',
  'resume.exp2.date': '2024 – 2025',
  'resume.exp2.desc': 'Provided technical assistance, hardware maintenance, and software troubleshooting for organizational efficiency​ And help fix problems of setec students.',
  'resume.exp3.title': 'Graphic Design',
  'resume.exp3.place': 'TVET Cambodia',
  'resume.exp3.date': '2022 – 2023',
  'resume.exp3.desc': 'Crafted visual identities, marketing , and digital assets for diverse client projects.',
  'resume.exp4.title': 'Content Creation',
  'resume.exp4.place': 'Social Media',
  'resume.exp4.date': '2021 – Present',
  'resume.exp4.desc': 'Producing engaging digital content across platforms, focusing on tech culture and brand building and learn about videos editing.',
  'resume.exp5.title': 'Business Online',
  'resume.exp5.place': 'E-commerce',
  'resume.exp5.date': '2020 – 2021',
  'resume.exp5.desc': 'Managed digital store operations, customer relationship management,page management and online sales strategies and delivery.',
  'alert.privateTitle': 'Private Repository',
  'alert.privateMessage': 'This code is set to Private. Please note that when you continue, you will only see Public Repositories.',
  'alert.confirm': 'Confirm and Continue',
  'alert.cancel': 'Cancel',
  'proj8.title': 'S Tech Store (Enterprise IT E-Commerce & KHQR Platform)',
  'proj8.desc': 'S Tech Store is an enterprise IT e-commerce platform built with Next.js 16, Laravel 11, and PostgreSQL/Firebase. Key highlights: 1) Dynamic Bakong KHQR payments (USD/KHR) with 1-tap mobile banking deep links; 2) Interactive Custom PC Builder with real-time hardware compatibility & wattage calculation; 3) Telegram Supergroup Bot automation for instant orders and inventory; 4) Real-time customer live chat bridged to Telegram; and 5) Merchant HQ Cockpit with live sales analytics and ESC/POS receipt printing. Live at www.s-tech-store.tech.',
  'proj9.title': 'Delight Fashion (Luxury Men\'s E-Commerce & KHQR Platform)',
  'proj9.desc': 'Delight Fashion is a production-grade, mobile-first, high-end men\'s fashion e-commerce platform built for the modern boutique market in Phnom Penh, Cambodia. Engineered with a cutting-edge full-stack architecture utilizing Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4, featuring a luxury Black, White & Gold aesthetic. Core architectural features include: 1) Secure Authentication & IAM with Firebase Auth (Google Sign-In & custom RBAC claims) separating customer accounts from shop owner controls; 2) Atomic Transactional Order & Stock Engine using Firebase Admin SDK with Firestore transactions to prevent race conditions and automatically deduct inventory in real time; 3) Integrated Cambodia Local Payments featuring ABA Bank PayWay and Dynamic Bakong KHQR (EMVCo standard) with 1-tap mobile banking deep-linking and automated payment status verification; 4) Instant Shop Owner Notifications powered by automated Telegram Bot API alerts upon every placed order; 5) Luxury Catalog & Shopping Experience with server-driven Live Search, category filters, auto-opening slide-over cart drawer, and single-page checkout; 6) Merchant HQ Admin Dashboard featuring real-time revenue analytics, 7-day interactive sales charts powered by Recharts, inventory management, low stock alerts, and multi-stage order tracking (Pending to Completed); 7) High-performance Cloudinary CDN media pipeline delivering optimized WebP/AVIF imagery; and 8) Progressive Web App (PWA) powered by Serwist for offline resilience and mobile home screen installation. Deployed live on Firebase Hosting and GitHub.',
  'proj10.title': 'NRI Studio',
  'proj10.desc': 'NRI Studio is a full-stack, browser-based Integrated Development Environment (IDE) that closely mimics the behavior and UI of VSCode. Built for modern web development, it allows users to create, edit, save, and execute JavaScript and TypeScript code entirely in the cloud. Features include Monaco Editor with full IntelliSense & auto-completion, a collapsible sidebar with file explorer, multi-tab support, local folder upload, live terminal powered by a secure Node.js backend sandbox, real-time auto-save to MongoDB, and Firebase Authentication (email/password & Google). Deployed on Vercel (frontend) and Render (backend).',
  'proj11.title': 'X-Clinic Platform (Enterprise Multi-Tenant Medical PaaS & Hospital Information System)',
  'proj11.desc': 'X-Clinic Platform is an enterprise Multi-Tenant Clinical SaaS & Hospital Information System built with Next.js 14, NestJS 10, Prisma ORM, and PostgreSQL 16. Key highlights: 1) Multi-Tenant Data Isolation with AsyncLocalStorage; 2) Dynamic Bakong KHQR (USD/KHR) & ABA PayWay billing with instant deep-linking; 3) Comprehensive EMR 360 with AI Medical Voice Dictation (Gemini 3.8); 4) Intelligent Clinical Decision Support (CDSS) for drug interactions & allergy safety; 5) WebGL DICOM PACS medical viewer & WebRTC teleconsultation; and 6) In-browser ESC/POS 80mm/58mm thermal receipt printing and Telegram Bot automation.',
  'proj12.title': 'QR Scan (Ultra HD AI QR & Barcode Scanner PWA)',
  'proj12.desc': 'QR Scan is a production-grade, fast, and privacy-first Progressive Web App (PWA) designed for seamless QR code and barcode scanning directly from any web browser or mobile phone. Built with a modern architecture using React 18, TypeScript, Vite 5, Tailwind CSS, and html5-qrcode. Core architectural features include: 1) Ultra HD AI Camera Scanning with auto-focus, camera flip (front/back), torch/flashlight toggle, and tap-to-focus; 2) Intelligent Multi-Format Detection supporting National Bakong KHQR (EMVCo), EAN-13, EAN-8, UPC-A, UPC-E, Code 128, Code 39, and custom QR payloads; 3) Smart Content Processing with automatic parsing of URLs, Wi-Fi credentials (1-tap network info copy), vCard contacts (.vcf export), phone dialer, SMS, email, geolocation on Google Maps, Google Product Search, and social media handles; 4) Security & Anti-Phishing Engine with dangerous protocol blocking (javascript:, data:, file:), HTTP security warnings, and external link confirmation modals; 5) 100% Local-First Privacy with zero server tracking, zero external telemetry, and offline-persistent scan history stored in client IndexedDB with favorite bookmarks and search filters; 6) Image file & photo gallery QR decoding alongside manual text entry; 7) Bilingual UI support (Khmer/English) via i18next; and 8) Progressive Web App (PWA) installability with automated background service worker updates via Workbox.',
  'proj13.title': 'Rotana Portfolio Native (React Native & Expo)',
  'proj13.desc': 'Rotana Portfolio Native is a cross-platform mobile application engineered with React Native 0.76 and Expo 52. Featuring modern tabbed navigation powered by Expo Router v4, fluid micro-interactions with React Native Reanimated 3, tactile haptic feedback, Lucide icons, and a sleek dark mode glassmorphism aesthetic. Highlights include interactive showcase cards, modal certificate inspector, direct contact integration, and native performance across both iOS and Android.',
  'proj14.title': 'Computer Shop Management System (ASP.NET MVC & SQL Server)',
  'proj14.desc': 'Computer Shop is an enterprise-grade retail POS and e-commerce inventory management web system engineered with ASP.NET MVC 5, C#, Entity Framework 6, and Microsoft SQL Server. Featuring complete Point of Sale (POS) and retail operations: Product catalog and brand management (Asus ROG, Dell XPS, MSI, Custom PCs), automated order and invoice generation, Role-Based Access Control (RBAC for Admins, Staff, and Customers), supplier management, inventory stock tracking, and sales analytics reports with Bootstrap responsive UI.',
  'proj15.title': 'Phum Angkor 3D (Ancient Khmer Village 3D Web Game)',
  'proj15.desc': 'Phum Angkor 3D (ភូមិអង្គរ 3D) is an immersive 3D cultural exploration web game set in an ancient Khmer Angkorian village, built with Three.js, React 18, React Three Fiber (@react-three/fiber), and Drei (@react-three/drei). Players can freely explore an authentic Angkorian landscape with ancient stone temples, traditional wooden stilt houses, lush palm trees, and moats. Key features include first-person and third-person camera controls with collision detection, dynamic day/night cycles, monsoon rain weather simulations, interactive cultural artifact quests with NPC dialogues, and spatial 3D audio accompanied by traditional Pinpeat melodies.',
  'proj16.title': 'Khmer City Builder (Open-Source Collaborative Game)',
  'proj16.desc': 'Khmer City Builder (ល្បែងសាងសង់ទីក្រុងខ្មែរ) is an open-source collaborative isometric city-builder simulation web game celebrating Cambodian architecture and urban heritage. Built with React 18, Vite 5, Tailwind CSS, Lucide Icons, and the Web Audio API. Key features include an interactive grid-based tile construction system with rotate, zoom, pan, and bulldoze controls, culturally authentic building assets (traditional wooden houses, ancient pagodas/វត្តអារាម, shophouses, rice paddies/ស្រែស្រូវ, and Baray water reservoirs/បារាយណ៍), and a dynamic economic simulation tracking population, gold revenue, culture score, and happiness index.',
  'ai.sectionTag': 'AI-Powered Development',
  'ai.titleBefore': 'Supercharged with',
  'ai.titleHighlight': 'AI Tools',
  'clientAlert.title': 'Client Project (Private Code)',
  'clientAlert.message': 'Sorry! This is a client project so the code is private. However, you can view the UX/UI design or look at other repositories.',
  'clientAlert.figma': 'View UX/UI (Figma)',
  'clientAlert.github': 'View Other Repositories',
  'clientAlert.cancel': 'Cancel',
  'ai.intro': 'Equipped with advanced AI coding tools, my development speed is highly accelerated. I can rapidly architect and build both Backend and Frontend systems across multiple stacks—including <strong style="color:var(--text-primary)">Next.js, NestJS, PHP, Java, and C#</strong>, along with seamless Firebase integration. I leverage these tools to write highly optimized, secure, and clean code faster than ever before.',
  'ai.usecase1.title': '1. AI-Assisted Development (Cursor, Google Antigravity, Devin, GitHub Copilot)',
  'ai.usecase1.desc': 'I use AI coding agents to accelerate implementation. Before using an agent, I define the requirements and create an implementation plan. I then review, understand, test, and verify the changes step-by-step before accepting or merging them.',
  'ai.usecase2.title': '2. Coding & Complex Problem Solving (Claude, ChatGPT, DeepSeek, Kimi)',
  'ai.usecase2.desc': 'I use these tools to explore software architecture, understand complex logic, debug code, optimize solutions, and analyze large codebases. I compare different approaches rather than relying on a single AI-generated answer.',
  'ai.usecase3.title': '3. Technology News & Research (Grok, NotebookLM, Perplexity)',
  'ai.usecase3.desc': 'I use Grok to stay updated on the latest technology news and developments, especially in areas such as AI, cybersecurity, new programming tools, frameworks, and emerging coding techniques. It helps me discover new technologies and technical approaches early. I use NotebookLM for source-based research and Perplexity for deeper technical research and exploring emerging technologies.',
  'ai.usecase4.title': '4. Documentation, Planning & Learning (ChatGPT, Gemini, Notion)',
  'ai.usecase4.desc': 'I use ChatGPT and Gemini for architectural brainstorming, documentation, explaining technical concepts, and learning new technologies. I use Notion for project planning, task tracking, and team documentation.',
  'ai.conclusion': 'Overall, I treat AI as a productivity and learning tool—not a replacement for my own judgment. I always review, test, and validate AI-generated outputs before using them in a project. This allows me to develop faster while maintaining code quality, reliability, and a strong understanding of what I build.',
});

Object.assign(I18N.km, {
  'page.title': 'ណុប រតនា (Rotana NOB) | Software & Web App Builder - Portfolio',
  'nav.home': 'ទំព័រដើម',
  'nav.projects': 'គម្រោង',
  'nav.certificates': 'វិញ្ញាបនបត្រ',
  'nav.about': 'អំពីខ្ញុំ',
  'nav.contact': 'ទំនាក់ទំនង',
  'nav.hire': 'ទាក់ទងខ្ញុំ',
  'nav.themeToggle': 'បិទ/បើករចនាបថភ្លឺ ឬងងឹត',
  'hero.badge': 'ទទួលការងារ',
  'hero.nameLine1': 'ណុប រតនា',
  'hero.nameAccent': 'Software & Web App Builder',
  'hero.role': 'អ្នកអភិវឌ្ឍន៍ Full-Stack និង Firebase',
  'hero.bio': 'ខ្ញុំបង្កើតបទពិសោធវិបដែលរស់រវើកជាមួយកូដស្អាត និងការកាន់តួនាទីភីក់សែល។ ចូលចិត្ត Firebase កម្មវិធីពេលវេលាពិត និងបង្កើតContent នៃវេបសាយបានល្អ',
  'hero.viewProjects': 'មើលគម្រោង',
  'hero.getInTouch': 'ទាក់ទងមក',
  'hero.statProjects': 'គម្រោងបានធ្វើ',
  'hero.statYears': 'បទពិសោធឆ្នាំ',
  'hero.statCerts': 'វិញ្ញាបនបត្រ',
  'hero.statCardTitle': 'Firebase ',
  'hero.statCardSub': 'Cloud និង Realtime DB',
  'hero.photoMainHint': 'រូបអាវតារ<br /><small>ជំនួសដោយ &lt;img src="Assets/IMG/profile_main.png"&gt;</small>',
  'hero.photo2Hint': 'រូបទី ២<br />ជំនួស',
  'projects.sectionTag': 'Portfolio',
  'projects.titleBefore': 'គម្រោង',
  'projects.titleHighlight': 'ពិសេស',
  'projects.desc': 'ការបង្ហាញអ្វីដែលខ្ញុំបានបង្កើត — ពីកម្មវិធី Firebase រហូតដល់វេទិកាពេញលេញ និងមាន​​ Backend and server ផងដែរ។',
  'proj1.placeholder': 'រូបថត/ស្រាប់ពីគម្រោង',
  'proj1.title': 'BacII Calculator',
  'proj1.desc': 'BacII Calculator គឺជាឧបករណ៍គណនាពិន្ទុដ៏ត្រឹមត្រូវបំផុតដែលត្រូវបានរចនាឡើងសម្រាប់សិស្សានុសិស្សក្នុងការផ្ទៀងផ្ទាត់លទ្ធផលប្រឡងបាក់ឌុប (BacII)។ វាប្រើប្រាស់ Algorithm ដ៏ស្មុគស្មាញដែលអនុលោមតាមស្ដង់ដារផ្ដល់ពិន្ទុរបស់ក្រសួងអប់រំ យុវជន និងកីឡា ដើម្បីធានាបាននូវសុក្រឹតភាពបច្ចេកទេស ១០០%។ បង្កើតឡើងដោយ HTML5, JavaScript និង Tailwind CSS កម្មវិធីនេះផ្ដល់នូវបទពិសោធន៍គណនាពេលវេលាពិត (Real-time), ការកំណត់និទ្ទេសស្វ័យប្រវត្តិ (A-F) និងការវិភាគពិន្ទុតាមមុខវិជ្ជា។ ភ្ជាប់ជាមួយ Firebase ដើម្បីធានាបាននូវដំណើរការកាន់តែល្អប្រសើរ។',
  'proj2.placeholder': 'វីដេអូសាកល្បង',
  'proj2.title': 'Rotana E-Learning (ជំនាន់ចាស់)',
  'proj2.desc': 'Rotana E-Learning៖ ជាវេទិកាសិក្សាផ្នែក IT និង CS ដ៏ទូលំទូលាយដែលភ្ជាប់ជាមួយសេវ៉ាកម្ម Firebase (សម្រេចបាន ៨០%)។ វាផ្តល់នូវបទពិសោធន៍បែបបណ្តាញសង្គម ដែលសិស្សអាចផុស (Post) ផ្ដល់ប្រតិកម្ម (React) និងបញ្ចេញមតិ (Comment) ជាមួយគ្នាបាន។ មានមុខងារដូចជា តារាងចំណាត់ថ្នាក់ (Leaderboard), Chatbot, ឆ្នូតខៀវ Profile (Blue Verification), ការកំណត់ព័ត៌មានផ្ទាល់ខ្លួន (Profile Settings) និងមេរៀនជាច្រើនទៀត ដែលដំណើរការជា Progressive Web App (PWA)។',
  'proj3.placeholder': 'វីដេអូបង្ហាញជាច្រើន',
  'proj3.title': 'YoungPOS Cambodia(Startup)',
  'proj3.desc': 'YoungPOS គឺជាកម្មវិធីគ្រប់គ្រងអាជីវកម្មបែប Startup និង ប្រភេទកណ្ដាល ដែលបង្កើតឡើងដោយក្រុមពួកយើងចំនួន ៣ នាក់។ វាជាប្រព័ន្ធ All-in-One Cloud POS ដ៏ទំនើបសម្រាប់អាជីវកម្មខ្នាតតូច និងមធ្យម (Startups & SMEs) ដែលមានមុខងារគ្រប់គ្រង តារាងមុខម្ហូបឌីជីថល (Digital Menu) និងច្រើនទៀត។ ក្នុងនោះមានកម្មវិធីពីរគឺ៖ Young-Dash (សម្រាប់ម្ចាស់) និង Young-POS (សម្រាប់បុគ្គលិក)។ បច្ចុប្បន្នយើងកំពុងដាក់ឱ្យអាជីវកម្មនានាប្រើប្រាស់តាមរយះ Website and Play store​ ប្រហែល២០ហាង និង កំពុងរៀបចំដាក់ចូល App Store ប្រសិនបើការរីកចម្រើននៅតែបន្ត។ ហើយជាពិសេសគឺយើងប្រើ Cloud នៅខ្មែរដែលការពារទិន្នន័យមិនឲចេញទៅក្រៅនិងបង្កើនល្បឿនការប្រើប្រាស់។',
  'proj4.title': 'Moon Coffee',
  'proj4.desc': 'MOON-Coffee គឺជាកម្មវិធីគេហទំព័រលក់កាហ្វេ ម្ហូប និងតែ ដែលមានលក្ខណៈដូច App និងផ្ដល់នូវបទពិសោធន៍ប្រើប្រាស់ដ៏រលូន។ វាមានប្រព័ន្ធកម្ម៉ង់ម្ហូបអនឡាញពេញលេញ ការទូទាត់តាម QR Code និងការគ្រប់គ្រងគណនីអតិថិជន។ លើសពីនេះ វាក៏មាន Admin Page សម្រាប់គ្រប់គ្រងហាង និងប្រព័ន្ធ Telegram Bot សម្រាប់ជូនដំណឹងរាល់ពេលមានការកម្ម៉ង់ភ្លាមៗ (Real-time) ផងដែរ។ បង្កើតឡើងជាប្រភេទ PWA និងប្រើប្រាស់ Firebase ជា Backend (Realtime Database, Firestore, Auth)។​ជាក់ស្ដែងបច្ចប្បន្នគឺស្ថិតក្នុងការ develop នៅឡើយទេគឺបាន 50% ប៉ុណ្ណោះ។',
  'proj5.title': 'YOUNG SMS',
  'proj5.desc': 'YOUNG SMS (Student Management System) គឺជាប្រព័ន្ធគ្រប់គ្រងសិស្សពេញលេញដែលត្រូវបានបង្កើតឡើងសម្រាប់គ្រឹះស្ថានអប់រំ ដើម្បីគ្រប់គ្រងប្រតិបត្តិការសិក្សាដោយប្រសិទ្ធភាពក្នុងពេលវេលាពិត។ វាមានមុខងារសម្បូរបែបរួមមាន៖ Dashboard ជាមួយស្ថិតិសំខាន់ៗ (ចំនួនសិស្ស វគ្គសិក្សា ការចុះឈ្មោះ ពិន្ទុមធ្យម អត្រាវត្តមាន), ការគ្រប់គ្រងសិស្ស (បន្ថែម កែប្រែ លុប ត្រងតាមស្ថានភាព), ការគ្រប់គ្រងវគ្គសិក្សា, ការតាមដានវត្តមាន (កត់ត្រា ត្រង និងធ្វើបច្ចុប្បន្នភាព), ការគ្រប់គ្រងពិន្ទុជាមួយការគណនានិទ្ទេសស្វ័យប្រវត្តិ, ប្រព័ន្ធជូនដំណឹង (បង្កើត កំណត់គោលដៅតាមតួនាទី និងគ្រប់គ្រងការជូនដំណឹង) និងរបាយការណ៍លម្អិតជាមួយការវិភាគ។ បង្កើតដោយ React.js នៅ Frontend, Node.js និង Express នៅ Backend និងដំណើរការដោយ Firebase (Firestore, Realtime Database, Authentication និង Firebase Hosting)។ មានប្រព័ន្ធសុវត្ថិភាព JWT, ការរក្សាទុក Session និងគាំទ្រពីរភាសា (EN/KH)។ បង្កើតជាគម្រោងកិច្ចការសម្រាប់សាកលវិទ្យាល័យ AEU។',
  'proj6.title': 'BanLuy (បានលុយ)',
  'proj6.desc': 'BanLuy (បានលុយ) គឺជាវេទិកាផ្សារការងារឯករាជ្យ (Freelancer Marketplace) ដ៏ទំនើបដែលភ្ជាប់អ្នកជំនាញជាមួយអតិថិជននៅកម្ពុជា។ វាមានមុខងារសំខាន់ៗដូចជា៖ ប្រព័ន្ធតួនាទីពីរ (Freelancer និង Client), ការគ្រប់គ្រងការងារពេញលេញ (បង្ហោះការងារ ដាក់សំណើ ជ្រើសរើស និងគ្រប់គ្រងគម្រោង), ការជជែកពេលវេលាពិតដោយ Socket.io សម្រាប់ទំនាក់ទំនងរវាងអតិថិជន និងអ្នកជំនាញ, ប្រព័ន្ធវាយតម្លៃ និងផ្ដល់មតិ (Rating & Review) បន្ទាប់ពីគម្រោងបានបញ្ចប់, និងការស្វែងរកកម្រិតខ្ពស់ដែលអាចត្រងតាមប្រភេទ ជំនាញ ថវិកា និងកម្រិតបទពិសោធន៍។ បង្កើតដោយ React 18 + Vite និង TailwindCSS នៅ Frontend, Node.js + Express នៅ Backend និង MongoDB ជា Database។ មាន JWT Authentication, bcrypt សម្រាប់ការពារពាក្យសម្ងាត់ និង UI ពេញលេញជាភាសាខ្មែរជាមួយ Font ខ្មែរ (Battambang, Kantumruy Pro)។ ទំព័រសំខាន់ៗរួមមាន Homepage, Job Listings, Freelancer Directory, Dashboard, Real-time Chat និង Profile Settings។ បច្ចុប្បន្នបានសម្រេច ៥០% និងកំពុង Develop បន្ត។',
  'proj7.title': 'Rotana E-Learning V2',
  'proj7.desc': 'Rotana E-Learning V2 គឺជាកំណែថ្មីទាំងស្រុងនៃវេទិកា Rotana E-Learning ដើម ដែលត្រូវបានបង្កើតឡើងវិញពីដើមជាមួយស្ថាបត្យកម្ម React 18 + TypeScript + Vite ដ៏ទំនើបសម្រាប់ដំណើរការល្អប្រសើរ និងងាយស្រួលថែទាំ។ វេទិកាសិក្សា IT និង Coding ឥតគិតថ្លៃជាភាសាខ្មែរនេះមានវគ្គសិក្សាជាង ២០+ (HTML, CSS, JavaScript, React, Python, Mobile App Dev, SQL, Docker និងច្រើនទៀត), ប្រព័ន្ធប្រឡង Interactive Quiz ជាមួយការដាក់ពិន្ទុស្វ័យប្រវត្តិ និងការបង្កើតវិញ្ញាបនបត្រវិជ្ជាជីវៈនៅពេលប្រឡងជាប់, Firebase Authentication & Firestore សម្រាប់ការចូលគណនីសុវត្ថិភាព និងការធ្វើសមកាលកម្មទិន្នន័យពេលវេលាពិត (ផុស Leaderboard វឌ្ឍនភាពអ្នកប្រើ), AI Chatbot Tutor ដែលដំណើរការដោយ Gemini API ជួយសិស្សជាភាសាខ្មែរ, និង Dashboard សិក្សាដ៏ទូលំទូលាយតាមដានរយៈពេលសិក្សា (UTC+7 កម្ពុជា) វគ្គដែលកំពុងរៀន ចំណូលចិត្ត និងមេរៀនដែលបានបញ្ចប់។ Backend ប្រើ Node.js + Express ភ្ជាប់ Firebase និង Cloudflare។ មាន SEO កម្រិតខ្ពស់ (JSON-LD, Open Graph, Twitter cards, sitemap), PWA, UI glassmorphism ស្រស់ស្អាត និង Google Analytics។ បច្ចុប្បន្នកំពុង Develop បន្ត។',
  'common.badgeImage': 'រូបភាព',
  'common.badgeVideo': 'វីដេអូ',
  'common.badgeIframe': 'Iframe',
  'common.code': 'កូដ',
  'common.live': 'Live',
  'common.demo1': 'វិឌីអូបង្រៀន ១',
  'common.demo2': 'វិឌីអូបង្រៀន ២',
  'common.demo3': 'វិឌីអូបង្រៀន ៣',
  'common.fbDemo1': 'វីដេអូបង្ហាញ ១',
  'common.fbDemo2': 'វីដេអូបង្ហាញ ២',
  'common.fbDemo3': 'វីដេអូបង្ហាញ ៣',
  'common.fbSection': 'វីដេអូបង្ហាញក្នុង Facebook',
  'common.github': 'កូដ',
  'common.dashApp': 'Young-Dash',
  'common.posApp': 'Young-POS',
  'certs.sectionTag': 'សមិទ្ធផល',
  'certs.titleBefore': 'វិញ្ញាបនបត្រ និង',
  'certs.titleHighlight': 'កិត្តិយស',
  'certs.desc': 'ការទទួលស្គាល់ពីវគ្គសិក្សា ការប្រកួតប្រជែង និងវេទិកាឧស្សាហ៍។',
  'certs.featuredBadge': 'ការទទួលស្គាល់',
  'certs.featuredTitle': 'អត្តសញ្ញាណវិជ្ជាជីវៈ និងឧត្តមភាព',
  'certs.featuredDesc': 'ការបង្ហាញនេះបញ្ជាក់ពីការប្តេជ្ញាចិត្តរបស់ខ្ញុំចំពោះការច្នៃប្រឌិតឌីជីថល ការកសាងម៉ាកសញ្ញា និងការរីកចម្រើនក្នុងវិជ្ជាជីវៈ។ វាជានិមិត្តរូបនៃការលះបង់ដែលខ្ញុំនាំយកទៅគ្រប់គម្រោងទាំងអស់។',
  'cert.view': 'មើលរូបភាព ',
  'cert.details': 'មើលព័ត៌មានលម្អិត',
  'cert1.issuer': 'Google',
  'cert1.title': 'សន្តិសុខព័ត៌មានវិជ្ជា៖ ការការពារប្រឆាំងនឹងការវាយប្រហារឌីជីថល (IT Security)',
  'cert2.issuer': 'Google',
  'cert2.title': 'ការគ្រប់គ្រងប្រព័ន្ធ និងសេវាកម្មហេដ្ឋារចនាសម្ព័ន្ធ IT (System Administration)',
  'cert3.issuer': 'freeCodeCamp',
  'cert3.title': 'វិញ្ញាបនបត្រ Front End Development Libraries',
  'cert4.issuer': 'freeCodeCamp',
  'cert4.title': 'វិញ្ញាបនបត្រ JavaScript Algorithms and Data Structures',
  'cert5.issuer': 'គម្រោង Coursera',
  'cert5.title': 'វិញ្ញាបនបត្រ WordPress for Business',
  'cert6.issuer': 'គម្រោង Coursera',
  'cert6.title': 'វិញ្ញាបនបត្រ WordPress for Blog Business',
  'cert7.issuer': 'freeCodeCamp',
  'cert7.title': 'ការរចនាគេហទំព័រដែលមានភាពឆ្លើយតបគ្រប់​ Devices (Responsive Web Design)',
  'cert8.issuer': 'TVET Cambodia',
  'cert8.title': 'វិញ្ញាបនការហាត់ការ — Graphic Design',
  'cert9.issuer': 'SETEC Institute',
  'cert9.title': 'វិញ្ញាបនបត្របញ្ចប់ការសិក្សា — SETEC',
  'cert10.issuer': 'freeCodeCamp',
  'cert10.title': 'វិញ្ញាបនបត្រ JavaScript Algorithms and Data Structures',
  'cert11.issuer': 'freeCodeCamp',
  'cert11.title': 'វិញ្ញាបនបត្រ Front End Development Libraries',
  'cert12.issuer': 'គម្រោង Coursera',
  'cert12.title': 'វិញ្ញាបនបត្រ WordPress for Business',
  'cert13.issuer': 'គម្រោង Coursera',
  'cert13.title': 'វិញ្ញាបនបត្រ Build Website WordPress',
  'cert14.issuer': 'ក្រសួងអប់រំ យុវជន និងកីឡា',
  'cert14.title': 'វិញ្ញាបនបត្របញ្ចប់ការសិក្សាកម្រិតអនុវិទ្យាល័យ (Diploma)',
  'cert15.issuer': 'ក្រសួងអប់រំ យុវជន និងកីឡា',
  'cert15.title': 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)',
  'cert16.issuer': 'CTH',
  'cert16.title': 'វិញ្ញាបនបត្រ CTH Mind Map',
  'cert17.issuer': 'LinkedIn Learning',
  'cert17.title': 'វិញ្ញាបនបត្រ LinkedIn Marketing Fundamentals / Advertising',
  'cert18.issuer': 'វិទ្យាស្ថាន ស៊ីតិក (SETEC Institute)',
  'cert18.title': 'ព្រឹត្តិបត្រពិន្ទុ - ជំនាញប្រព័ន្ធព័ត៌មានវិទ្យាគ្រប់គ្រង (MIS)',
  'cert19.issuer': 'សាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប (Asia Euro University)',
  'cert19.title': 'ព្រឹត្តិបត្រពិន្ទុ - ជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រ (CS)',
  'about.sectionTag': 'អំពីខ្ញុំ',
  'about.titleBefore': 'ជំនាញ និង',
  'about.titleHighlight': 'ជំនាញដែលច្បាស់លាស់',
  'about.p1': 'ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ដែលចូលចិត្តបង្កើតគេហទំព័រលឿន មានស្ថេរភាព និងស្រស់ស្អាត។ បច្ចុប្បន្នខ្ញុំប្រើ <strong style="color:var(--text-primary)">React, Firebase, basic Node.js និង​​​​​​​​​​​​​​ Mern Stack</strong> ជាស្នូល ហើយតែងតែស្វែងរកឧបករណ៍ថ្មីដើម្បីអភិវឌ្ឍខ្លួន។',
  'about.p2': 'នៅពេលមិនសរសេរកូដ ខ្ញុំចូលចិត្តចូលរួមប្រភពបើកចំហ ណែនាំអ្នកចាប់ផ្តើម ឬផឹកកាហ្វេមុនធ្ចើការងារពិបាកៗ។',
  'skill.frontend': 'React និង JavaScript',
  'skill.firebase': 'Firebase (Auth, Firestore, Storage)',
  'skill.realtimedb': 'Realtime Database និង Cloud Storage',
  'skill.htmlcss': 'HTML5 និង CSS3',
  'skill.next': 'Build with AI (ធ្វើការដូចមនុស្ស & ពហុភាសា)',
  'skill.cpp': 'Java និង C#',
  'skill.cplusplus': 'C++',
  'skill.jsts': 'JS / TS',
  'skill.git': 'Git និង GitHub',
  'skill.ai': 'ការប្រើប្រាស់ AI ជំនួយកូដ',
  'contact.sectionTag': 'ទំនាក់ទំនង',
  'contact.titleBefore': 'មក',
  'contact.titleHighlight': 'ភ្ជាប់ទំនាក់ទំនង',
  'contact.desc': 'មានគម្រោងចង់បង្ក់ើត? តោះអាចប្រាប់ខ្ញុំបាន។ ផ្ញើសារ ហើយរួមគ្នាបង្កើតអ្វីដែលអស្ចារ្យ។',
  'form.name': 'ឈ្មោះ',
  'form.email': 'អ៊ីមែល',
  'form.message': 'សារ',
  'form.namePh': 'ឈ្មោះពេញរបស់អ្នក',
  'form.emailPh': 'your@email.com',
  'clientAlert.title': 'គម្រោងអតិថិជន (កូដឯកជន)',
  'clientAlert.message': 'សុំទោសផង! នេះគឺជាគម្រោងរបស់អតិថិជន ដូច្នេះមិនអាចបើកកូដអោយមើលបានទេ។ ប៉ុន្តែអ្នកអាចចូលទៅមើលការរចនា UX/UI ជំនួសវិញ ឬមើល Other Repositories ផ្សេងទៀត។',
  'clientAlert.figma': 'មើលការរចនា UX/UI (Figma)',
  'clientAlert.github': 'មើល Other Repositories ផ្សេងទៀត',
  'clientAlert.cancel': 'បោះបង់',
  'form.telegram': 'តេឡេក្រាម (ជាជម្រើស)',
  'form.telegramPh': 't.me/yourusername',
  'form.linkedin': 'LinkedIn (ជាជម្រើស)',
  'form.linkedinPh': 'linkedin.com/in/yourprofile',
  'form.msgPh': 'ប្រាប់ខ្ញុំអំពីគម្រោងរបស់អ្នក...',
  'form.send': 'ផ្ញើសារ',
  'form.sending': 'កំពុងផ្ញើ...',
  'form.success': '✓ ផ្ញើរួចរាល់! ខ្ញុំនឹងឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង។',
  'form.error': '✗ មានបញ្ហា។ សូមព្យាយាមម្តងទៀត។',
  'contact.labelEmail': 'អ៊ីមែល',
  'contact.labelLoc': 'ទីកន្លែង',
  'contact.labelResp': 'រយៈពេលឆ្លើយតប',
  'contact.valLoc': 'ភ្នំពេញ, កម្ពុជា',
  'contact.valResp': 'ក្នុងរយៈពេល ២៤ ម៉ោង',
  'contact.findMe': 'រកខ្ញុំនៅ',
  'footer.heading': 'តោះ! រួមគ្នាបង្កើតអ្វីដែលអស្ចារ្យ។',
  'footer.copy': '© ២០២៥ ណុប រតនា។ រក្សាសិទ្ធិគ្រប់យ៉ាង។',
  'weather.btnTitle': 'ប្តូរបរិយាកាស (3D / Video / Weather)',
  'weather.mode0': '⚡ មហាកំពូលព្យុះ (រន្ទះ + ភ្លៀង + ព្រិល + 3D)',
  'weather.mode1': '🎬 Cyber Video',
  'weather.mode2': '🌧️ ភ្លៀងធ្លាក់ Cyber',
  'weather.mode3': '⚡ ផ្គររន្ទះ និងផ្លេកបន្ទោរ',
  'weather.mode4': '❄️ ព្រិលត្រជាក់ Cosmic',
  'weather.mode5': '🌌 3D Cyber Mesh',
  'weather.mode6': '✨ Zen Aurora',
  'weather.mode7': '🌿 ទម្រង់ធម្មតា (បិទ 3D & Video)',
  'weather.ind0': '⚡ មហាកំពូលព្យុះ (រន្ទះ + ភ្លៀង + ព្រិល + 3D)',
  'weather.ind1': '🎬 Cyber Video',
  'weather.ind2': '🌧️ ភ្លៀងធ្លាក់ Cyber',
  'weather.ind3': '⚡ ផ្គររន្ទះ និងផ្លេកបន្ទោរ',
  'weather.ind4': '❄️ ព្រិលត្រជាក់ Cosmic',
  'weather.ind5': '🌌 3D Cyber Mesh',
  'weather.ind6': '✨ Zen Aurora',
  'weather.ind7': '🌿 ទម្រង់ធម្មតា (បិទ 3D & Video - មិនស៊ី RAM & ត្រជាក់ម៉ាស៊ីន)',
  'weather.mobileOption1': '⚡ ភ្លៀង + ព្រិល + ផ្គររន្ទះ',
  'weather.mobileOption2': '🌿 ទម្រង់ធម្មតា',
  'mute.btnTitle': 'បិទ/បើក សំឡេងបរិយាកាស',
  'mute.unmuted': '🔊 បានបើកសំឡេងបរិយាកាស',
  'mute.muted': '🔇 បានបិទសំឡេង',
  'nav.resume': 'ប្រវត្តិ',
  'resume.sectionTag': 'រឿងរ៉ាវរបស់ខ្ញុំ',
  'resume.titleBefore': 'ដំណើរ',
  'resume.titleHighlight': 'ការអភិវឌ្ឍ',
  'resume.desc': 'ប្រវត្តិការសិក្សា និងបទពិសោធការងាររបស់ខ្ញុំ — ពីតូចមក។',
  'resume.edu': 'ការអប់រំ',
  'resume.exp': 'បទពិសោធការងារ',
  'resume.edu1.date': '២០២៥ - បច្ចុប្បន្ន',
  'resume.edu1.title': 'សាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប',
  'resume.edu1.place': 'ភ្នំពេញ, កម្ពុជា',
  'resume.edu1.desc': 'បច្ចុប្បន្ន កំពុងបន្តការសិក្សាថ្នាក់ឧត្តមសិក្សា ផ្នែក វិទ្យាសាស្ត្រកុំព្យូទ័រ។',
  'resume.edu2.date': '២០២៣ - ២០២៥',
  'resume.edu2.title': 'វិទ្យាស្ថាន សុីតិក (Setec Institute)',
  'resume.edu2.place': 'ភ្នំពេញ, កម្ពុជា',
  'resume.edu2.desc': 'បានបញ្ចប់ថ្នាក់បរិញ្ញាបត្ររងនៅវិទ្យាស្ថាន  សុីតិក  (Setec Institute) ក្នុងជំនាញ​​​​​​  Management information systems។',
  'resume.edu3.date': '២០១៩ - ២០២២',
  'resume.edu3.title': 'វិទ្យាល័យ ព្រះសីហនុ',
  'resume.edu3.place': 'ខេត្តកំពង់ចាម, កម្ពុជា',
  'resume.edu3.desc': 'បញ្ចប់ការសិក្សាមធ្យមសិក្សាទុតិយភូមិ ទទួលបានលំដាប់ពិន្ទុ ៧៩.៤៩១​',
  'resume.edu4.date': '២០០៨ - ២០១៩',
  'resume.edu4.title': 'សាលាបឋមសិស្សានិងអនុវិទ្យាល័យ ទួលថ្ម',
  'resume.edu4.place': 'កំពង់ចាម, កម្ពុជា',
  'resume.edu4.desc': 'បញ្ចប់ការសិក្សាកម្រិតអនុវិទ្យាល័យ និងបឋមសិក្សា ដោយទទួលបានននិន្ទេស"ល្អ" ក្នុងឌីបប្លូមនិងចំណេះដឹងមូលដ្ឋានលើគ្រប់មុខវិជ្ជា។',
  'resume.exp1.title': 'អ្នកអភិវឌ្ឍវិបសាយ Freelancer & ស្ថាបនិក Startup CLoud POS',
  'resume.exp1.place': 'Freelance / Startup',
  'resume.exp1.date': '២០២៥ - បច្ចុប្បន្ន',
  'resume.exp1.desc': 'ធ្វើការងារជា Web Developer Freelancer ព្រមទាំងកំពុងបង្កើតគម្រោង Startup "Cloud POS" Web App ជាមួយនិងក្រុមផងដែរ។',
  'resume.exp2.title': 'ជំនួយការផ្នែក IT Support',
  'resume.exp2.place': ' IT​​​​ ROOM​ នៃវិទ្យាស្ថាន សុីតិក ',
  'resume.exp2.date': '២០២៤ - ២០២៥',
  'resume.exp2.desc': 'ជួយដោះស្រាយបញ្ហាបច្ចេកទេស ថែទាំ Hardware និងគាំទ្រផ្នែក Software សម្រាប់តម្រូវការស្ថាប័ន​ និងដោះស្រាយបញ្ហារបស់និស្សិតនៃ វិទ្យាស្ថាន សុីតិក។',
  'resume.exp3.title': 'រចនាក្រាហ្វិក (Graphic Design)',
  'resume.exp3.place': 'សាលាបច្ចេកទេស និងវិជ្ជាជីវៈ (TVET Cambodia)',
  'resume.exp3.date': '២០២២ - ២០២៣',
  'resume.exp3.desc': 'បង្កើតគំនិត និងរចនារូបភាពសម្រាប់ Branding សម្ភារៈ និងឯកសារឌីជីថលផ្សេងៗ។',
  'resume.exp4.title': 'ផលិតមាតិកា (Content Creation)',
  'resume.exp4.place': 'បណ្តាញសង្គម',
  'resume.exp4.date': '២០២១ - បច្ចុប្បន្ន',
  'resume.exp4.desc': 'បង្កើតមាតិកាឌីជីថលនៅលើបណ្តាញសង្គមផ្សេងៗ ដើម្បីកសាង Brand និងទាក់ទាញអ្នកទស្សនា និង រៀនកាត់តវិឌីអូឲទាក់ទាញ។',
  'resume.exp5.title': 'អាជីវកម្មអនឡាញ (Business Online)',
  'resume.exp5.place': 'ពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក',
  'resume.exp5.date': '២០២០ - ២០២១',
  'resume.exp5.desc': 'គ្រប់គ្រង និងដំណើរការអាជីវកម្មតាមប្រព័ន្ធអនឡាញ ដោយផ្តោតលើការលក់ និងការទំនាក់ទំនងអតិថិជននិងកាន់ផេកនិងដឹកជញ្ចូន។',
  'alert.privateTitle': 'គម្រោងឯកជន (Private)',
  'alert.privateMessage': 'កូដនេះត្រូវបានដាក់ជា Private។ សូមប្រាប់ថានៅពេលអ្នកចុចបន្ត អ្នកនឹងឃើញតែ Public Repositories ប៉ុណ្ណោះ។',
  'alert.confirm': 'យល់ព្រម និងបន្ត',
  'alert.cancel': 'បោះបង់',
  'proj8.title': 'S Tech Store (វេទិកា E-Commerce កុំព្យូទ័រ & ប្រព័ន្ធទូទាត់ KHQR)',
  'proj8.desc': 'S Tech Store គឺជាវេទិកា E-Commerce កុំព្យូទ័រ និងសម្ភារៈ IT កម្រិត Enterprise បង្កើតឡើងដោយ Next.js 16, Laravel 11 និង PostgreSQL/Firebase។ ចំណុចលេចធ្លោសំខាន់ៗរួមមាន៖ ១) ប្រព័ន្ធទូទាត់ Dynamic Bakong KHQR (USD/KHR) ជាមួយ 1-Tap Mobile Banking Deep Links; ២) ឧបករណ៍ផ្គុំកុំព្យូទ័រ Custom PC Builder ផ្ទៀងផ្ទាត់ភាពត្រូវគ្នានៃគ្រឿង Hardware និងគណនាវ៉ាត់ភ្លើងស្វ័យប្រវត្តិ; ៣) ប្រព័ន្ធ Telegram Supergroup Bot ស្វ័យប្រវត្តិតាមដាន Order និងស្តុក; ៤) ប្រព័ន្ធ Live Chat ពីរផ្លូវតភ្ជាប់ Telegram; និង ៥) ផ្ទាំងគ្រប់គ្រង Merchant HQ វិភាគចំណូលជាក់ស្តែង និងព្រីនវិក្កយបត្រ ESC/POS។ ដាក់ឱ្យដំណើរការផ្ទាល់នៅ www.s-tech-store.tech។',
  'proj9.title': 'Delight Fashion (វេទិកា E-Commerce ម៉ូតបុរសប្រណិត & ប្រព័ន្ធ KHQR)',
  'proj9.desc': 'Delight Fashion គឺជាវេទិកា E-Commerce លក់សម្លៀកបំពាក់បុរសកម្រិតប្រណិត (Luxury Men\'s Fashion Platform) ដែលត្រូវបានបង្កើតឡើងសម្រាប់ទីផ្សារហាងសម្លៀកបំពាក់ទំនើបក្នុងរាជធានីភ្នំពេញ ប្រទេសកម្ពុជា ត្រៀមរួចជាស្រេចសម្រាប់ Production។ ប្រព័ន្ធត្រូវបានរចនាឡើងយ៉ាងរឹងមាំជាមួយ Next.js 16 (App Router), React 19, TypeScript, និង Tailwind CSS v4 ជាមួយរចនាបថប្រណិតពណ៌ខ្មៅ ស និងមាស (Black, White & Gold Aesthetic)។ មុខងារស្នូលសំខាន់ៗរួមមាន៖ ១) ប្រព័ន្ធសុវត្ថិភាព និងការគ្រប់គ្រងសិទ្ធិ (Firebase Auth & RBAC) គាំទ្រ Google Sign-In ដោយបែងចែកដាច់រវាងគណនីអតិថិជន និងសិទ្ធិគ្រប់គ្រងរបស់ម្ចាស់ហាង (Admin); ២) ដំណើរការកុម្ម៉ង់ និងកាត់ស្តុកស្វ័យប្រវត្តិ (Atomic Transactional Order Engine) ដោយប្រើ Firebase Admin SDK ជាមួយ Firestore Transactions ដើម្បីការពារ Race Condition និងកាត់បន្ថយចំនួនទំនិញក្នុងស្តុកភ្លាមៗ; ៣) ប្រព័ន្ធទូទាត់ប្រាក់ក្នុងស្រុកពេញលេញ គាំទ្រ ABA Bank QR PayWay និង Dynamic Bakong KHQR តាមស្តង់ដារ EMVCo ជាមួយ 1-Tap Deep Link ចូល Mobile Banking App និងផ្ទៀងផ្ទាត់ការទូទាត់ដោយស្វ័យប្រវត្តិ; ៤) ប្រព័ន្ធជូនដំណឹងបន្ទាន់ទៅកាន់ម្ចាស់ហាងតាម Telegram Bot API ដោយស្វ័យប្រវត្តិនូវរាល់ពេលមានការបញ្ជាទិញថ្មី; ៥) បទពិសោធទិញទំនិញដ៏រលូន (Storefront UX) រួមមាន Live Search តាម Server Actions, តម្រងស្វែងរកតាមប្រភេទ, កន្ត្រកទំនិញស្លាយបើកស្វ័យប្រវត្តិ (Cart Drawer), និង Checkout Modal រហ័ស; ៦) ផ្ទាំងគ្រប់គ្រងអាជីវកម្ម (Admin Dashboard) វិភាគស្ថិតិចំណូលជាក់ស្តែង ក្រាហ្វលក់ ៧ ថ្ងៃចុងក្រោយជាមួយ Recharts, ការជូនដំណឹងទំនិញជិតអស់ពីស្តុក (Low Stock Alerts), និងការគ្រប់គ្រងដំណាក់កាល Order; ៧) ប្រព័ន្ធបញ្ជូនរូបភាព Cloudinary CDN បង្កើនល្បឿនជាមួយ WebP/AVIF Auto-Optimization; និង ៨) ដំឡើងជាកម្មវិធីទូរស័ព្ទ (PWA) តាមរយៈ Serwist អាចដំណើរការបានទោះបី Offline។ ដាក់ឱ្យដំណើរការផ្ទាល់នៅលើ Firebase Hosting និង GitHub។',
  'proj10.title': 'NRI Studio',
  'proj10.desc': 'NRI Studio គឺជា IDE (Integrated Development Environment) ដំណើរការក្នុង Browser ដែលមានទម្រង់ស្រដៀង VSCode។ បង្កើតឡើងសម្រាប់ Developer ទំនើប អាចបង្កើត កែ រក្សាទុក និង Execute កូដ JavaScript/TypeScript ទាំងស្រុងក្នុង Cloud។ មុខងាររួមមាន Monaco Editor ជាមួយ IntelliSense, ការ Auto-Complete, Sidebar, Multi-Tab, Local Folder Upload, Terminal ស្ទួន Node.js Sandbox, Auto-Save ទៅ MongoDB, និង Firebase Auth (Email/Google)។ Deploy នៅ Vercel (Frontend) និង Render (Backend)។',
  'proj11.title': 'ប្រព័ន្ធ X-Clinic - វេទិកា Multi-Tenant Medical PaaS និងគ្រប់គ្រងមន្ទីរពេទ្យកម្រិតសហគ្រាស',
  'proj11.desc': 'ប្រព័ន្ធ X-Clinic គឺជាវេទិកា Enterprise Multi-Tenant Clinical SaaS & EMR 360 គ្រប់គ្រងគ្លីនិក និងមន្ទីរពេទ្យទំនើប បង្កើតឡើងដោយ Next.js 14, NestJS 10, Prisma ORM និង PostgreSQL 16។ ចំណុចលេចធ្លោសំខាន់ៗរួមមាន៖ ១) ស្ថាបត្យកម្ម Multi-Tenant Auto-Isolation បែងចែកទិន្នន័យគ្លីនិកនីមួយៗដាច់ដោយឡែកពីគ្នា ១០០%; ២) ប្រព័ន្ធទូទាត់ Dynamic Bakong KHQR (USD/KHR) និង ABA PayWay ជាមួយ 1-Tap Deep Link; ៣) កំណត់ត្រា EMR 360 អមដោយ AI Voice Dictation (Gemini 3.8); ៤) ប្រព័ន្ធជំនួយវេជ្ជសាស្ត្រឆ្លាតវៃ CDSS ផ្ទៀងផ្ទាត់ប្រតិកម្មថ្នាំ និងអាលែកហ្ស៊ី; ៥) WebGL DICOM PACS មើលរូបភាពវេជ្ជសាស្ត្រ និង WebRTC Teleconsultation; និង ៦) ព្រីនបង្កាន់ដៃកម្ដៅ ESC/POS 80mm/58mm ផ្ទាល់ពី Browser អមដោយ Telegram Bot ស្វ័យប្រវត្តិ។',
  'proj12.title': 'QR Scan (កម្មវិធីស្កេនកូដ QR & បាកូដ Ultra HD AI PWA)',
  'proj12.desc': 'QR Scan គឺជាកម្មវិធី Progressive Web App (PWA) ដ៏ទំនើប លឿនបំផុត និងមានសុវត្ថិភាពខ្ពស់ សម្រាប់ស្កេនកូដ QR និងបាកូដទំនិញគ្រប់ប្រភេទដោយផ្ទាល់តាមរយៈ Browser និងទូរស័ព្ទដៃ ដោយមិនបាច់ដំឡើង App ពី Store ឡើយ។ ប្រព័ន្ធត្រូវបានបង្កើតឡើងដោយ React 18, TypeScript, Vite 5, Tailwind CSS និង html5-qrcode។ មុខងារស្នូលសំខាន់ៗរួមមាន៖ ១) ប្រព័ន្ធស្កេនកាមេរ៉ាកម្រិត Ultra HD AI ជាមួយសមត្ថភាព Auto-Focus ប្តូរកាមេរ៉ាមុខក្រោយ បើកពិល (Torch) និងចុចលើអេក្រង់ដើម្បី Focus; ២) ការស្គាល់គ្រប់ទម្រង់កូដ រួមមានកូដជាតិ Bakong KHQR (EMVCo), បាកូដទំនិញស្តង់ដារអន្តរជាតិ (EAN-13, EAN-8, UPC, Code 128, Code 39) និង QR កូដទូទៅ; ៣) ការវិភាគខ្លឹមសារឆ្លាតវៃ (Smart Content Parsing) ចែកដាច់រវាងតំណរភ្ជាប់ URL, ព័ត៌មាន Wi-Fi (Copy ពាក្យសម្ងាត់ភ្ជាប់ដោយ ១ ចុច), ទំនាក់ទំនង vCard (.vcf export), ការតេចេញ, ផ្ញើសារ SMS, អ៊ីមែល, ទីតាំង Google Maps, ការស្វែងរកទំនិញលើ Google និងបើកគណនីបណ្តាញសង្គម; ៤) ប្រព័ន្ធការពារសុវត្ថិភាពខ្ពស់ (Anti-Phishing & Security) ទប់ស្កាត់ Protocol គ្រោះថ្នាក់ (javascript:, data:) ព្រមានតំណរភ្ជាប់ HTTP និងផ្ទៀងផ្ទាត់មុនបើកគេហទំព័រក្រៅ; ៥) ឯកជនភាព ១០០% (Local-First Privacy) មិនបញ្ជូនទិន្នន័យ ឬរូបភាពទៅកាន់ Server ក្រៅឡើយ ដោយរក្សាទុកប្រវត្តិស្កេន និង Favorite ក្នុង IndexedDB លើឧបករណ៍ផ្ទាល់ខ្លួន; ៦) ស្កេនកូដពីរូបថតក្នុង Gallery និងបញ្ចូលកូដដោយដៃ; ៧) គាំទ្រ ២ ភាសា (ខ្មែរ/អង់គ្លេស) ជាមួយ i18next; និង ៨) ដំឡើងជា PWA លើ iPhone, Android និងកុំព្យូទ័រ ជាមួយប្រព័ន្ធ Auto-Update ស្វ័យប្រវត្តិតាមរយៈ Workbox។',
  'proj13.title': 'Rotana Portfolio Native (កម្មវិធីទូរស័ព្ទ React Native & Expo)',
  'proj13.desc': 'Rotana Portfolio Native គឺជាកម្មវិធីទូរស័ព្ទដៃផ្លូវការ (Cross-Platform Mobile App សម្រាប់ iOS & Android) ដែលត្រូវបានបង្កើតឡើងដោយបច្ចេកវិទ្យា React Native 0.76 និង Expo 52។ បំពាក់ដោយប្រព័ន្ធរុករកទំព័រទំនើប Expo Router v4, ចលនាអន្តរកម្មរលូនជាមួយ React Native Reanimated 3, ប្រព័ន្ធញ័រដៃ Haptic Feedback, រូបតំណាង Lucide Icons និងរចនាបថបែប Glassmorphism ដ៏ប្រណិត។ មុខងារសំខាន់ៗរួមមាន៖ ការបង្ហាញគម្រោងការងារ និងបច្ចេកវិទ្យាស្នូល, ផ្ទាំងពិនិត្យវិញ្ញាបនបត្រ (Certificate Viewer), ការតភ្ជាប់ទំនាក់ទំនងផ្ទាល់តាមទូរស័ព្ទ និងបណ្តាញសង្គម ដំណើរការបានលឿន និងរលូនលើទាំង iOS និង Android។',
  'proj14.title': 'Computer Shop Management System (ប្រព័ន្ធគ្រប់គ្រងហាងកុំព្យូទ័រ ASP.NET MVC)',
  'proj14.desc': 'Computer Shop គឺជាប្រព័ន្ធគ្រប់គ្រងហាងកុំព្យូទ័រ និងការលក់អនឡាញខ្នាតសហគ្រាស (Retail POS & E-Commerce Inventory Management System) បង្កើតឡើងដោយបច្ចេកវិទ្យា ASP.NET MVC 5, ភាសា C#, Entity Framework 6 និងប្រព័ន្ធមូលដ្ឋានទិន្នន័យ Microsoft SQL Server។ មុខងារស្នូលរួមមាន៖ ការគ្រប់គ្រងស្តុកទំនិញ និងម៉ាកល្បីៗ (Asus ROG, Dell XPS, MSI Gaming, Custom PC Builder), ប្រព័ន្ធលក់ POS និងចេញវិក្កយបត្រ (Invoice Generator), ការបែងចែកសិទ្ធិតាមតួនាទី (RBAC សម្រាប់ Admin, បុគ្គលិក Staff, និងអតិថិជន Customer), ការគ្រប់គ្រងអ្នកផ្គត់ផ្គង់ (Suppliers), ការតាមដានស្ថានភាពស្តុក និងរបាយការណ៍ចំណូលអាជីវកម្មជាមួយ Bootstrap UI។',
  'proj15.title': 'ភូមិអង្គរ 3D (Phum Angkor 3D - ល្បែង 3D វប្បធម៌បុរាណខ្មែរ)',
  'proj15.desc': 'ភូមិអង្គរ 3D (Phum Angkor 3D) គឺជាល្បែងកម្សាន្ត 3D Web Game បែបស្វែងយល់វប្បធម៌ខ្មែរបុរាណក្នុងសម័យអង្គរ ដែលត្រូវបានបង្កើតឡើងដោយបច្ចេកវិទ្យា Three.js, React 18, React Three Fiber (@react-three/fiber) និង Drei។ អ្នកលេងអាចធ្វើដំណើរកម្សាន្តដោយសេរីក្នុងភូមិបុរាណដែលមានប្រាសាទថ្មបុរាណ ផ្ទះបុរាណខ្មែរ និងស្រះឈូក។ មុខងារស្នូលរួមមាន៖ ការបញ្ជាតួអង្គក្នុងទិដ្ឋភាព First-Person & Third-Person ជាមួយប្រព័ន្ធ Collision Physics, ប្រព័ន្ធប្តូរវេនថ្ងៃ-យប់ និងអាកាសធាតុភ្លៀងផ្គរ (Dynamic Day/Night & Weather), កិច្ចការស្រាវជ្រាវប្រមូលវត្ថុបុរាណ និងរៀនពីប្រវត្តិសាស្ត្រខ្មែរ ព្រមទាំងប្រព័ន្ធសំឡេង 3D Spatial Audio អមដោយភ្លេងពិណពាទ្យបុរាណ។',
  'proj16.title': 'Khmer City Builder (ល្បែងសាងសង់ទីក្រុងខ្មែរ - គម្រោងចូលរួម Open Source)',
  'proj16.desc': 'Khmer City Builder (ល្បែងសាងសង់ទីក្រុងខ្មែរ) គឺជាគម្រោងល្បែង Web Game បែប Isometric Simulation បង្កើតឡើងដោយការចូលរួមអភិវឌ្ឍន៍រួមគ្នា (Collaborative Open Source) ដើម្បីលើកស្ទួយស្ថាបត្យកម្ម និងវប្បធម៌ខ្មែរ។ ប្រព័ន្ធត្រូវបានបង្កើតឡើងដោយ React 18, Vite 5, Tailwind CSS, Lucide Icons និង Web Audio API។ មុខងារស្នូលរួមមាន៖ ប្រព័ន្ធក្រឡាចត្រង្គអន្តរកម្ម (Grid-based Construction) សម្រាប់សាងសង់ បង្វិល ពង្រីក-បង្រួម (Zoom/Pan) និងវាយកម្ទេច, សំណង់ស្ថាបត្យកម្មខ្មែរពិតៗ (ផ្ទះបុរាណឈើ វត្តអារាម ផ្ទះល្វែង ស្រែស្រូវ និងបារាយណ៍ទឹក), និងប្រព័ន្ធសេដ្ឋកិច្ចឆ្លាតវៃតាមដានចំនួនប្រជាជន ចំណូលពន្ធមាស ពិន្ទុវប្បធម៌ និងកម្រិតសុភមង្គល។',
  'ai.sectionTag': 'ការអភិវឌ្ឍន៍ដោយប្រើ AI',
  'ai.titleBefore': 'ពន្លឿនការងារជាមួយ',
  'ai.titleHighlight': 'ឧបករណ៍ AI',
  'ai.intro': 'ដោយមានជំនួយពីឧបករណ៍ AI ទំនើបៗ ខ្ញុំអាចអភិវឌ្ឍន៍កម្មវិធីបានយ៉ាងលឿនបំផុត។ ខ្ញុំអាចរៀបចំ Architecture និងបង្កើតទាំង Backend និង Frontend ជាមួយនឹងបច្ចេកវិទ្យាជាច្រើនដូចជា <strong style="color:var(--text-primary)">Next.js, NestJS, PHP, Java, និង C#</strong> ព្រមទាំងប្រើប្រាស់ Firebase យ៉ាងស្ទាត់ជំនាញ។ ខ្ញុំប្រើប្រាស់ឧបករណ៍ទាំងនេះដើម្បីសរសេរកូដឲ្យមានប្រសិទ្ធភាពខ្ពស់ ស្អាត និងមានសុវត្ថិភាពខ្ពស់ (Security) ក្នុងរយៈពេលដ៏ខ្លី។',
  'ai.usecase1.title': '១. ការអភិវឌ្ឍន៍ដោយជំនួយពី AI (Cursor, Google Antigravity, Devin, GitHub Copilot)',
  'ai.usecase1.desc': 'ខ្ញុំប្រើ AI Coding Agents ដើម្បីពន្លឿនការសរសេរកូដ។ មុនពេលប្រើពួកវា ខ្ញុំកំណត់តម្រូវការច្បាស់លាស់ និងបង្កើតផែនការ (Implementation Plan) ជាមុនសិន។ បន្ទាប់មក ខ្ញុំពិនិត្យ ស្វែងយល់ តេស្ត និងផ្ទៀងផ្ទាត់ការផ្លាស់ប្តូរមួយជំហានម្តងៗ មុនពេលទទួលយក ឬប្រើប្រាស់វា។',
  'ai.usecase2.title': '២. ការសរសេរកូដ និងដោះស្រាយបញ្ហាស្មុគស្មាញ (Claude, ChatGPT, DeepSeek, Kimi)',
  'ai.usecase2.desc': 'ខ្ញុំប្រើឧបករណ៍ទាំងនេះដើម្បីសិក្សាពី Software Architecture, ស្វែងយល់ពី Logic ស្មុគស្មាញ, ស្វែងរកកំហុសកូដ (Debug), ធ្វើឲ្យដំណោះស្រាយកាន់តែប្រសើរ និងវិភាគកូដខ្នាតធំ។ ខ្ញុំតែងប្រៀបធៀបវិធីសាស្ត្រផ្សេងៗគ្នា ជាជាងពឹងផ្អែកលើចម្លើយតែមួយរបស់ AI។',
  'ai.usecase3.title': '៣. ព័ត៌មានបច្ចេកវិទ្យា និងការស្រាវជ្រាវ (Grok, NotebookLM, Perplexity)',
  'ai.usecase3.desc': 'ខ្ញុំប្រើ Grok ដើម្បីតាមដានព័ត៌មានបច្ចេកវិទ្យាថ្មីៗ ជាពិសេសផ្នែក AI, សន្តិសុខបណ្តាញ (Cybersecurity), ឧបករណ៍សរសេរកូដថ្មីៗ និង Frameworks ដែលជួយឲ្យខ្ញុំដឹងពីបច្ចេកវិទ្យាថ្មីៗបានលឿន។ ខ្ញុំប្រើ NotebookLM សម្រាប់ការស្រាវជ្រាវផ្អែកលើឯកសារយោង និង Perplexity សម្រាប់ការស្រាវជ្រាវបច្ចេកទេសស៊ីជម្រៅ។',
  'ai.usecase4.title': '៤. ការចងក្រងឯកសារ ការរៀបចំផែនការ និងការរៀនសូត្រ (ChatGPT, Gemini, Notion)',
  'ai.usecase4.desc': 'ខ្ញុំប្រើ ChatGPT និង Gemini សម្រាប់ជួយគិតគូរពី Architecture, ចងក្រងឯកសារ, ពន្យល់ពីគោលគំនិតបច្ចេកទេស និងរៀនបច្ចេកវិទ្យាថ្មីៗ។ ខ្ញុំប្រើ Notion សម្រាប់ការរៀបចំផែនការគម្រោង តាមដានការងារ និងការចងក្រងឯកសារជាក្រុម។',
  'ai.conclusion': 'ជារួម ខ្ញុំចាត់ទុក AI ជាឧបករណ៍ជួយបង្កើនផលិតភាព និងរៀនសូត្រ មិនមែនជំនួសការវិនិច្ឆ័យរបស់ខ្ញុំឡើយ។ ខ្ញុំតែងតែពិនិត្យ តេស្ត និងផ្ទៀងផ្ទាត់លទ្ធផលរបស់ AI មុននឹងប្រើក្នុងគម្រោង។ នេះជួយខ្ញុំឲ្យធ្វើការបានលឿន ប៉ុន្តែនៅតែរក្សាបាននូវគុណភាពកូដ ទំនុកចិត្ត និងការយល់ដឹងច្បាស់លាស់ពីអ្វីដែលខ្ញុំបានបង្កើត។',
});

function getLang() {
  return localStorage.getItem(LANG_KEY) === 'km' ? 'km' : 'en';
}

function t(key) {
  const L = getLang();
  return (I18N[L] && I18N[L][key]) || I18N.en[key] || key;
}

function applyI18n() {
  document.documentElement.lang = getLang() === 'km' ? 'km' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.getAttribute('data-i18n');
    if (k && t(k)) el.textContent = t(k);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const k = el.getAttribute('data-i18n-html');
    if (k && t(k)) el.innerHTML = t(k);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (k && t(k)) el.setAttribute('placeholder', t(k));
  });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const k = el.getAttribute('data-i18n-title');
    if (k && t(k)) el.setAttribute('title', t(k));
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const on = btn.getAttribute('data-set-lang') === getLang();
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  document.title = t('page.title');
  try {
    if (typeof applyWeatherUiLabels === 'function') applyWeatherUiLabels();
  } catch (e) {}
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    localStorage.setItem(LANG_KEY, btn.getAttribute('data-set-lang'));
    applyI18n();
  });
});
applyI18n();

/* ========================================================
   🔥 FIREBASE INTEGRATION ZONE
   ======================================================== */
const firebaseConfig = {
  apiKey: 'AIzaSyDhGv1POoU1Pq1XhZHNQu6qZF0_dCKZi-g',
  authDomain: 'nobrotana.firebaseapp.com',
  projectId: 'nobrotana',
  storageBucket: 'nobrotana.firebasestorage.app',
  messagingSenderId: '692013232245',
  appId: '1:692013232245:web:400e0286983edcbb06083c',
  measurementId: 'G-YNKFRQ7RP6'
};

let db = null;
if (typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
  } catch (e) {
    console.error('Firebase init error:', e);
  }
}

function escapeHtml(str) {
  if (str == null) return '';
  const d = document.createElement('div');
  d.textContent = String(str);
  return d.innerHTML;
}

function escapeAttr(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function observeRevealNodes(nodes) {
  if (!nodes || !nodes.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
          bar.style.width = bar.getAttribute('data-width') + '%';
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  nodes.forEach((el) => observer.observe(el));
}

async function loadProjectsFromFirestore() {
  const grid = document.getElementById('projects-grid');
  if (!grid || !db) return;
  try {
    const snapshot = await db.collection('projects').get();
    if (snapshot.empty) return;

    const docs = [];
    snapshot.forEach((docSnap) => docs.push(docSnap.data()));
    docs.sort((a, b) => {
      const score = (p) => {
        const t = (p.title || '').toLowerCase();
        if (t.includes('s tech') || t.includes('s_tech')) return 1;
        if (t.includes('youngpos') || t.includes('young pos')) return 2;
        if (t.includes('clinic') || t.includes('houn vannak') || t.includes('x-clinic')) return 3;
        if (t.includes('e-learning v2') || t.includes('elearning v2')) return 4;
        if (t.includes('qr scan') || t.includes('qr-scan')) return 6;
        if (t.includes('sms') || t.includes('student management')) return 8;
        if (t.includes('native') || t.includes('react native') || t.includes('portfolio-app')) return 7;
        if (t.includes('delight')) return 5;
        if (t.includes('asp.net') || t.includes('computer shop')) return 9;
        if (t.includes('nri studio') || t.includes('nri-studio')) return 10;
        if (t.includes('phum angkor') || t.includes('angkor')) return 11;
        if (t.includes('city builder') || t.includes('khmer-city')) return 12;
        if (t.includes('banluy')) return 13;
        if (t.includes('moon coffee') || t.includes('moon-coffee')) return 14;
        if (t.includes('old version') || t.includes('elearningg')) return 15;
        if (t.includes('bacii')) return 16;
        return (p.order !== undefined ? p.order + 20 : 99);
      };
      return score(a) - score(b);
    });

    const parts = [];
    docs.forEach((p) => {
      const title = escapeHtml(p.title || '');
      const desc = escapeHtml(p.description || '');
      const mt = String(p.mediaType || 'image').toLowerCase();
      let mediaInner = '';
      if (mt === 'video' && p.videoUrl) {
        mediaInner = '<video controls muted loop playsinline preload="metadata"><source src="' + escapeAttr(p.videoUrl) + '" type="video/mp4"></video>';
      } else if (mt === 'iframe' && p.iframeUrl) {
        mediaInner = '<iframe src="' + escapeAttr(p.iframeUrl) + '" allowfullscreen loading="lazy"></iframe>';
      } else if (p.imageUrl) {
        mediaInner = '<img src="' + escapeAttr(p.imageUrl) + '" alt="' + title + '" />';
      } else {
        mediaInner = '<div class="media-placeholder"><i class="fa-regular fa-image"></i><span>Project</span></div>';
      }
      const badge = escapeHtml(mt === 'iframe' ? 'iframe' : mt);
      const tags = (p.tags || []).map((tag) => '<span class="tag">' + escapeHtml(tag) + '</span>').join('');
      const codeLink = p.githubUrl
        ? '<a href="' + escapeAttr(p.githubUrl) + '" class="project-link" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Code</a>'
        : '';
      const liveLink = p.liveUrl
        ? '<a href="' + escapeAttr(p.liveUrl) + '" class="project-link" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>'
        : '';
      parts.push(
        '<div class="project-card reveal"><div class="project-media">' +
        mediaInner +
        '<div class="project-media-badge">' + badge + '</div></div><div class="project-body"><div class="project-tags">' +
        tags +
        '</div><h3 class="project-title">' +
        title +
        '</h3><p class="project-desc">' +
        desc +
        '</p><div class="project-links">' +
        codeLink +
        liveLink +
        '</div></div></div>'
      );
    });
    grid.innerHTML = parts.join('');
    observeRevealNodes(grid.querySelectorAll('.reveal'));
  } catch (e) {
    console.warn('Firestore projects:', e);
  }
}

async function loadCertificatesFromFirestore() {
  const grid = document.getElementById('certs-grid');
  if (!grid || !db) return;
  try {
    const snapshot = await db.collection('certificates').get();
    if (snapshot.empty) return;

    const parts = [];
    snapshot.forEach((docSnap) => {
      const c = docSnap.data();
      const issuer = escapeHtml(c.issuer || '');
      const title = escapeHtml(c.title || '');
      const dateStr = escapeHtml(c.date || '');
      const iconClass = escapeAttr(c.icon || 'fa-solid fa-award');
      const preview = c.previewImageUrl
        ? '<img src="' + escapeAttr(c.previewImageUrl) + '" alt="' + title + '" class="cert-preview-img" />'
        : '';
      const link = c.credentialUrl ? escapeAttr(c.credentialUrl) : '#';
      parts.push(
        '<div class="cert-card reveal">' +
        '<div class="cert-icon-wrap"><i class="' + iconClass + '"></i></div>' +
        '<div><div class="cert-issuer">' + issuer + '</div><div class="cert-card-title">' + title + '</div></div>' +
        preview +
        '<div class="cert-date"><i class="fa-regular fa-calendar"></i> ' + dateStr + '</div>' +
        '<a href="' + link + '" class="cert-link" target="_blank" rel="noopener noreferrer">View Credential <i class="fa-solid fa-arrow-right"></i></a>' +
        '</div>'
      );
    });
    grid.innerHTML = parts.join('');
    observeRevealNodes(grid.querySelectorAll('.reveal'));
  } catch (e) {
    console.warn('Firestore certificates:', e);
  }
}

// ====== DUAL BOT CONFIG ======
// Bot 1 (Account 1: @NobRotana)
// Bot 2 (Account 2: @rotananobSETEC)
const BOTS = [
  { token: '8876181869:AAHKHwTJOtaJBsZh92nBpb1nDP3IbEQZUlM', chat_id: '6762495028' }, // acc1
  { token: '8930376959:AAE3jZqSvNWgteMNj4wrfCDEAGpd6FEsYrw', chat_id: '5969566967' }, // acc2
];

// ====== TELEGRAM GROUP CHAT ID ======
const GROUP_CHAT_ID = '-1004309159982'; // Group: Alert Testing

// Helper: send a message via all bots (personal chats + group)
async function sendToAllBots(text) {
  // Send to each bot's personal chat
  const personalPromises = BOTS.map(bot =>
    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: bot.chat_id, text, parse_mode: 'Markdown', disable_web_page_preview: false })
    }).then(r => r.json())
  );

  // Send to group chat (via Bot 2 @rotananobSETEC to avoid duplicate messages)
  const groupPromise = fetch(`https://api.telegram.org/bot${BOTS[1].token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: GROUP_CHAT_ID, text, parse_mode: 'Markdown', disable_web_page_preview: false })
  }).then(r => r.json());

  const results = await Promise.allSettled([...personalPromises, groupPromise]);
  results.forEach((r, i) => {
    const label = i < BOTS.length ? `Bot${i+1}` : 'Group';
    if (r.status === 'fulfilled') console.log(`[TG] ✅ ${label} sent:`, r.value.ok);
    else console.error(`[TG] ❌ ${label} failed:`, r.reason);
  });
}

async function submitContactForm(name, email, message, telegram, linkedin) {
  if (!db) return { success: false, error: 'Firebase not ready' };
  try {
    const payload = {
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    if (telegram) payload.telegram = String(telegram).trim();
    if (linkedin) payload.linkedin = String(linkedin).trim();
    
    await db.collection('messages').add(payload);

    // === SEND ALERT TO TELEGRAM WHEN SOMEONE CONTACTS ===
    const contactText = [
      '📩 *សារថ្មីពីអតិថិជន (Contact Form)*',
      `👤 ឈ្មោះ: ${payload.name}`,
      `📧 អ៊ីមែល: ${payload.email}`,
      `📱 Telegram: ${payload.telegram || 'គ្មាន'}`,
      `💼 LinkedIn: ${payload.linkedin || 'គ្មាន'}`,
      `📝 សារ: ${payload.message}`,
    ].join('\n');
    sendToAllBots(contactText).catch(console.error);

    return { success: true };
  } catch (e) {
    console.error('Firestore messages:', e);
    return { success: false, error: e.message || String(e) };
  }
}

/* ========================================================
   TELEGRAM VISIT ALERT SYSTEM
   ======================================================== */
async function sendVisitAlertToTelegram() {
  if (!BOTS.length) return;

  // ---- Cooldown: Alert max once every 5 minutes per same browser ----
  // When user closes tab & opens again (new session) = always alert
  // When user just refreshes = skip if within 5 minutes
  const COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes
  const lastSent = localStorage.getItem('tg_visit_last');
  if (lastSent && (Date.now() - parseInt(lastSent)) < COOLDOWN_MS) {
    console.log('[TG Alert] Skipped — within 5 min cooldown');
    return;
  }

  try {
    // ---- Detect Device Type ----
    const ua = navigator.userAgent;
    let deviceType = '💻 Desktop';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
      deviceType = /iPad/i.test(ua) ? '📱 Tablet (iPad)' : '📱 Mobile';
    }

    // ---- Detect Browser ----
    let browser = 'Unknown';
    if (ua.includes('Edg')) browser = 'Edge';
    else if (ua.includes('OPR') || ua.includes('Opera')) browser = 'Opera';
    else if (ua.includes('Chrome')) browser = 'Chrome';
    else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
    else if (ua.includes('Firefox')) browser = 'Firefox';

    // ---- Detect OS ----
    let os = 'Unknown OS';
    if (ua.includes('Windows NT 10')) os = 'Windows 10/11';
    else if (ua.includes('Windows')) os = 'Windows';
    else if (ua.includes('Mac OS')) os = 'macOS';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';
    else if (ua.includes('Linux')) os = 'Linux';

    // ---- Screen Size ----
    const screen_size = `${window.screen.width}x${window.screen.height}`;

    // ---- Referrer ----
    const referrer = document.referrer ? document.referrer : 'Direct / No Referrer';

    // ---- Fetch IP + Location (Silent) ----
    let ip = 'N/A';
    let city = 'Unknown';
    let region = 'Unknown';
    let country = 'Unknown';
    let isp = 'Unknown';
    let lat = null;
    let lon = null;
    let mapsLink = '';

    try {
      const res = await fetch('https://ipapi.co/json/');
      if (res.ok) {
        const data = await res.json();
        ip      = data.ip           || 'N/A';
        city    = data.city         || 'Unknown';
        region  = data.region       || 'Unknown';
        country = data.country_name || 'Unknown';
        isp     = data.org          || 'Unknown';
        lat     = data.latitude;
        lon     = data.longitude;
        if (lat && lon) {
          mapsLink = `\n\n📍 [Open in Google Maps](https://www.google.com/maps?q=${lat},${lon})`;
        }
      }
    } catch (e) {
      console.warn('[TG Alert] Could not fetch IP info', e);
    }

    const time = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Phnom_Penh' });

    const message = [
      '👀 *មានអ្នកចូលមើល Portfolio!*',
      '',
      '━━━━━━━━━━━━ 📍 Location ━━━━━━━━━━━━',
      `🌍 ប្រទេស: *${country}*`,
      `🏙️ ខេត្ត/ទីក្រុង: ${region} › ${city}`,
      `🌐 IP Address: \`${ip}\``,
      `🏢 ISP/Network: ${isp}`,
      '',
      '━━━━━━━━━━━━ 💻 Device ━━━━━━━━━━━━',
      `${deviceType}`,
      `🖥️ OS: ${os}`,
      `🌐 Browser: ${browser}`,
      `📐 Screen: ${screen_size}`,
      '',
      '━━━━━━━━━━━━ 🔗 Session ━━━━━━━━━━━━',
      `🔗 Came from: ${referrer}`,
      `⏰ ម៉ោង (KH): ${time}`,
      mapsLink
    ].join('\n');

    console.log('[TG Alert] Sending via', BOTS.length, 'bots...');
    await sendToAllBots(message);

    // Save timestamp — cooldown 5 min to avoid spam on refresh
    localStorage.setItem('tg_visit_last', Date.now().toString());

  } catch (error) {
    console.error('[TG Alert] Fatal error:', error);
  }
}

// ពេល Website ដំណើរការពេញលេញ វានឹងហៅ Function នេះ
window.addEventListener('load', () => {
  setTimeout(sendVisitAlertToTelegram, 2000);
});

/* ========================================================
   THEME TOGGLE
   ======================================================== */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
let isDark = true;
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
  isDark = savedTheme === 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeIcon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
} else {
  isDark = true;
  document.documentElement.setAttribute('data-theme', 'dark');
  if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
}
themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  const theme = isDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  localStorage.setItem('portfolio-theme', theme);
});

/* ========================================================
   MOBILE MENU
   ======================================================== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}

/* ========================================================
   SKILLS TICKER
   ======================================================== */
const skills = [
  { icon: 'fa-brands fa-react', label: 'React' },
  { icon: 'fa-brands fa-react', label: 'Next.js' },
  { icon: 'fa-brands fa-node-js', label: 'NestJS' },
  { icon: 'fa-brands fa-php', label: 'PHP' },
  { icon: 'fa-brands fa-java', label: 'Java' },
  { icon: 'fa-solid fa-terminal', label: 'C#' },
  { icon: 'fa-solid fa-robot', label: 'AI Tools (Antigravity, Copilot, Cursor)' },
  { icon: 'fa-solid fa-fire', label: 'Firebase' },
  { icon: 'fa-solid fa-database', label: 'Firestore' },
  { icon: 'fa-solid fa-bolt', label: 'Realtime DB' },
  { icon: 'fa-solid fa-cloud-arrow-up', label: 'Cloud Storage' },
  { icon: 'fa-brands fa-html5', label: 'HTML5' },
  { icon: 'fa-brands fa-css3-alt', label: 'CSS3' },
  { icon: 'fa-brands fa-js', label: 'JavaScript' },
  { icon: 'fa-solid fa-user-shield', label: 'Firebase Auth' },
  { icon: 'fa-brands fa-git-alt', label: 'Git' },
  { icon: 'fa-brands fa-github', label: 'GitHub' },
];
const tickerTrack = document.getElementById('ticker-track');
if (tickerTrack) {
  const doubled = [...skills, ...skills];
  tickerTrack.innerHTML = doubled.map(s =>
    `<div class="ticker-item"><i class="${s.icon}"></i>${s.label}</div>`
  ).join('');
}

/* ========================================================
   2026 INTERACTIVE 3D BACKGROUND ENGINE & AMBIENCE CONTROLLER
   ======================================================== */
const weatherBtn = document.getElementById('weather-btn');
const weatherIcon = document.getElementById('weather-icon');
const weatherLabel = document.getElementById('weather-label');
const weatherIndicator = document.getElementById('weather-indicator');
const weatherCanvas = document.getElementById('weather-canvas');
const rainAudio = document.getElementById('rain-audio');
const beatAudio = document.getElementById('beat-audio');
const snowAudio = document.getElementById('snow-audio');
const thunderAudio = document.getElementById('thunder-audio');
const stormVideo = document.getElementById('storm-video');
const cyberVideo = document.getElementById('cyber-video');
const cursorGlow = document.getElementById('cursor-glow');
const audioWaves = document.getElementById('audio-waves');
const ctx = weatherCanvas?.getContext('2d');

// Graceful fallback for mobile browsers that do not support WebM container
if (cyberVideo) {
  cyberVideo.addEventListener('error', () => {
    cyberVideo.style.display = 'none';
  });
}
if (stormVideo) {
  stormVideo.addEventListener('error', () => {
    stormVideo.style.display = 'none';
  });
}

let beatDropTimeout = null;
let beatFadeInterval = null;
let thunderTimeout = null;

let particles = [];
let splashes = [];
let particles3D = [];
let rainDrops = [];
let snowFlakes = [];
let glassDroplets = [];
let matrixDrops = [];
let animFrame = null;
let flashOpacity = 0;
let lightningBolt = null;
let indicatorTimeout = null;
let lastLightningTime = 0;

// --- 2026 PRO CINEMATIC WEB AUDIO SYNTH ENGINE ---
let audioCtx = null;
let masterGain = null;
let masterCompressor = null;

let rainSource = null;
let rainFilter = null;
let rainLfo = null;
let rainGain = null;

let ambientPadOscs = [];
let ambientPadFilter = null;
let ambientPadGain = null;

let isAudioSynthInitialized = false;

// Generate True Organic Pink Noise (Paul Kellet algorithm)
function createPinkNoiseBuffer(ctx, duration = 4.0) {
  const bufferSize = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.12;
    b6 = white * 0.115926;
  }
  return buffer;
}

function initWebAudioSynth() {
  if (isAudioSynthInitialized) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();

    const now = audioCtx.currentTime;

    // Master Compressor (Soft limiter prevents clipping, distortion & ear fatigue)
    masterCompressor = audioCtx.createDynamicsCompressor();
    masterCompressor.threshold.setValueAtTime(-18, now);
    masterCompressor.knee.setValueAtTime(12, now);
    masterCompressor.ratio.setValueAtTime(6, now);
    masterCompressor.attack.setValueAtTime(0.003, now);
    masterCompressor.release.setValueAtTime(0.25, now);

    // Master Gain (Smooth non-popping volume controller)
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(isMuted ? 0.0001 : 0.75, now);

    masterCompressor.connect(masterGain);
    masterGain.connect(audioCtx.destination);

    // 1. Organic Rain Engine (Silenced pink noise in favor of authentic soothing rain recording)
    rainGain = audioCtx.createGain();
    rainGain.gain.setValueAtTime(0.0001, now);

    // 2. Mellow Healing Ambient Pad (432Hz Calm Nostalgic Tone - Ultra-soft & peaceful, បែបអន្លង់អន្លោច)
    ambientPadFilter = audioCtx.createBiquadFilter();
    ambientPadFilter.type = 'lowpass';
    ambientPadFilter.frequency.setValueAtTime(280, now);
    ambientPadFilter.Q.setValueAtTime(0.7, now);

    ambientPadGain = audioCtx.createGain();
    ambientPadGain.gain.setValueAtTime(0.012, now); // Soft, peaceful, melancholic warmth

    ambientPadFilter.connect(ambientPadGain);
    ambientPadGain.connect(masterCompressor);

    const padFreqs = [146.83, 220.0, 349.23];
    ambientPadOscs = padFreqs.map((freq, idx) => {
      const osc = audioCtx.createOscillator();
      osc.type = 'sine'; // Ultra-smooth, non-harsh pure sine
      osc.frequency.setValueAtTime(freq + (idx === 1 ? 0.25 : -0.2), now);
      osc.connect(ambientPadFilter);
      osc.start();
      return osc;
    });

    isAudioSynthInitialized = true;
  } catch (e) {
    console.log("Web Audio synth init postponed:", e);
  }
}

// Deep Cinematic Rolling Thunder Synthesizer (Realistic Sub-Bass + Reverberant Echo)
function playSynthesizedThunder(intensity = 1.0) {
  if (isMuted) return;
  if (!audioCtx) initWebAudioSynth();
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }

  try {
    const now = audioCtx.currentTime;
    const dur = 4.2;

    // Pink noise source for natural thunder acoustic texture
    const buffer = createPinkNoiseBuffer(audioCtx, dur);
    const thunderSource = audioCtx.createBufferSource();
    thunderSource.buffer = buffer;

    // Resonant sweep filter (starts at 180Hz and plunges to 45Hz sub-bass)
    const thunderFilter = audioCtx.createBiquadFilter();
    thunderFilter.type = 'lowpass';
    thunderFilter.Q.setValueAtTime(3.2, now);
    thunderFilter.frequency.setValueAtTime(180, now);
    thunderFilter.frequency.exponentialRampToValueAtTime(45, now + 3.2);

    // Initial sharp crack filter for the lightning strike snapshot
    const crackSource = audioCtx.createBufferSource();
    crackSource.buffer = buffer;
    const crackFilter = audioCtx.createBiquadFilter();
    crackFilter.type = 'bandpass';
    crackFilter.frequency.setValueAtTime(620, now);
    crackFilter.Q.setValueAtTime(2.0, now);

    const crackGain = audioCtx.createGain();
    crackGain.gain.setValueAtTime(0.001, now);
    crackGain.gain.linearRampToValueAtTime(0.28 * intensity, now + 0.025);
    crackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    // Rolling thunder rumble gain envelope
    const thunderGain = audioCtx.createGain();
    const peakVol = Math.min(0.65, 0.42 * intensity);
    thunderGain.gain.setValueAtTime(0.001, now);
    thunderGain.gain.linearRampToValueAtTime(peakVol, now + 0.14);
    thunderGain.gain.exponentialRampToValueAtTime(peakVol * 0.4, now + 1.2);
    thunderGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    // Distant Echo Reverb Delay
    const delay = audioCtx.createDelay();
    delay.delayTime.setValueAtTime(0.22, now);
    const delayFeedback = audioCtx.createGain();
    delayFeedback.gain.setValueAtTime(0.32, now);
    const delayFilter = audioCtx.createBiquadFilter();
    delayFilter.type = 'lowpass';
    delayFilter.frequency.setValueAtTime(140, now);

    // Routing
    crackSource.connect(crackFilter);
    crackFilter.connect(crackGain);
    crackGain.connect(masterCompressor || audioCtx.destination);

    thunderSource.connect(thunderFilter);
    thunderFilter.connect(thunderGain);
    thunderGain.connect(masterCompressor || audioCtx.destination);

    thunderGain.connect(delay);
    delay.connect(delayFilter);
    delayFilter.connect(delayFeedback);
    delayFeedback.connect(delay);
    delayFilter.connect(masterCompressor || audioCtx.destination);

    crackSource.start(now);
    crackSource.stop(now + 0.2);
    thunderSource.start(now);
    thunderSource.stop(now + dur);
  } catch (e) {
    console.log("Synthesized thunder error:", e);
  }
}

function triggerThunderAudio(intensity = 1.0) {
  if (isMuted) return;
  if (thunderAudio) {
    try {
      thunderAudio.currentTime = 0;
      thunderAudio.volume = Math.min(0.42, 0.28 * intensity);
      thunderAudio.play().catch(() => {});
    } catch (e) {}
  }
}

// Mouse, Scroll & 3D Interactive Camera State
const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  targetX: window.innerWidth / 2,
  targetY: window.innerHeight / 2
};
const cam = { x: 0, y: 0, targetX: 0, targetY: 0 };
const shockwaves = [];
const clickSparks = [];

let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
let scrollVelocity = 0;

// Track scroll velocity for 3D warp depth flight
window.addEventListener('scroll', () => {
  const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
  const delta = currentScrollY - lastScrollY;
  lastScrollY = currentScrollY;
  scrollVelocity += delta * 0.18;
  if (scrollVelocity > 28) scrollVelocity = 28;
  if (scrollVelocity < -28) scrollVelocity = -28;
}, { passive: true });

// Track mouse position globally for 3D camera, cursor glow, and particles (Desktop only)
window.addEventListener('pointermove', (e) => {
  if (e.pointerType === 'touch') return;
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  cam.targetX = (e.clientX - window.innerWidth / 2) * 0.08;
  cam.targetY = (e.clientY - window.innerHeight / 2) * 0.08;

  // Real-time cursor spotlight on desktop
  if (cursorGlow) {
    cursorGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  }
}, { passive: true });

// Touch drag 3D depth parallax (Desktop/tablet pointer, disabled during mobile scroll to eliminate lag)
window.addEventListener('touchmove', (e) => {
  if (window.innerWidth < 768) return;
  if (e.touches && e.touches[0]) {
    const t = e.touches[0];
    cam.targetX = (t.clientX - window.innerWidth / 2) * 0.06;
    cam.targetY = (t.clientY - window.innerHeight / 2) * 0.06;
  }
}, { passive: true });

// Mobile 3D Hardware Gyro Parallax (Runs on phone's orientation sensor with 0% CPU overhead)
if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
  window.addEventListener('deviceorientation', (e) => {
    if (window.innerWidth < 768 && e.gamma !== null && e.beta !== null) {
      cam.targetX = Math.max(-40, Math.min(40, e.gamma)) * 1.1;
      cam.targetY = Math.max(-40, Math.min(40, e.beta - 45)) * 0.9;
    }
  }, { passive: true });
}

// Click / tap 3D spark explosion, dual energy shockwave & interactive lightning
function trigger3DClickExplosion(clientX, clientY) {
  if (weatherState === 7) return; // Mode 7: Clean Normal Mode - Zero 3D FX
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 14 : 26;

  // Dual Shockwave Rings (Cyan & Purple Neon)
  shockwaves.push({
    x: clientX,
    y: clientY,
    r: 6,
    maxR: isMobile ? 180 : 280,
    alpha: 0.95,
    hue: 195 // Cyan
  });
  shockwaves.push({
    x: clientX,
    y: clientY,
    r: 2,
    maxR: isMobile ? 140 : 220,
    alpha: 0.85,
    hue: 280 // Purple
  });

  // 3D Perspective Sparks
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2.5 + Math.random() * 8.5;
    clickSparks.push({
      x: clientX,
      y: clientY,
      z: (Math.random() - 0.5) * 100,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      vz: (Math.random() - 0.5) * 6,
      r: 2 + Math.random() * 2.8,
      life: 1.0,
      decay: 0.022 + Math.random() * 0.025,
      hue: Math.random() > 0.5 ? 195 : (Math.random() > 0.3 ? 280 : 48) // Cyan, Purple, or Gold
    });
  }

  // Interactive Electric Strike to user's click coordinate
  if ((weatherState === 0 || weatherState === 3) && Math.random() > 0.42) {
    const startX = clientX + (Math.random() - 0.5) * 180;
    const angle = Math.atan2(clientY, clientX - startX) - Math.PI / 2;
    lightningBolt = createFierceLightning(startX, 0, angle, 9);
    flashOpacity = 0.75;
    triggerThunderAudio(0.7);
  }

  // 3D Camera Impulse kickback (Desktop only to prevent mobile scroll jumps)
  if (!isMobile) {
    cam.targetX += (Math.random() - 0.5) * 16;
    cam.targetY += (Math.random() - 0.5) * 16;
    scrollVelocity += (Math.random() > 0.5 ? 5 : -5);
  }
}

window.addEventListener('pointerdown', (e) => {
  if (e.target && e.target.closest('button, a, input, select, textarea, .video-tab, .ambience-dock, .nav-actions, .mobile-menu')) {
    return;
  }
  trigger3DClickExplosion(e.clientX, e.clientY);
}, { passive: true });

function resizeCanvas() {
  if (!weatherCanvas) return;
  weatherCanvas.width = window.innerWidth;
  weatherCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Render interactive shockwaves and 3D spark particles
function renderInteractiveFx(fov) {
  if (!ctx) return;

  // 1. Dual Shockwave Rings
  for (let sIdx = shockwaves.length - 1; sIdx >= 0; sIdx--) {
    const sw = shockwaves[sIdx];
    ctx.beginPath();
    ctx.arc(sw.x, sw.y, sw.r, 0, Math.PI * 2);
    ctx.strokeStyle = `hsla(${sw.hue || 195}, 90%, 65%, ${sw.alpha})`;
    ctx.lineWidth = Math.max(1, 2.5 * sw.alpha);
    ctx.stroke();

    sw.r += 6.5;
    sw.alpha *= 0.93;
    if (sw.alpha < 0.02 || sw.r > sw.maxR) {
      shockwaves.splice(sIdx, 1);
    }
  }

  // 2. 3D Spark Explosions
  for (let i = clickSparks.length - 1; i >= 0; i--) {
    const sp = clickSparks[i];
    sp.x += sp.vx;
    sp.y += sp.vy;
    sp.z += sp.vz;
    sp.vx *= 0.93;
    sp.vy *= 0.93;
    sp.life -= sp.decay;

    if (sp.life <= 0) {
      clickSparks.splice(i, 1);
      continue;
    }

    const scale = fov / (fov + sp.z);
    const spr = Math.max(0.6, sp.r * scale * sp.life);

    ctx.beginPath();
    ctx.arc(sp.x, sp.y, spr, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${sp.hue}, 95%, 65%, ${sp.life})`;
    ctx.fill();
  }
}

// --- 3D PARTICLE CONSTELLATION GENERATOR (Mode 0 & Mode 1 overlay) ---
function create3DParticle() {
  const w = weatherCanvas?.width || window.innerWidth;
  const h = weatherCanvas?.height || window.innerHeight;
  return {
    x: (Math.random() - 0.5) * w * 1.4,
    y: (Math.random() - 0.5) * h * 1.4,
    z: (Math.random() - 0.5) * 600, // Z depth from -300 to 300
    vx: (Math.random() - 0.5) * 0.7,
    vy: (Math.random() - 0.5) * 0.7,
    vz: (Math.random() - 0.5) * 0.5,
    baseR: 1.6 + Math.random() * 2.2,
    alpha: 0.35 + Math.random() * 0.55,
    hue: Math.random() > 0.4 ? 205 : 270 // Cyan & Purple Cyber Glow
  };
}

// --- RAIN DROP GENERATOR (Mode 2) ---
function createRainDrop() {
  return {
    x: Math.random() * weatherCanvas.width,
    y: Math.random() * -weatherCanvas.height,
    speed: 12 + Math.random() * 10,
    len: 16 + Math.random() * 24,
    thick: 0.8 + Math.random() * 1.2,
    alpha: 0.4 + Math.random() * 0.5,
    wind: 1.5 + Math.random() * 2
  };
}

// --- SNOWFLAKE GENERATOR (Mode 4) ---
function createSnowFlake() {
  return {
    x: Math.random() * weatherCanvas.width,
    y: Math.random() * -weatherCanvas.height,
    r: 1.5 + Math.random() * 3.5,
    speed: 1.2 + Math.random() * 2.5,
    drift: (Math.random() - 0.5) * 1.2,
    alpha: 0.4 + Math.random() * 0.55,
    wobble: Math.random() * Math.PI * 2
  };
}

// --- AMBIENT ORB GENERATOR (Mode 5 - Zen Aurora) ---
function createZenOrb() {
  return {
    x: Math.random() * weatherCanvas.width,
    y: Math.random() * weatherCanvas.height,
    r: 120 + Math.random() * 200,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    alpha: 0.08 + Math.random() * 0.12,
    hue: Math.random() > 0.5 ? 210 : 280
  };
}

// --- 2026 INTERACTIVE GLASS RAINDROP GENERATOR (Window Surface Droplets) ---
function createGlassDroplet() {
  const w = weatherCanvas?.width || window.innerWidth;
  const h = weatherCanvas?.height || window.innerHeight;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    r: 1.6 + Math.random() * 3.2,
    speed: 0.18 + Math.random() * 0.45,
    alpha: 0.35 + Math.random() * 0.45
  };
}

// --- 2026 CYBER MATRIX CODE STREAM GENERATOR (SynthRain Aesthetic) ---
function createMatrixDrop() {
  const w = weatherCanvas?.width || window.innerWidth;
  const chars = ['0', '1', 'λ', '◈', '✦', '{', '}', '<', '>', '/', '#', '::'];
  return {
    x: Math.random() * w,
    y: Math.random() * -300,
    speed: 2.2 + Math.random() * 3.2,
    char: chars[Math.floor(Math.random() * chars.length)],
    alpha: 0.28 + Math.random() * 0.42,
    size: 11 + Math.random() * 4,
    hue: Math.random() > 0.4 ? 185 : 275
  };
}

// --- INITIALIZE PARTICLES ---
function initParticles() {
  particles = [];
  splashes = [];
  particles3D = [];
  rainDrops = [];
  snowFlakes = [];
  glassDroplets = [];
  matrixDrops = [];
  lightningBolt = null;
  flashOpacity = 0;

  if (weatherState === 7) return; // Mode 7: Clean Normal Mode - Zero particles loaded into memory

  const isMobile = window.innerWidth < 768;

  if (weatherState === 0) {
    // Mode 0: Ultimate Cyber Storm (3D Constellation + Slanted Rain + Snow + Glass Droplets + Matrix Streams)
    const p3dCount = isMobile ? 10 : 52;
    const rainCount = isMobile ? 18 : 95;
    const snowCount = isMobile ? 6 : 36;
    const glassCount = isMobile ? 6 : 26;
    const matrixCount = isMobile ? 4 : 22;

    for (let i = 0; i < p3dCount; i++) particles3D.push(create3DParticle());
    for (let i = 0; i < rainCount; i++) {
      const d = createRainDrop();
      d.y = Math.random() * weatherCanvas.height;
      rainDrops.push(d);
    }
    for (let i = 0; i < snowCount; i++) {
      const s = createSnowFlake();
      s.y = Math.random() * weatherCanvas.height;
      snowFlakes.push(s);
    }
    for (let i = 0; i < glassCount; i++) glassDroplets.push(createGlassDroplet());
    for (let i = 0; i < matrixCount; i++) matrixDrops.push(createMatrixDrop());
  } else if (weatherState === 1) {
    const count = isMobile ? 14 : 45;
    for (let i = 0; i < count; i++) particles.push(create3DParticle());
  } else if (weatherState === 2) {
    const count = isMobile ? 24 : 160;
    for (let i = 0; i < count; i++) {
      const d = createRainDrop();
      d.y = Math.random() * weatherCanvas.height;
      particles.push(d);
    }
  } else if (weatherState === 3) {
    const count = 10;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * weatherCanvas.width,
        y: Math.random() * (weatherCanvas.height * 0.45),
        r: 200 + Math.random() * 300,
        speed: 0.06 + Math.random() * 0.1,
        alpha: 0.14
      });
    }
  } else if (weatherState === 4) {
    const count = isMobile ? 18 : 90;
    for (let i = 0; i < count; i++) {
      const s = createSnowFlake();
      s.y = Math.random() * weatherCanvas.height;
      particles.push(s);
    }
  } else if (weatherState === 5) {
    const count = isMobile ? 14 : 80;
    for (let i = 0; i < count; i++) particles.push(create3DParticle());
  } else if (weatherState === 6) {
    for (let i = 0; i < 6; i++) particles.push(createZenOrb());
  }
}

// --- DRAW ULTIMATE CYBER STORM (Mode 0 - DEFAULT HYBRID MIX) ---
// Combines: 3D Constellation Mesh + Slanted Rain & Splashes + Drifting Snow + Lightning Strikes & Thunder
function drawUltimateCyberStorm() {
  if (!ctx) return;
  ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);

  const w = weatherCanvas.width;
  const h = weatherCanvas.height;
  const isMobile = w < 768;
  const centerX = w / 2;
  const centerY = h / 2;
  const fov = 420;

  // Smooth camera spring
  cam.x += (cam.targetX - cam.x) * 0.06;
  cam.y += (cam.targetY - cam.y) * 0.06;

  // Damp scroll velocity smoothly each frame
  scrollVelocity *= 0.92;

  // Dynamic 3D perspective pitch and scale for Background Grid (Desktop only to prevent Mobile WebKit clipping)
  const cyberGrid = document.getElementById('cyber-grid');
  if (cyberGrid) {
    if (!isMobile) {
      const gridPitch = 60 + Math.max(-10, Math.min(10, scrollVelocity * 0.25));
      cyberGrid.style.transform = `perspective(600px) rotateX(${gridPitch.toFixed(1)}deg) translateY(${(window.scrollY * 0.35) % 60}px)`;
    } else if (cyberGrid.style.transform) {
      cyberGrid.style.transform = '';
    }
  }

  // 3D Perspective Parallax for Cyber Background Video
  if (cyberVideo && cyberVideo.classList.contains('active')) {
    if (!isMobile) {
      const pitch = Math.max(-10, Math.min(10, scrollVelocity * 0.35));
      const yaw = Math.max(-8, Math.min(8, (cam.x / (w / 2)) * 14));
      const scaleVal = 1.05 + Math.min(0.06, Math.abs(scrollVelocity) * 0.003);
      cyberVideo.style.transform = `perspective(1000px) rotateX(${pitch.toFixed(2)}deg) rotateY(${yaw.toFixed(2)}deg) scale(${scaleVal.toFixed(3)})`;
    } else if (cyberVideo.style.transform) {
      cyberVideo.style.transform = '';
    }
  }

  // 1. Render Slanted Cyber Rain & Water Splashes (ShadowBlur off on mobile to keep device cool)
  const rainShadow = isMobile ? 0 : 4;
  rainDrops.forEach((d, i) => {
    ctx.save();
    ctx.globalAlpha = isMobile ? Math.min(1, d.alpha * 1.35) : d.alpha;
    ctx.strokeStyle = 'rgba(125, 211, 252, 0.9)';
    ctx.lineWidth = isMobile ? Math.max(1.4, d.thick) : d.thick;
    if (rainShadow > 0) {
      ctx.shadowBlur = rainShadow;
      ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
    }
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x + d.wind, d.y + d.len);
    ctx.stroke();
    ctx.restore();

    d.x += d.wind;
    d.y += d.speed + scrollVelocity * 0.8;

    if (d.y > h - 15) {
      if (Math.random() > 0.65) {
        splashes.push({ x: d.x, y: h - 10, r: 1, alpha: 0.6 });
      }
      rainDrops[i] = createRainDrop();
    }
  });

  // Render Splashes
  for (let sIdx = splashes.length - 1; sIdx >= 0; sIdx--) {
    const sp = splashes[sIdx];
    ctx.save();
    ctx.beginPath();
    ctx.arc(sp.x, sp.y, sp.r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(56, 189, 248, ${sp.alpha})`;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
    sp.r += 1.3;
    sp.alpha -= 0.05;
    if (sp.alpha <= 0) splashes.splice(sIdx, 1);
  }

  // 1b. Render Subtle 3D Cyber Matrix Streams (SynthRain Aesthetic)
  ctx.save();
  matrixDrops.forEach((m, idx) => {
    ctx.fillStyle = `hsla(${m.hue}, 90%, 65%, ${m.alpha})`;
    ctx.font = `${m.size}px 'JetBrains Mono', monospace`;
    ctx.fillText(m.char, m.x, m.y);
    m.y += m.speed;
    if (Math.random() > 0.96) {
      const chars = ['0', '1', 'λ', '◈', '✦', '{', '}', '<', '>', '/', '#', '::'];
      m.char = chars[Math.floor(Math.random() * chars.length)];
    }
    if (m.y > h + 20) {
      matrixDrops[idx] = createMatrixDrop();
    }
  });
  ctx.restore();

  // 1c. Render Interactive Glass Condensation Droplets (Water Beads on Screen Window)
  glassDroplets.forEach((g, idx) => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
    const grad = ctx.createRadialGradient(g.x - g.r * 0.35, g.y - g.r * 0.35, 0.2, g.x, g.y, g.r);
    grad.addColorStop(0, `rgba(255, 255, 255, ${g.alpha * 0.95})`);
    grad.addColorStop(0.5, `rgba(125, 211, 252, ${g.alpha * 0.4})`);
    grad.addColorStop(1, `rgba(15, 23, 42, ${g.alpha * 0.15})`);
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.strokeStyle = `rgba(186, 230, 253, ${g.alpha * 0.5})`;
    ctx.lineWidth = 0.6;
    ctx.stroke();
    ctx.restore();

    if (Math.random() > 0.35) g.y += g.speed;
    if (!isMobile) {
      const gDx = mouse.x - g.x;
      const gDy = mouse.y - g.y;
      if (gDx * gDx + gDy * gDy < 4900) {
        g.y += 0.9;
        g.alpha = Math.min(0.85, g.alpha + 0.05);
      }
    }
    if (g.y > h + 15) {
      glassDroplets[idx] = createGlassDroplet();
    }
  });

  // 2. Render Drifting Cosmic Snowflakes (ShadowBlur off on mobile)
  const snowShadow = isMobile ? 0 : 8;
  snowFlakes.forEach((s, i) => {
    s.wobble += 0.025;
    ctx.save();
    ctx.globalAlpha = s.alpha;
    ctx.fillStyle = 'rgba(235, 248, 255, 0.9)';
    if (snowShadow > 0) {
      ctx.shadowBlur = snowShadow;
      ctx.shadowColor = 'rgba(186, 230, 253, 0.7)';
    }
    ctx.beginPath();
    ctx.arc(s.x + Math.sin(s.wobble) * 2.5, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    s.x += s.drift;
    s.y += s.speed + scrollVelocity * 0.5;

    if (!isMobile) {
      const sDx = s.x - mouse.x;
      const sDy = s.y - mouse.y;
      const sDist2 = sDx * sDx + sDy * sDy;
      if (sDist2 < 10000 && sDist2 > 0) {
        s.x += (sDx / Math.sqrt(sDist2)) * 1.2;
      }
    }

    if (s.y > h + 10) {
      snowFlakes[i] = createSnowFlake();
    }
  });

  // 3. Render 3D Constellation Mesh Nodes & Laser Connections
  const projected = [];
  for (let i = 0; i < particles3D.length; i++) {
    const p = particles3D[i];
    p.x += p.vx;
    p.y += p.vy;
    p.z += p.vz + scrollVelocity * 2.0;

    const boundX = w * 0.75;
    const boundY = h * 0.75;
    if (p.x < -boundX) p.x = boundX;
    if (p.x > boundX) p.x = -boundX;
    if (p.y < -boundY) p.y = boundY;
    if (p.y > boundY) p.y = -boundY;
    if (p.z < -380) p.z = 280;
    if (p.z > 280) p.z = -380;

    const scale = fov / (fov + p.z);
    const px = centerX + (p.x - cam.x) * scale;
    const py = centerY + (p.y - cam.y) * scale;
    const pr = Math.max(isMobile ? 2.4 : 0.8, p.baseR * scale);

    if (!isMobile) {
      const mDx = mouse.x - px;
      const mDy = mouse.y - py;
      const mDist2 = mDx * mDx + mDy * mDy;
      if (mDist2 < 22500 && mDist2 > 0) {
        const mDist = Math.sqrt(mDist2);
        const force = (1 - mDist / 150) * 0.0005;
        p.vx += mDx * force;
        p.vy += mDy * force;

        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(px, py);
        ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - mDist / 150) * 0.3})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    p.vx *= 0.985;
    p.vy *= 0.985;
    projected.push({ px, py, pr, scale, p });
  }

  // Draw connecting lines between nearby 3D nodes (linear nearest-neighbor on mobile for zero lag)
  const maxConnDist = isMobile ? 85 : 100;
  const maxConnDist2 = maxConnDist * maxConnDist;
  ctx.lineWidth = isMobile ? 1.0 : 0.7;
  for (let i = 0; i < projected.length; i++) {
    const a = projected[i];
    const endJ = isMobile ? Math.min(projected.length, i + 3) : projected.length;
    for (let j = i + 1; j < endJ; j++) {
      const b = projected[j];
      const dx = a.px - b.px;
      const dy = a.py - b.py;
      const dist2 = dx * dx + dy * dy;
      if (dist2 < maxConnDist2) {
        const dist = Math.sqrt(dist2);
        const lineAlpha = (1 - dist / maxConnDist) * (isMobile ? 0.45 : 0.25) * Math.min(a.scale, b.scale);
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
        ctx.stroke();
      }
    }
  }

  // Draw 3D nodes
  for (let i = 0; i < projected.length; i++) {
    const { px, py, pr, p, scale } = projected[i];
    const nodeAlpha = Math.min(1, p.alpha * scale * (isMobile ? 1.0 : 0.85));
    ctx.beginPath();
    ctx.arc(px, py, pr, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 95%, 70%, ${nodeAlpha})`;
    ctx.fill();
  }

  // 4. Procedural Fractal Lightning & Sky Flash
  const now = Date.now();
  if (!lightningBolt && (Math.random() > 0.988 || (now - lastLightningTime > 5500 && Math.random() > 0.85))) {
    lastLightningTime = now;
    const startX = Math.random() * w * 0.8 + w * 0.1;
    lightningBolt = createFierceLightning(startX, 0, (Math.random() - 0.5) * 0.35, 11);
    flashOpacity = 0.82;
    cam.targetX += (Math.random() - 0.5) * 20;
    cam.targetY += (Math.random() - 0.5) * 20;
    scrollVelocity += (Math.random() - 0.5) * 3;
    triggerThunderAudio(1.0);
  }

  if (lightningBolt) {
    ctx.save();
    ctx.strokeStyle = '#ffffff';
    ctx.shadowBlur = isMobile ? 0 : 35;
    ctx.shadowColor = 'rgba(120, 220, 255, 0.95)';
    ctx.lineCap = 'round';
    ctx.beginPath();
    lightningBolt.forEach(s => {
      ctx.lineWidth = s.width;
      ctx.moveTo(s.x1, s.y1);
      ctx.lineTo(s.x2, s.y2);
    });
    ctx.stroke();
    ctx.restore();
    if (Math.random() > 0.5) lightningBolt = null;
  }

  if (flashOpacity > 0) {
    ctx.save();
    ctx.globalAlpha = Math.min(0.55, flashOpacity);
    ctx.fillStyle = 'rgba(180, 230, 255, 0.45)';
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
    flashOpacity -= 0.08;
  }

  // 5. Interactive shockwaves and 3D sparks
  renderInteractiveFx(420);
}

// --- DRAW 3D CYBER CONSTELLATION (Mode 1 & Mode 5) ---
function drawCyberConstellation(isOverlayOnly = false) {
  if (!ctx) return;
  ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);

  // Smooth camera spring
  cam.x += (cam.targetX - cam.x) * 0.06;
  cam.y += (cam.targetY - cam.y) * 0.06;

  // Damp scroll velocity smoothly each frame
  scrollVelocity *= 0.92;

  const w = weatherCanvas.width;
  const h = weatherCanvas.height;
  const centerX = w / 2;
  const centerY = h / 2;
  const fov = 420;
  const isMobile = w < 768;

  // Dynamic 3D perspective pitch and scale for Background Video and Grid (Desktop only to prevent Mobile WebKit clipping)
  if (!isMobile) {
    const pitch = Math.max(-10, Math.min(10, scrollVelocity * 0.35));
    const yaw = Math.max(-8, Math.min(8, (cam.x / (w / 2)) * 14));
    const scaleVal = 1.05 + Math.min(0.06, Math.abs(scrollVelocity) * 0.003);
    const transformStr = `perspective(1000px) rotateX(${pitch.toFixed(2)}deg) rotateY(${yaw.toFixed(2)}deg) scale(${scaleVal.toFixed(3)})`;
    if (cyberVideo && cyberVideo.classList.contains('active')) {
      cyberVideo.style.transform = transformStr;
    }
    if (stormVideo && stormVideo.classList.contains('active')) {
      stormVideo.style.transform = transformStr;
    }
    const cyberGrid = document.getElementById('cyber-grid');
    if (cyberGrid) {
      const gridPitch = 60 + Math.max(-10, Math.min(10, scrollVelocity * 0.25));
      cyberGrid.style.transform = `perspective(600px) rotateX(${gridPitch.toFixed(1)}deg) translateY(${(window.scrollY * 0.35) % 60}px)`;
    }
  } else {
    if (cyberVideo && cyberVideo.style.transform) cyberVideo.style.transform = '';
    if (stormVideo && stormVideo.style.transform) stormVideo.style.transform = '';
    const cyberGrid = document.getElementById('cyber-grid');
    if (cyberGrid && cyberGrid.style.transform) cyberGrid.style.transform = '';
  }

  // Pre-calculate 2D projected coordinates
  const projected = [];
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    // 3D physics movement + Scroll-driven Z-depth warp flight
    p.x += p.vx;
    p.y += p.vy;
    p.z += p.vz + scrollVelocity * 2.2;

    // Boundary wrapping in 3D with hyperspace warp loop
    const boundX = w * 0.75;
    const boundY = h * 0.75;
    if (p.x < -boundX) p.x = boundX;
    if (p.x > boundX) p.x = -boundX;
    if (p.y < -boundY) p.y = boundY;
    if (p.y > boundY) p.y = -boundY;
    if (p.z < -380) p.z = 280;
    if (p.z > 280) p.z = -380;

    // Perspective projection
    const scale = fov / (fov + p.z);
    const px = centerX + (p.x - cam.x) * scale;
    const py = centerY + (p.y - cam.y) * scale;
    const pr = Math.max(isMobile ? 2.2 : 0.8, p.baseR * scale);

    // Mouse proximity interaction (Desktop only)
    if (!isMobile) {
      const mDx = mouse.x - px;
      const mDy = mouse.y - py;
      const mDist2 = mDx * mDx + mDy * mDy;

      if (mDist2 < 28900 && mDist2 > 0) { // 170px squared
        const mDist = Math.sqrt(mDist2);
        const force = (1 - mDist / 170) * 0.0006;
        p.vx += mDx * force;
        p.vy += mDy * force;

        // Draw cursor laser line to nearby particles
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(px, py);
        ctx.strokeStyle = `rgba(99, 179, 237, ${(1 - mDist / 170) * 0.35})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // Shockwave repulsion
    for (let sIdx = 0; sIdx < shockwaves.length; sIdx++) {
      const sw = shockwaves[sIdx];
      const swDx = px - sw.x;
      const swDy = py - sw.y;
      const swDist2 = swDx * swDx + swDy * swDy;
      if (Math.abs(Math.sqrt(swDist2) - sw.r) < 40 && swDist2 > 0) {
        const swDist = Math.sqrt(swDist2);
        p.vx += (swDx / swDist) * 1.8;
        p.vy += (swDy / swDist) * 1.8;
      }
    }

    // Velocity damping
    p.vx *= 0.985;
    p.vy *= 0.985;

    projected.push({ px, py, pr, scale, p });
  }

  // Draw Constellation Lines (Optimized without redundant Math.sqrt)
  const maxConnDist = isOverlayOnly ? 70 : (isMobile ? 75 : 115);
  const maxConnDist2 = maxConnDist * maxConnDist;
  ctx.lineWidth = 0.8;

  for (let i = 0; i < projected.length; i++) {
    const a = projected[i];
    const endJ = isMobile ? Math.min(projected.length, i + 3) : projected.length;
    for (let j = i + 1; j < endJ; j++) {
      const b = projected[j];
      const dx = a.px - b.px;
      const dy = a.py - b.py;
      const dist2 = dx * dx + dy * dy;

      if (dist2 < maxConnDist2) {
        const dist = Math.sqrt(dist2);
        const lineAlpha = (1 - dist / maxConnDist) * 0.3 * Math.min(a.scale, b.scale);
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.strokeStyle = `rgba(99, 179, 237, ${lineAlpha})`;
        ctx.stroke();
      }
    }
  }

  // Draw 3D Particle Nodes (High performance, no heavy shadowBlur)
  for (let i = 0; i < projected.length; i++) {
    const { px, py, pr, p, scale } = projected[i];
    const nodeAlpha = Math.min(1, p.alpha * scale * (isOverlayOnly ? 0.6 : 1));

    ctx.beginPath();
    ctx.arc(px, py, pr, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 85%, 65%, ${nodeAlpha})`;
    ctx.fill();
  }

  // Render expanding shockwaves and 3D sparks
  renderInteractiveFx(fov);
}

// --- DRAW CYBER RAIN (Mode 2) ---
function drawRain() {
  if (!ctx) return;
  ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);

  scrollVelocity *= 0.92;

  particles.forEach((d, i) => {
    ctx.save();
    ctx.globalAlpha = d.alpha;
    ctx.strokeStyle = 'rgba(99, 179, 237, 0.85)';
    ctx.lineWidth = d.thick;
    if (window.innerWidth >= 768) {
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(99, 179, 237, 0.5)';
    }
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x + d.wind, d.y + d.len);
    ctx.stroke();
    ctx.restore();

    d.x += d.wind;
    d.y += d.speed + scrollVelocity * 0.8;

    if (d.y > weatherCanvas.height - 20) {
      if (Math.random() > 0.7) {
        splashes.push({ x: d.x, y: weatherCanvas.height - 10, r: 1, alpha: 0.6 });
      }
      particles[i] = createRainDrop();
    }
  });

  // Render splashes
  for (let sIdx = splashes.length - 1; sIdx >= 0; sIdx--) {
    const sp = splashes[sIdx];
    ctx.save();
    ctx.beginPath();
    ctx.arc(sp.x, sp.y, sp.r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(99, 179, 237, ${sp.alpha})`;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
    sp.r += 1.2;
    sp.alpha -= 0.05;
    if (sp.alpha <= 0) splashes.splice(sIdx, 1);
  }

  renderInteractiveFx(420);
}

// --- DRAW THUNDERSTORM (Mode 3) ---
function createFierceLightning(x, y, angle, branches) {
  if (branches <= 0) return [];
  const segments = [];
  let curX = x, curY = y;
  const length = Math.random() * 60 + 40;
  const nX = curX + Math.sin(angle) * length + (Math.random() - 0.5) * 50;
  const nY = curY + Math.cos(angle) * length + (Math.random() * 40);

  segments.push({ x1: curX, y1: curY, x2: nX, y2: nY, width: branches * 0.8 });
  segments.push(...createFierceLightning(nX, nY, angle + (Math.random() - 0.5) * 0.3, branches - 1));

  if (Math.random() > 0.7 && branches > 2) {
    segments.push(...createFierceLightning(nX, nY, angle + (Math.random() - 0.5) * 1.5, Math.floor(branches / 1.5)));
  }
  return segments;
}

function drawThunderstorm() {
  if (!ctx) return;
  ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);

  scrollVelocity *= 0.92;

  particles.forEach(c => {
    ctx.save();
    const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
    grad.addColorStop(0, `rgba(99, 179, 237, ${c.alpha})`);
    grad.addColorStop(1, 'rgba(13, 20, 32, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    c.x += c.speed;
    if (c.x - c.r > weatherCanvas.width) c.x = -c.r;
  });

  if (!lightningBolt && Math.random() > 0.985) {
    const startX = Math.random() * weatherCanvas.width;
    lightningBolt = createFierceLightning(startX, 0, 0, 12);
    flashOpacity = 0.8;
  }

  if (lightningBolt) {
    ctx.save();
    ctx.strokeStyle = '#ffffff';
    if (window.innerWidth >= 768) {
      ctx.shadowBlur = 35;
      ctx.shadowColor = 'rgba(120, 210, 255, 0.95)';
    }
    ctx.lineCap = 'round';
    ctx.beginPath();
    lightningBolt.forEach(s => {
      ctx.lineWidth = s.width;
      ctx.moveTo(s.x1, s.y1);
      ctx.lineTo(s.x2, s.y2);
    });
    ctx.stroke();
    ctx.restore();
    if (Math.random() > 0.6) lightningBolt = null;
  }

  if (flashOpacity > 0) {
    ctx.save();
    ctx.globalAlpha = flashOpacity;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.fillRect(0, 0, weatherCanvas.width, weatherCanvas.height);
    ctx.restore();
    flashOpacity -= 0.08;
  }

  renderInteractiveFx(420);
}

// --- DRAW COSMIC SNOW (Mode 4) ---
function drawSnow() {
  if (!ctx) return;
  ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);

  scrollVelocity *= 0.92;

  particles.forEach((s, i) => {
    s.wobble += 0.02;
    ctx.save();
    ctx.globalAlpha = s.alpha;
    ctx.fillStyle = 'rgba(210, 235, 255, 0.9)';
    ctx.shadowBlur = 8;
    ctx.shadowColor = 'rgba(180, 220, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(s.x + Math.sin(s.wobble) * 2, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    s.x += s.drift;
    s.y += s.speed + scrollVelocity * 0.6;
    if (s.y > weatherCanvas.height + 10) {
      particles[i] = createSnowFlake();
    }
  });

  renderInteractiveFx(420);
}

// --- DRAW ZEN AURORA (Mode 5) ---
function drawZenAurora() {
  if (!ctx) return;
  ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);

  scrollVelocity *= 0.92;

  particles.forEach(o => {
    ctx.save();
    const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
    grad.addColorStop(0, `hsla(${o.hue}, 80%, 65%, ${o.alpha})`);
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    o.x += o.vx;
    o.y += o.vy;
    if (o.x < -100) o.x = weatherCanvas.width + 100;
    if (o.x > weatherCanvas.width + 100) o.x = -100;
    if (o.y < -100) o.y = weatherCanvas.height + 100;
    if (o.y > weatherCanvas.height + 100) o.y = -100;
  });

  renderInteractiveFx(420);
}

// --- MASTER ANIMATION LOOP WITH MOBILE THERMAL & BATTERY SHIELD ---
let lastWeatherRenderTime = 0;

function animateWeather(timestamp) {
  if (weatherState === 7) {
    if (animFrame) cancelAnimationFrame(animFrame);
    animFrame = null;
    return; // Complete CPU/GPU stoppage in Clean Normal Mode
  }

  animFrame = requestAnimationFrame(animateWeather);

  const isMobile = window.innerWidth < 768;

  // Mobile Thermal & Battery Shield: Cap canvas rendering on mobile (< 768px) to 30 FPS (~33ms)
  // Keeps mobile CPU load near 0%, battery cold, and scrolling 100% buttery smooth at 60/120Hz!
  if (isMobile) {
    if (timestamp && (timestamp - lastWeatherRenderTime < 33)) return;
    lastWeatherRenderTime = timestamp || 0;
  }

  if (weatherState === 0) {
    drawUltimateCyberStorm();
  } else if (weatherState === 1) {
    drawCyberConstellation(true);
  } else if (weatherState === 2) {
    drawRain();
  } else if (weatherState === 3) {
    drawThunderstorm();
  } else if (weatherState === 4) {
    drawSnow();
  } else if (weatherState === 5) {
    drawCyberConstellation(false);
  } else if (weatherState === 6) {
    drawZenAurora();
  }
}

function clearBeatTimers() {
  if (beatDropTimeout) {
    clearTimeout(beatDropTimeout);
    beatDropTimeout = null;
  }
  if (beatFadeInterval) {
    clearInterval(beatFadeInterval);
    beatFadeInterval = null;
  }
  if (thunderTimeout) {
    clearTimeout(thunderTimeout);
    thunderTimeout = null;
  }
}

// 2-Phase Audio Sequencing:
// Phase 1: Immediate authentic rain + rolling thunder rumble
// Phase 2: Upbeat bouncy chill beat drops in smoothly after ~3s ("sound ញាក់តាមក្រោយ")
function startCyberAtmosphereAndBeatSequence() {
  if (isMuted) return;
  clearBeatTimers();

  // Phase 1: Immediate natural soothing rain sound
  if (rainAudio) {
    rainAudio.loop = true;
    rainAudio.volume = 0.38;
    const playRain = rainAudio.play();
    if (playRain && typeof playRain.catch === 'function') {
      playRain.catch(() => {});
    }
  }

  // Phase 1b: Distant rolling atmospheric thunder rumble at ~0.45s with subtle lightning
  thunderTimeout = setTimeout(() => {
    if (isMuted || weatherState !== 0) return;
    if (thunderAudio) {
      try {
        thunderAudio.currentTime = 0;
        thunderAudio.volume = 0.42;
        thunderAudio.play().catch(() => {});
      } catch (e) {}
    }
    flashOpacity = 0.72;
    const w = weatherCanvas ? weatherCanvas.width : window.innerWidth;
    lightningBolt = createFierceLightning(w * 0.45, 0, 0.05, 10);
  }, 450);

  // Phase 2: "AND THEN SOUND ញាក់តាមក្រោយ" (~3s later)
  // Drop in the groovy bouncy lo-fi chill beat track (Assets/sound/rain.mp3)!
  beatDropTimeout = setTimeout(() => {
    if (isMuted || weatherState !== 0) return;
    if (beatAudio) {
      beatAudio.loop = true;
      beatAudio.currentTime = 0;
      beatAudio.volume = 0.02;
      const playBeat = beatAudio.play();
      if (playBeat && typeof playBeat.then === 'function') {
        playBeat.then(() => {
          let currentVol = 0.05;
          beatFadeInterval = setInterval(() => {
            if (isMuted || !beatAudio || weatherState !== 0) {
              clearInterval(beatFadeInterval);
              return;
            }
            currentVol = Math.min(0.42, currentVol + 0.05);
            beatAudio.volume = currentVol;
            if (currentVol >= 0.42) {
              clearInterval(beatFadeInterval);
            }
          }, 80);

          // Soften the ambient rain slightly so beat & rain blend together seamlessly
          if (rainAudio && !isMuted) {
            rainAudio.volume = 0.22;
          }
        }).catch(() => {});
      }
    }
  }, 3000);
}

function stopWeather() {
  cancelAnimationFrame(animFrame);
  if (ctx) ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);
  weatherCanvas?.classList.remove('active');
  stormVideo?.classList.remove('active');
  cyberVideo?.classList.remove('active');
  if (stormVideo) stormVideo.pause();
  if (cyberVideo) cyberVideo.pause();
  clearBeatTimers();
  rainAudio?.pause(); if (rainAudio) rainAudio.currentTime = 0;
  beatAudio?.pause(); if (beatAudio) beatAudio.currentTime = 0;
  snowAudio?.pause(); if (snowAudio) snowAudio.currentTime = 0;
  thunderAudio?.pause(); if (thunderAudio) thunderAudio.currentTime = 0;
  weatherIndicator?.classList.remove('visible');
  if (audioWaves) audioWaves.style.display = 'none';
  if (audioCtx && audioCtx.state === 'running') {
    audioCtx.suspend().catch(() => {});
  }
}

function applyWeatherUiLabels(showToast = false) {
  const btn = document.getElementById('weather-btn');
  const icon = document.getElementById('weather-icon');
  const indicator = document.getElementById('weather-indicator');
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const modeIcons = [
    'fa-solid fa-cloud-bolt',     // Mode 0: Ultimate Cyber Storm (Mix of All)
    'fa-solid fa-film',           // Mode 1: Cyber Video
    'fa-solid fa-cloud-rain',     // Mode 2: Cyber Rain
    'fa-solid fa-bolt',           // Mode 3: Thunderstorm
    'fa-solid fa-snowflake',      // Mode 4: Cosmic Snow
    'fa-solid fa-cube',           // Mode 5: 3D Cyber Mesh
    'fa-solid fa-circle-notch',   // Mode 6: Zen Aurora
    'fa-solid fa-leaf'            // Mode 7: Clean Normal Mode (All Off)
  ];

  const state = typeof weatherState !== 'undefined' ? weatherState : 0;
  if (icon) {
    if (isMobile) {
      icon.className = state === 7 ? 'fa-solid fa-leaf' : 'fa-solid fa-cloud-bolt';
    } else {
      icon.className = modeIcons[state] || 'fa-solid fa-cloud-bolt';
    }
  }
  if (btn) {
    btn.classList.toggle('mode-off', state === 7);
    if (isMobile) {
      const mobileLabel = state === 7 ? t('weather.mobileOption2') : t('weather.mobileOption1');
      btn.title = mobileLabel;
      btn.setAttribute('aria-label', mobileLabel);
    } else {
      btn.title = t(`weather.mode${state}`);
      btn.setAttribute('aria-label', t(`weather.mode${state}`));
    }
  }

  if (indicator && showToast) {
    if (isMobile) {
      indicator.textContent = state === 7 ? t('weather.mobileOption2') : t('weather.mobileOption1');
    } else {
      indicator.textContent = t(`weather.ind${state}`);
    }
    indicator.classList.add('visible');
    if (typeof indicatorTimeout !== 'undefined') {
      clearTimeout(indicatorTimeout);
      indicatorTimeout = setTimeout(() => {
        indicator.classList.remove('visible');
      }, 1600);
    }
  }
}

function syncModeAudio() {
  if (weatherState === 7) {
    stopAllAudio();
    return;
  }

  if (isMuted) {
    clearBeatTimers();
    rainAudio?.pause();
    beatAudio?.pause();
    snowAudio?.pause();
    thunderAudio?.pause();
    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    }
    return;
  }

  initWebAudioSynth();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  if (masterGain && audioCtx) {
    masterGain.gain.setTargetAtTime(0.75, audioCtx.currentTime, 0.08);
  }

  if (weatherState === 0) {
    // Mode 0: Ultimate Cyber Storm
    // Immediate Rain & Thunder, then bouncy beat drop ("SOUND ញាក់តាមក្រោយ")
    snowAudio?.pause();
    if (ambientPadGain && audioCtx) ambientPadGain.gain.setValueAtTime(0.012, audioCtx.currentTime);
    startCyberAtmosphereAndBeatSequence();
  } else if (weatherState === 1) {
    // Mode 1: Cyber Video
    clearBeatTimers();
    rainAudio?.pause();
    snowAudio?.pause();
    thunderAudio?.pause();
    if (beatAudio) {
      beatAudio.loop = true;
      beatAudio.volume = 0.40;
      beatAudio.play().catch(() => {});
    }
    if (ambientPadGain && audioCtx) ambientPadGain.gain.setValueAtTime(0.015, audioCtx.currentTime);
  } else if (weatherState === 2) {
    // Mode 2: Cyber Rain
    clearBeatTimers();
    snowAudio?.pause();
    thunderAudio?.pause();
    if (rainAudio) {
      rainAudio.loop = true;
      rainAudio.volume = 0.32;
      rainAudio.play().catch(() => {});
    }
    if (beatAudio) {
      beatAudio.loop = true;
      beatAudio.volume = 0.36;
      beatAudio.play().catch(() => {});
    }
  } else if (weatherState === 3) {
    // Mode 3: Thunderstorm
    clearBeatTimers();
    beatAudio?.pause();
    snowAudio?.pause();
    if (rainAudio) {
      rainAudio.loop = true;
      rainAudio.volume = 0.40;
      rainAudio.play().catch(() => {});
    }
    if (thunderAudio) {
      thunderAudio.currentTime = 0;
      thunderAudio.volume = 0.42;
      thunderAudio.play().catch(() => {});
    }
  } else if (weatherState === 4) {
    // Mode 4: Cosmic Snow
    clearBeatTimers();
    rainAudio?.pause();
    beatAudio?.pause();
    thunderAudio?.pause();
    if (snowAudio) {
      snowAudio.loop = true;
      snowAudio.volume = 0.40;
      snowAudio.play().catch(() => {});
    }
  } else {
    // Mode 5 & 6: Ambient synth
    clearBeatTimers();
    rainAudio?.pause();
    beatAudio?.pause();
    snowAudio?.pause();
    thunderAudio?.pause();
    if (ambientPadGain && audioCtx) ambientPadGain.gain.setValueAtTime(0.02, audioCtx.currentTime);
  }
}

function startWeather(isUserAction = false) {
  document.body.classList.toggle('clean-mode', weatherState === 7);

  if (weatherState === 7) {
    // Mode 7: CLEAN NORMAL (OFF) MODE - Zero 3D, Zero Videos, Zero Sound, Zero CPU/RAM
    stopWeather();
    stopAllAudio();
    applyWeatherUiLabels(isUserAction);
    return;
  }

  resizeCanvas();
  initParticles();

  // Manage Background Video & Canvas Visibility (Active on BOTH Desktop & Mobile)
  if (weatherState === 0) {
    // Mode 0: ULTIMATE HYBRID CYBER STORM (Mix of 3D Cyber Video + Rain + Snow + Lightning + 3D Mesh)
    stormVideo?.classList.remove('active');
    if (stormVideo) stormVideo.pause();
    cyberVideo?.classList.add('active');
    if (cyberVideo) {
      cyberVideo.play().catch(() => {});
    }
    weatherCanvas?.classList.add('active');
  } else if (weatherState === 1) {
    stormVideo?.classList.remove('active');
    if (stormVideo) stormVideo.pause();
    cyberVideo?.classList.add('active');
    cyberVideo?.play().catch(() => {});
    weatherCanvas?.classList.add('active');
  } else if (weatherState === 3) {
    cyberVideo?.classList.remove('active');
    if (cyberVideo) cyberVideo.pause();
    stormVideo?.classList.add('active');
    stormVideo?.play().catch(() => {});
    weatherCanvas?.classList.add('active');
  } else {
    cyberVideo?.classList.remove('active');
    if (cyberVideo) cyberVideo.pause();
    stormVideo?.classList.remove('active');
    if (stormVideo) stormVideo.pause();
    weatherCanvas?.classList.add('active');
  }

  animateWeather();
  syncModeAudio();
  applyWeatherUiLabels(isUserAction);
}

// On mobile (<768px): Strictly 2 options: Mode 0 (Rain + Snow + Lightning) <-> Mode 7 (Clean Normal Mode)
// On desktop/tablet (>=768px): 8 Modes cycle: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 0
weatherBtn?.addEventListener('click', () => {
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    weatherState = (weatherState === 0) ? 7 : 0;
  } else {
    weatherState = (weatherState + 1) % 8;
  }
  try {
    localStorage.setItem('portfolio-weather-mode', weatherState.toString());
  } catch (e) {}
  stopWeather();
  startWeather(true);
});

// --- AUDIO MUTE LOGIC (MINIMAL ICON TOGGLE) ---
const muteBtn = document.getElementById('mute-btn');
const muteIcon = document.getElementById('mute-icon');
let isMuted = false;

function stopAllAudio() {
  clearBeatTimers();
  [rainAudio, beatAudio, snowAudio, thunderAudio].forEach(a => {
    if (a) {
      try {
        a.pause();
        a.currentTime = 0;
        a.muted = true;
      } catch (e) {}
    }
  });
  if (audioCtx) {
    try {
      if (masterGain) {
        masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
        masterGain.gain.setValueAtTime(0.00001, audioCtx.currentTime);
      }
      if (audioCtx.state === 'running') {
        audioCtx.suspend().catch(() => {});
      }
    } catch (e) {}
  }
}

function setAudioMuteState(muted, showToast = true) {
  isMuted = muted;

  if (isMuted) {
    stopAllAudio();
    if (muteIcon) muteIcon.className = 'fa-solid fa-volume-xmark';
    if (muteBtn) {
      muteBtn.classList.remove('playing');
      muteBtn.classList.add('muted');
      muteBtn.setAttribute('aria-label', t('mute.muted'));
      muteBtn.title = t('mute.muted');
    }
  } else {
    [rainAudio, beatAudio, snowAudio, thunderAudio].forEach(a => {
      if (a) a.muted = false;
    });
    if (muteIcon) muteIcon.className = 'fa-solid fa-volume-high';
    if (muteBtn) {
      muteBtn.classList.add('playing');
      muteBtn.classList.remove('muted');
      muteBtn.setAttribute('aria-label', t('mute.unmuted'));
      muteBtn.title = t('mute.unmuted');
    }
    if (audioCtx) {
      if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
      if (masterGain) {
        masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
        masterGain.gain.setValueAtTime(0.75, audioCtx.currentTime);
      }
    }
    syncModeAudio();
  }

  if (weatherIndicator && showToast) {
    weatherIndicator.textContent = isMuted ? t('mute.muted') : t('mute.unmuted');
    weatherIndicator.classList.add('visible');
    clearTimeout(indicatorTimeout);
    indicatorTimeout = setTimeout(() => {
      weatherIndicator.classList.remove('visible');
    }, 1500);
  }
}

if (muteBtn) {
  muteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    // Direct user-driven binary toggle: mute turns off immediately, unmute turns on
    if (isMuted) {
      setAudioMuteState(false, true);
      resumeAndPlayAudio();
    } else {
      setAudioMuteState(true, true);
    }
  });
}

// --- 2026 3D CARD HOVER TILT SYSTEM (DESKTOP MOUSE ONLY - ZERO TOUCH STUTTER) ---
function init3DCardTilt() {
  // Completely disable on touch screens to prevent Mobile Safari WebKit clipping bugs & scroll lag
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    return;
  }
  const cards = document.querySelectorAll('.project-card, .cert-card, .timeline-content, .hero-stat-item');
  cards.forEach(card => {
    card.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotX = Math.max(-5, Math.min(5, ((y - centerY) / centerY) * -4));
      const rotY = Math.max(-5, Math.min(5, ((x - centerX) / centerX) * 4));

      card.style.transform = `perspective(800px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(4px)`;
      card.style.setProperty('--mouse-card-x', `${x}px`);
      card.style.setProperty('--mouse-card-y', `${y}px`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}

// Interactive 3D Hero Cube (Click to spin boost)
const cube3D = document.querySelector('.cube-3d');
if (cube3D) {
  cube3D.style.cursor = 'pointer';
  cube3D.addEventListener('click', () => {
    cube3D.style.animation = 'none';
    cube3D.offsetHeight; /* trigger reflow */
    cube3D.style.animation = 'rotateCube 2.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
    setTimeout(() => {
      cube3D.style.animation = 'rotateCube 16s linear infinite';
    }, 2500);
  });
}

// Hero 3D Hologram Parallax (Desktop mouse only)
const heroPhotoArea = document.getElementById('hero-photos-3d');
if (heroPhotoArea && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    const rx = (e.clientY / window.innerHeight - 0.5) * 14;
    const ry = (e.clientX / window.innerWidth - 0.5) * -14;
    const holo = heroPhotoArea.querySelector('.hero-3d-hologram');
    if (holo) {
      holo.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    }
  }, { passive: true });
}

/* ========================================================
   SCROLL REVEAL & INIT
   ======================================================== */
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-width') + '%';
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const message = document.getElementById('form-message').value;
  const telegram = document.getElementById('form-telegram')?.value || '';
  const linkedin = document.getElementById('form-linkedin')?.value || '';
  const btn = e.target.querySelector('button[type=submit]');
  const fb = document.getElementById('form-feedback');
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';
  btn.disabled = true;
  const result = await submitContactForm(name, email, message, telegram, linkedin);
  if (result.success) {
    fb.style.display = 'block';
    fb.textContent = t('form.success');
    e.target.reset();
  } else {
    fb.style.display = 'block';
    fb.textContent = t('form.error');
  }
  btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send';
  btn.disabled = false;
});

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === '#' + entry.target.id) a.style.color = 'var(--accent)';
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => navObserver.observe(s));

// INIT
observeReveal();
loadProjectsFromFirestore().then(() => init3DCardTilt());
loadCertificatesFromFirestore().then(() => init3DCardTilt());
applyI18n();
init3DCardTilt();

// Autoplay & User Interaction Audio Unlocker
let hasUnlockedAudio = false;

function resumeAndPlayAudio() {
  if (isMuted || weatherState === 7) return;
  initWebAudioSynth();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  syncModeAudio();
  if (cyberVideo && cyberVideo.paused && (weatherState === 0 || weatherState === 1)) {
    cyberVideo.play().catch(() => {});
  }
}

const unlockAudio = () => {
  if (isMuted || weatherState === 7) return;
  resumeAndPlayAudio();
  if (audioCtx && audioCtx.state === 'running') {
    hasUnlockedAudio = true;
    ['click', 'touchstart', 'touchend', 'scroll', 'mousedown', 'keydown', 'pointerdown'].forEach(ev => {
      window.removeEventListener(ev, unlockAudio);
    });
  }
};

['click', 'touchstart', 'touchend', 'scroll', 'mousedown', 'keydown', 'pointerdown'].forEach(ev => {
  window.addEventListener(ev, unlockAudio, { passive: true });
});

let hasBootedWeather = false;
function bootWeather() {
  if (hasBootedWeather) return;
  hasBootedWeather = true;
  if (typeof window !== 'undefined' && window.innerWidth < 768 && weatherState !== 7) {
    weatherState = 0;
  }
  document.body.classList.toggle('clean-mode', weatherState === 7);
  if (weatherState === 7) {
    stopWeather();
    stopAllAudio();
    applyWeatherUiLabels(false);
    return;
  }
  startWeather();
  if (!isMuted) {
    resumeAndPlayAudio();
  }
}

// Immediate Boot: Launch 3D interactive visuals as soon as DOM is ready, no waiting for heavy network assets
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootWeather);
} else {
  bootWeather();
}

window.addEventListener('load', () => {
  bootWeather();
  if (!isMuted) {
    resumeAndPlayAudio();
  }
});

/* ========================================================
   MODALS
   ======================================================== */
function openCertModal(imgSrc, caption) {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('cert-modal-img');
  const modalCaption = document.getElementById('cert-modal-caption');
  if (!modal || !modalImg) return;
  modalImg.src = imgSrc;
  if (modalCaption) modalCaption.textContent = caption;
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('open'), 10);
}
function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => modal.style.display = 'none', 300);
}
document.getElementById('cert-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'cert-modal') closeCertModal();
});

function showPrivateRepoAlert(url) {
  const modal = document.getElementById('private-repo-modal');
  const confirmBtn = document.getElementById('alert-confirm-btn');
  const cancelBtn = modal?.querySelector('.alert-btn-cancel');
  const title = modal?.querySelector('.alert-title');
  const msg = modal?.querySelector('.alert-message');

  if (!modal || !confirmBtn) return;

  // Apply translations
  if (title) title.textContent = t('alert.privateTitle');
  if (msg) msg.textContent = t('alert.privateMessage');
  if (confirmBtn) confirmBtn.textContent = t('alert.confirm');
  if (cancelBtn) cancelBtn.textContent = t('alert.cancel');

  confirmBtn.onclick = () => { window.open(url, '_blank'); closePrivateRepoAlert(); };
  if (cancelBtn) cancelBtn.onclick = () => { closePrivateRepoAlert(); };
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('open'), 10);
}
function closePrivateRepoAlert() {
  const modal = document.getElementById('private-repo-modal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => modal.style.display = 'none', 300);
}
document.getElementById('private-repo-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'private-repo-modal') closePrivateRepoAlert();
});

/* ========================================================
   CLIENT PROJECT ALERT MODAL
   ======================================================== */
function showClientProjectAlert(figmaUrl, githubUrl) {
  const modal = document.getElementById('client-project-modal');
  const btnFigma = document.getElementById('client-btn-figma');
  const btnGithub = document.getElementById('client-btn-github');
  const cancelBtn = modal?.querySelector('.alert-btn-cancel');

  if (!modal) return;

  if (btnFigma) btnFigma.onclick = () => { window.open(figmaUrl, '_blank'); closeClientProjectAlert(); };
  if (btnGithub) btnGithub.onclick = () => { window.open(githubUrl, '_blank'); closeClientProjectAlert(); };
  if (cancelBtn) cancelBtn.onclick = () => { closeClientProjectAlert(); };

  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('open'), 10);
}

function closeClientProjectAlert() {
  const modal = document.getElementById('client-project-modal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => modal.style.display = 'none', 300);
}

document.getElementById('client-project-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'client-project-modal') closeClientProjectAlert();
});

/* ========================================================
   VIDEO PLAYER MODAL
   ======================================================== */
function openVideoPlayer(videoSrc, title) {
  const modal = document.getElementById('video-modal');
  const player = document.getElementById('video-modal-player');
  const modalTitle = document.getElementById('video-modal-title');
  if (!modal || !player) return;

  player.src = videoSrc;
  if (modalTitle) modalTitle.textContent = title;

  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('open'), 10);
  player.play().catch(e => console.log("Video playback started manually"));
}

function closeVideoPlayer() {
  const modal = document.getElementById('video-modal');
  const player = document.getElementById('video-modal-player');
  if (!modal || !player) return;

  player.pause();
  modal.classList.remove('open');
  setTimeout(() => {
    modal.style.display = 'none';
    player.src = ""; // Clear src to stop loading
  }, 300);
}

document.getElementById('video-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'video-modal') closeVideoPlayer();
});

/* ========================================================
   PROJECT VIDEO SWITCHER
   ======================================================== */
function switchProjectVideo(iframeId, videoUrl, btn, redirectUrl = null) {
  const iframe = document.getElementById(iframeId);
  if (!iframe) return;

  const container = iframe.parentElement;
  let placeholder = container.querySelector('.fb-video-placeholder');
  
  if (!placeholder) {
    placeholder = document.createElement('div');
    placeholder.className = 'fb-video-placeholder';
    placeholder.style.position = 'absolute';
    placeholder.style.top = '0';
    placeholder.style.left = '0';
    placeholder.style.width = '100%';
    placeholder.style.height = '100%';
    placeholder.style.display = 'flex';
    placeholder.style.flexDirection = 'column';
    placeholder.style.alignItems = 'center';
    placeholder.style.justifyContent = 'center';
    placeholder.style.background = 'var(--bg-card)';
    placeholder.style.borderRadius = '24px';
    placeholder.style.cursor = 'pointer';
    placeholder.style.zIndex = '10';
    placeholder.style.color = 'var(--text-primary)';
    placeholder.style.textAlign = 'center';
    placeholder.style.border = '1px solid var(--border)';
    placeholder.innerHTML = `
      <i class="fa-brands fa-facebook" style="font-size: 4rem; color: #1877F2; margin-bottom: 1rem; filter: drop-shadow(0 4px 10px rgba(24,119,242,0.3));"></i>
      <h3 style="font-family: 'Dangrek', cursive, sans-serif; font-size: 1.4rem;">Watch video on Facebook</h3>
      <p style="font-size: 1rem; opacity: 0.7; margin-top: 0.5rem; max-width: 80%;">Click here to open the video in the Facebook App or Browser.</p>
    `;
    placeholder.onclick = function () {
      if (this.dataset.url) {
        window.open(this.dataset.url, '_blank');
      }
    };
    container.style.position = 'relative';
    container.appendChild(placeholder);
  }

  if (redirectUrl) {
    // Show placeholder, hide iframe
    placeholder.style.display = 'flex';
    placeholder.dataset.url = redirectUrl;
    iframe.style.display = 'none';
    iframe.src = ""; // Stop loading the unavailable video
  } else {
    // Show iframe, hide placeholder
    placeholder.style.display = 'none';
    placeholder.dataset.url = '';
    iframe.style.display = 'block';
    iframe.src = videoUrl;
  }

  // Update active state for buttons (Synchronize across clones)
  const tabsContainer = btn.parentElement;
  const tabs = tabsContainer.querySelectorAll('.video-tab');
  const btnText = btn.innerText.trim();

  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.innerText.trim() === btnText) {
      tab.classList.add('active');
    }
  });
}

/* ========================================================
   BACK TO TOP BUTTON
   - Shows when user scrolls down and smooth-scrolls to top on click
   ======================================================== */
(() => {
  const backBtn = document.getElementById('back-to-top');
  if (!backBtn) return;

  const toggleThreshold = 300; // px

  const onScroll = () => {
    if (window.scrollY > toggleThreshold) backBtn.classList.add('show');
    else backBtn.classList.remove('show');
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Initialize visibility on load
  document.addEventListener('DOMContentLoaded', onScroll);
})();

/* ========================================================
   VIDEO SWITCHER AUTO-SCROLL
   ======================================================== */
function initVideoSwitcherAutoScroll() {
  const switchers = document.querySelectorAll('.video-switcher');
  switchers.forEach(switcher => {
    // 1. Duplicate content for seamless infinite looping
    const originalContent = switcher.innerHTML;
    switcher.innerHTML += originalContent;

    let isPaused = false;
    const speed = 1.2;

    const step = () => {
      if (!isPaused) {
        switcher.scrollLeft += speed;

        // 2. Seamless jump: When we reach the middle (end of first set), jump to start
        // Use a small buffer to avoid jitter
        if (switcher.scrollLeft >= (switcher.scrollWidth / 2)) {
          switcher.scrollLeft = 0;
        }
      }
    };

    setInterval(step, 30);

    // Pause on interaction
    const pause = () => { isPaused = true; };
    const resume = () => { isPaused = false; };

    switcher.addEventListener('mouseenter', pause);
    switcher.addEventListener('mouseleave', resume);
    switcher.addEventListener('touchstart', pause, { passive: true });
    switcher.addEventListener('touchend', resume, { passive: true });
    switcher.addEventListener('mousedown', pause);
    window.addEventListener('mouseup', resume);
  });
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVideoSwitcherAutoScroll);
} else {
  initVideoSwitcherAutoScroll();
}

// Page Visibility API (Completely stops CPU/GPU execution when tab is backgrounded or screen locked)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (animFrame) cancelAnimationFrame(animFrame);
    if (audioCtx && audioCtx.state === 'running') audioCtx.suspend().catch(() => {});
    clearBeatTimers();
    if (rainAudio) rainAudio.pause();
    if (beatAudio) beatAudio.pause();
    if (snowAudio) snowAudio.pause();
    if (thunderAudio) thunderAudio.pause();
  } else {
    if (weatherState === 7) return; // Mode 7: Keep 100% idle in Clean Normal Mode
    if (animFrame) cancelAnimationFrame(animFrame);
    animFrame = requestAnimationFrame(animateWeather);
    if (!isMuted) {
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
      }
      syncModeAudio();
    }
  }
});
