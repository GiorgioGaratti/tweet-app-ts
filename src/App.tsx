import { Heading, VStack } from '@chakra-ui/react';
import './App.css';
import NoMoreTweetsMessage from './components/NoMoreTweetsMessage';
import TweetList from './components/TweetList';
import useApp from './hooks/useApp';

function App() {
    // call custom hook to get data for App components
    const [tweetList, isThereAnyTweetLeft, listOfTweetIds, handleAddTweet, handleDeleteTweet] = useApp();
    
	return (
		<VStack>
			<Heading marginY={50}>Tweet App</Heading>
            {/*<AddTweet isThereATweetLeft={isThereATweetLeft} handleAddTweet={handleAddTweet} />*/}
            {!isThereAnyTweetLeft && <NoMoreTweetsMessage />}
            <TweetList handleDeleteTweet={handleDeleteTweet} tweetList={tweetList} listOfTweetIds={listOfTweetIds} />
        </VStack>
	);
}

export default App;


