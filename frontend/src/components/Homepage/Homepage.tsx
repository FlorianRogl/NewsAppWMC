import VideoSection from "./VideoSection.tsx";
import ServiceSection from "./ServiceSection.tsx";
import JobSection from "./JobSection";

function Homepage() {
    return (
        <>
            <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "PROMAX Project Management GesmbH",
                "alternateName": "PROMAX",
                "url": "https://www.promax.at",
                "logo": "https://www.promax.at/logo.png",
                "description": "PROMAX Project Management GesmbH wurde 1999 gegründet und bietet spezielles Know-How in den Bereichen Projektierung, Planung, Projekt Management, Site Services und Organisationsberatung im Industrieanlagenbau.",
                "foundingDate": "1999",
                "numberOfEmployees": "35",
                "legalName": "PROMAX Project Management GesmbH",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Parkring 18/F",
                    "addressLocality": "Raaba-Grambach",
                    "postalCode": "8074",
                    "addressRegion": "Steiermark",
                    "addressCountry": "AT"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+43 316 241 393",
                    "faxNumber": "+43 316 241393 99",
                    "email": "office@promax.at",
                    "contactType": "customer service",
                    "availableLanguage": ["German", "English"]
                },
                "sameAs": [
                    "https://www.linkedin.com/company/promax-project-management",
                    "https://www.karriere.at/f/promax-project-management"
                ],
                "industry": "Industrieanlagenbau",
                "knowsAbout": [
                    "Projektmanagement",
                    "Industrieanlagenbau",
                    "Papierindustrie",
                    "Zellstoffindustrie",
                    "Pharmaindustrie",
                    "Chemieanlagen",
                    "Energie- und Umwelttechnik"
                ],
                "serviceArea": {
                    "@type": "Place",
                    "name": "Österreich und international"
                }
            })}
        </script>
            <VideoSection/>
            <ServiceSection/>
            <JobSection/>
        </>
    );
}

export default Homepage;