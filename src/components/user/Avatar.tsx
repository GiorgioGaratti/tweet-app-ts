import { useContext } from "react";
import { TweetContext } from "../tweet/TweetProvider";

const Avatar = () => {
    const context = useContext(TweetContext);
    return (<img className="image_avatar" src={context.user.imgAvatar} alt={context.user.imgAvAlt}></img>);
}

export default Avatar;