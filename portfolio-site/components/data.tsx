const userData = {
  githubUsername: 'jessraphael',
  name: 'Jess Raphael Ong',
  designation: 'Software Engineer',
  avatarUrl: '/avatar.jpg',
  profilePicture: '/profilepicture.jpg',
  email: 'jessraphaelong@gmail.com',
  address: 'Singapore',

  projects: [
    {
      title: 'Influx',
      link: 'https://docs.google.com/document/d/17xRpewrcj2JSt81VGPNlyalvMUNFHCWH/edit?usp=sharing&ouid=107737634951070718272&rtpof=true&sd=true',
      imgUrl: '/influx.gif',
      description:
        'Aims to enable efficient discovery and connections between brands and influencers. Key features developed includes profile and campaign management system, wallet management system for financial transactions, and issue management using Next.JS, React, Express.JS, Axios, Firebase, Stripe and Chakra UI',
    },
    {
      title: 'PayMeLahBot',
      link: 'https://paymelah.vercel.app/',
      imgUrl: '/paymepls.png',
      description:
        'A fully functional Telegram bot and Web App designed to help users simplify bill splitting collection among their friends by just scanning your receipt using OCR technology.',
    },
    {
      title: 'SeeTurtle',
      link: 'https://wth-seeturtle.vercel.app/',
      imgUrl: '/seeturtle.png',
      description:
        'As a team of 5, we designed a model of an AI-powered battery electric robotic turtle that aims to reduce oceanic waste by collecting microplastic crystals naked to the marine wildlife. We won the Best Design at the SUTD What The Hack 2021.',
    },

    {
      title: 'PigUp',
      link: 'https://docs.google.com/document/d/1m0Cy2z7Yo9B_47V0laykZBgTgaazrCAIgX2b-tlCdCs/edit#heading=h.z6ne0og04bp5',
      imgUrl: '/pigup.png',
      description:
        'Developed an android application with my pal Amos to help youths make wise financial decisions by tracking expenses in a fun way! Level up by logging spendings daily to earn coins used to feed your pet pig!',
    },
  ],
  about: {
    title:
      "I'm an aspiring software engineer passionate to better lives through innovation",
    description: [
      `I am a self-starter and enthusiast of the technology sphere and a firm believer of experiential learning.`,
      `As an adventurer, I am keen to broaden new insights and garner valuable lessons.
        I put forth my hopes of a fruitful journey as I embark on a journey to explore the world and meet like-minded friends!`,
    ],
  },

  experience: [
    {
      title: 'Software Engineer',
      location: 'Singapore',
      company: 'PayPal',
      year: 'Jan 2025 - Present',
      companyLink: 'https://www.paypal.com/sg/home',
      desc: [],
    },
    {
      title: 'Technology Analyst',
      location: 'Singapore',
      company: 'Bank of America Merrill Lynch',
      year: 'Jan 2023 - Jun 2023, Jul 2024 - Jan 2025',
      companyLink: 'https://www.bankofamerica.com/',
      desc: [
        'Drove risk and audit deliverables in Technology Risk including a major APAC data localization project (US$100mil) impacting entire bank landscape while ensuring compliance with data protection regulations through a comprehensive assessment and quality assurance of bank-wide internal applications. This involved identifying whether applications processed, transacted, gathered, or stored specific data, and implementing tailored remediation measures for different jurisdictions, mitigating risks.',
        'Proactively identified risks and control gaps, worked with stakeholders to understand the root cause to strengthen existing control gaps, and see issues to closure.',
        'Developed multiple web scraping ETL pipelines for different business use cases that predominantly extracts critical data from bank intranet sources before loading into an internal database. Technologies such as Node.js, HTML, JavaScript, Puppeteer.JS were used to conduct cleaning, transformation, and validation of up-to-date data, boosting team efficiency by 70%.',
      ],
    },
    {
      title: 'Investment Lead',
      location: 'Singapore',
      company: 'Protege Ventures',
      year: 'Aug 2021 - May 2024',
      companyLink: 'https://protege.vc/',
      desc: [
        'Proactively sourced investment opportunities by reaching out and cultivating relationships with start-up founders from Pre-seed to Series A stage, while efficiently managing the investment deal flow covering Deep Tech space as Team Lead.',
        'Proficiently sourced deals, thoroughly conducted due diligence and prepared numerous investment memos, resulting in the presentation of 2 high potential investment recommendations to the Managing Partners.',
        'This was coupled with comprehensive deal analysis that was presented to industry professionals from Sequoia Capital and Wavemaker Partners.',
      ],
    },
    {
      title: 'Software Development Director',
      location: 'Singapore',
      company: 'NUS Fintech Society',
      year: 'Aug 2022 - Aug 2023',
      companyLink: 'https://fintechsociety.comp.nus.edu.sg/',
      desc: [
        'Led a 50-member cross functional team to develop four software applications transforming core functionalities for the organisation while integrating industry best practices through a SCRUM framework.',
        'Full Stack Developer and Product Lead for the new Human Resource Management System (HRMS), while engineering new features such as attendance management, task assignments, automated account creations via CSV uploads, and an efficient membership recruitment system to handle overwhelming yearly applications. The application is currently used by 200 official members concurrently with key stakeholders: applicants, members and EXCOs.',
        'Successfully spearheaded the end-to-end process of product feature conceptualization, development, UAT and release of the HRMS application in production environment, while working closely with the key stakeholders to ensure their requirements and pain points are addressed.',
        'Tech Stack: Next.JS, React, Typescript, HTML, TailwindCSS, Firebase (Cloud FireStore), Chakra UI, tRPC, Jest.',
      ],
    },
    {
      title: 'Vice Chairperson',
      location: 'Singapore',
      company: 'Sheares Hall Developers Club (Sheares Web)',
      year: 'Aug 2022 - Aug 2023',
      companyLink: 'https://t.me/ShearesThriftSHopBot',
      desc: [
        'Led and oversaw the development of Hall Residential wide web and mobile applications such as the Sheares Intranet and the Hall Official Website.',
        'Developed a full-scale telegram thrift shop bot for hall residents (attained 94 users) to sell pre-loved items with full buyer and seller capabilities such as CRUD operations of listed items such as the viewing and acceptance of offers made on items.',
        'Tech Stack: Python, MongoDB, AWS S3.',
      ],
    },
    {
      title: 'Product Management Intern',
      location: 'Singapore',
      company: 'SeaMoney (Shopee)',
      year: 'May 2022 - Aug 2022',
      companyLink: 'https://www.seamoney.com/',
      desc: [
        'Regional Credit Business Team for Shopee and SeaMoney BNPL services, ShopeePayLater Philippines (PH) and Malaysia (MY).',
        'Collaborated with local office, business development, developers, UI designers on UI enhancements for ShopeePayLater MY and integration of the external funders (Seabank and CIMB) of ShopeePayLater PH.',
        'Spearheaded the UAT, live testing process for ShopeePayLater PH Open To All (OTA) instead of whitelisted users.',
      ],
    },
    {
      title: 'Software Engineering Intern',
      location: 'Singapore',
      company: 'Sentient.io',
      year: '2021',
      companyLink: 'https://www.sentient.io/en/',
      desc: [
        'Spearheaded and engineered frontend web feature components for ScribeRabbit Video Transcription Service Site such as (Register, Login, User Settings including billing and integration of multiple workspaces) using Vue.JS, Typescript, Quasar, Python.',
        'Integrated and tested FAST API endpoints of the backend systems.',
      ],
    },
  ],
  resumeUrl: '',

  socialLinks: {
    instagram: 'https://www.instagram.com/jxphxel_/',
    linkedin: 'https://www.linkedin.com/in/jessraphael/',
    github: 'https://github.com/jessraphael',
    facebook: 'https://www.facebook.com/jessongweihao',
  },
};

export default userData;
