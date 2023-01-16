import { useState } from "react";
import TweetContentPropsType from "../types/TweetContentPropsType";

const useTweetContent = (props: TweetContentPropsType): [number, boolean, () => void] => {
    const [likes, setLikes] = useState<number>(props.tweetContent.likes);
    const [likeState, setLikeState] = useState<boolean>(false); // when the like button is not selected
    
    const handleAddLike = (): void => {
        if(likeState === false){
            setLikes(likes + 1);
            setLikeState(true);
        } else {
            setLikes(likes - 1);
            setLikeState(false);
        }
    };

    return [likes, likeState, handleAddLike];
}

export default useTweetContent;