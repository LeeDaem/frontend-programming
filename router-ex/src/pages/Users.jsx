import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router"
function Users() {
    const users = [
        {userId:1, name:"User 1"},
        {userId:2, name:"User 2"},
        {userId:3, name:"User 3"}
    ]
    const [search, setSearch] = useSearchParams();
    const navigate = useNavigate();
    return (
        <>
            <h1>Users</h1>
            <button onClick={()=> navigate('/')}>Home</button>
            <button onClick={()=> navigate(-1)}>Back</button>
            <input value={search.get("keyword")}
                    onChange={(e)=> setSearch({keyword:e.target.value})} /> 
            {
                users.map((u)=> <Link to={`/user/${u.userId}`} >{u.name}</Link>)
            }
        </>


    )
}

export default Users;