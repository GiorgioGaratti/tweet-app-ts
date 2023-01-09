const Image = (props) => {
    return(
        <div>
            <img className="image" src={props.tweetContent.imgSrc} alt={props.tweetContent.imgAlt}></img>
        </div>);
};

export default Image;