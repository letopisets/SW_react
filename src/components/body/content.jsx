
import Home from "../home.jsx";
// import AboutMe from "./aboutme.jsx";
import {navItems} from "../../utils/contsants.js";
import StarWars from "../content/starwars.jsx";
import Contact from "../content/contact.jsx";
import AboutMe from "../content/aboutme.jsx";

const Main = ({page}) => {


    switch (page) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }

};

export default Main;