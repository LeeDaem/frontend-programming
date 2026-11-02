import { Outlet } from "react-router";
import { Link } from "react-router";
function ArticlesLayout () {
    return (
        <>
            <ul>
                <li><Link to='/articles'>Articles</Link></li>
                <li><Link to='/articles/info'>Info</Link></li>
                <li><Link to='/articles/history'>History</Link></li>
            </ul>
            <Outlet/>
        </>
    )
}

export default ArticlesLayout;