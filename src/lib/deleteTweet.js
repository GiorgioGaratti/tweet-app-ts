// callback called onlick of delete button
const deleteTweet = (listOfTweetIds, tweetIdToRemove) => {

    // remove from list of rendered tweets the one selected
    // by returning the complete list without it
    const newListOfTweetsIdToRender = listOfTweetIds.filter((id) => {
        return id !== tweetIdToRemove;
    });

    return newListOfTweetsIdToRender;
}

export default deleteTweet;