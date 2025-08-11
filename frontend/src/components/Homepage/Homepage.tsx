import VideoSection from "./VideoSection.tsx";
import CompanySection from "./CompanySection.tsx";
import ServiceSection from "./ServiceSection.tsx";
import NewsSection from "./NewsSection.tsx";
import JobSection from "./JobSection";

function Homepage() {
    return (
        <>
            <VideoSection/>
            <ServiceSection/>
            <JobSection/>
        </>
    );
}

export default Homepage;