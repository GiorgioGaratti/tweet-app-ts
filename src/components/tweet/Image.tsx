import { useContext } from "react";
import { TweetContext } from "./TweetProvider";

const Image = () => {
    const context = useContext(TweetContext);
    return(
        <div>
            <img className="image" src={context.tweetContent.imgSrc} alt={context.tweetContent.imgAlt}></img>
        </div>);
};

export default Image;