import { Link, Route, Routes } from "react-router-dom";
import Home from "./comitments/Home";
import Gallery from "./comitments/Gallery";
import Nav from "./comitments/Nav";

const App = () => {
    return (
        <div className="mt-10 mx-auto w-[80%] bg-green-200 p-10">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </div>
    );
};

export default App;
