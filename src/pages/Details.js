import { useLocation } from 'react-router-dom';

import HeaderContent from '../components/HeaderContent';
import Synopsis from '../components/Synopsis';
import Characters from '../components/Characters';
import Reviews from '../components/Reviews';

export default function Details() {
    const { title, episode_id, opening_crawl, characters } = useLocation()["state"];

    return (
        <>
            <HeaderContent title={title} />
            <Synopsis opening_crawl={opening_crawl} />
            <Characters episode_id={episode_id} charactersData={characters} />
            <Reviews episode_id={episode_id} />
        </>
    );
}