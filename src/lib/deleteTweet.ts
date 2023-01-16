// callback called onlick of delete button
const deleteTweet = (listOfTweetIds: number[], tweetIdToRemove: number): number[] => {

    // remove from list of rendered tweets the one selected
    // by returning the complete list without it
    const newListOfTweetsIdToRender: number[] = listOfTweetIds.filter(id => id !== tweetIdToRemove);

    return newListOfTweetsIdToRender;
}

export default deleteTweet;