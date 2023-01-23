import { useContext } from "react";
import { TweetContext } from "../tweet/TweetProvider";
import AvatarCustom from "./AvatarCustom";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

/* const User = () => {
    const context = useContext(TweetContext);
    return (
        <div className="user">
            <Avatar/>
            <div className="fullname_username">
                <p className="fullname">{context.user.fullname}</p>
                <p className="username">{context.user.username}</p>
            </div>
        </div>
    );
};

export default User; */

const User = () => {
    const context = useContext(TweetContext);
    return (
        <>
            <AvatarCustom/>
            <Box>
                <Heading size='sm'>{context.user.fullname}</Heading>
                <Text>{context.user.username}</Text>
            </Box>
        </>
    );
};

export default User;