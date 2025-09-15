export interface SanityJob {
    _id: string
    _type: 'job'
    title: string
    department: 'Engineering' | 'Design' | 'Projektmanagement' | 'Automatisierung' | 'Management'
    location: string
    type: 'Vollzeit' | 'Teilzeit' | 'Praktikum' | 'Werkstudent'
    experience?: string
    teamSize?: string
    description: string
    responsibilities: string[]
    requirements: string[]
    benefits: string[]
    isActive: boolean
    publishedAt: string
    orderRank: number
}

export interface FormattedJob {
    id: string
    title: string
    department: string
    location: string
    type: string
    experience: string
    teamSize: string
    description: string
    responsibilities: string[]
    requirements: string[]
    benefits: string[]
    posted: string
}