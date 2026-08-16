

/* ========== i18n: English (default) & Khmer ========== */
const LANG_KEY = 'portfolio-lang';
let weatherState = 1;

const I18N = { en: {}, km: {} };

Object.assign(I18N.en, {
  'page.title': 'Dev Portfolio',
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
  'proj2.title': 'Rotana E-Learning',
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
  'skill.cpp': 'Java & C#',
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
  'weather.btnTitle': 'Toggle weather ambience (rain / snow / storm)',
  'weather.zen': 'Zen Mode',
  'weather.nextSnow': 'Next: Snow',
  'weather.nextThunder': 'Next: Storm',
  'weather.nextOff': 'Next: Off',
  'weather.rainMode': '🌧 Rain Mode',
  'weather.snowMode': '❄️ Snow Mode',
  'weather.thunderMode': '🌩 Storm Mode',
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
  'proj8.title': 'S Tech Store (Client Project)',
  'proj8.desc': 'S Tech Store is an elite, high-performance e-commerce platform tailored for the modern computer and tech market in Cambodia. Built from the ground up with a cutting-edge full-stack architecture, it offers a seamless and luxurious shopping experience. The frontend utilizes Next.js 14 (App Router) and Tailwind CSS to ensure blazing-fast load times, exceptional SEO, and a fully responsive mobile-first UI. The backend is powered by a scalable Laravel 11 REST API connected to a PostgreSQL database, efficiently handling a vast product catalog, dynamic pricing, and complex order management. Security is paramount, with Firebase Authentication managing user sessions securely. The entire ecosystem is deployed globally and protected against threats via Cloudflare. Core features include an intelligent search system, dynamic shopping cart, user dashboard, automated invoice generation, and real-time inventory tracking, delivering a comprehensive enterprise-grade solution.',
  'proj9.title': 'Delight Fashion (Client Project)',
  'proj9.desc': 'Delight Fashion is a production-ready, mobile-first, high-end men\'s fashion e-commerce platform built for Phnom Penh, Cambodia. Built with Next.js 16 (App Router) and React 19, it features a luxury Black, White & Gold aesthetic. The serverless Firebase backend handles authentication (Google + Custom RBAC claims) and Firestore NoSQL data. Product images are delivered via Cloudinary CDN with WebP/AVIF optimization. Shop owners receive instant Telegram Bot push notifications for new orders. Supports Cambodia local payments: Cash on Delivery & ABA Bank QR PayWay. All 8 development phases completed.',
  'proj10.title': 'NRI Studio',
  'proj10.desc': 'NRI Studio is a full-stack, browser-based Integrated Development Environment (IDE) that closely mimics the behavior and UI of VSCode. Built for modern web development, it allows users to create, edit, save, and execute JavaScript and TypeScript code entirely in the cloud. Features include Monaco Editor with full IntelliSense & auto-completion, a collapsible sidebar with file explorer, multi-tab support, local folder upload, live terminal powered by a secure Node.js backend sandbox, real-time auto-save to MongoDB, and Firebase Authentication (email/password & Google). Deployed on Vercel (frontend) and Render (backend).',
  'ai.sectionTag': 'AI-Powered Development',
  'ai.titleBefore': 'Supercharged with',
  'ai.titleHighlight': 'AI Tools',
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
  'page.title': 'Portfolio ណុប រតនា',
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
  'proj2.title': 'Rotana E-Learning',
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
  'skill.cpp': 'Java និង C#  ',
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
  'weather.btnTitle': 'ប្តូរបរិយាកាស (ភ្លៀង / ព្រិល / ផ្គររន្ទះ)',
  'weather.zen': 'Zen',
  'weather.nextSnow': 'បន្ទាប់៖ ព្រិល',
  'weather.nextThunder': 'បន្ទាប់៖ ផ្គររន្ទះ',
  'weather.nextOff': 'បន្ទាប់៖ បិទ',
  'weather.rainMode': '🌧 របៀបភ្លៀង',
  'weather.snowMode': '❄️ របៀបព្រិល',
  'weather.thunderMode': '🌩 របៀបផ្គររន្ទះ',
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
  'proj8.title': 'S Tech Store (Client Project)',
  'proj8.desc': 'S Tech Store គឺជាវេទិកា E-Commerce លក់ Computer និងផលិតផលបច្ចេកវិទ្យាដ៏ប្រណិត និងឈានមុខគេ ដែលបង្កើតឡើងដោយស្ថាបត្យកម្ម Full-Stack ទំនើបបំផុត។ Frontend ប្រើប្រាស់ Next.js 14 (App Router) និង Tailwind CSS ដើម្បីផ្ដល់នូវបទពិសោធទិញទំនិញយ៉ាងលឿន (Blazing-fast) ជាមួយ SEO កម្រិតខ្ពស់ និង Responsive គ្រប់ទំហំអេក្រង់។ ចំណែក Backend ត្រូវបានរៀបចំឡើងដោយ Laravel 11 REST API យ៉ាងរឹងមាំ ភ្ជាប់ជាមួយមូលដ្ឋានទិន្នន័យ PostgreSQL សម្រាប់គ្រប់គ្រងទំនិញរាប់ពាន់មុខ និងការកុម្ម៉ង់យ៉ាងមានប្រសិទ្ធភាព។ ការចូលប្រើប្រាស់ត្រូវបានការពារសុវត្ថិភាពយ៉ាងតឹងរ៉ឹងដោយ Firebase Auth រីឯប្រព័ន្ធទាំងមូលត្រូវបានការពារនិងបង្កើនល្បឿនដោយ Cloudflare។ មុខងារសំខាន់ៗរួមមាន៖ ប្រព័ន្ធស្វែងរកឆ្លាតវៃ (Intelligent Search), កន្ត្រកទំនិញ (Dynamic Cart), គណនីអ្នកប្រើប្រាស់ (User Dashboard), ការបង្កើតវិក្កយបត្រស្វ័យប្រវត្តិ, និងការតាមដានស្តុកទំនិញក្នុងពេលជាក់ស្តែង (Real-time Inventory) ដែលស័ក្តិសមបំផុតសម្រាប់អាជីវកម្មខ្នាតធំ។',
  'proj9.title': 'Delight Fashion (Client Project)',
  'proj9.desc': 'Delight Fashion គឺជាវេទិកា E-Commerce ម៉ូតប្រុសប្រណិតដែលត្រៀមសម្រាប់ Production ស្ថិតនៅភ្នំពេញ កម្ពុជា។ បង្កើតដោយ Next.js 16 និង React 19 ជាមួយ aesthetic ខ្មៅ ស និងមាស។ Firebase (Auth + Firestore) ដោះស្រាយ Backend ដោយគ្មាន Server។ រូបភាពផលិតផលបង្ហោះតាម Cloudinary CDN ជាមួយ WebP/AVIF Optimization។ ម្ចាស់ហាងទទួលការជូនដំណឹង Telegram Bot ភ្លាមៗ។ ទូទាត់បែប COD និង ABA Bank QR PayWay។ Phase ទាំង ៨ បានបញ្ចប់ស្រេច។',
  'proj10.title': 'NRI Studio',
  'proj10.desc': 'NRI Studio គឺជា IDE (Integrated Development Environment) ដំណើរការក្នុង Browser ដែលមានទម្រង់ស្រដៀង VSCode។ បង្កើតឡើងសម្រាប់ Developer ទំនើប អាចបង្កើត កែ រក្សាទុក និង Execute កូដ JavaScript/TypeScript ទាំងស្រុងក្នុង Cloud។ មុខងាររួមមាន Monaco Editor ជាមួយ IntelliSense, ការ Auto-Complete, Sidebar, Multi-Tab, Local Folder Upload, Terminal ស្ទួន Node.js Sandbox, Auto-Save ទៅ MongoDB, និង Firebase Auth (Email/Google)។ Deploy នៅ Vercel (Frontend) និង Render (Backend)។',
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
  if (typeof applyWeatherUiLabels === 'function') applyWeatherUiLabels();
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    localStorage.setItem(LANG_KEY, btn.getAttribute('data-set-lang'));
    applyI18n();
  });
});

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

    const parts = [];
    snapshot.forEach((docSnap) => {
      const p = docSnap.data();
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

// Helper: send a message via all bots
async function sendToAllBots(text) {
  const results = await Promise.allSettled(
    BOTS.map(bot =>
      fetch(`https://api.telegram.org/bot${bot.token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: bot.chat_id, text, parse_mode: 'Markdown', disable_web_page_preview: false })
      }).then(r => r.json())
    )
  );
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') console.log(`[TG] ✅ Bot${i+1} sent:`, r.value.ok);
    else console.error(`[TG] ❌ Bot${i+1} failed:`, r.reason);
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
   WEATHER EFFECT (Canvas + Audio)
   ======================================================== */
const weatherBtn = document.getElementById('weather-btn');
const weatherIcon = document.getElementById('weather-icon');
const weatherLabel = document.getElementById('weather-label');
const weatherIndicator = document.getElementById('weather-indicator');
const weatherCanvas = document.getElementById('weather-canvas');
const rainAudio = document.getElementById('rain-audio');
const snowAudio = document.getElementById('snow-audio');
const thunderAudio = document.getElementById('thunder-audio');
const stormVideo = document.getElementById('storm-video');
const ctx = weatherCanvas?.getContext('2d');

let particles = [];
let animFrame = null;
let flashOpacity = 0;
let lightningBolt = null;

function resizeCanvas() {
  if (!weatherCanvas) return;
  weatherCanvas.width = window.innerWidth;
  weatherCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createRainDrop() {
  return {
    x: Math.random() * weatherCanvas.width,
    y: Math.random() * -weatherCanvas.height,
    speed: 8 + Math.random() * 8,
    len: 12 + Math.random() * 20,
    thick: 0.5 + Math.random() * 1,
    alpha: 0.4 + Math.random() * 0.5,
    wind: 2 + Math.random() * 2
  };
}
function createSnowFlake() {
  return {
    x: Math.random() * weatherCanvas.width,
    y: Math.random() * -weatherCanvas.height,
    r: 1 + Math.random() * 4,
    speed: 1 + Math.random() * 2,
    drift: (Math.random() - 0.5) * 0.8,
    alpha: 0.5 + Math.random() * 0.5,
    wobble: Math.random() * Math.PI * 2
  };
}
function initParticles() {
  particles = [];
  lightningBolt = null;
  flashOpacity = 0;
  if (weatherState === 0) return;
  if (weatherState === 3) {
    for (let i = 0; i < 10; i++) {
      particles.push({
        x: Math.random() * weatherCanvas.width,
        y: Math.random() * (weatherCanvas.height * 0.4),
        r: 200 + Math.random() * 300,
        speed: 0.05 + Math.random() * 0.1,
        alpha: isDark ? 0.12 : 0.25
      });
    }
    return;
  }
  const count = weatherState === 1 ? 220 : 120;
  for (let i = 0; i < count; i++) {
    if (weatherState === 1) {
      const d = createRainDrop();
      d.y = Math.random() * weatherCanvas.height;
      particles.push(d);
    } else if (weatherState === 2) {
      const s = createSnowFlake();
      s.y = Math.random() * weatherCanvas.height;
      particles.push(s);
    }
  }
}
function drawRain() {
  ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);
  particles.forEach((d, i) => {
    ctx.save();
    ctx.globalAlpha = d.alpha;
    ctx.strokeStyle = isDark ? 'rgba(150,210,255,0.8)' : 'rgba(70,130,200,0.6)';
    ctx.lineWidth = d.thick;
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x + d.wind, d.y + d.len);
    ctx.stroke();
    ctx.restore();
    d.x += d.wind;
    d.y += d.speed;
    if (d.y > weatherCanvas.height || d.x > weatherCanvas.width) {
      particles[i] = createRainDrop();
    }
  });
}
function drawSnow() {
  ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);
  particles.forEach((s, i) => {
    s.wobble += 0.02;
    ctx.save();
    ctx.globalAlpha = s.alpha;
    ctx.fillStyle = isDark ? 'rgba(220,240,255,0.9)' : 'rgba(180,210,240,0.8)';
    ctx.beginPath();
    ctx.arc(s.x + Math.sin(s.wobble) * 1.5, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    s.x += s.drift;
    s.y += s.speed;
    if (s.y > weatherCanvas.height + 10) {
      particles[i] = createSnowFlake();
    }
  });
}

function createFierceLightning(x, y, angle, branches) {
  if (branches <= 0) return [];
  const segments = [];
  let curX = x, curY = y;
  const length = Math.random() * 60 + 40;
  const nX = curX + Math.sin(angle) * length + (Math.random() - 0.5) * 50;
  const nY = curY + Math.cos(angle) * length + (Math.random() * 40);

  segments.push({ x1: curX, y1: curY, x2: nX, y2: nY, width: branches * 0.8 });

  // Main path
  segments.push(...createFierceLightning(nX, nY, angle + (Math.random() - 0.5) * 0.3, branches - 1));

  // Branching
  if (Math.random() > 0.7 && branches > 2) {
    segments.push(...createFierceLightning(nX, nY, angle + (Math.random() - 0.5) * 1.5, Math.floor(branches / 1.5)));
  }

  return segments;
}

function drawThunderstorm() {
  ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);

  // Fierce Clouds
  particles.forEach(c => {
    ctx.save();
    const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
    const color = isDark ? '60, 80, 120' : '160, 180, 200';
    grad.addColorStop(0, `rgba(${color}, ${c.alpha})`);
    grad.addColorStop(1, `rgba(${color}, 0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    c.x += c.speed;
    if (c.x - c.r > weatherCanvas.width) c.x = -c.r;
  });

  // Thunder Strike Logic
  if (!lightningBolt && Math.random() > 0.99) {
    const startX = Math.random() * weatherCanvas.width;
    lightningBolt = createFierceLightning(startX, 0, 0, 12);
    flashOpacity = 0.85; // Heavy flash
  }

  // Draw Fierce Bolt
  if (lightningBolt) {
    ctx.save();
    ctx.strokeStyle = '#fff';
    ctx.shadowBlur = 30;
    ctx.shadowColor = 'rgba(100, 200, 255, 0.9)';
    ctx.lineCap = 'round';
    ctx.beginPath();
    lightningBolt.forEach(s => {
      ctx.lineWidth = s.width;
      ctx.moveTo(s.x1, s.y1);
      ctx.lineTo(s.x2, s.y2);
    });
    ctx.stroke();
    ctx.restore();

    if (Math.random() > 0.6) lightningBolt = null; // Stutter effect
  }

  // Heavy Flash Decay
  if (flashOpacity > 0) {
    ctx.save();
    ctx.globalAlpha = flashOpacity;
    ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.65)';
    ctx.fillRect(0, 0, weatherCanvas.width, weatherCanvas.height);
    ctx.restore();
    flashOpacity -= 0.08; // Fast decay
  }
}
function animateWeather() {
  if (weatherState === 0) return;
  if (weatherState === 1) drawRain();
  else if (weatherState === 2) drawSnow();
  else if (weatherState === 3) drawThunderstorm();
  animFrame = requestAnimationFrame(animateWeather);
}
function stopWeather() {
  cancelAnimationFrame(animFrame);
  if (ctx) ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);
  weatherCanvas?.classList.remove('active');
  stormVideo?.classList.remove('active');
  if (stormVideo) stormVideo.pause();
  rainAudio?.pause(); if (rainAudio) rainAudio.currentTime = 0;
  snowAudio?.pause(); if (snowAudio) snowAudio.currentTime = 0;
  thunderAudio?.pause(); if (thunderAudio) thunderAudio.currentTime = 0;
  weatherIndicator?.classList.remove('visible');
}
function applyWeatherUiLabels() {
  if (weatherBtn) weatherBtn.setAttribute('title', t('weather.btnTitle'));
  if (!weatherLabel || !weatherIcon) return;
  if (weatherState === 0) {
    weatherLabel.textContent = t('weather.zen');
    weatherIcon.className = 'fa-solid fa-cloud-sun';
    weatherIndicator?.classList.remove('visible');
  } else if (weatherState === 1) {
    weatherLabel.textContent = t('weather.nextSnow');
    weatherIcon.className = 'fa-solid fa-cloud-rain';
    weatherIndicator.textContent = t('weather.rainMode');
    weatherIndicator.classList.add('visible');
  } else if (weatherState === 2) {
    weatherLabel.textContent = t('weather.nextThunder');
    weatherIcon.className = 'fa-solid fa-snowflake';
    weatherIndicator.textContent = t('weather.snowMode');
    weatherIndicator.classList.add('visible');
  } else if (weatherState === 3) {
    weatherLabel.textContent = t('weather.nextOff');
    weatherIcon.className = 'fa-solid fa-cloud-bolt';
    weatherIndicator.textContent = t('weather.thunderMode');
    weatherIndicator.classList.add('visible');
  }
}
function startWeather() {
  resizeCanvas();
  initParticles();

  if (weatherState === 3) {
    stormVideo?.classList.add('active');
    stormVideo?.play().catch(e => console.log("Video play blocked"));
    // We can hide canvas for storm if user wants only video, 
    // but canvas still draws clouds/flashes on top
    weatherCanvas?.classList.add('active');
  } else {
    stormVideo?.classList.remove('active');
    if (stormVideo) stormVideo.pause();
    weatherCanvas?.classList.add('active');
  }

  animateWeather();
  rainAudio?.pause();
  snowAudio?.pause();
  thunderAudio?.pause();
  if (weatherState === 1) {
    if (rainAudio) {
      rainAudio.volume = 0.5;
      rainAudio.play().catch(e => console.log("Autoplay blocked"));
    }
  } else if (weatherState === 2) {
    if (snowAudio) {
      snowAudio.volume = 0.4;
      snowAudio.play().catch(e => console.log("Autoplay blocked"));
    }
  } else if (weatherState === 3) {
    if (thunderAudio) {
      thunderAudio.volume = 0.6;
      thunderAudio.play().catch(e => console.log("Autoplay blocked"));
    }
  }
  applyWeatherUiLabels();
}
weatherBtn?.addEventListener('click', () => {
  weatherState = (weatherState + 1) % 4;
  if (weatherState === 0) {
    stopWeather();
    applyWeatherUiLabels();
  } else {
    stopWeather();
    startWeather();
  }
});

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
loadProjectsFromFirestore();
loadCertificatesFromFirestore();
applyI18n();

window.addEventListener('load', () => {
  if (weatherState > 0) setTimeout(() => startWeather(), 500);
});

// Audio Unlock Management
let hasUnlocked = false;
const unlockAudio = async () => {
  if (hasUnlocked) return;

  // We try to play whichever weather audio should be active
  const targetAudio = weatherState === 1 ? rainAudio : (weatherState === 2 ? snowAudio : null);

  if (targetAudio && targetAudio.paused) {
    try {
      await targetAudio.play();
      hasUnlocked = true;
      cleanupAudioListeners();
      console.log("Audio unlocked successfully");
    } catch (e) {
      console.log("Audio playback waiting for interaction...");
    }
  } else {
    // If nothing to play or already playing, we can stop listening
    if (weatherState === 0 || (targetAudio && !targetAudio.paused)) {
      hasUnlocked = true;
      cleanupAudioListeners();
    }
  }
};

const cleanupAudioListeners = () => {
  ['click', 'touchstart', 'scroll', 'mousedown'].forEach(ev => {
    window.removeEventListener(ev, unlockAudio);
  });
};

// Add listeners for any user interaction to unlock audio
['click', 'touchstart', 'scroll', 'mousedown'].forEach(ev => {
  window.addEventListener(ev, unlockAudio, { passive: true });
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

  if (!modal) return;

  if (btnFigma) btnFigma.onclick = () => { window.open(figmaUrl, '_blank'); closeClientProjectAlert(); };
  if (btnGithub) btnGithub.onclick = () => { window.open(githubUrl, '_blank'); closeClientProjectAlert(); };

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

  // Set new URL
  iframe.src = videoUrl;

  // Handle overlay for redirect
  const container = iframe.parentElement;
  let overlay = container.querySelector('.video-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'video-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.cursor = 'pointer';
    overlay.style.zIndex = '10';
    overlay.onclick = function () {
      if (this.dataset.url) {
        window.open(this.dataset.url, '_blank');
      }
    };
    container.style.position = 'relative';
    container.appendChild(overlay);
  }

  if (redirectUrl) {
    overlay.style.display = 'block';
    overlay.dataset.url = redirectUrl;
  } else {
    overlay.style.display = 'none';
    overlay.dataset.url = '';
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
