import { useEffect, useState } from "react";
import axios from "axios";
import tweetListInit from "../config/tweetListInit";
import deleteTweet from "../lib/deleteTweet";
import getNewListOfTweetIdsToRender from "../lib/getNewListOfTweetIdsToRender";
import HandleAddTweetType from "../types/HandleAddTweetType";
import HandleDeleteTweetType from "../types/HandleDeleteTweetType";
import TweetType from "../types/TweetType";
import getTweets from "../api/tweetAPI";

const useApp = (): [TweetType[], boolean, number[], HandleAddTweetType, HandleDeleteTweetType] => {

	const [tweetList, setTweetList] = useState<TweetType[]>([]);
	const [isThereAnyTweetLeft, setIsThereAnyTweetLeft] = useState<boolean>(true);
    // state variable: list of rendered tweets ids
    const [listOfTweetIds, setListOfTweetIds] = useState<number[]>([]);

    /* useEffect(() => {
        setTweetList(getTweets());
        setListOfTweetIds(tweetListInit.idsOfTweetsToDisplay);
    }, []); */

    useEffect(() => {

        const dataToSend = JSON.stringify(getTweets());
        
        async function setTweetsInDb() {
            try {
                const response = await axios.post("http://localhost:3005/tweets", dataToSend, {headers:{"Content-Type":"application/json"}});
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
        setTweetsInDb();

        axios.get("http://localhost:3005/tweets")
            .then(function(response){
                console.log("get ---> " + response)
                setTweetList(response.data);
            })
            .catch(function(error){
                console.log("get err ---> "+error);
            });
        setListOfTweetIds(tweetListInit.idsOfTweetsToDisplay);
    }, []);

    const handleAddTweet: HandleAddTweetType = () => {
        // if I have at least one tweet to show
        if(tweetList.length !== listOfTweetIds.length){
            setListOfTweetIds(getNewListOfTweetIdsToRender([...tweetList], [...listOfTweetIds]));
        } 
        // else if there are no tweets to display
        else if (tweetList.length === listOfTweetIds.length) {
            setIsThereAnyTweetLeft(false);
        }
    };
    
    const handleDeleteTweet: HandleDeleteTweetType = (tweetIdToRemove) => {
        setListOfTweetIds(deleteTweet([...listOfTweetIds], tweetIdToRemove));
        setIsThereAnyTweetLeft(true);
    };

    return [tweetList, isThereAnyTweetLeft, listOfTweetIds, handleAddTweet, handleDeleteTweet];
}

export default useApp;