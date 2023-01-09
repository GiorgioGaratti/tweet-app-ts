import { useState } from "react";

const useTweetContent = (props) => {
    const [likes, setLikes] = useState(props.tweetContent.likes);
    const [likeState, setLikeState] = useState(false); // when the like button is not selected
    
    const handleAddLike = () => {
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