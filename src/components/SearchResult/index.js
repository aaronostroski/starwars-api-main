import { Link } from "react-router-dom";
import { 
    Section, Div, HorizontalLine
} from "./style";

function SearchResult() {
    return (
        <>
        <Section>
            <Div>
                <Link to="/">
                    <span>Back</span>    
                </Link>
                <span>Seach result</span>
            </Div>
            <HorizontalLine/>
        </Section>
        </>
    )
}

export default SearchResult;