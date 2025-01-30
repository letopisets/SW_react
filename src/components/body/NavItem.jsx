const NavItem = ({itemTitle, changePage}) => {
    return (
        <li onClick={() => changePage(itemTitle)} className="bg-red-color text-lg border-black border-2 rounded-sm p-1 cursor-pointer hover:bg-red-500">{itemTitle}</li>
    );
};

export default NavItem;