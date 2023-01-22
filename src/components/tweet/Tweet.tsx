import Image from "./Image";
import { FC, memo } from "react";
import TweetPropsType from "../../types/TweetPropsType";
import User from "../user/User";
import TweetContent from "./TweetContent";
import TweetProvider from "./TweetProvider";

const Tweet: FC<TweetPropsType> = memo(function Tweet(props){
    return (
        <div className="tweet">
            <TweetProvider inheritProps={{...props}}>
                <Image/>
                <div className="tweetbody">
                    <User/>
                    <TweetContent/>
                </div>
            </TweetProvider>
        </div>
    );
});

export default Tweet;