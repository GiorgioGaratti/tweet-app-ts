import HandleDeleteTweetType from "./HandleDeleteTweetType";
import TweetType from "./TweetType";

type TweetListPropsType = {handleDeleteTweet: HandleDeleteTweetType; tweetList: TweetType[]; listOfTweetIds: number[]};

export default TweetListPropsType;