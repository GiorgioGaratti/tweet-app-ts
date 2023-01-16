import HandleDeleteTweetType from "./HandleDeleteTweetType";
import TweetContentType from "./TweetContentType";

type TweetContentPropsType = {
    id: number;
    tweetContent: TweetContentType;
    handleDeleteTweet: HandleDeleteTweetType;
};

export default TweetContentPropsType;