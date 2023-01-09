import { memo } from "react";

// button to display most recent tweet
const AddTweet = memo(function AddTweet({handleAddTweet, displayNoMoreTwMex}) {
    return (
        <div className="addtweet">
            <button className="addbtn" onClick={handleAddTweet} disabled={displayNoMoreTwMex}>
                Aggiungi Tweet
            </button>
        </div>);
});

export default AddTweet;