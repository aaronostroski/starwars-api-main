export const insertReview = (episode_id, reviewData) => {
    const storedReviews = JSON.parse(localStorage.getItem(episode_id));

    if(storedReviews) {
        storedReviews.push(reviewData)
        localStorage.setItem(episode_id, JSON.stringify(storedReviews));
    } else {
        localStorage.setItem(episode_id, JSON.stringify([reviewData]));
    }
}

export const listReviews = episode_id => {
    const reviewsList = JSON.parse(localStorage.getItem(episode_id));

    if(reviewsList) {
        return reviewsList.reverse();
    } else {
        return [];
    }
}


export const thumbsReview = (episode_id, indexArrayReview, thumb) => {
    let reviews = listReviews(episode_id);

    reviews = reviews.map((prevReview, index) => {
        console.log(prevReview["thumbs_up"]);
        if(thumb == "up") {
            return index == indexArrayReview 
                ? {...prevReview, "thumbs_up": ++prevReview["thumbs_up"] }
                : {...prevReview }
        } else {
            return index == indexArrayReview 
            ? {...prevReview, "thumbs_down": ++prevReview["thumbs_down"] }
            : {...prevReview }
        }
    });

    reviews.reverse();
    localStorage.setItem(episode_id, JSON.stringify(reviews));
}