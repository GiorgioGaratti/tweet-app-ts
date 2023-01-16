import HandleDeleteTweetType from "./HandleDeleteTweetType";
import TweetContentType from "./TweetContentType";
import UserType from "./UserType";

type TweetPropsType = {
    className: string;
    key: number;
    id: number;
    user: UserType;
    tweetContent: TweetContentType;
    handleDeleteTweet: HandleDeleteTweetType;
};

export default TweetPropsType;