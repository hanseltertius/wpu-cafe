import { FormEvent } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import { ratings } from './AddToReview.constants';
import styles from './AddToReview.module.css';
import { IReview } from '../../../types/review';

interface IPropTypes {
  id: string;
  menuItemId: string;
}

const AddToReview = (props: IPropTypes) => {
  const { id, menuItemId } = props;

  /**
   * TODO :
   *
   * - Layout
   *  - reviewer name
   *  - ratings (1 - 5)
   *  - comment
   *
   * 1. bikin layout container
   * i. Reviewer Name
   * ii. Ratings (sementara pake select box), paling coba yang star
   *
   */

  /**
   *
   * Sample Payload :
   * {
   *    "menuItemId": "item-uuid",
   *    "reviewerName": "John Smith",
   *    "rating": 5,
   *    "comment": "Excellent coffee, would order again!"
   * }
   *
   */

  const handleReview = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const reviewer_name = form.reviewerName.value as string;
    if (!reviewer_name) return;

    const rating = form.rating.value as number;
    const comment = form.comment.value as string;

    const payload: IReview = {
      menu_item_id: menuItemId,
      reviewer_name,
      rating,
      comment,
    };

    // TODO : call API

    console.log('payload : ', payload);
  };

  // sementara pake select dulu, baru pake stars
  return (
    <form id={id} className={styles.form} onSubmit={handleReview}>
      <Input
        id="reviewerName"
        label="Reviewer Name"
        placeholder="Reviewer Name"
        isRequired
      />
      <Select id="rating" label="Rating" options={ratings} />
      <Input
        id="comment"
        label="Comment"
        placeholder="Add a comment (optional)"
      />
      <Button id="submit" type="submit">
        Submit a review
      </Button>
    </form>
  );
};

export default AddToReview;
