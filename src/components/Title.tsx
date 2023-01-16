import { FC, memo } from "react";

// main title of the webapp
const Title: FC = memo(function Title(){
    return <h1 className="title">Tweets</h1>;
});

export default Title;