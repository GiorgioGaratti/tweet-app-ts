import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteTweet from "./DeleteTweet";
import useTweetContent from "../../hooks/useTweetContent";
import TweetContentPropsType from '../../types/TweetContentPropsType';
import { FC } from 'react';

const TweetContent: FC<TweetContentPropsType> = (props) => {

    // custom hook to init state variables
    const [likes, likeState, handleAddLike] = useTweetContent(props);

    return (
        <div className="tweetcontent">
            {/* text in the body of the tweet */}
            <p className="tweettext">{props.tweetContent.text}</p>
            {/* date in format -> hh:mm - dd 'day' yyyy */}
            <p className="tweetdate">{props.tweetContent.datetime.dateFormatted}</p>
            <div className="tweetinteraction">
                {/* display heart icon with either black outline or red content and then, the number of likes */}
                <div id="likeinteraction" onClick={handleAddLike} className={likeState ? "likesdivtrue" : "likesdivfalse"}>
                    {likeState? <FavoriteIcon className="likesicon" /> : <FavoriteBorderOutlinedIcon aria-label="fingerprint" className="likesicon" />}
                    <p className={likeState ? "numberlikes true" : "numberlikes false"}>{likes}</p>
                </div>
                {/* display eye icon and number of views */}
                <VisibilityIcon />
                <p className="numberviews">{props.tweetContent.views}</p>
                {/* display bin button for tweet delete */}
                <DeleteTweet id={props.id} handleDeleteTweet={props.handleDeleteTweet} />
            </div>
        </div>
    );
}

export default TweetContent;