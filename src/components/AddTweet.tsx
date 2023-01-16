import { memo, FC } from "react";
import AddTweetPropsType from "../types/AddTweetPropsType";

// button to display most recent tweet
const AddTweet: FC<AddTweetPropsType> = memo(function AddTweet({handleAddTweet, displayNoMoreTwMex}) {
    return (
        <div className="addtweet">
            <button className="addbtn" onClick={handleAddTweet} disabled={displayNoMoreTwMex}>
                Aggiungi Tweet
            </button>
        </div>);
});

export default AddTweet;