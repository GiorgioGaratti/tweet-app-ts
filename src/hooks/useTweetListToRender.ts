import { useEffect, useState } from "react";
import TweetType from "../types/TweetType";

const useTweetListToRender = (tweetList: TweetType[], listOfTweetIds: number[]): [TweetType[]] => {
    const [tweetListToRender, setTweetListToRender] = useState<TweetType[]>([]);
    
    // for each id in the list I get the tweet (from API) with the same id
    // then I add it to the array to return
    useEffect((): void => {
        let tweetListToSet: TweetType[] = [];
        [...listOfTweetIds].forEach( id => {
            const tweetToPush: TweetType | undefined = [...tweetList].find(tweet => tweet.id === id);
            if(typeof tweetToPush !== "undefined"){
                tweetListToSet.push(tweetToPush);
            }
        });
        setTweetListToRender(tweetListToSet);
    }, [tweetList, listOfTweetIds]);
        

    return [tweetListToRender];
}

export default useTweetListToRender;