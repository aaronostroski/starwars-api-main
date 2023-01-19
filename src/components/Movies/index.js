import CardMovies from "../CardMovies";
import SectionContent from "../../shared/SectionContent";

import searchIcon from "../../assets/movies.svg";

function Movies({ q }) {
    const title = "Movies";
    const alt = "Movies";

    return (
        <SectionContent title={title} src={searchIcon} alt={alt}>
            <CardMovies q={q} />
        </SectionContent>
    )
}

export default Movies;