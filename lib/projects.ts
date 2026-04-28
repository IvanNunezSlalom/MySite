import { Project } from './types';

// TODO: Replace placeholder images with actual project screenshots
// Image paths should be: /projects/[project-slug]/hero.jpg and thumbnail.jpg

export const projects: Project[] = [
  {
    id: '1',
    slug: 'general-mills-champions',
    title: 'Champions Evolution',
    client: 'General Mills',
    subtitle: 'ServiceNow Employee Center Migration',
    category: ['Platform Design', 'UX Research & Strategy'],
    featured: true,
    year: '2024',
    heroImage: '/projects/general-mills/hero.jpg',
    thumbnailImage: '/projects/general-mills/thumbnail.jpg',
    color: '#0C62FB',

    overview:
      'ServiceNow Employee Center migration to create a brand-aligned, one-stop digital front door--positioning General Mills to boost employee engagement, streamline self-service, and scale operational efficiency.',

    why: 'Employees spent valuable time hunting through a fragmented "Champions" intranet, outdated pages, and scattered links--hurting engagement and productivity. With a parallel Sitecore upgrade under way, General Mills saw an opportunity to re-platform Champions onto ServiceNow Employee Center and Now Mobile, creating a single, brand-aligned front door that scales and centralizes content, services, and search.',

    what: 'Ran stakeholder interviews and six immersive workshops (Employee Center, EC Widgets, Content Management, Agentic AI, UX/UI, Now Mobile) to capture needs, blockers, and success criteria. Defined employee personas and mapped current-state journeys to surface pain points and prioritize features. Leveraged the EC Pro Figma kit to craft brand-aligned wireframes and high-fidelity mock-ups. Designed mobile-first patterns and branding guidelines for Now Mobile.',

    wow: 'General Mills now has a clear blueprint and interactive prototype for a unified, "one-stop-shop" Employee Center--positioned to cut search time, boost content accuracy, and elevate the Champions brand across web and mobile.',

    solutions:
      'ServiceNow Employee Center UX strategy, design system, and prioritized backlog for Champions re-platforming.',

    deliverables: [
      'Current- vs. future-state assessment & stakeholder map',
      'Five employee personas',
      'Wireframes + high-fidelity Figma designs (web & mobile)',
      'EC widget functional specs & future-state documentation',
    ],

    tags: [
      'ServiceNow',
      'Employee Center',
      'UX Strategy',
      'Design System',
      'Mobile Design',
    ],
  },

  {
    id: '2',
    slug: 'sourcewell-cx-model',
    title: 'CX Operating Model Integration',
    client: 'Sourcewell',
    subtitle: 'Enterprise CX vision, org design, and operating model',
    category: ['CX Strategy', 'Service Design'],
    featured: true,
    year: '2024',
    heroImage: '/projects/sourcewell/hero.jpg',
    thumbnailImage: '/projects/sourcewell/thumbnail.jpg',
    color: '#00FF7F',

    overview:
      'Integrated CX operating model to unify vision, organization, and governance--positioning Sourcewell to deliver consistent, customer-centric experiences at scale.',

    why: 'Managing agencies and suppliers interactions separately caused inconsistent experiences and limited Sourcewell\'s ability to use customer insights, risking delays and missed growth opportunities.',

    what: 'Led a CX & Digital Vision workshop, conducted interviews and process reviews, modeled future CX structures, defined a phased CX organization, created governance and processes, and developed a multi-year roadmap to embed customer-centricity across teams.',

    wow: 'Sourcewell now has a clear CX vision, an organizational home for a dedicated CX team, and a practical playbook to operationalize customer-centricity--positioning the organization to amplify member value and supplier partnerships.',

    solutions:
      'Enterprise CX vision, org design, and operating model with phased scalability.',

    deliverables: [
      'Sourcewell CX vision statement',
      'Future CX organization model with roles',
      'CX team and stakeholder RACI chart',
      'Governance framework and working guidelines',
      'Complete CX process flows',
      'Scaling plan and long-term roadmap',
    ],

    tags: [
      'CX Strategy',
      'Operating Model',
      'Organizational Design',
      'Service Design',
    ],
  },

  {
    id: '3',
    slug: 'boston-scientific-tcar',
    title: 'TCAR Go-to-Market Activation',
    client: 'Boston Scientific',
    subtitle: 'GTM activation strategy for Enroute™ and TCAR adoption',
    category: ['UX Research & Strategy', 'Service Design'],
    featured: true,
    year: '2024',
    heroImage: '/projects/boston-scientific/hero.jpg',
    thumbnailImage: '/projects/boston-scientific/thumbnail.jpg',
    color: '#FF6B6B',

    overview:
      'Insight-driven GTM roadmap to overcome adoption barriers and accelerate Enroute™ TCAR growth among vascular surgeons.',

    why: 'After acquiring Silk Road Medical, Boston Scientific needed a quick, data-driven understanding of the TCAR market and a clear strategy to boost Enroute™ adoption among vascular surgeons amid rising competition and fragmented marketing efforts.',

    what: 'Conducted 12 interviews across departments to identify challenges, reviewed over 100 marketing materials, and led two brainstorming sessions. Identified eight key barriers to TCAR adoption and developed 41 activation ideas with six GTM programs. Created physician personas and adoption journey, then prioritized ideas based on impact and effort, linking them to existing or new content.',

    wow: 'BSC now holds a single, actionable view of the TCAR opportunity and a ranked backlog of market-ready activation ideas--enabling faster, more consistent engagement with vascular surgeons and strengthening Enroute\'s path to category leadership in 2025 and beyond.',

    solutions:
      'End-to-end GTM activation strategy and program concepts for Enroute™ and TCAR adoption.',

    deliverables: [
      'Physician personas and TCAR adoption overview',
      '41 activation ideas ranked by priority and effort',
      'Six program concepts with messaging examples',
      'Content inventory of SRM assets',
      'Summary report with findings and recommendations',
    ],

    tags: [
      'Go-to-Market Strategy',
      'Persona Development',
      'Journey Mapping',
      'Healthcare',
    ],
  },

  {
    id: '4',
    slug: 'ice-service-portal',
    title: 'Service Portal Enhancements',
    client: 'Intercontinental Exchange',
    subtitle: 'Salesforce Experience Cloud portal redesign',
    category: ['Platform Design', 'UX Research & Strategy'],
    featured: true,
    year: '2023',
    heroImage: '/projects/ice/hero.jpg',
    thumbnailImage: '/projects/ice/thumbnail.jpg',
    color: '#8B5CF6',

    overview:
      'Search-powered portal redesign to elevate self-service and streamline knowledge access on Salesforce Experience Cloud.',

    why: 'Intercontinental Exchange\'s (ICE) customer and partner portal had grown complex and harder to navigate, driving support calls and slowing self-service adoption. Users reported difficulty finding knowledge articles, inconsistent search results, and dated page designs--all of which impacted case-deflection goals and customer satisfaction.',

    what: 'Conducted stakeholder interviews, heuristic reviews, and analytics analysis to identify needs. Benchmarked peer portals to set usability goals. Created personas and top tasks to guide design. Developed information architecture, wireframes, and prototypes using LWCs and Coveo Quantic. Managed user stories and prioritization.',

    wow: 'ICE now owns a modern, search-centric service portal that surfaces answers fast, boosts self-service, and sets a measurable baseline for ongoing enhancements--without custom code bloat.',

    solutions:
      'Data-driven UX redesign, Salesforce Experience Cloud configuration, and Coveo Quantic search integration.',

    deliverables: [
      'User personas and key task matrix',
      'Information architecture, taxonomy, and search facets',
      'Wireframes, detailed screens, and interactive prototype',
      'Prioritized user-story backlog',
      'Configured Experience Cloud, Lightning Knowledge, and Service Cloud (MVP)',
    ],

    tags: [
      'Salesforce',
      'Experience Cloud',
      'Search UX',
      'Information Architecture',
    ],
  },

  {
    id: '5',
    slug: 'southwest-mfa',
    title: 'Enhanced Authentication for Rewards',
    client: 'Southwest Airlines',
    subtitle: 'Multi-factor authentication strategy',
    category: ['UX Research & Strategy', 'Service Design'],
    featured: false,
    year: '2022',
    heroImage: '/projects/southwest/hero.jpg',
    thumbnailImage: '/projects/southwest/thumbnail.jpg',
    color: '#FFD600',

    overview:
      'Southwest made it a priority to improve the security of its Rapid Rewards program to protect customers and the company against online threats.',

    why: 'Authenticating to Southwest Rapid Rewards was exclusively via username and password combination. This was not a very secured authentication method since passwords can be shared, guessed or lost. Also, this form of authentication was not scalable. Consequently, Southwest customers perceive the airline\'s technologies as obsolete and vulnerable.',

    what: 'We reviewed competitor\'s tactics to communicate the value of enhanced security, approach in guiding customers toward adoption, user interface for the authentication experience, and any other feature worth our attention. We collaborated with Southwest technologists to understand the existing security architecture and identity security platform partner offerings.',

    wow: 'Our strategy for MFA implementation for Rapid Rewards provided Southwest with a clear picture of the state of enhanced authentication amongst their competitors, principles to guide the solution, long-range and MVP options for MFA implementation with pros and cons, and a roadmap.',

    solutions:
      'A strategy with roadmap for MFA implementation for Southwest\'s Rapid Rewards.',

    deliverables: [
      'Competitive analysis with competition perceptual map',
      'Principles to guide the solution and configuration options with pros and cons',
      'MFA experience flows with authentication triggers',
      'MFA project roadmap',
    ],

    tags: ['Security', 'MFA', 'Authentication', 'Travel', 'Competitive Analysis'],
  },

  {
    id: '6',
    slug: 'mde-early-learning',
    title: 'Early Learning Scholarship Blueprint',
    client: 'Minnesota Department of Education',
    subtitle: 'Salesforce scholarship platform strategy',
    category: ['Platform Design', 'Government', 'UX Research & Strategy'],
    featured: false,
    year: '2023',
    heroImage: '/projects/mde/hero.jpg',
    thumbnailImage: '/projects/mde/thumbnail.jpg',
    color: '#00FF7F',

    overview:
      'Data-driven scholarship platform to simplify family access and streamline statewide funding on Salesforce.',

    why: 'Families most in need of high-quality early learning face a confusing, paper-heavy scholarship process with limited transparency and long cycle times. Administrators struggle with incomplete data, manual reviews, and fragmented funding oversight--hindering MDE\'s ability to direct dollars where they matter most.',

    what: 'Conducted assessment of application intake, fund allocation, and oversight across Area Administrators and public programs. Surveyed 5,000 families and administrators to identify issues and training needs. Led stakeholder interviews and workshops to define goals. Developed applicant personas and user journeys. Designed target architecture using DHS Salesforce and integrated with MDE\'s ELSA.',

    wow: 'MDE now holds a data-driven North Star vision and Salesforce-ready design that will transform a paper-bound scholarship system into a family-friendly digital hub--positioning the state to invest resources faster and more equitably in Minnesota\'s youngest learners.',

    solutions:
      'Early Learning Scholarship target-state architecture, process redesign, and implementation roadmap on Salesforce Experience Cloud.',

    deliverables: [
      'North Star vision and success metrics',
      'Stakeholder map and interview summary',
      'Survey design, deployment, and insights (families and administrators)',
      'Applicant personas and journey maps',
      'Salesforce Service Cloud UI designs',
    ],

    tags: [
      'Salesforce',
      'Government',
      'Education',
      'Service Design',
      'Survey Research',
    ],
  },

  {
    id: '7',
    slug: 'nebraska-ecids',
    title: 'Experience Direction for Data System',
    client: 'State of Nebraska',
    subtitle: 'Early Childhood Integrated Data System UX',
    category: ['Government', 'UX Research & Strategy'],
    featured: false,
    year: '2022',
    heroImage: '/projects/nebraska/hero.jpg',
    thumbnailImage: '/projects/nebraska/thumbnail.jpg',
    color: '#8B5CF6',

    overview:
      'Early Childhood Integrated Data System customers need quality data reports, dashboards and visualizations to quickly understand insights helping them make meaningful decisions.',

    why: 'The State of Nebraska envisions a community-based, mixed-delivery early childhood care and education system informed by an integrated data repository. Data sources for the repository are broad and the resulting data consumption experience must serve ever-growing and ever-changing use cases.',

    what: 'Given the massive stakeholder landscape, it was essential to understand their needs and constraints, identify commonalities, and align those with existing and future use cases for the data. We interviewed stakeholders to elicit user needs, brainstormed data input and output workflow, and prioritized use cases.',

    wow: 'Working closely with the data team to understand and follow the technical architecture, we identified actors, touch points and interactions. We defined features needed for visualizations, product personas with clear goals and pain points, and catalogued important design features to guide future visualizations and interactions keeping them ADA Compliant.',

    solutions:
      'ECIDS UX Guide to provide sustainable and scalable experience design direction to the ECIDS portal.',

    deliverables: [
      'Seven personas with priority map',
      'Experience flows for data consumers and contributors',
      'Site Architecture and Templates for the ECIDS portal',
      'UI Design Guide with Design Direction and Accessibility Considerations',
    ],

    tags: [
      'Government',
      'Data Visualization',
      'Accessibility',
      'Design System',
      'Education',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(
  category: string
): Project[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category.includes(category as any));
}
