import  styled, { keyframes } from 'styled-components';

const contentLoading = keyframes`
    0% {
        background-color: hsl(200, 20%, 70%);
    }

    100% {
        background-color: hsl(200, 20%, 95%);
    }
`;

export const Div = styled.div`
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    // grid-gap: 31px;

    // .slick-active {
    //     margin-right: 10px;
    // }

    // .slick-list {
    //     height: 405px;
    // }
`;

export const Card = styled.div`
    width: 311px;
    height: 401px;
    border-radius: 3px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
`;

export const CardImage = styled.div`
    height: 169px;
    background: var(--background-card-movie);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 54px;
        height: 72px;
    }
`

export const CardSeparator = styled.div`
    height: 6px;
    background: var(--separator-card-movie);
`

export const CardInfo = styled.div`
    padding: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    img {
        width: 13px;
        height: 16px;
    }

    span {
        font-family: var(--title-font-card-movie);
        font-size: var(--title-size-card-movie); 
        line-height: var(--title-line-height-card-movie);
        color: var(--title-color-card-movie);
        font-weight: 400;
        margin:0;
    }

    p {
        color: var(--description-color-card-movie);
        font-weight: 400;
        line-height: var(--description-line-height-card-movie);
        font-size: var(--description-size-card-movie);
        flex-grow: 2;
    }
`
export const CardFooter = styled.div`
    &:first-child {
        margin-bottom: 4px;
    }

    div {
        display: flex;
        align-items: center;  
    }

    img {
        margin-right: 11px;
    }

    span {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        color: #777777;
    }
`

export const DivLoading = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 31px;  
`

export const CardLoading = styled.div`
    width: 311px;
    height: 401px;
    border-radius: 3px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    opacity: .7;
    animation: ${contentLoading} 1s linear infinite alternate;
`

export const CardImageLoading = styled.div`
    background: linear-gradient(147.51deg, #E0DFDF 2.63%, rgba(204, 204, 204, 0.1) 53.31%, #E0DFDF 98.34%);
    height: 169px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const CardSeparatorLoading = styled.div`
    height: 6px;
    background: #F5F5F5;
`

export const CardInfoLoading = styled.div`
    padding: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: #F5F5F5;

    span {
        width:192px;
        height: 29px;
        margin:0;
        background: linear-gradient(147.51deg, #E0DFDF 2.63%, rgba(204, 204, 204, 0.1) 53.31%, #E0DFDF 98.34%);
        border-radius: 6px;
        opacity: .7;
        animation: ${contentLoading} 1s linear infinite alternate;
    }

    p {
        width: 281px;
        height: 52px;
        background: linear-gradient(147.51deg, #E0DFDF 2.63%, rgba(204, 204, 204, 0.1) 53.31%, #E0DFDF 98.34%);
        opacity: .7;
        animation: ${contentLoading} 1s linear infinite alternate;    
    }
`

export const CardFooterLoading = styled.div`
    background: linear-gradient(147.51deg, #E0DFDF 2.63%, rgba(204, 204, 204, 0.1) 53.31%, #E0DFDF 98.34%);
    margin-top: auto;
    width: 131px;
    height: 48px;
    opacity: .7;
    animation: ${contentLoading} 1s linear infinite alternate;
`

