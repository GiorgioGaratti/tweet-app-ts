import { memo, FC } from "react";
import TweetPropsType from "../../types/TweetPropsType";
import { Image, Box, Heading, CardBody, CardFooter, Card, CardHeader, Avatar, IconButton, Button, Text } from "@chakra-ui/react";
import {Flex} from "@chakra-ui/layout";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

/* const Tweet: FC<TweetPropsType> = memo(function Tweet(props){
    return (
        <div className="tweet">
            <Image tweetContent={props.tweetContent} />
            <div className="tweetbody">
                <User user={props.user} />
                <TweetContent id={props.id} 
                    tweetContent={props.tweetContent} 
                    handleDeleteTweet={props.handleDeleteTweet} />
            </div>
        </div>
    );
}); */

const Tweet = memo(function Tweet(props){
    return (
        <Card maxW='md'>
            <CardHeader>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                    <Box>
                    <Heading size='sm'>Segun Adebayo</Heading>
                    <Text>Creator, Chakra UI</Text>
                    </Box>
                </Flex>
                <IconButton
                    variant='ghost'
                    colorScheme='gray'
                    aria-label='See menu'
                    icon={<BsThreeDotsVertical />}
                />
            </CardHeader>
            <CardBody>
                <Text>
                With Chakra UI, I wanted to sync the speed of development with the speed
                of design. I wanted the developer to be just as excited as the designer to
                create a screen.
                </Text>
            </CardBody>
            <Image
                objectFit='cover'
                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Chakra UI'
            />

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                '& > button': {
                    minW: '136px',
                },
                }}
            >
                <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                Like
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<VisibilityIcon />}>
                Views
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<DeleteIcon />}>
                Delete
                </Button>
            </CardFooter>
        </Card>
    );
});

export default Tweet;