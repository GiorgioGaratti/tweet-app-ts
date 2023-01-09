import Avatar from "./Avatar";

const User = (props) => {
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