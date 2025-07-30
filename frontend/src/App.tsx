import {Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.tsx";
import Unternehmen from "./components/Unternehmen.tsx";
import Kontakt from "./components/Kontakt.tsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element= <Homepage/> />
                <Route path="/Unternehmen" element= <Unternehmen/> />
                <Route path="/Kontakt" element= <Kontakt/> />
            </Routes>
        </div>
    );
}

export default App;