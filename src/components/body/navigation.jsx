import NavItem from "./NavItem.jsx";
import {navItems} from "../../utils/contsants.js";
const Navigation = ({changePage}) => (
    <nav>
        <ul className="nav fixed-top mt-2 ms-5">
            {navItems.map(item => <NavItem changePage={changePage} itemTitle={item} key={item} />)}

        </ul>
    </nav>
)
export default Navigation