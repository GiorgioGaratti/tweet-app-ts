import { useContext } from "react";
import { TweetContext } from "./TweetProvider";
import { Image } from "@chakra-ui/image";

const ImageCustom = () => {
    const context = useContext(TweetContext);
    return(
        <>
            <Image src={context.tweetContent.imgSrc} alt={context.tweetContent.imgAlt}/>
        </>);
};

export default ImageCustom;