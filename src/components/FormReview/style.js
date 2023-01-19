import styled from 'styled-components';

export const ReviewsBox = styled.div`
    max-width: 438px;
`;
export const Form = styled.form`
    width: 449px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    "name email"
    "comment comment"
    "submit submit";
    column-gap: 13px;
    row-gap: 15px;

    textarea:focus, input:focus{
        outline: 0;
    }
    textarea {
        resize: none;
    }
        
    input[name="name"],
    input[name="email"],
    textarea[name="comment"] {
        border: 1px solid #999999;
        box-sizing: border-box;
        border-radius: 4px;
        height: 58px;
        color: #777777;        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        padding: 20px 10px;
    }
    input[name="name"] {
        grid-area: name;
    }
    input[name="email"] {
        grid-area: email;
    }
    textarea[name="comment"] {
        grid-area: comment;
        height: 121px;
    }

    button[type="submit"] {
        border: none;
        grid-area: submit;
        height: 56px;
        background: linear-gradient(266.4deg, #EB5757 0%, #F2994A 100%);
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #fff; 
        border-radius: 4px;
    }

    button[type="submit"]:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

export const Comments = styled.div`
    margin: 35px 0 29px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Comment = styled.div`
    p {
        padding: 0;
        margin: 0;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #777777;
    }

    img {
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
        margin-right: 16px;
        color: #FF5656
    }
    
    .thumbs-up {
        color: #00BE3B;
    
    }
`;