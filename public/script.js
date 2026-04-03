

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
  'hero.nameAccent': 'Dev.',
  'hero.role': 'Full-Stack With Firebase ',
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
  'projects.desc': 'A showcase of things I\'ve built — from real-time Firebase apps to full-stack platforms and creative experiments.',
  'proj1.placeholder': 'Project Screenshot / Demo',
  'proj1.title': 'Project Title One',
  'proj1.desc': 'A brief description of this project — what it does, the problem it solves, and the tech stack used. Make it compelling.',
  'proj2.placeholder': 'Video Demo',
  'proj2.title': 'Project Title Two',
  'proj2.desc': 'Another project description. This slot supports a video demo using HTML5 <video> or an embedded YouTube iframe.',
  'proj3.placeholder': 'Embedded iframe / YouTube',
  'proj3.title': 'Project Title Three',
  'proj3.desc': 'This card demonstrates iframe support — embed a YouTube link, Loom, or Figma prototype directly inside the card.',
  'common.badgeImage': 'Image',
  'common.badgeVideo': 'Video',
  'common.badgeIframe': 'Iframe',
  'common.code': 'Code',
  'common.live': 'Live',
  'certs.sectionTag': 'Achievements',
  'certs.titleBefore': 'Certificates &',
  'certs.titleHighlight': 'Awards',
  'certs.desc': 'Credentials and recognition from courses, competitions, and industry platforms that shaped my skills.',
  'cert.view': 'View Credential',
  'cert.details': 'View Details',
  'cert1.issuer': 'Google Cloud',
  'cert1.title': 'Google Cloud Associate Developer',
  'cert2.issuer': 'Firebase / Google',
  'cert2.title': 'Firebase Advanced Development',
  'cert3.issuer': 'Meta',
  'cert3.title': 'Meta Front-End Developer Professional',
  'cert4.issuer': 'Coursera',
  'cert4.title': 'Full-Stack Web Development Specialization',
  'cert5.issuer': 'Amazon Web Services',
  'cert5.title': 'AWS Certified Cloud Practitioner',
  'cert6.issuer': 'Hackathon 2024',
  'cert6.title': '1st Place — National Hackathon Winner',
  'cert7.issuer': 'freeCodeCamp',
  'cert7.title': 'Responsive Web Design Certification',
  'cert8.issuer': 'TVET Cambodia',
  'cert8.title': 'Internship Certificate — TVET',
  'cert9.issuer': 'SETEC Institute',
  'cert9.title': 'Internship Certificate — SETEC',
  'about.sectionTag': 'About Me',
  'about.titleBefore': 'Skills &',
  'about.titleHighlight': 'Expertise',
  'about.p1': 'I\'m a passionate developer with a love for building fast, scalable, and beautiful web applications. My core stack revolves around <strong style="color:var(--text-primary)">React, Firebase, and Node.js</strong>, and I\'m constantly exploring new tools to sharpen my craft.',
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
  'contact.valLoc': 'Your City, Your Country',
  'contact.valResp': 'Within 24 hours',
  'contact.findMe': 'Find me on',
  'footer.heading': 'Let\'s build something amazing together.',
  'footer.copy': '© 2025 Your Name. All rights reserved.',
  'weather.btnTitle': 'Toggle weather ambience (rain / snow)',
  'weather.zen': 'Zen Mode',
  'weather.nextSnow': 'Next: Snow',
  'weather.nextOff': 'Next: Off',
  'weather.rainMode': '🌧 Rain Mode',
  'weather.snowMode': '❄️ Snow Mode',
  'nav.resume': 'Resume',
  'resume.sectionTag': 'My Story',
  'resume.titleBefore': 'My',
  'resume.titleHighlight': 'Journey',
  'resume.desc': 'A timeline of my education and professional experience — where I\'ve been and what I\'ve built along the way.',
  'resume.edu': 'Education',
  'resume.exp': 'Experience',
  'resume.edu1.title': 'Bachelor\'s in Information Technology',
  'resume.edu1.place': 'University of Your City',
  'resume.edu1.desc': 'Specializing in software engineering, web technologies, and cloud computing.',
  'resume.edu2.title': 'High School Diploma — Science',
  'resume.edu2.place': 'Your High School Name',
  'resume.edu2.desc': 'Focused on mathematics, physics, and computer fundamentals. First exposure to HTML and JavaScript.',
  'resume.edu3.title': 'Middle School',
  'resume.edu3.place': 'Your Middle School Name',
  'resume.edu3.desc': 'Discovered a passion for technology and problem-solving from a young age.',
  'resume.exp1.title': 'Web Developer Freelancer & Startup Founder',
  'resume.exp1.place': 'Freelance / Startup',
  'resume.exp1.date': '2025 – Present',
  'resume.exp1.desc': 'Developing bespoke web solutions as a freelancer while building "Cloud POS", a startup web application for business management with team.',
  'resume.exp2.title': 'Assistant IT Support',
  'resume.exp2.place': 'SETEC IT Department',
  'resume.exp2.date': '2024 – 2025',
  'resume.exp2.desc': 'Provided technical assistance, hardware maintenance, and software troubleshooting for organizational efficiency.',
  'resume.exp3.title': 'Graphic Design',
  'resume.exp3.place': 'TVET Cambodia',
  'resume.exp3.date': '2022 – 2023',
  'resume.exp3.desc': 'Crafted visual identities, marketing materials, and digital assets for diverse client projects.',
  'resume.edu4.title': 'Primary School',
  'resume.edu4.place': 'Your Primary School Name',
  'resume.edu4.desc': 'Early education and foundational learning.',
  'resume.edu5.title': 'Extra Course / Certification',
  'resume.edu5.place': 'Training Center Name',
  'resume.edu5.desc': 'Gained fundamental knowledge in computer literacy and basic programming concepts.',
  'resume.exp4.title': 'Content Creation',
  'resume.exp4.place': 'Social Media',
  'resume.exp4.date': '2021 – Present',
  'resume.exp4.desc': 'Producing engaging digital content across platforms, focusing on tech culture and brand building.',
  'resume.exp5.title': 'Business Online',
  'resume.exp5.place': 'E-commerce',
  'resume.exp5.date': '2020 – 2021',
  'resume.exp5.desc': 'Managed digital store operations, customer relationship management, and online sales strategies.',
  'alert.privateTitle': 'Private Repository',
  'alert.privateMessage': 'This code is set to Private. Please note that when you continue, you will only see Public Repositories.',
  'alert.confirm': 'Confirm and Continue',
  'alert.cancel': 'Cancel',
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
  'hero.nameAccent': 'អ្នកអភិវឌ្ឍន៍',
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
  'proj1.title': 'ចំណងជើងគម្រោង ១',
  'proj1.desc': 'ការពិពណ៌នាខ្លីអំពីគម្រោងនេះ — ឧបសគ្គ បច្ចេកទេស និងតម្លៃដែលផ្តល់។',
  'proj2.placeholder': 'វីដេអូសាកល្បង',
  'proj2.title': 'ចំណងជើងគម្រោង ២',
  'proj2.desc': 'គម្រោងនេះគាំទ្រវីដេអូ HTML5 ឬ embedding YouTube។',
  'proj3.placeholder': 'iframe / YouTube',
  'proj3.title': 'ចំណងជើងគម្រោង ៣',
  'proj3.desc': 'ប័ណ្ណនេះគាំទ្រការបង្កប់ YouTube Loom ឬ Figma ផ្ទាល់ក្នុងកាត។',
  'common.badgeImage': 'រូបភាព',
  'common.badgeVideo': 'វីដេអូ',
  'common.badgeIframe': 'Iframe',
  'common.code': 'កូដ',
  'common.live': 'Live',
  'certs.sectionTag': 'សមិទ្ធផល',
  'certs.titleBefore': 'វិញ្ញាបនបត្រ និង',
  'certs.titleHighlight': 'កិត្តិយស',
  'certs.desc': 'ការទទួលស្គាល់ពីវគ្គសិក្សា ការប្រកួតប្រជែង និងវេទិកាឧស្សាហ៍។',
  'cert.view': 'មើលវិញ្ញាបនបត្រ',
  'cert.details': 'មើលព័ត៌មានលម្អិត',
  'cert1.issuer': 'Google Cloud',
  'cert1.title': 'Google Cloud Associate Developer',
  'cert2.issuer': 'Firebase / Google',
  'cert2.title': 'Firebase Advanced Development',
  'cert3.issuer': 'Meta',
  'cert3.title': 'Meta Front-End Developer Professional',
  'cert4.issuer': 'Coursera',
  'cert4.title': 'វគ្គសិក្សា Full-Stack Web Development',
  'cert5.issuer': 'Amazon Web Services',
  'cert5.title': 'AWS Certified Cloud Practitioner',
  'cert6.issuer': 'Hackathon ២០២៤',
  'cert6.title': 'ជើងឯកថ្នាក់ជាតិ — Hackathon',
  'cert7.issuer': 'freeCodeCamp',
  'cert7.title': 'វិញ្ញាបន Responsive Web Design',
  'cert8.issuer': 'TVET Cambodia',
  'cert8.title': 'វិញ្ញាបនការក្រាន — TVET',
  'cert9.issuer': 'SETEC Institute',
  'cert9.title': 'វិញ្ញាបនការក្រាន — SETEC',
  'about.sectionTag': 'អំពីខ្ញុំ',
  'about.titleBefore': 'ជំនាញ និង',
  'about.titleHighlight': 'ជំនាញជ្រាយជ្រះ',
  'about.p1': 'ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ដែលចូលចិត្តបង្កើតគេហទំព័រលឿន មានស្ថេរភាព និងស្រស់ស្អាត។ បច្ចុប្បន្នខ្ញុំប្រើ <strong style="color:var(--text-primary)">React, Firebase Node.js និង​​​​​​​​​​​​​​ Mern Stack</strong> ជាស្នូល ហើយតែងតែស្វែងរកឧបករណ៍ថ្មីដើម្បីអភិវឌ្ឍខ្លួន។',
  'about.p2': 'នៅពេលមិនសរសេរកូដ ខ្ញុំចូលចិត្តចូលរួមប្រភពបើកចំហ ណែនាំអ្នកចាប់ផ្តើម ឬផឹកកាហ្វេមុនការងារជ្រៅ។',
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
  'contact.desc': 'មានគម្រោងគូរគំនិត? ខ្ញុំចង់ឮពីវា។ ផ្ញើសារ ហើយរួមគ្នាបង្កើតអ្វីដែលអស្ចារ្យ។',
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
  'contact.valLoc': 'ទីក្រុង ប្រទេសរបស់អ្នក',
  'contact.valResp': 'ក្នុងរយៈពេល ២៤ ម៉ោង',
  'contact.findMe': 'រកខ្ញុំនៅ',
  'footer.heading': 'តោះ! រួមគ្នាបង្កើតអ្វីដែលអស្ចារ្យ។',
  'footer.copy': '© ២០២៥ ឈ្មោះរបស់អ្នក។ រក្សាសិទ្ធិគ្រប់យ៉ាង។',
  'weather.btnTitle': 'ប្តូរបរិយាកាស (ភ្លៀង / ព្រិល)',
  'weather.zen': 'Zen',
  'weather.nextSnow': 'បន្ទាប់៖ ព្រិល',
  'weather.nextOff': 'បន្ទាប់៖ បិទ',
  'weather.rainMode': '🌧 របៀបភ្លៀង',
  'weather.snowMode': '❄️ របៀបព្រិល',
  'nav.resume': 'ប្រវត្តិ',
  'resume.sectionTag': 'រឿងរ៉ាវរបស់ខ្ញុំ',
  'resume.titleBefore': 'ដំណើរ',
  'resume.titleHighlight': 'ការអភិវឌ្ឍ',
  'resume.desc': 'ប្រវត្តិការសិក្សា និងបទពិសោធការងាររបស់ខ្ញុំ — ពីតូចមក។',
  'resume.edu': 'ការអប់រំ',
  'resume.exp': 'បទពិសោធការងារ',
  'resume.edu1.title': 'បរិញ្ញាបត្រ IT',
  'resume.edu1.place': 'សាកលវិទ្យាល័យ',
  'resume.edu1.desc': 'ឯកទេសលើ Software Engineering, Web Technologies, និង Cloud Computing។',
  'resume.edu2.title': 'វិញ្ញាបនបត្របញ្ចប់វិទ្យាល័យ',
  'resume.edu2.place': 'វិទ្យាល័យ',
  'resume.edu2.desc': 'ផ្តោតលើគណិតវិទ្យា ការពិតនិងព​ន​រ​ភ​ ។ ចាប់ផ្ដើមមានការស្គាល់ HTML និង JavaScript ។',
  'resume.edu3.title': 'សាលាមធ្យមសិក្សា',
  'resume.edu3.place': 'សាលាមធ្យម',
  'resume.edu3.desc': 'ស្វែងរកចំណូលចិត្តក្នុងបច្ចេកវិទ្យា និងការដោះស្រាយបញ្ហាតាំងពីតូច។',
  'resume.exp1.title': 'អ្នកអភិវឌ្ឍវិបសាយ Freelancer & ស្ថាបនិក Startup',
  'resume.exp1.place': 'Freelance / Startup',
  'resume.exp1.date': '២០២៥ - បច្ចុប្បន្ន',
  'resume.exp1.desc': 'ធ្វើការងារជា Web Developer Freelancer ព្រមទាំងកំពុងបង្កើតគម្រោង Startup "Cloud POS" Web App ជាមួយនិងក្រុមផងដែរ។',
  'resume.exp2.title': 'ជំនួយការផ្នែក IT Support',
  'resume.exp2.place': 'ផ្នែកព័ត៌មានវិទ្យា',
  'resume.exp2.date': '២០២៤ - ២០២៥',
  'resume.exp2.desc': 'ជួយដោះស្រាយបញ្ហាបច្ចេកទេស ថែទាំ Hardware និងគាំទ្រផ្នែក Software សម្រាប់តម្រូវការស្ថាប័ន។',
  'resume.exp3.title': 'រចនាក្រាហ្វិក (Graphic Design)',
  'resume.exp3.place': 'ស្ទូឌីយោច្នៃប្រឌិត',
  'resume.exp3.date': '២០២២ - ២០២៣',
  'resume.exp3.desc': 'បង្កើតគំនិត និងរចនារូបភាពសម្រាប់ Branding សម្ភារៈទីផ្សារ និងឯកសារឌីជីថលផ្សេងៗ។',
  'resume.edu4.title': 'សាលាបឋមសិក្សា',
  'resume.edu4.place': 'ឈ្មោះសាលាបឋមសិក្សារបស់អ្នក',
  'resume.edu4.desc': 'ការអប់រំបឋម និងការសិក្សាមូលដ្ឋានគ្រឹះ។',
  'resume.edu5.title': 'វគ្គសិក្សាបន្ថែម / វិញ្ញាបនបត្រ',
  'resume.edu5.place': 'ឈ្មោះមជ្ឈមណ្ឌលបណ្តុះបណ្តាល',
  'resume.edu5.desc': 'ទទួលបានចំណេះដឹងមូលដ្ឋានអំពីកុំព្យូទ័រ និងទម្រង់សរសេរកូដ។',
  'resume.exp4.title': 'ផលិតមាតិកា (Content Creation)',
  'resume.exp4.place': 'បណ្តាញសង្គម',
  'resume.exp4.date': '២០២១ - បច្ចុប្បន្ន',
  'resume.exp4.desc': 'បង្កើតមាតិកាឌីជីថលនៅលើបណ្តាញសង្គមផ្សេងៗ ដើម្បីកសាង Brand និងទាក់ទាញអ្នកទស្សនា។',
  'resume.exp5.title': 'អាជីវកម្មអនឡាញ (Business Online)',
  'resume.exp5.place': 'ពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក',
  'resume.exp5.date': '២០២០ - ២០២១',
  'resume.exp5.desc': 'គ្រប់គ្រង និងដំណើរការអាជីវកម្មតាមប្រព័ន្ធអនឡាញ ដោយផ្តោតលើការលក់ និងការទំនាក់ទំនងអតិថិជន។',
  'alert.privateTitle': 'គម្រោងឯកជន (Private)',
  'alert.privateMessage': 'កូដនេះត្រូវបានដាក់ជា Private។ សូមប្រាប់ថានៅពេលអ្នកចុចបន្ត អ្នកនឹងឃើញតែ Public Repositories ប៉ុណ្ណោះ។',
  'alert.confirm': 'យល់ព្រម និងបន្ត',
  'alert.cancel': 'បោះបង់',
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
    return { success: true };
  } catch (e) {
    console.error('Firestore messages:', e);
    return { success: false, error: e.message || String(e) };
  }
}

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
  { icon: 'fa-solid fa-fire" style="color: #FFA000;', label: 'Firebase' },
  { icon: 'fa-solid fa-database', label: 'Firestore' },
  { icon: 'fa-solid fa-bolt', label: 'Realtime DB' },
  { icon: 'fa-solid fa-cloud-arrow-up', label: 'Cloud Storage' },
  { icon: 'fa-brands fa-html5', label: 'HTML5' },
  { icon: 'fa-brands fa-css3-alt', label: 'CSS3' },
  { icon: 'fa-brands fa-js', label: 'JavaScript' },
  { icon: 'fa-solid fa-code', label: 'C++' },
  { icon: 'fa-solid fa-terminal', label: 'C#' },
  { icon: 'fa-solid fa-user-shield', label: 'Firebase Auth' },
  { icon: 'fa-solid fa-robot', label: 'AI Tool Coding' },
  { icon: 'fa-brands fa-git-alt', label: 'Git' },
  { icon: 'fa-brands fa-github', label: 'GitHub' },
  { icon: 'fa-solid fa-bolt-lightning', label: 'Vite' },
  { icon: 'fa-solid fa-code-branch', label: 'TypeScript' },
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
const ctx = weatherCanvas?.getContext('2d');

