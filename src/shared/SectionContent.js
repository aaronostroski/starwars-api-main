import styled from 'styled-components';

const Section = styled.section`
    max-width: var(--lg-container);
    margin: 45px auto;
    padding: 0 15px;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    h2 {
        font-family: var(--font-title-section);
        font-weight: 400;
        font-size: 22px; 
        line-height: 30px;
        background: #666666;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin:0;
    }

    img {
        width: 22px;
        heigth: 22px;
        margin-right: 5px;
    }
`;

function SectionContent({title, src, alt, children}) {
    return (
        <Section>
            <Div>
                <img src={src} alt={alt} />
                <h2>{title}</h2>
            </Div>
            {children}
        </Section>
    )
} 

export default SectionContent;