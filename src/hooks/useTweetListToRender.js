import { useEffect, useState } from "react";

const useTweetListToRender = ({tweetList, listOfTweetIds}) => {
    const [tweetListToRender, setTweetListToRender] = useState([]);
    
    // for each id in the list I get the tweet (from API) with the same id
    // then I add it to the array to return
    useEffect(() => {
        let tweetListToSet = [];
        [...listOfTweetIds].forEach( id => {
            const tweetToPush = [...tweetList].find(tweet => tweet.id === id);
            tweetListToSet.push(tweetToPush);
        });
        setTweetListToRender(tweetListToSet);
    }, [tweetList, listOfTweetIds]);
        

    return [tweetListToRender];
}

export default useTweetListToRender;