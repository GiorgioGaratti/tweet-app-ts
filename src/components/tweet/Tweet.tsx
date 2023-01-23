import { CardBody, CardHeader } from "@chakra-ui/card";
import { Card } from "@chakra-ui/react";
import { memo } from "react";
import { useContext } from "react";
import { TweetContext } from "./TweetProvider";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

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

/* const Tweet:any = memo(function Tweet(props){
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
    
export default Tweet; */

const Tweet:any = memo(function Tweet(props){
    const context = useContext(TweetContext);
    return (
        <Card>
            <CardHeader padding={0}>
                <Image
                    src={context.tweetContent.imgSrc} 
                    alt={context.tweetContent.imgAlt}
                    objectFit='cover'
                />  
            </CardHeader>
        </Card>
    )
});
    
export default Tweet;