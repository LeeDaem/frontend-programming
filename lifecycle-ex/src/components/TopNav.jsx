import { NavLink } from "react-router";
const TopNav = () => {
    return (
        <nav>
            <NavLink to="/">Home </NavLink>
            <NavLink to="/test">Test </NavLink>
            <NavLink to="/users">Users </NavLink>
        </nav>
    )
        
}
export default TopNav