import { client } from '../sanityClient'
import type { FormattedJob } from '../types/job.types'

// Interface für Sanity Response
interface SanityJob {
    _id: string
    _type: 'job'
    title: string
    department: string
    location: string
    type: string
    experience?: string
    teamSize?: string
    description: string
    responsibilities: string[]
    requirements: string[]
    benefits: string[]
    isActive: boolean
    publishedAt: string
    orderRank?: number
}

interface JobServiceInterface {
    getActiveJobs(): Promise<FormattedJob[]>
    formatDate(dateString: string): string
    testConnection(): Promise<void>
}

export const jobService: JobServiceInterface = {
    async getActiveJobs(): Promise<FormattedJob[]> {
        console.log('🔍 Starting to fetch jobs from Sanity...');

        const query = `*[_type == "job" && isActive == true] | order(orderRank asc, publishedAt desc) {
      _id,
      title,
      department,
      location,
      type,
      experience,
      teamSize,
      description,
      responsibilities,
      requirements,
      benefits,
      publishedAt,
      isActive,
      orderRank
    }`

        try {
            console.log('📡 Executing query:', query);

            const jobs: SanityJob[] = await client.fetch(query)

            console.log(`✅ Received ${jobs.length} jobs from Sanity:`, jobs);

            if (jobs.length === 0) {
                console.warn('⚠️ No active jobs found. Check if:');
                console.warn('1. Jobs are published (not draft)');
                console.warn('2. isActive field is set to true');
                console.warn('3. Jobs exist in Sanity Studio');

                // Zusätzlicher Debug-Query
                const allJobs = await client.fetch(`*[_type == "job"]`);
                console.log(`📊 Total jobs in database (including inactive): ${allJobs.length}`, allJobs);
            }

            const formatted = jobs.map((job, index): FormattedJob => {
                console.log(`🔄 Formatting job ${index + 1}:`, job.title);

                return {
                    id: job._id,
                    title: job.title || 'Ohne Titel',
                    department: job.department || 'Keine Abteilung',
                    location: job.location || 'Standort nicht angegeben',
                    type: job.type || 'Vollzeit',
                    experience: job.experience || 'Nach Vereinbarung',
                    teamSize: job.teamSize || 'Flexibel',
                    description: job.description || 'Keine Beschreibung verfügbar',
                    responsibilities: job.responsibilities || [],
                    requirements: job.requirements || [],
                    benefits: job.benefits || [],
                    posted: this.formatDate(job.publishedAt)
                }
            });

            console.log('✨ Formatted jobs ready:', formatted);
            return formatted;

        } catch (error) {
            console.error('❌ Error fetching jobs from Sanity:', error);

            if (error instanceof Error) {
                console.error('Error details:', {
                    message: error.message,
                    stack: error.stack
                });

                // Spezifische Fehlerbehandlung
                if (error.message.includes('projectId')) {
                    console.error('🔴 Project ID not configured correctly!');
                    console.error('Check your sanityClient.ts configuration');
                }
                if (error.message.includes('CORS')) {
                    console.error('🔴 CORS error detected!');
                    console.error('Add http://localhost:3000 to CORS origins in Sanity dashboard');
                }
                if (error.message.includes('dataset')) {
                    console.error('🔴 Dataset configuration error!');
                    console.error('Make sure dataset is set to "production"');
                }
            }

            throw new Error('Failed to fetch jobs from Sanity');
        }
    },

    formatDate(dateString: string): string {
        if (!dateString) {
            console.warn('⚠️ No date string provided for formatting');
            return 'Datum unbekannt';
        }

        try {
            const date = new Date(dateString)
            const now = new Date()
            const diffTime = Math.abs(now.getTime() - date.getTime())
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

            if (diffDays === 0) return 'heute'
            if (diffDays === 1) return 'gestern'
            if (diffDays < 7) return `vor ${diffDays} Tagen`
            if (diffDays < 30) return `vor ${Math.floor(diffDays / 7)} Woche${diffDays >= 14 ? 'n' : ''}`
            if (diffDays < 365) return `vor ${Math.floor(diffDays / 30)} Monat${diffDays >= 60 ? 'en' : ''}`
            return `vor ${Math.floor(diffDays / 365)} Jahr${diffDays >= 730 ? 'en' : ''}`
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Datum unbekannt';
        }
    },

    // Test-Funktion zur Verbindungsprüfung
    async testConnection(): Promise<void> {
        console.log('🧪 Testing Sanity connection...');

        try {
            // Test 1: Einfacher Ping
            const ping = await client.fetch(`*[_type == "job"][0...1]`);
            console.log('✅ Connection test successful:', ping);

            // Test 2: Prüfe alle Jobs (inkl. Drafts)
            const allJobs = await client.fetch(`*[_type == "job"]`);
            console.log(`📊 Total jobs in database: ${allJobs.length}`);

            // Test 3: Prüfe aktive Jobs
            const activeJobs = await client.fetch(`*[_type == "job" && isActive == true]`);
            console.log(`✅ Active jobs: ${activeJobs.length}`);

            // Test 4: Prüfe published Jobs
            const publishedJobs = await client.fetch(`*[_type == "job" && !(_id in path("drafts.**"))]`);
            console.log(`📝 Published jobs: ${publishedJobs.length}`);

            if (allJobs.length > 0) {
                console.log('📋 Sample job structure:', allJobs[0]);
            }

        } catch (error) {
            console.error('❌ Connection test failed:', error);
            throw error;
        }
    }
}

// Auto-Test beim Import (nur in Development)
if (process.env.NODE_ENV === 'development') {
    console.log('🚀 JobService loaded, running connection test...');
    jobService.testConnection().catch(console.error);
}