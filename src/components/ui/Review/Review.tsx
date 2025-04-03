import { IReview } from '../../../types/review';
import styles from './Review.module.css';

interface IPropTypes {
  review: IReview;
}

const Review = (props: IPropTypes) => {
  const { review } = props;

  return (
    <div className={styles.container}>
      <div className={styles.rating}>
        <h4>{review.reviewer_name}</h4>
        <div>{review.rating}/5</div>
      </div>
      {review.comment && review.comment.length > 0 && (
        <div className={styles.comment}>{review.comment}</div>
      )}
    </div>
  );
};

export default Review;
