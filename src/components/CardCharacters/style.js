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
    .slick-active {
        margin-right: 10px;
    }
`
export const Card = styled.div`
    width: 226px !important;
    height: 204px;
    background: #F5F5F5;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding:16px 0 7px 0;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    span {
        font-family: var(--title-font-card-movie);
        font-size: var(--title-size-card-movie); 
        line-height: var(--title-line-height-card-movie);
        color: var(--title-color-card-movie);
        font-weight: 400;
        margin:0;
    }
`

export const CardFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:first-child {
        width: 10px;
        height: 14px;
        margin-bottom: 3px;
    }

    .city {
        font-family: 'Ubuntu';
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #666666;  
    }
`

export const DivLoading = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;  
`

export const CardLoading = styled.div`
    width: 226px;
    height: 204px;
    background: #F5F5F5;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding:16px 0 7px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const ImageLoading = styled.div`
    width: 84px;
    height: 84px;
    border-radius: 50%;
    background: linear-gradient(147.51deg, #E0DFDF 2.63%, rgba(204, 204, 204, 0.1) 53.31%, #E0DFDF 98.34%);
    opacity: .7;
    animation: ${contentLoading} 1s linear infinite alternate;
`


export const TextLoading = styled.div`
    width:129px;
    height: 32px;
    margin:0;
    background: linear-gradient(147.51deg, #E0DFDF 2.63%, rgba(204, 204, 204, 0.1) 53.31%, #E0DFDF 98.34%);
    opacity: .7;
    animation: ${contentLoading} 1s linear infinite alternate;
`

