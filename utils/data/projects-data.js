export const projectsData = [
    {
        id: 1,
        name: 'UC Davis EcoCAR',
        description: "Developed autonomous driving software in C++ using Test-Driven Development (TDD), behavior planning, and Model Predictive Control (MPC) to validate intersection navigation and adaptive cruise control, reducing system errors by 25% and improving real-time responsiveness by 20% through Software-in-the-Loop (SIL) testing. Engineered a real-time driver monitoring system using sensor fusion (camera + IMU), embedded systems design, and state management for attention tracking, enhancing overall system reliability and achieving ISO 26262-compliant functional safety improvements of 30%.",
        tools: ['Simulink', 'Matlab', 'JIRA', 'Confluence', 'RTMaps', 'Bitbucket', 'C++'],
        role: 'Systems Integration Engineer',
        code: 'https://ecocar.ucdavis.edu/',
        demo: '',
    },
    {
        id: 2,
        name: 'IT Vulnerability Tracker',
        description: "Built a Python-based automation pipeline that parses Tenable-generated CSV files and integrates with ServiceNow to automate vulnerability ticket creation, leveraging OpenAI’s LLM to generate remediation steps and enrich tickets with actionable insights. Reduced manual effort by 10+ hours per week and improved mean time to remediation (MTTR) by 25% through end-to-end automation of data ingestion, NLP-driven analysis, and incident tracking workflows.",
        tools: ['Python', 'Visual Studio', 'Github', 'argparse', 'csv', 'json', 'getpass', 'os', 'pathlib', 'smtplib', 'ssl', 'email.mime', 'Tenable Security Center API', 'COE IT Admin Tools API', 'UCD Network API', 'Office365 SMTP Server', 'Dynamic File Creation'],
        role: 'Software Programmer',
        code: 'https://github.com/hadibagdadii/vuln-tracker/tree/main/IENV-IT-vedant-working/Utilities/tenable',
        demo: '',
    },
    {
        id: 3,
        name: 'AI Car Evaluator',
        description: 'Engineered an end-to-end car rating system using Python and supervised machine learning, which processed 1,000+ listings and achieved over 85% accuracy by analyzing features such as price, safety, and capacity.',
        tools: ['Python', 'Visual Studio', 'Github', 'Flask', 'Pandas', 'NumPy', 'ONNX', 'skl2onnx', 'Interoperability', 'Dynamic Form Handling'],
        role: 'Full Stack Software Developer',
        code: 'https://github.com/ICFMentors/ML_app/tree/main',
        demo: '',
    },
    {
        id: 4,
        name: 'Minimalistic Productivity App',
        description: "Developed a productivity To-Do tracker web application using Python to help users manage and track tasks, resulting in improved task organization and user efficiency.",
        tools: ['Python', 'Visual Studio', 'Github', 'Flask', 'SQLAlchemy', 'Local Development', 'ORM Integration'],
        role: 'Full Stack Software Developer',
        code: 'https://github.com/hadibagdadii/ToDo',
        demo: '',
    },
    {
        id: 5,
        name: 'Food Bank Recipient Tracking',
        description: "Implemented a recipient management platform using C++ to digitize a non-profit's paper sign-up process, resulting in a 70% reduction in wait times and supporting over 2,000 recipients and 500 users annually.",
        tools: ['C++', 'Code::Blocks', 'GCC', 'CSV Files', 'wxWidgets', 'Form Handling', 'Object-Oriented Design'],
        code: '',
        role: 'Software Progammer',
        demo: '',
    }
    // {
    //     id: 1,
    //     name: 'Car Evaluator',
    //     description: "A python program that uses supervised machine learning to rate cars based on features like price, safety, capacity, etc. with 85%+ accuracy. Processed and analyzed data from over 1,000 car listings.",
    //     tools: [],
    //     role: '',
    //     code: '',
    //     demo: '',
    // }
    // {
    //     id: 1,
    //     name: 'AI Powered Financial App',
    //     description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
    //     tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
    //     role: 'Backend Developer',
    //     code: '',
    //     demo: '',
    // },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },