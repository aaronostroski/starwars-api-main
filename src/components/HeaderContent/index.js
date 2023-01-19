import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Header, Div, InputSearch } from "./style";

import searchIcon from "../../assets/search-icon.svg";

function HeaderContent({title, titleColor = "var(--default-color-title)", banner, enableSearchField = false, q = ""}) {
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
        <Header banner={banner}>
            <Div titleColor={titleColor}>
                <h1>
                    {title}
                </h1>
                {enableSearchField && 
                    <InputSearch>
                        <input ref={searchRef} type="text" name="search-movie" id="search-movie" required onKeyUp={searchResults} defaultValue={q} />
                        <label htmlFor="search-movie" className="search-placeholder">Search movies or characters</label>
                        <img className="search-icon" src={searchIcon} alt="Search" onClick={ev => searchResults(ev)} role="button"></img>
                    </InputSearch>
                }
            </Div>
        </Header>
    )
}

export default HeaderContent;