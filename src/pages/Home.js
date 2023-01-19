import HeaderContent from '../components/HeaderContent'
import Movies from '../components/Movies'
import Characters from '../components/Characters'

import homeBanner from "../assets/background-title-home.png"

export default function Home() {
    const title = "Star Wars movies";
    const titleColor = "var(--h1-font-color)";

    return (
        <>
            <HeaderContent title={title} titleColor={titleColor} banner={homeBanner} enableSearchField={true} />
            <Movies />
            <Characters />
        </>
    );
}