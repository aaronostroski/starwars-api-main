import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Header, Title, InputSearch, LabelSearch, SearchIcon, ButtonSearch } from "./style";

import searchIcon from "../../assets/search-icon.svg";

import bg1 from "../../assets/bg-search-1.jpg";

function HeaderContent({title, titleColor = "var(--default-color-title)", enableSearchField = false, q = ""}) {
    const searchRef = useRef();
    const navigate = useNavigate();

    const searchResults = ev => {
        const q = searchRef.current.value;
        const ts = + new Date();

        if(ev.key == 'Enter' || ev.type == "click") {
            navigate({ pathname: "/search", search: `q=${q}`, state: { ts } })
        }
    }

    return (
        <Header banner={bg1}>
            <Title titleColor={titleColor}>
                {title}
            </Title>
            <LabelSearch htmlFor="q">
                <SearchIcon src={searchIcon} alt="Buscar" />
                <InputSearch placeholder="Busca por filmes, personagens, autores ..." ref={searchRef} required onKeyUp={searchResults} defaultValue={q} />
                <ButtonSearch type="submit">Buscar</ButtonSearch>
            </LabelSearch>
        </Header>
    )
}

export default HeaderContent;