import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import Unternehmen from "./components/Unternehmen.tsx";
import Kontakt from "./components/Kontakt.tsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element= <Home/> />
                <Route path="/Unternehmen" element= <Unternehmen/> />
                <Route path="/Kontakt" element= <Kontakt/> />
            </Routes>
        </div>
    );
}

export default App;