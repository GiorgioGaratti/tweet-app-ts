import React from "react";
import useTweetContent from "../../hooks/useTweetContent";

const TweetContext = React.createContext<any>({});
const TweetProvider: any = (props:any) => {

    // custom hook to init state variables
    const [likes, likeState, handleAddLike] = useTweetContent(props.inheritProps.tweetContent.likes);
    const tweetInformation:any = {
        className: props.inheritProps.className,
        key: props.inheritProps.key,
        id: props.inheritProps.id,
        user: props.inheritProps.user,
        tweetContent: props.inheritProps.tweetContent,
        handleDeleteTweet: props.inheritProps.handleDeleteTweet,
        handleAddLike: handleAddLike,
        likeState: likeState,
        likes: likes
    }
    return (
        <TweetContext.Provider value={tweetInformation} >
            {props.children}
        </TweetContext.Provider>
    )
}

export default TweetProvider;
export { TweetContext };
