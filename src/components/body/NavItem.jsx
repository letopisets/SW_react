import Button from "../content/ui/button.jsx";

const NavItem = ({itemTitle, changePage}) => {
    return (
        <Button callback={() => changePage(itemTitle)} className="text-lg ">{itemTitle}</Button>
    );
};

export default NavItem;