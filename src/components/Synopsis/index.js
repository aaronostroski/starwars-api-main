import { Link } from "react-router-dom";

import { 
    Section, Div, Description
} from "./style";

function Synopsis({opening_crawl}) {
    return (
        <Section>
            <Div>
                <Link to="/">
                    <span>Back</span>    
                </Link>
            </Div>
            <Description>
                <p>
                    {opening_crawl ? opening_crawl : "Description not avaible for this movie"}
                </p>
            </Description>
        </Section>
    )
}

export default Synopsis;