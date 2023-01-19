import SectionContent from "../../shared/SectionContent";
import FormReview from "../../components/FormReview";

import commentsIcon from "../../assets/comments.svg";

function Reviews() {
    const title = "Reviews";
    const alt = "Reviews";

    return (
        <SectionContent title={title} src={commentsIcon} alt={alt}>
            <FormReview />
        </SectionContent>
    )
}

export default Reviews;