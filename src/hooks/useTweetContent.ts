import { useState } from "react";

const useTweetContent = (likesnumb: number): [number, boolean, () => void] => {
    const [likes, setLikes] = useState<number>(likesnumb);
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