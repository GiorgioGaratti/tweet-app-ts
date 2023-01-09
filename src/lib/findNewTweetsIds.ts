import TweetType from "../types/TweetType";

// find ids of not-yet-rendered tweets
const findNewTweetsIds: (tweetList:TweetType[], listOfTweetIds:number[]) => number[] = (tweetList, listOfTweetIds) => {
    
    // empty array where I add every new tweet id
    let newTweetsIdsList:number[] = [];
    // for each tweet in the full list of tweets
    tweetList.forEach(tweet => {
        // I look for an id in "listOfTweetIds" matching the value of the given tweet
        // if I find one I save it in a variable, if not, that variable will be undefined
        const tweetIdAlreadyPresent:number|undefined = listOfTweetIds.find(tweetIdInList => {
            return tweet.id === tweetIdInList;
        });
        // if I have found none matching I add that tweet id to the array to return
        return (tweetIdAlreadyPresent === undefined) ? newTweetsIdsList.push(tweet.id) : null;
    });

    return newTweetsIdsList;
}

export default findNewTweetsIds;
