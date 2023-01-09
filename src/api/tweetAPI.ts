import Fakerator from "fakerator";
import createDate from "../lib/createDate";
import { loremIpsum } from "lorem-ipsum";
import getRandomInt from "../lib/getRandomInt";
import TweetType from "../types/TweetType";
import DateTimeType from "../types/DateTimeType";

// get full list of stored tweets
const getTweets : () => TweetType[] = () => {
    // numbers of random tweets I want to generate
    const NUMBER_OF_TWEETS_IN_TOTAL:number = 7;

    let tweetsFromApi:TweetType[] = [];
    // for each tweet I want to create
    for(let i:number = 0; i < NUMBER_OF_TWEETS_IN_TOTAL; i++){
        
        loremIpsum({
            count: Math.floor(Math.random() * 275 + 5),
            format: "plain",     
            units: "words"
        });
        // generate a text
        const text:string = loremIpsum();

        // generate name and username of the user
        const fullname:string = Fakerator().names.name();
        const username:string = Fakerator().internet.userName();

        // generate a date with a random offset from utc (using LUXON)
        const offset:number = Math.floor(Math.random() * (241) - 120);
        const datetime:DateTimeType = createDate(offset);

        const tweetToAdd:TweetType = {
            id: i,
            user: {
                imgAvatar: "https://i.pravatar.cc/60?img="+i, // getting image from internet
                imgAvAlt: "foto avatar "+ i,
                fullname: fullname,
                username: "@"+username
            },   
            tweetContent: {
                imgSrc: "https://picsum.photos/350/200.jpg?random="+i, // getting image from internet
                imgAlt: "foto tweet "+ i,
                text: text,
                datetime: {
                    dateISO: datetime.dateISO,
                    dateFormatted: datetime.dateFormatted
                },
                likes: getRandomInt(1, 1_000), // generate random number of likes [1 - 1000]
                views: getRandomInt(5, 10_000) // generate random number of views [5 - 100000]
            }    
        };
        tweetsFromApi.push(tweetToAdd);
    }
    return tweetsFromApi;
};

export default getTweets;