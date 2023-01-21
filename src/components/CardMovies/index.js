import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { PrevArrow, NextArrow } from "../../shared/Arrows";
import { getMovies } from '../../service/movies';
import { 
    Div, Card, CardImage, CardSeparator, CardInfo, CardFooter,
    DivLoading, CardLoading, CardImageLoading, CardSeparatorLoading, CardInfoLoading, CardFooterLoading,
    OpeningCrawl
} from "./style";

import fileIcon from "../../assets/file-image.svg";
import chairDirectorIcon from "../../assets/chair-director-icon.svg";
import calendarIcon from "../../assets/calendar-icon.svg";

function CardMovies({q}) {
    const [movies, setMovies] = useState([]);
    const [loadingContent, setLoadingContent] = useState(true);

    const settingsCarousel = {
        infinite: true,
        speed: 500,
        slidesToScroll: 3,
        autoplay: false,
        slidesToShow: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        adaptiveHeight: true,
    };

    useEffect(() => {
        getMovies(q, ({results}) => {
            setLoadingContent(false);
            setMovies(results);
        });
    }, [])
    
    return (
        <>
        { loadingContent
        ? <LoadingContent settingsCarousel={settingsCarousel} />
        : <Div>
            <Slider {...settingsCarousel}>
            {movies.map( ({title, release_date, director, episode_id, opening_crawl, characters}) => (
                <Link key={episode_id} to={{pathname: `/details/${episode_id }`}} state={{ title, episode_id, opening_crawl, characters }}> 
                    <Card>
                        <CardImage>
                            <img src={fileIcon} alt={title} />
                        </CardImage>
                        <CardSeparator></CardSeparator>
                        <CardInfo>
                            <span>
                                {title}
                            </span>
                            <OpeningCrawl>
                                {opening_crawl}
                            </OpeningCrawl>
                            <CardFooter>
                                <div>
                                    <img src={chairDirectorIcon} alt="Director" />
                                    <span>{director}</span>
                                </div>
                                <div>
                                    <img src={calendarIcon} alt="Release Date" />
                                    <span>{release_date}</span>
                                </div>
                            </CardFooter>
                        </CardInfo>  
                    </Card>
                </Link>
            ))}
            </Slider>
        </Div>}
        </>
    )
}

function LoadingContent({settingsCarousel}) {
    return (
        <DivLoading>
            <CardLoading>
            <CardImageLoading>
            </CardImageLoading>
            <CardSeparatorLoading></CardSeparatorLoading>
            <CardInfoLoading>
                    <span>
                    </span>
                    <p>
                    </p>
                    <CardFooterLoading>
                    </CardFooterLoading>
                </CardInfoLoading>  
            </CardLoading>
            <CardLoading>
            <CardImageLoading>
            </CardImageLoading>
            <CardSeparatorLoading></CardSeparatorLoading>
            <CardInfoLoading>
                    <span>
                    </span>
                    <p>
                    </p>
                    <CardFooterLoading>
                    </CardFooterLoading>
                </CardInfoLoading>  
            </CardLoading>
            <CardLoading>
            <CardImageLoading>
            </CardImageLoading>
            <CardSeparatorLoading></CardSeparatorLoading>
            <CardInfoLoading>
                    <span>
                    </span>
                    <p>
                    </p>
                    <CardFooterLoading>
                    </CardFooterLoading>
                </CardInfoLoading>  
            </CardLoading>
        </DivLoading>
    )   
}

export default CardMovies;