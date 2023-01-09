import DateTimeType from "./DateTimeType";

type TweetContentType = {
    imgSrc:string;
    imgAlt:string;
    text:string;
    datetime:DateTimeType;
    likes:number;
    views:number;
}

export default TweetContentType;