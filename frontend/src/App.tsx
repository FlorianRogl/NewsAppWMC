import {Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.tsx";
import Unternehmen from "./components/Unternehmen.tsx";
import Kontakt from "./components/Kontakt.tsx";
import Navbar from "./components/Homepage/Navbar.tsx";
import './index.css'

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element= <Homepage/> />
                <Route path="/Unternehmen" element= <Unternehmen/> />
                <Route path="/Kontakt" element= <Kontakt/> />
                <Route path="/Home" element= <Homepage/> />
            </Routes>
        </div>
    );
}

export default App;