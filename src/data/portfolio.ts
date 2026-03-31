export type NavItem = {
  id: string;
  label: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  tags: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  tools: string[];
  githubUrl?: string;
};

export const profile = {
  name: 'Shievram Raja Rao',
  title: 'Data Analyst',
  intro:
    'Builds value from data through analytics, ETL workflows, reporting, and practical problem-solving across technical and business environments.',
  email: 'svram94@gmail.com',
  phone: '0143057391',
  linkedin: 'https://www.linkedin.com/in/shievram-raja-rao-38a20119b/',
  github: 'https://github.com/Shievram',
  location: 'Malaysia',
  languages: ['English', 'Bahasa Melayu', 'Tamil'],
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export const aboutParagraphs: string[] = [
  'Passionate and driven in data analysis, with experience delivering business value through analytical functions, data retrieval methods, and structured reporting workflows.',
  'Current work focuses on data warehouse support, big data initiatives, source integration, data modeling, technical documentation, and ETL development in production-oriented environments.',
  'Previous experience in product development and research created a strong foundation in troubleshooting, optimization, quality control, and practical execution. That combination brings a grounded approach to data work: understand the requirement, structure the data, improve quality, and make the output useful for decision-making.',
];

export const experience: ExperienceItem[] = [
  {
    role: 'Data Analyst',
    company: 'Datamicron Systems Sdn Bhd',
    period: 'Aug 2024 — Present',
    points: [
      'Support the design, development, and deployment of data warehouse and big data initiatives.',
      'Extract and integrate data from multiple sources into centralized data lake environments.',
      'Assist in developing data models and structured business trees for reporting and dashboard preparation.',
      'Participate in user requirement studies, technical documentation, and ETL development.',
    ],
    tags: ['Data Warehouse', 'Big Data', 'ETL', 'Data Modeling'],
  },
  {
    role: 'Product Development Engineer',
    company: 'Astrong Paint Sdn Bhd',
    period: 'Apr 2023 — Jun 2024',
    location: 'Shah Alam',
    points: [
      'Performed product color matching to meet customer requirements.',
      'Prepared sample colors for customers and validated product quality against target specifications.',
      'Supported technical service activities and product-related troubleshooting.',
    ],
    tags: ['Product Development', 'Quality Control', 'Technical Service'],
  },
  {
    role: 'Research and Development Executive',
    company: 'Top Glove Bhd',
    period: 'Mar 2020 — Apr 2023',
    location: 'Shah Alam',
    points: [
      'Troubleshot latex formulations to meet ASTM D712, EN455, food grade, and FDA-related requirements.',
      'Adjusted glove colors to achieve target customer readings and product expectations.',
      'Designed and developed innovative nitrile and natural rubber glove products.',
      'Worked on formulation optimization, chemical evaluation, cost-quality balancing, and technical support for production.',
    ],
    tags: ['R&D', 'Optimization', 'Quality', 'Technical Support'],
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'SSIS ETL Pipeline for Fraud Detection Data',
    summary:
      'Designed and built an end-to-end ETL pipeline in SQL Server Integration Services using Visual Studio, covering staging, transformation, and data warehouse loading for fraud detection-related credit card payment datasets. The implementation included dimension loading for merchant category and merchant data, fact loading for transactions, merge joins to enforce foreign key relationships, and structured data flow tasks to maintain referential integrity for reporting and analytics.',
    tools: ['SSIS', 'SQL Server', 'ETL', 'Data Warehouse', 'Visual Studio', 'Power BI'],
    githubUrl: 'https://github.com/Shievram/portfolio/blob/main/Fraud%20detection/ETL_Transactions/ETL_Transactions.sln',
  },
  {
    title: 'HR Survey Analysis',
    summary:
      'Explored employee exit survey data to surface workforce trends, improve interpretability of employee feedback, and support decision-making with structured analysis.',
    tools: ['Python', 'Pandas', 'Data Cleaning', 'EDA'],
    githubUrl: 'https://github.com/Shievram/portfolio/blob/main/employee_exit_survey.ipynb',
  },
  {
    title: 'eBay Car Sales Analysis',
    summary:
      'Analyzed used car listing data to identify pricing patterns, clean inconsistent records, and derive insights from marketplace-driven vehicle attributes.',
    tools: ['Python', 'Data Wrangling', 'Exploration', 'Notebook'],
    githubUrl: 'https://github.com/Shievram/portfolio/blob/main/ebay-car-sales-data.ipynb',
  },
  {
    title: 'Traffic Indicators Analysis',
    summary:
      'Worked with traffic-related indicators to examine performance patterns, clean the dataset, and extract useful signals from public-style tabular data.',
    tools: ['Python', 'Analysis', 'Data Quality', 'Jupyter'],
    githubUrl: 'https://github.com/Shievram/portfolio/blob/main/traffic_indicators.ipynb',
  },
];

export const skills: string[] = [
  'Data Analysis',
  'Data Visualization',
  'SQL',
  'Data Validation',
  'Data Cleaning',
  'SQL Databases',
  'Data Modeling',
  'ETL Processes',
  'Power BI',
  'Python',
  'Pandas',
  'Technical Documentation',
];

export type CertificationItem = {
  title: string;
  url: string;
};

export const certifications: CertificationItem[] = [
  {
    title: 'Introduction to Python',
    url: 'https://app.dataquest.io/view_cert/S3IN4TIBF81HWWKK8FSI',
  },
  {
    title: 'Intermediate Python and Pandas',
    url: 'https://app.dataquest.io/view_cert/U320FC7LM5CZYXUPU7UB',
  },
  {
    title: 'Data Cleaning in Python',
    url: 'https://app.dataquest.io/view_cert/XRGIX05JMZYXG9DSY6FU',
  },
  {
    title: 'Working with Data Sources using SQL',
    url: 'https://app.dataquest.io/view_cert/6Y76C4K3H41QLQGUUNE2',
  },
  {
    title: 'Probability and Statistics',
    url: 'https://app.dataquest.io/view_cert/ZSN5WA9IINMK3WK3216H',
  },
  {
    title: 'Introduction to Data Analysis with Excel',
    url: 'https://app.dataquest.io/view_cert/EPZ4PGO4O0KZ8T97M35M',
  },
  {
    title: 'Fundamentals of SQL',
    url: 'https://app.dataquest.io/view_cert/MT4G80T63EE7FQCR5CUY',
  },
  {
    title: 'Analyzing Data with Microsoft Power BI',
    url: 'https://app.dataquest.io/view_cert/ZQDI1Z1P58UMCYRK1KES',
  },
];
