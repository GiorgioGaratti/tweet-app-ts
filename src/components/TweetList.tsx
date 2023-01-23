import useTweetListToRender from "../hooks/useTweetListToRender";
import Tweet from "./tweet/Tweet";
import { memo, FC } from "react";
import TweetListPropsType from "../types/TweetListPropsType";
import TweetProvider from "./tweet/TweetProvider";

// list of tweets to display
// this component is memoized for possible future implementations
const TweetList: FC<TweetListPropsType> = memo(function TweetList(props) {
    
    // custom hook to get the list of tweets to render
    const [tweetListToRender] = useTweetListToRender(props.tweetList, props.listOfTweetIds);

    return (
        <div className="tweetlist">
            {
            // take each tweet from the tweetlist and render it
            tweetListToRender.map(tweet => {
                return (
                <TweetProvider key={tweet.id} inheritProps={{className:"tweet",id:tweet.id,user:tweet.user,tweetContent:tweet.tweetContent,handleDeleteTweet:props.handleDeleteTweet}}>
                    <Tweet />
                </TweetProvider>);
            })
            }
        </div>
    );
})

export default TweetList;