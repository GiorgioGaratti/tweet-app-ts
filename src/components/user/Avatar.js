const Avatar = (props) => {
    return (<img className="image_avatar" src={props.user.imgAvatar} alt={props.user.imgAvAlt}></img>);
}

export default Avatar;