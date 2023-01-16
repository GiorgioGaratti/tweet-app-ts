import { FC } from "react";
import AvatarPropsType from "../../types/AvatarPropsType";

const Avatar: FC<AvatarPropsType> = (props) => {
    return (<img className="image_avatar" src={props.user.imgAvatar} alt={props.user.imgAvAlt}></img>);
}

export default Avatar;