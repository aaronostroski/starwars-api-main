import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { PrevArrow, NextArrow } from "../../shared/Arrows";
import { getCharacters, getCharacter } from '../../service/characters';
import { getPlanet } from '../../service/planets';
import { 
    Div, Card, CardFooter,
    DivLoading, CardLoading, ImageLoading, TextLoading,
} from "./style";

import userCicleIcon from "../../assets/user-cicle.svg";
import mapMarkerAltIcon from "../../assets/map-marker-alt.svg";

function CardCharacters({episode_id, charactersData = [], q}) {
    const [characters, setCharacters] = useState([]);
    const [navigation, setNavigation] = useState({ page: 1,  cardToShow: 4, total: charactersData.length });
    const [loadingContent, setLoadingContent] = useState(true);

    const settingsCarousel = {
        infinite: true,
        speed: 500,
        slidesToScroll: 4,
        autoplay: false,
        slidesToShow: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        adaptiveHeight: true,
        beforeChange: (current, next) => setNavigation(prevNavigation => ({...prevNavigation, page: prevNavigation.page + 1}) ),
    };

    if(charactersData.length > 0) {
        charactersData = charactersData.map( characterUrl => {
            return characterUrl.replace(/[^0-9]/g, '');
        })
    }

    useEffect(() => {
        if(episode_id) {          
            const { page, cardToShow } = navigation;  
            charactersData.forEach( (idCharacter, index) => {
                if(page * (index + 1) <= cardToShow) {
                    getCharacter(idCharacter, character => {
                        const idPlanet = character.homeworld.replace(/[^0-9]/g, '');
                        getPlanet(idPlanet, ({name}) => {
                            setCharacters( prevCharacters => prevCharacters.concat({...character, planetName: name}));
                        })
                    });
                }    
            });
        } else {
            getCharacters(q, ({results}) => {
                setLoadingContent(false);
                setCharacters(results);
            });
        }
    }, []);
    

    return (
        <>
        { loadingContent && characters.length + 1 == navigation.page * navigation.cardToShow
        ? <LoadingContent /> 
        : <Div>
            <Slider {...settingsCarousel}>
            {characters.map( ({name, planetName}, index) => (
            <Card key={index}>
                <img src={userCicleIcon} alt="Character" />
                <span>
                    {name}
                </span>
                <CardFooter>
                    <img src={mapMarkerAltIcon} alt="mark" />
                    <span className="city">{planetName}</span>
                </CardFooter>
            </Card>
            ))}
            </Slider>
        </Div>
        }
        </> 
    )
}


function LoadingContent() {
    return (
        <DivLoading>
            <CardLoading>
                <ImageLoading>
                </ImageLoading>
                <TextLoading>
                </TextLoading>
                <TextLoading>
                </TextLoading>
            </CardLoading>
            <CardLoading>
                <ImageLoading>
                </ImageLoading>
                <TextLoading>
                </TextLoading>
                <TextLoading>
                </TextLoading>
            </CardLoading>
            <CardLoading>
                <ImageLoading>
                </ImageLoading>
                <TextLoading>
                </TextLoading>
                <TextLoading>
                </TextLoading>
            </CardLoading>
            <CardLoading>
                <ImageLoading>
                </ImageLoading>
                <TextLoading>
                </TextLoading>
                <TextLoading>
                </TextLoading>
            </CardLoading>
        </DivLoading>
    )   
}

export default CardCharacters;