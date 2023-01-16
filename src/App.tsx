import './App.css';
import Title from './components/Title';
import TweetList from './components/TweetList';
import AddTweet from './components/AddTweet';
import NoMoreTweetsMessage from './components/NoMoreTweetsMessage';
import useApp from './hooks/useApp';

function App() {
    // call custom hook to get data for App components
    const [tweetList, displayNoMoreTwMex, listOfTweetIds, handleAddTweet, handleDeleteTweet] = useApp();
    
	return (
		<> {/* react fragment */}
			<Title />
			<AddTweet handleAddTweet={handleAddTweet} displayNoMoreTwMex={displayNoMoreTwMex} /> {/* add-tweet button */}
			<NoMoreTweetsMessage displayNoMoreTwMex={displayNoMoreTwMex} /> {/* message when there are no more tweets to display */}
			<TweetList handleDeleteTweet={handleDeleteTweet} tweetList={tweetList} listOfTweetIds={listOfTweetIds} />
		</>
	);
}

export default App;
