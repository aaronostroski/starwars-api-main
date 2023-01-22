import styled from 'styled-components';

export const Header = styled.header`
    max-width: var(--lg-container);
    margin: auto;
    background-image: url('${props => props.banner}');
    width: auto;
    height: 226px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-family: var(--h1-font-title);
    font-size: var(--h1-size-title);
    line-height: var(--h1-line-height-title);
    background: ${props => props.titleColor};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 0;
`

export const LabelSearch = styled.label`
    max-width: 800px;
    width: 100%;
    position: relative;
    color: red;
`;

export const SearchIcon = styled.img`
    position: absolute;
    top: 20px;
    left: 32px;
`;

export const InputSearch = styled.input`
    border-radius: 6px;
    height: 69px;
    padding: 0 20px 0px 80px;
    font-size: 100%;
    max-width: 800px;
    width: 100%;
`;

export const ButtonSearch = styled.button`
    position: absolute;
    top: 11px;
    right: 32px;
    border: none;
    border-radius: 6px;
    width: 96px;
    height: 46px;
    cursor: pointer;
    background-image: linear-gradient(64.17deg, #FF5A56 15.66%, #FF9A42 83.04%);
    background-size: 300% 100%;
    color: var(--background-theme);
    text-transform: uppercase;
    font-size: 12.8px;
    font-weight: 500;
    letter-spacing: 1px;
    moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    -webkit-transition: all .s ease-in-out;
    transition: all .2s ease-in-out;

    &:hover {
        background-position: 50% 0;
    }
`;