import { useParams } from "react-router";

function UserDetail () {
    // const param = useParams();
    const {userId} = useParams();

    return (
        <h1>User Detail: {/*param.userId*/ userId}</h1>
    )
}

export default UserDetail;