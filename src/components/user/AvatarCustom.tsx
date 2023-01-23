import { useContext } from "react";
import { TweetContext } from "../tweet/TweetProvider";
import { Avatar } from "@chakra-ui/avatar";

/* const Avatar = () => {
    const context = useContext(TweetContext);
    return (<img className="image_avatar" src={context.user.imgAvatar} alt={context.user.imgAvAlt}></img>);
}

export default Avatar; */

const AvatarCustom = () => {
    const context = useContext(TweetContext);
    return (
        <Avatar name={context.user.fullname} src={context.user.imgAvatar}/>
    );
}

export default AvatarCustom;