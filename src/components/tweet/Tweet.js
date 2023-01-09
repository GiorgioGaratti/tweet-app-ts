import Image from "./Image";
import User from "../user/User";
import TweetContent from "./TweetContent";
import { memo } from "react";

const Tweet = memo(function Tweet(props){
    return (
        <div className="tweet">
            <Image tweetContent={props.tweetContent} />
            <div className="tweetbody">
                <User user={props.user} />
                <TweetContent id={props.id} 
                    tweetContent={props.tweetContent} 
                    handleDeleteTweet={props.handleDeleteTweet} />
            </div>
        </div>
    );
});

export default Tweet;