import { memo, FC } from "react";

// message informing that there no more tweets to display
const NoMoreTweetsMessage: FC<{displayNoMoreTwMex: boolean}> = memo(function NoMoreTweetsMessage({displayNoMoreTwMex}) {
    // display message or do nothing
    return displayNoMoreTwMex ? (
        <div className="nomoretweetsmessagediv">
            <p className="nomoretweetsmessage">Nessun Nuovo Tweet</p>
        </div>
    ) : null;
});

export default NoMoreTweetsMessage;