let particles = [];
let animFrame = null;

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
  const count = weatherState === 1 ? 220 : 120;
  for (let i = 0; i < count; i++) {
    if (weatherState === 1) {
      const d = createRainDrop();
      d.y = Math.random() * weatherCanvas.height;
      particles.push(d);
    } else {
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
function animateWeather() {
  if (weatherState === 0) return;
  weatherState === 1 ? drawRain() : drawSnow();
  animFrame = requestAnimationFrame(animateWeather);
}
function stopWeather() {
  cancelAnimationFrame(animFrame);
  if (ctx) ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);
  weatherCanvas?.classList.remove('active');
  rainAudio?.pause(); if (rainAudio) rainAudio.currentTime = 0;
  snowAudio?.pause(); if (snowAudio) snowAudio.currentTime = 0;
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
  } else {
    weatherLabel.textContent = t('weather.nextOff');
    weatherIcon.className = 'fa-solid fa-snowflake';
    weatherIndicator.textContent = t('weather.snowMode');
    weatherIndicator.classList.add('visible');
  }
}
function startWeather() {
  resizeCanvas();
  initParticles();
  weatherCanvas?.classList.add('active');
  animateWeather();
  if (weatherState === 1) {
    snowAudio?.pause();
    if (rainAudio) {
      rainAudio.volume = 0.5;
      rainAudio.play().catch(e => console.log("Autoplay blocked"));
    }
  } else {
    rainAudio?.pause();
    if (snowAudio) {
      snowAudio.volume = 0.4;
      snowAudio.play().catch(e => console.log("Autoplay blocked"));
    }
  }
  applyWeatherUiLabels();
}
weatherBtn?.addEventListener('click', () => {
  weatherState = (weatherState + 1) % 3;
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
