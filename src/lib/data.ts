export const skillsData = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'StyledComponents', 'React Native'],
  backend: ['Node.js', 'NestJS', 'Express', 'GraphQL', 'API RESTful', 'WebSockets'],
  databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Oracle / PL-SQL'],
  devops: ['AWS', 'Docker', 'Serverless', 'Jest', 'Cypress', 'Git'],
  ai: ['OpenAI', 'Claude / Copilot', 'ElevenLabs', 'Twilio', 'Deepgram'],
}

export const experienceData = [
  {
    period: '11/2024 — hoy',
    company: 'Darwoft',
    typeKey: 'type1' as const,
    roleKey: 'role1' as const,
    tags: ['React.js', 'Next.js', 'Node.js', 'MySQL', 'Oracle', 'PL/SQL', 'Jest', 'Cypress', 'AWS'],
  },
  {
    period: '12/2023 — 12/2024',
    company: 'Kenility LLC.',
    typeKey: 'type2' as const,
    roleKey: 'role2' as const,
    tags: ['Node.js', 'NestJS', 'MongoDB', 'Redis', 'Twilio', 'OpenAI', 'WebSockets', 'AWS S3'],
  },
  {
    period: '02/2022 — 12/2023',
    company: 'Caramel Point',
    typeKey: 'type3' as const,
    roleKey: 'role3' as const,
    tags: ['React', 'Next.js', 'NestJS', 'PostgreSQL', 'GraphQL', 'Docker', 'Serverless', 'AWS Lambdas', 'React Native', 'StyledComponents', 'Jest', 'Express'],
  },
]

export const projectsData = [
  {
    name: 'Jarvis',
    roleKey: 'roleFs' as const,
    descKey: 'p1desc' as const,
    tags: ['Next.js', 'NestJS', 'Postgres', 'Docker', 'AWS', 'JWT'],
  },
  {
    name: 'AIVA',
    roleKey: 'roleBack' as const,
    descKey: 'p2desc' as const,
    tags: ['NestJS', 'MongoDB', 'OpenAI', 'ElevenLabs', 'Deepgram'],
  },
  {
    name: 'Bricket',
    roleKey: 'roleFs' as const,
    descKey: 'p3desc' as const,
    tags: ['Next.js', 'GraphQL', 'Polygon', 'Solidity', 'Postgres'],
  },
  {
    name: 'Claro',
    roleKey: 'roleFront' as const,
    descKey: 'p4desc' as const,
    tags: ['React.js', 'Next.js', 'MySQL', 'Oracle', 'PL/SQL'],
  },
  {
    name: 'Their Story',
    roleKey: 'roleFront' as const,
    descKey: 'p5desc' as const,
    tags: ['React', 'Twilio Video', 'MongoDB', 'Docker', 'Cypress'],
  },
  {
    name: 'AwareOps',
    roleKey: 'roleFront' as const,
    descKey: 'p6desc' as const,
    tags: ['Next.js', 'Node.js', 'Firebase', 'Postmark'],
  },
]

export function getYearsExp(): string {
  const start = new Date(2022, 1, 1)
  const now = new Date()
  const years = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25))
  return `${years}+`
}
