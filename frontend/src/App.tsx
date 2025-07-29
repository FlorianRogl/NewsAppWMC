import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element= <Home/> />
            </Routes>
        </div>
    );
}

export default App;