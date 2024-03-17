import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Managment from "./Managment";
import Contact from "./Contact";
import AboutNav from "./AboutNav";
import AboutText from "./AboutText";

export default function About () {
    return (
        <div>
            <Nav/>
            О компании...
            <AboutNav/>
            <Routes>
                <Route index element={<AboutText/>}/>
                <Route path="/managment" element={<Managment/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}

