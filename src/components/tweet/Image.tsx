import { FC } from "react";
import ImagePropsType from "../../types/ImagePropsType";

const Image: FC<ImagePropsType> = (props) => {
    return(
        <div>
            <img className="image" src={props.tweetContent.imgSrc} alt={props.tweetContent.imgAlt}></img>
        </div>);
};

export default Image;