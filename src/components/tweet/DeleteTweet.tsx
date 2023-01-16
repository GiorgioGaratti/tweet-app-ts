import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton} from '@mui/material';
import { memo,FC } from 'react';
import DeleteTweetPropsType from '../../types/DeleteTweetPropsType';

// trash bin icon
const DeleteTweet: FC<DeleteTweetPropsType> = memo(function DeleteTweet(props) {
    return(
        <div className="deletetweet">
            <IconButton className="deletebtn" onClick={() => props.handleDeleteTweet(props.id)}>
                <DeleteIcon />
            </IconButton>
        </div>);
});

export default DeleteTweet;
