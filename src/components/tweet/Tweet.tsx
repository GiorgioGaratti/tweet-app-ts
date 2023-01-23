import { CardBody, CardFooter } from "@chakra-ui/card";
import { Flex } from "@chakra-ui/layout";
import { Card, CardHeader } from "@chakra-ui/react";
import { memo } from "react";
import User from "../user/User";
import ButtonGroupCustom from "./ButtonGroupCustom";
import ImageCustom from "./ImageCustom";
import TweetContent from "./TweetContent";

/* const Tweet: FC<TweetPropsType> = memo(function Tweet(props){
    return (
        <div className="tweet">
            <TweetProvider inheritProps={{...props}}>
                <Image />
                <div className="tweetbody">
                    <User/>
                    <TweetContent/>
                </div>
            </TweetProvider>
        </div>
    );
});

export default Tweet;
 */

const Tweet:any = memo(function Tweet(props){
    return (
        <Card>
            <CardHeader>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <User/>
                </Flex>
            </CardHeader>
            <CardBody>
                <TweetContent/>
                <ImageCustom/>
            </CardBody>
            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                '& > button': {
                    minW: '136px',
                },
                }}
            >
                <ButtonGroupCustom/>
            </CardFooter>
        </Card>
    );
});
    
export default Tweet;