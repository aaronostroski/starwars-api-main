import CardCharacters from "../CardCharacters";
import SectionContent from "../../shared/SectionContent";

import searchIcon from "../../assets/characters.svg";

function Characters({episode_id, charactersData, q}) {
    const title = "Characters";
    const alt = "Characters";

    return (
        <SectionContent title={title} src={searchIcon} alt={alt}>
            <CardCharacters episode_id={episode_id} charactersData={charactersData} q={q} />
        </SectionContent>
    )
}

export default Characters;