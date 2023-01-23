import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton} from '@mui/material';
import { memo} from 'react';
import { useContext } from 'react';
import { TweetContext } from './TweetProvider';

// trash bin icon
const DeleteTweet = memo(function DeleteTweet(props) {
    const context = useContext(TweetContext);
    return(
        <div className="deletetweet">
            <IconButton className="deletebtn" onClick={() => context.handleDeleteTweet(context.id)}>
                <DeleteIcon />
            </IconButton>
        </div>);
});

export default DeleteTweet;
