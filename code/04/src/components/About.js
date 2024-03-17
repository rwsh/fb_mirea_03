import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Managment from "./Managment";
import Contact from "./Contact";
import AboutNav from "./AboutNav";

export default function About () {
    return (
        <div>
            <Nav/>
            О компании...
            <AboutNav/>
            <Routes>
                <Route path="/managment" element={<Managment/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}

