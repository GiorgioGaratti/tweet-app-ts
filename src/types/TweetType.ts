import TweetContentType from "./TweetContent";
import UserType from "./UserType";

type TweetType = {
    id:number;
    user:UserType;
    tweetContent:TweetContentType;
}

export default TweetType;