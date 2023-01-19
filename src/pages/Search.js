import { useSearchParams } from 'react-router-dom';

import HeaderContent from '../components/HeaderContent'
import SearchResult from '../components/SearchResult'
import Movies from '../components/Movies'
import Characters from '../components/Characters'

import homeBanner from "../assets/background-title-home.png"

export default function Search() {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
    const title = "Star Wars movies";
    const titleColor = "var(--h1-font-color)";

    return (
        <>
            <HeaderContent title={title} titleColor={titleColor} banner={homeBanner} enableSearchField={true} q={q} />
            <SearchResult />
            <Movies q={q} />
            <Characters q={q} />
        </>
    );
}