import TweetType from "../types/TweetType";

// get id of most recent tweet from a list
const findIdOfMostRecentTweet = (tweetList: TweetType[], listOfNewTweetsIds: number[]): number => {
    // look for tweets from the full list with id figuring in "listOfNewTweetsIds"
    const newTweetsList: TweetType[] = tweetList.filter(tweet => {
        const existingTweetId: number | undefined = listOfNewTweetsIds.find(
            id => id === tweet.id
        );
        const exit: boolean = existingTweetId !== undefined ? true : false;
        return exit;
    });

    if (newTweetsList === undefined) throw new Error("ERRORE: la lista dei nuovi tweet da mostrare risulta vuota");

    /* newTweetsList.sort(); */

    // sort the list by the order of ISO-formatted dates
    const mostRecentTweet: TweetType | undefined = newTweetsList
        .sort((a: TweetType, b: TweetType) => {
            let exit: number;
            if (a.tweetContent.datetime.dateISO > b.tweetContent.datetime.dateISO) {
                exit = 1;
            } 
            else if (a.tweetContent.datetime.dateISO === b.tweetContent.datetime.dateISO) {
                exit = 0;
            } 
            else {
                exit = -1;
            }
            return exit;
        })
        .at(newTweetsList.length - 1); // return the tweet with the most recent date

    if (mostRecentTweet === undefined) throw new Error("ERRORE: non risulta esserci un tweet con la data più recente");

    return mostRecentTweet.id; 
};

export default findIdOfMostRecentTweet;
