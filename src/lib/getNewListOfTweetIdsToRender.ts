import findNewTweetsIds from "./findNewTweetsIds";
import findIdOfMostRecentTweet from "./findIdOfMostRecentTweet";
import TweetType from "../types/TweetType";

// called when I'm adding a tweet to the list of rendered ones
const getNewListOfTweetsIdsToRender: (tweetList:TweetType[], listOfTweetIds:number[]) => number[] = (tweetList, listOfTweetIds) => {
    const listOfNewTweetsIds:number[] = findNewTweetsIds(tweetList, listOfTweetIds);
    const newTweetIdToAdd:number = findIdOfMostRecentTweet(tweetList, listOfNewTweetsIds);
    listOfTweetIds.unshift(newTweetIdToAdd);

    return listOfTweetIds;
}

export default getNewListOfTweetsIdsToRender;