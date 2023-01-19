import styled from 'styled-components';

export const Section = styled.section`
    max-width: var(--lg-container);
    margin: 0px auto;
    padding: 18px 15px 0px;
`;

export const Div = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    row-gap: 23px;

    a {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #009CDA;

        &:before {
            content:"<<"
        }

        span {
            margin-left: 5px;
            color: #009CDA;
        }
    }

    span {
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #666666;
        margin-bottom: 5px;
    }
`;

export const Description = styled.div`
    margin: 27px auto 0;
    height: auto;
    max-width: 652px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #777777;

    p {
        margin: 0;  
    }
`;

