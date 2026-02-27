// js/data.js
window.NR_DATA = {
  googleForms: {
    default: "https://forms.gle/PASTE-YOUR-DEFAULT-FORM-LINK",
    webinar: "https://forms.gle/PASTE-YOUR-WEBINAR-FORM-LINK",
    class: "https://forms.gle/PASTE-YOUR-CLASS-FORM-LINK",
    volunteer: "https://forms.gle/CbqSskDPojGgBhQeA",
    MSWord: "https://forms.gle/cUKd7WjPetGqcDAb8",
    familyand: "https://forms.gle/YVTDoBH7dDkHqBWD9",
    QSkill: "https://forms.gle/eUQxuWgB1LivzquL9",
  },

  programs: [
    //  Completed Webinars
    {
      slug: "web-development-fundamentals",
      title: "Web Development Fundamentals: Building the Web from Scratch",
      type: "classes",
      status: "done",
      shortDesc:
        "Learn the core foundations of web development using HTML, CSS, Tailwind, and JavaScript.",
      longDesc:
        "This Web Development Fundamentals class guided students through the essential building blocks of modern web development. Over four months, participants learned how to structure webpages with HTML, style responsive layouts using CSS and Tailwind, and add interactivity with JavaScript. The course emphasized hands-on practice, real-world projects, and best practices for building clean, user-friendly websites.",
      outcomes: [
        "Strong understanding of HTML structure and semantic markup",
        "Styling responsive layouts using CSS ",
        "Adding interactivity and dynamic content using JavaScript",
        "Building and deploying complete static websites",
      ],
      meta: {
        duration: "4 months",
        format: "Online Class",
        participants: "40",
      },
    },

    {
      slug: "ai-introduction",
      title: "Smart Minds, Smarter Tools: An Introduction to AI",
      type: "webinars",
      status: "done",
      shortDesc:
        "Discover the basics, types, and real-world applications of Artificial Intelligence.",
      longDesc:
        "This engaging webinar introduced participants to Artificial Intelligence (AI), focusing on its transformative impact on daily life and industries. Attendees learned the fundamentals of AI, its various types, and real-world applications shaping the future.",
      outcomes: [
        "Introduction to the basics and types of AI",
        "Real-life applications of AI in healthcare, business, and education",
        "Understanding how AI is revolutionizing technology and society",
      ],
      meta: { duration: "1,5 hour", format: "Webinar", participants: "30" },
    },
    {
      slug: "leadership-and-empowerment",
      title: "Leadership and Empowerment",
      type: "webinars",
      status: "done",
      shortDesc:
        "Lead with confidence and learn practical ways to create meaningful impact.",
      longDesc:
        "Participants learned how to lead with self-belief and confidence, and explored practical tools to build leadership qualities, empower others, and drive positive social change in their communities.",
      outcomes: [
        "Building confidence as a leader",
        "Empowering others to succeed",
        "Leading with purpose to drive change",
      ],
      meta: { duration: "1,5 hour", format: "Webinar", participants: "45" },
    },
    {
      slug: "emotional-resilience-confidence",
      title: "Emotional Resilience and Confidence Building",
      type: "webinars",
      status: "done",
      shortDesc:
        "Tools to manage stress, build resilience, and strengthen confidence.",
      longDesc:
        "This empowering webinar focused on mental health and well-being, providing practical tools to manage stress, overcome challenges, and build emotional resilience. Attendees learned how to cultivate confidence and rise stronger in adversity.",
      outcomes: [
        "Tools to manage stress and enhance emotional well-being",
        "Techniques for building resilience in challenging situations",
        "Strategies to boost self-confidence and mental strength",
      ],
      meta: { duration: "1,5 hour", format: "Webinar", participants: "50" },
    },
    {
      slug: "toefl-strategies-success",
      title: "Crack the TOEFL Test - Strategies for Success",
      type: "webinars",
      status: "done",
      shortDesc:
        "Section-by-section TOEFL strategies, time management, and test-day tips.",
      longDesc:
        "This comprehensive webinar provided effective TOEFL preparation strategies, covering section-by-section tips, time management techniques, and test-day guidance. Participants also received resource recommendations and learned common mistakes to avoid.",
      outcomes: [
        "Section-by-section strategies for TOEFL success",
        "Time management tips to maximize performance",
        "Test-day strategies to stay calm and focused",
        "Recommended resources and key mistakes to avoid",
      ],
      meta: { duration: "1,5 hour", format: "Webinar", participants: "40" },
    },
    {
      slug: "leading-through-pressure-innovation",
      title: "Leading Through Pressure: How Challenges Spark Innovation",
      type: "webinars",
      status: "done",
      shortDesc:
        "Learn how pressure and challenges can unlock growth and innovation.",
      longDesc:
        "Participants discovered how challenges and pressure can unlock hidden potential and spark innovation. The session offered practical strategies for using adversity as a catalyst for growth and meaningful impact.",
      outcomes: [
        "Embracing pressure as a tool for personal growth",
        "Turning struggles into innovation and opportunities",
        "Leading effectively in challenging situations",
      ],
      meta: { duration: "1,5 hour", format: "Webinar", participants: "25" },
    },
    {
      slug: "introduction-to-programming",
      title: "Introduction to Programming",
      type: "webinars",
      status: "done",
      shortDesc:
        "A beginner-friendly start to coding fundamentals and core concepts.",
      longDesc:
        "Curious about coding but not sure where to begin? This webinar introduced the basics of programming and foundational concepts, helping participants take their first steps on a coding journey.",
      outcomes: [
        "Introduction to programming languages and core concepts",
        "Understanding the building blocks of coding",
        "First steps to start learning programming",
      ],
      meta: { duration: "1 hour", format: "Webinar", participants: "40" },
    },
    {
      slug: "uwc-colleges-info",
      title: "Informative Webinar About UWC Colleges",
      type: "webinars",
      status: "done",
      shortDesc:
        "Learn about UWC, how to apply, and how to write stronger essays.",
      longDesc:
        "This webinar provided insights into the United World Colleges (UWC) system, including application guidance, essay tips, and understanding UWC’s mission and values. Over 100 attendees were guided through the selection process and expectations.",
      outcomes: [
        "What UWC Colleges are and their global impact",
        "Application tips and how to craft a standout essay",
        "Insights into UWC values and the selection process",
      ],
      meta: { duration: "1,5 hour", format: "Webinar", participants: "100+" },
    },
    {
      slug: "social-media-digital-safety",
      title: "How to Protect Ourselves on Social Media (Digital World)",
      type: "webinars",
      status: "done",
      shortDesc: "Practical privacy and security tips to stay safe online.",
      longDesc:
        "Participants learned strategies for protecting privacy and security online, including securing accounts, recognizing digital risks, and protecting personal information and identity in the digital world.",
      outcomes: [
        "Tips for securing social media profiles",
        "How to recognize and avoid online threats",
        "Ways to protect personal information and digital identity",
      ],
      meta: { duration: "1,5 hour", format: "Webinar", participants: "30+" },
    },
    {
      slug: "cybersecurity-workshop",
      title: "Cybersecurity Workshop",
      type: "webinars",
      status: "done",
      shortDesc:
        "An intensive workshop on threats, best practices, and daily cybersecurity tools.",
      longDesc:
        "This intensive 4-day workshop provided participants with essential knowledge to protect themselves in the digital age. Topics included common online threats, best practices, and practical tools to secure personal data and accounts.",
      outcomes: [
        "Understanding common online threats and prevention",
        "Best practices for protecting personal data and accounts",
        "Practical tools for daily cybersecurity",
      ],
      meta: { duration: "4 days", format: "Workshop", participants: "50+" },
    },

    //  Completed Classes (updated counts + missing classes added)
    {
      slug: "english-a1",
      title: "English A1",
      type: "classes",
      status: "done",
      shortDesc: "Beginner level for basic conversation and vocabulary.",
      longDesc:
        "English A1 focused on core vocabulary, everyday conversations, and beginner grammar. Listening and speaking practice were included regularly.",
      outcomes: [
        "Core vocabulary",
        "Everyday conversation",
        "Beginner grammar",
      ],
      meta: {
        duration: "4 weeks",
        level: "A1",
        format: "Class",
        students: "20",
      },
    },
    {
      slug: "english-a2",
      title: "English A2",
      type: "classes",
      status: "done",
      shortDesc: "Strengthen grammar and everyday conversation.",
      longDesc:
        "English A2 improved speaking and reading comprehension while practicing key A2 grammar topics.",
      outcomes: [
        "Stronger conversation",
        "Better comprehension",
        "A2 grammar practice",
      ],
      meta: {
        duration: "4 weeks",
        level: "A2",
        format: "Class",
        students: "15",
      },
    },
    {
      slug: "english-b1",
      title: "English B1",
      type: "classes",
      status: "done",
      shortDesc:
        "Intermediate English to build fluency and practical communication.",
      longDesc:
        "English B1 focused on strengthening fluency, expanding vocabulary, improving comprehension, and building confidence in real-life communication through regular practice.",
      outcomes: [
        "Improved fluency",
        "Expanded vocabulary",
        "Stronger reading & listening",
      ],
      meta: {
        duration: "6 weeks",
        level: "B1",
        format: "Class",
        students: "30",
      },
    },
    {
      slug: "english-b2",
      title: "English B2",
      type: "classes",
      status: "done",
      shortDesc: "Advanced level for stronger speaking and writing.",
      longDesc:
        "At B2 level, the focus was fluency, writing, and understanding more complex texts. Regular assignments and practice activities supported progress.",
      outcomes: [
        "More fluent speaking",
        "Improved writing",
        "Advanced reading comprehension",
      ],
      meta: {
        duration: "6 weeks",
        level: "B2",
        format: "Class",
        students: "35",
      },
    },
    {
      slug: "german-a1",
      title: "German A1",
      type: "classes",
      status: "done",
      shortDesc:
        "German A1 fundamentals for beginners: vocabulary, grammar, and everyday conversation.",
      longDesc:
        "German A1 covered core vocabulary, basic grammar structures, and beginner communication skills through guided practice and structured lessons.",
      outcomes: [
        "German basics & vocabulary",
        "Beginner grammar",
        "Everyday speaking practice",
      ],
      meta: {
        duration: "12 weeks",
        level: "A1",
        format: "Class",
        students: "15",
      },
    },
    {
      slug: "public-speaking",
      title: "Public Speaking Class",
      type: "classes",
      status: "done",
      shortDesc:
        "Build confident speaking skills and communicate with clarity.",
      longDesc:
        "This class helped participants improve confidence, message structure, and delivery through practice, feedback, and real speaking exercises.",
      outcomes: [
        "More confidence",
        "Clearer speaking structure",
        "Practice with feedback",
      ],
      meta: {
        duration: "4 weeks",
        level: "General",
        format: "Class",
        students: "30",
      },
    },
    {
      slug: "special-speaking",
      title: "Special Speaking Class",
      type: "classes",
      status: "done",
      shortDesc: "Improve speaking skills, confidence, and presentation.",
      longDesc:
        "This course focused on public speaking, presentation structure, and effective communication. Through practical exercises, short talks, and structured feedback, participants improved confidence and speaking ability.",
      outcomes: [
        "Increased confidence in speaking",
        "Improved presentation structure and delivery",
        "Hands-on practice with feedback",
      ],
      meta: {
        duration: "4 weeks",
        level: "General",
        format: "In-person / Online",
        students: "80",
      },
    },
    {
      slug: "photography",
      title: "Photography Class",
      type: "classes",
      status: "done",
      shortDesc:
        "Basics of photography, composition, and using a camera/mobile.",
      longDesc:
        "This class covered photography fundamentals (light, framing, angles, composition). Participants completed practice tasks and reviewed results with the instructor.",
      outcomes: [
        "Framing & lighting basics",
        "Project-based practice",
        "Stronger artistic perspective",
      ],
      meta: {
        duration: "4 weeks",
        level: "Beginner",
        format: "In-person / Online",
        students: "50",
      },
    },
    //  Completed Contests
    {
      slug: "painting-contest",
      title: "Painting Contest",
      type: "contests",
      status: "done",
      shortDesc:
        "A creativity-focused contest celebrating artistic expression.",
      longDesc:
        "NavaRise contests encourage participants to showcase their talents while promoting creativity, confidence, and personal growth through friendly competition.",
      outcomes: [
        "Creativity & self-expression",
        "Confidence-building",
        "Celebrating participant achievement",
      ],
      meta: { participants: "30" },
    },
    {
      slug: "writing-contest",
      title: "Writing Contest",
      type: "contests",
      status: "done",
      shortDesc:
        "A contest to inspire storytelling and strong written expression.",
      longDesc:
        "Participants showcased their writing skills and creativity through a structured competition designed to motivate growth and celebrate achievements.",
      outcomes: [
        "Stronger writing practice",
        "Creative thinking",
        "Recognition of effort and talent",
      ],
      meta: { participants: "10" },
    },
    {
      slug: "photography-contest",
      title: "Photography Contest",
      type: "contests",
      status: "done",
      shortDesc:
        "A contest to highlight photography skills and creative vision.",
      longDesc:
        "Participants competed by submitting photography work that demonstrated creativity, technique, and storytelling through images.",
      outcomes: [
        "Creative photography practice",
        "Improved visual storytelling",
        "Showcasing talent",
      ],
      meta: { participants: "15" },
    },

    //  Upcoming (go to Google Form)
    {
      slug: "Microsoft Word",
      title: "ICDL(Microsoft word)",
      type: "classes",
      status: "soon",
      shortDesc: "Gain skill in making professional documents in MS Word",
      form: "MSWord",
    },
    {
      slug: "Family and Freinds",
      title: "Family and Freinds(Starter 1,2,3)",
      type: "classes",
      status: "soon",
      shortDesc: "start your English Language Jurney",
      form: "familyand",
    },
    {
      slug: "QSkill for Success",
      title: "QSkill for Success(Intro,one,two,three",
      type: "classes",
      status: "soon",
      shortDesc: "Level Up your English with Our English classes",
      form: "QSkill",
    },
  ],
  /* teachers */

  team: {
    leadership: [
      {
        id: "founder-1",
        roleKey: "founder",
        roleLabel: "Founder",
        name: "Sohila Ahmadi",
        academicPosition: "Teacher",
        education: "Student",
        expertise: ["Education", "Empowerment", "Management"],
        contribution: "Founded NavaRise and designed the program roadmap.",
        bio: "Short introduction text. (Replace later)",
        photo: "../images/soheee.jpg", // optional: "assets/images/founder.jpg"
        links: { linkedin: "#", email: "mailto:contact.navarise@gmail.com" },
      },
      {
        id: "ceo-1",
        roleKey: "ceo",
        roleLabel: "CEO",
        name: "CEO Name",
        academicPosition: "Academic / Professional Title",
        education: "Field / University",
        expertise: ["Leadership", "Planning", "Communications"],
        contribution:
          "Leads program growth and coordinates instructors and events.",
        bio: "Short CEO bio. (Replace later)",
        photo: "",
        links: { linkedin: "#", email: "mailto:navarise@gmail.com" },
      },
      {
        id: "assistant-1",
        roleKey: "assistant",
        roleLabel: "Assistant",
        name: "Assistant Name",
        academicPosition: "Role / Responsibility",
        education: "Field / University",
        expertise: ["Coordination", "Support", "Operations"],
        contribution: "Supports classes and communicates with participants.",
        bio: "Short introduction text. (Replace later)",
        photo: "",
        links: { linkedin: "#", email: "mailto:navarise@gmail.com" },
      },
    ],

    teachers: [
      {
        id: "t-1",
        roleKey: "teacher",
        roleLabel: "Instructor",
        name: "Ahmad Hussaini",
        academicPosition: "Softwear Developer",
        education: "Bachlor of Computer Science",
        expertise: ["Web Development", "Leadership", "Security Specialist"],
        contribution: "Taught Web Development",
        bio: "Ahmad Hussaini is young dedicated Softwear Engineer, he was graduated from Kabul Polythenin University",
        photo: "../images/ahmad.jpg",
        links: { linkedin: "https", email: "4hmad.aba@gmail.com" },
      },
      {
        id: "t-2",
        roleKey: "teacher",
        roleLabel: "Instructor",
        name: "Instructor Name 2",
        academicPosition: "Information Security Specialist",
        education: "IT / Cybersecurity",
        expertise: ["Cybersecurity", "Awareness"],
        contribution: "Hosted the webinar “How to Avoid Getting Hacked”",
        bio: "Short introduction. (Optional)",
        photo: "",
        links: { linkedin: "#", email: "#" },
      },
      // Add more instructors here...
    ],
  },

  /* gallary */
  gallery: [
    {
      id: "g-1",
      title: "Special Speaking Class",
      caption: "Practice session and student presentations.",
      type: "classes", // classes | webinars | events | students
      src: "../images/",
      alt: "Students in a speaking class",
    },
    {
      id: "g-2",
      title: "Photography Class",
      caption: "Composition exercise and feedback session.",
      type: "classes",
      src: "images/nava1.jpg",
      alt: "Photography training session",
    },
    {
      id: "g-3",
      title: "Webinar: How to Avoid Getting Hacked",
      caption: "Digital safety tips and Q&A.",
      type: "webinars",
      src: "images/nava.jpg",
      alt: "Webinar session screenshot",
    },
    {
      id: "g-4",
      title: "Teofl 2026 Version",
      caption: "What are the main differnces of the new version",
      type: "webinars",
      src: "images/nava.jpg",
      alt: "Webinar session screenshot",
    },
  ],
  /* articales */
  articles: [
    {
      slug: "how-to-start-web-development",
      title: "How to Start Web Development: A Beginner’s Roadmap",
      category: "education",
      categoryLabel: "Web Development",
      author: "Ahmad Ali",
      date: "2026-02-05",
      readTime: "5 min",
      excerpt:
        "A practical beginner’s guide to starting web development, from understanding the basics to building your first real project.",
      cover: "../images/web.png",
      content: [
        {
          type: "p",
          text: "Web development is one of the most accessible and in-demand skills today. Whether you want to build websites, create web apps, or start a tech career, learning web development opens many doors. The good news is that you don’t need a computer science degree to begin—just curiosity, consistency, and the right roadmap.",
        },
        {
          type: "h2",
          text: "1) Understand what web development really is",
        },
        {
          type: "p",
          text: "Web development is the process of building websites and web applications that run in a browser. It is commonly divided into frontend (what users see), backend (how data and logic work), and full-stack (both). As a beginner, you should start with frontend development because it helps you see results quickly and stay motivated.",
        },
        {
          type: "h2",
          text: "2) Learn the three core technologies first",
        },
        {
          type: "ul",
          items: [
            "HTML – the structure of a webpage (headings, paragraphs, images, links)",
            "CSS – the styling and layout (colors, spacing, responsiveness)",
            "JavaScript – the behavior and interactivity (menus, forms, data loading)",
          ],
        },
        {
          type: "p",
          text: "These three technologies are the foundation of the web. Mastering them gives you the confidence to understand frameworks and tools later without feeling lost.",
        },
        {
          type: "h2",
          text: "3) Practice by building small projects",
        },
        {
          type: "p",
          text: "Watching tutorials is helpful, but real learning happens when you build. Start with simple projects like a personal profile page, a landing page, or a to-do list. Focus on finishing small projects instead of chasing perfection.",
        },
        {
          type: "h2",
          text: "4) Learn how to use Git and GitHub",
        },
        {
          type: "p",
          text: "Git helps you track changes in your code, and GitHub lets you store and share your projects online. These tools are essential for collaboration and deployment, and they are widely used by professional developers.",
        },
        {
          type: "h2",
          text: "5) Deploy your projects and keep improving",
        },
        {
          type: "p",
          text: "Publishing your projects using platforms like Netlify or Vercel helps you understand how real websites work. More importantly, it gives you confidence and something to show others. Web development is a journey—keep learning, keep building, and don’t be afraid to make mistakes.",
        },
        {
          type: "p",
          text: "Starting web development may feel overwhelming at first, but every experienced developer once started where you are now. With patience and consistent practice, you can turn simple web pages into powerful, real-world applications.",
        },
      ],
    },
    {
      slug: "how-to-become-a-good-reader",
      title:
        "How to Become a Good Reader: Build Focus, Understanding, and Habit",
      category: "life skill",
      categoryLabel: "Personal Development",
      author: "Ahmad Ali",
      date: "2026-01-15",
      readTime: "4 min",
      excerpt:
        "Learn how to read with better focus, understand more deeply, and turn reading into a lifelong habit.",
      cover: "../images/read.png",
      content: [
        {
          type: "p",
          text: "Reading is not just about finishing pages; it is about understanding ideas, expanding perspective, and training the mind to think clearly. Many people say they want to read more but struggle with focus, consistency, or comprehension. Becoming a good reader is a skill that anyone can develop with the right approach.",
        },
        {
          type: "h2",
          text: "1) Read with a clear purpose",
        },
        {
          type: "p",
          text: "Before you start reading, ask yourself why you are reading this book or article. Are you reading to learn, to relax, or to solve a problem? Having a clear purpose helps your brain stay focused and improves comprehension.",
        },
        {
          type: "h2",
          text: "2) Start small and read consistently",
        },
        {
          type: "p",
          text: "Many people fail at reading because they set unrealistic goals. Start with just 10 to 15 minutes a day. Consistency matters more than speed or volume. Over time, your focus and reading stamina will naturally improve.",
        },
        {
          type: "h2",
          text: "3) Remove distractions while reading",
        },
        {
          type: "p",
          text: "Good reading requires attention. Put your phone away, turn off notifications, and choose a quiet environment. Even small distractions can break concentration and reduce understanding.",
        },
        {
          type: "h2",
          text: "4) Engage with what you read",
        },
        {
          type: "p",
          text: "Active reading helps you remember and understand better. Highlight key ideas, take short notes, or pause to reflect on what you just read. Asking questions like 'What is the main idea here?' turns reading into a thinking process.",
        },
        {
          type: "h2",
          text: "5) Choose the right material",
        },
        {
          type: "p",
          text: "Reading becomes easier and more enjoyable when the material matches your level and interests. Start with topics you enjoy, then gradually challenge yourself with more complex books or articles.",
        },
        {
          type: "p",
          text: "Becoming a good reader is a long-term habit, not a quick trick. With patience and daily practice, reading can become one of the most powerful tools for learning, creativity, and personal growth.",
        },
      ],
    },

    /* {
    slug: "digital-safety-basics",
    title: "How to Avoid Getting Hacked Online (A Simple Guide)",
    category: "digital",
    categoryLabel: "Digital Literacy",
    author: "NavaRise Team",
    date: "2026-01-01",
    readTime: "5 min",
    excerpt: "Practical tips for avoiding phishing, using strong passwords, and staying safe on social media.",
    cover: "assets/articles/1.jpg",
    content: [
      { type: "p", text: "Digital security starts with small habits: strong passwords, two-factor authentication, and being careful with links." },
      { type: "h2", text: "1) Create a strong password" },
      { type: "ul", items: ["At least 12 characters", "Use a mix of uppercase/lowercase letters, numbers, and symbols", "Use a different password for each service"] },
      { type: "h2", text: "2) Recognize phishing" },
      { type: "p", text: "If a message says “act now” or “your account will be closed,” it may be phishing. Check the link carefully before clicking." },
      { type: "h2", text: "3) Turn on two-factor authentication" },
      { type: "p", text: "Enable 2FA so even if your password is leaked, your account is much harder to access." }
    ]
  }, */
    /*   {
    slug: "how-to-learn-english",
    title: "How to Learn English More Effectively",
    category: "language",
    categoryLabel: "Language",
    author: "Volunteer Teacher",
    date: "2026-01-10",
    readTime: "6 min",
    excerpt: "Simple daily habits to improve vocabulary, listening, and speaking with steady practice.",
    cover: "assets/articles/2.jpg",
    content: [
      { type: "p", text: "Consistency matters more than intensity. Practicing 20 minutes every day usually works better than studying 3 hours once a week." },
      { type: "h2", text: "Vocabulary practice" },
      { type: "ul", items: ["Flashcards", "Make sentences with new words", "Spaced repetition (review over time)"] },
      { type: "h2", text: "Speaking" },
      { type: "p", text: "Speak a little every day. Even 5 minutes with a friend—or recording yourself—can be very helpful." }
    ]
  }, */
    /* {
    slug: "study-habits",
    title: "Study Habits for Students",
    category: "education",
    categoryLabel: "Education",
    author: "NavaRise Team",
    date: "2026-01-15",
    readTime: "4 min",
    excerpt: "How to build a study plan and progress without stress.",
    cover: "assets/articles/3.jpg",
    content: [
      { type: "p", text: "Set small, achievable goals. Small wins build motivation and help you stay consistent." },
      { type: "h2", text: "The 25-minute method (Pomodoro)" },
      { type: "p", text: "Study for 25 minutes, then take a 5-minute break. After 4 rounds, take a 15-minute break." }
    ]
  } */
  ],
};

