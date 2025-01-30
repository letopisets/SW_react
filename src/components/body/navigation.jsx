import NavItem from "./NavItem.jsx";
import {navItems} from "../../utils/contsants.js";
const Navigation = ({changePage}) => (
    <nav className="fixed flex top-5 left-8">
        <ul className="flex  gap-2">
            {navItems.map(item => <NavItem changePage={changePage} itemTitle={item} key={item} />)}
        </ul>
    </nav>
)
export default Navigation