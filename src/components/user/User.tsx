import Avatar from "./Avatar";
import { useContext } from "react";
import { TweetContext } from "../tweet/TweetProvider";

const User = () => {
    const context = useContext(TweetContext);
    return (
        <div className="user">
            <Avatar/>
            <div className="fullname_username">
                <p className="fullname">{context.user.fullname}</p>
                <p className="username">{context.user.username}</p>
            </div>
        </div>
    );
};

export default User;