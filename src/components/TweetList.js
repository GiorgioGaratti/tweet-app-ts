import useTweetListToRender from "../hooks/useTweetListToRender";
import Tweet from "./tweet/Tweet";
import { memo } from "react";

// list of tweets to display
// this component is memoized for possible future implementations
const TweetList = memo(function TweetList(props) {
    
    // custom hook to get the list of tweets to render
    const [tweetListToRender] = useTweetListToRender(props);

    return (
        <div className="tweetlist">
            {
            // take each tweet from the tweetlist and render it
            tweetListToRender.map(tweet => {
                return <Tweet 
                    className="tweet" 
                    key={tweet.id} // unique id required by react for each list element, cannot be accessed from props
                    id={tweet.id} // unique id that is used for tweet delete
                    user={tweet.user} 
                    tweetContent={tweet.tweetContent}
                    handleDeleteTweet={props.handleDeleteTweet} />;
            })
            }
        </div>
    );
})

export default TweetList;