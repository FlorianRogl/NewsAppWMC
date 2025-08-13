import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.tsx";
import Unternehmen from "./components/Unternehmen.tsx";
import Kontakt from "./components/Kontakt.tsx";
import Footer from "./components/Footer.tsx";
import Branchen from "./components/Branchen.tsx";
import Leistungen from "./components/Leistungen.tsx";
import Projektberichte from "./components/Projektberichte.tsx";
import Karriere from "./components/Karriere.tsx";
import FitImJob from "./components/FitImJob.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Kontakt2 from "./components/Kontakt2.tsx";
import Kontakt3 from "./components/Kontakt3.tsx";
import Navbar2 from "./components/Navbar2.tsx";
import {HelmetProvider} from "@vuer-ai/react-helmet-async";

function App() {
    return (
        <HelmetProvider>
        <div>
            <Navbar2/>
            <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/Unternehmen" element={<Unternehmen/>} />
                    <Route path="/Kontakt" element={<Kontakt/>} />
                    <Route path="/Kontakt2" element={<Kontakt2/>} />
                    <Route path="/Kontakt3" element={<Kontakt3/>} />
                    <Route path="/Branchen" element={<Branchen/>} />
                    <Route path="/Leistungen" element={<Leistungen/>} />
                    <Route path="/Projektberichte" element={<Projektberichte/>} />
                    <Route path="/Karriere" element={<Karriere/>} />
                    <Route path="/FitImJob" element={<FitImJob/>}/>
                </Routes>
            <Footer/>
        </div>
        </HelmetProvider>
    );
}

export default App;