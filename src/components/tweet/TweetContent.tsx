import { Text } from '@chakra-ui/layout';
import { useContext } from 'react';
import { TweetContext } from './TweetProvider';

//const TweetContent = () => {
//
//    const context = useContext(TweetContext);
//
//    return (
//        <div className="tweetcontent">
//            {/* text in the body of the tweet */}
//            <p className="tweettext">{context.tweetContent.text}</p>
//            {/* date in format -> hh:mm - dd 'day' yyyy */}
//            <p className="tweetdate">{context.tweetContent.datetime.dateFormatted}</p>
//            <div className="tweetinteraction">
//                {/* display heart icon with either black outline or red content and then, the number of likes */}
//                <div id="likeinteraction" onClick={context.handleAddLike} className={context.likeState ? "likesdivtrue" : "likesdivfalse"}>
//                    {context.likeState? <FavoriteIcon className="likesicon" /> : <FavoriteBorderOutlinedIcon aria-label="fingerprint" className="likesicon" />}
//                    <p className={context.likeState ? "numberlikes true" : "numberlikes false"}>{context.likes}</p>
//                </div>
//                {/* display eye icon and number of views */}
//                <VisibilityIcon />
//                <p className="numberviews">{context.tweetContent.views}</p>
//                {/* display bin button for tweet delete */}
//                <DeleteTweet id={context.id} handleDeleteTweet={context.handleDeleteTweet} />
//            </div>
//        </div>
//    );
//}
//
//export default TweetContent;

const TweetContent = () => {

    const context = useContext(TweetContext);

    return (
        <>
            <Text>{context.tweetContent.text}</Text>
            <Text>{context.tweetContent.datetime.dateFormatted}</Text>
        </>
    );
}

export default TweetContent