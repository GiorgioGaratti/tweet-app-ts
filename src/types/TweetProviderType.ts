import UserType from "./UserType";
import TweetContentType from "./TweetContentType";
import HandleDeleteTweetType from "./HandleDeleteTweetType";
import { ReactNode } from "react";

type TweetProviderType = {
    inheritProps: { 
        className: string; 
        key: number; 
        id: number; 
        user: UserType; 
        tweetContent: TweetContentType; 
        handleDeleteTweet: HandleDeleteTweetType; 
    };
    children?: ReactNode; 
}

export default TweetProviderType;