import React from "react";
import TweetProviderType from "../../types/TweetProviderType";
import { FC } from "react";
import useTweetContent from "../../hooks/useTweetContent";

const TweetContext = React.createContext<any>({});
const TweetProvider: FC<TweetProviderType> = ({inheritProps,children}) => {

    // custom hook to init state variables
    const [likes, likeState, handleAddLike] = useTweetContent(inheritProps.tweetContent.likes);
    const tweetInformation:any = {
        className: inheritProps.className,
        key: inheritProps.key,
        id: inheritProps.id,
        user: inheritProps.user,
        tweetContent: inheritProps.tweetContent,
        handleDeleteTweet: inheritProps.handleDeleteTweet,
        handleAddLike: handleAddLike,
        likeState: likeState,
        likes: likes
    }
    return (
        <TweetContext.Provider value={tweetInformation} >
            {children}
        </TweetContext.Provider>
    )
}

export default TweetProvider;
export {TweetContext};