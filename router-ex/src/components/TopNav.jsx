import { NavLink } from "react-router";

function TopNav() {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
	        <NavLink to='/articles'>Articles</NavLink>
        </nav>
    )
}

export default TopNav;