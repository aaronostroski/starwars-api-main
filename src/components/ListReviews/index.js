import { Div, Comment, Thumbs } from "./style";

import userAvatarIcon from "../../assets/user-avatar.svg";
import thumbsDownIcon from "../../assets/thumbs-down.svg";
import thumbsUpIcon from "../../assets/thumbs-up.svg";

function ListReviews({reviews, thumbsComment}) {
    return (
        <Div>
            {reviews && reviews.length > 0 && reviews.map(({name, comment, thumbs_down, thumbs_up}, index) => (
            <Comment>
                <img src={userAvatarIcon} alt={name} />
                <div className="review">
                    <p>
                        {comment}
                    </p>
                    <Thumbs>
                        <span className="thumbs-down" onClick={() => thumbsComment(index, "down")}>
                            {thumbs_down}
                            <img src={thumbsDownIcon} alt="thumbs-down" />
                        </span>
                        <span className="thumbs-up" onClick={() => thumbsComment(index, "up")}>
                            {thumbs_up}
                            <img src={thumbsUpIcon} alt="thumbs-up" />
                        </span>
                    </Thumbs>
                </div>
            </Comment>
            ))}
        </Div>
    )
}

export default ListReviews;

