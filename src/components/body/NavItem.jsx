const NavItem = ({itemTitle, changePage}) => {
    return (
        <li onClick={() => changePage(itemTitle)} className="text-lg button__elem hover:bg-red-500">{itemTitle}</li>
    );
};

export default NavItem;