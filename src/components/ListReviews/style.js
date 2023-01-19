import styled from 'styled-components';

export const Div = styled.div`
    
`;

export const Comment = styled.div`
    margin: 35px 0 29px;
    display: flex;
    justify-content: flex-start;

    & p {
        padding: 0;
        margin: 0;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #777777;
    }

    & img {
        align-self: flex-start;
        margin-right: 9px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
    }
`;

export const Thumbs = styled.div`
    text-align: left;
    margin-top: 12px;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    font-style: normal;

    .thumbs-down {
        cursor: pointer;
        margin-right: 16px;
        color: #FF5656;
    }
    
    .thumbs-up {
        cursor: pointer;
        color: #00BE3B;
    }

    img {
        margin-left: 3px;  
    }
`;