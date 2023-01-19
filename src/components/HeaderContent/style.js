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
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-family: var(--h1-font-title);
        font-size: var(--h1-size-title);
        line-height: var(--h1-line-height-title);
        background: ${props => props.titleColor};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: 0;
    }
`

export const InputSearch = styled.div`
    transition: all .2s ease;

    input {
        width: 514px;
        height: 56px;
        border-radius: 4px;
        border: 1px solid var(--default-color-input);
        padding: 16px;
        background: transparent;
        display: block;
        color: #ffffff;

        &:focus ~ label {
            font-size:14px;
            top: -74px;]
            transition: all .2s ease;

        }

        &:valid ~ label {
            transition: all .2s ease;

            top: -74px;
        }
    } 

    .search-placeholder {
        width: 24px;
        position: relative;
        left: 16px;
        bottom: 46px;
        color: var(--default-color-placeholder);
        font-size: 16px;
        line-height: 16px;
        z-index: 10;
        transition: all .2s ease;
    }

    .search-icon {
        width: 24px;
        height: auto;
        position: relative;
        left: 274px;
        bottom: 38px;
        cursor: pointer;
        transition: all .2s ease;

    }
`