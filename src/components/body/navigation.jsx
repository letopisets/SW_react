import NavItem from "./NavItem.jsx";
import {navItems} from "../../utils/contsants.js";
const Navigation = () => (
    <nav>
        <ul className="nav fixed-top mt-2 ms-5">
            {navItems.map(item => <NavItem itemTitle={item} key={item} />)}
            {/*<NavItem itemTitle={'Home'} />*/}
            {/*<NavItem itemTitle={'About me'} />*/}
            {/*<NavItem itemTitle={'Star Wars'} />*/}
            {/*<NavItem itemTitle={'Constact'} />*/}
        </ul>
    </nav>
)
export default Navigation