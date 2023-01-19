import { useState } from "react";

import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { insertReview, listReviews, thumbsReview } from "../../lib/review";

import ListReviews from "../ListReviews";
import { ReviewsBox, Form } from "./style";

function FormReview() {
    const { episode_id } = useLocation()["state"];
    const { handleSubmit, register, reset  } = useForm();
    const [reviews, setReviews] = useState( listReviews(episode_id) );

    const emailIsValid = email => {
        const mailRegex = /^\(([a-zA-Z0-9 _\-\.\+]+)\)\ ([a-zA-Z0-9\n_\!\#\$\%\&amp;\'\*\-\/\=\?\^\`\{\|\}\~\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\\n.[0-9]{1,3}\.)|(([a-zA-Z0-9\w\n_\!\#\$\%\&\'\*\-\/\=\?\^\`\{\|\}\~]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3}\n)$|^([a-zA-Z0-9 \w\n_\!\#\$\%\&'\*\-\/\=\?\^\`\{\|\}\~\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\\n.[0-9]{1,3}\.)|(([a-zA-Z0-9_\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
        const validMail = mailRegex.test(email.toLowerCase());
        return validMail;
    }
    
    const thumbsComment = (index, thumbs) => {
        thumbsReview(episode_id, index, thumbs);
        setReviews( listReviews(episode_id) );
    }

    const onSubmit = ({name, email, comment}) => {
        if(emailIsValid(email)) {
            const review = {
                name,
                email: email.toLowerCase(),
                comment,
                dateCreated: new Date(),
                thumbs_up: 0,
                thumbs_down: 0,
            };

            insertReview(episode_id, review);
            setReviews( listReviews(episode_id) );
            reset();
        } else {
            alert("Invalid e-mail!");
        }
    };

    return (
        <ReviewsBox>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" {...register("name", { required: true })} />
                <input type="email" placeholder="E-mail" {...register("email", { required: true })} />
                <textarea placeholder="Comment"  {...register("comment", { required: true })} ></textarea>
                <button type="submit">Enviar</button>
            </Form>
            <ListReviews reviews={reviews} thumbsComment={thumbsComment} />
        </ReviewsBox>
    )
}

export default FormReview;

