import { useContext } from "react";
import { TweetContext } from "./TweetProvider";
import { Button } from "@chakra-ui/button";
import DeleteTweet from "./DeleteTweet";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ButtonGroupCustom = () => {
    const context = useContext(TweetContext);
    return(
        <>
            <div id="likeinteraction" onClick={context.handleAddLike} className={context.likeState ? "likesdivtrue" : "likesdivfalse"}>
                {context.likeState? <FavoriteIcon className="likesicon" /> : <FavoriteBorderOutlinedIcon aria-label="fingerprint" className="likesicon" />}
                <p className={context.likeState ? "numberlikes true" : "numberlikes false"}>{context.likes}</p>
            </div>
            <Button flex='1' variant='ghost' leftIcon={<VisibilityIcon />}>
            {context.tweetContent.views}
            </Button>
            <DeleteTweet/>
        </>);
}

export default ButtonGroupCustom;

