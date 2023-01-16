import Avatar from "./Avatar";
import { FC } from "react";
import UserPropsType from "../../types/UserPropsType";

const User: FC<UserPropsType> = (props) => {
    return (
        <div className="user">
            <Avatar user={props.user} />
            <div className="fullname_username">
                <p className="fullname">{props.user.fullname}</p>
                <p className="username">{props.user.username}</p>
            </div>
        </div>
    );
};

export default User;