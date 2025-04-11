import { FormEvent } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import { ratings } from './AddToReview.constants';
import styles from './AddToReview.module.css';
import { IReview } from '../../../types/review';
import useSelectBoxValue from '../../../hooks/useSelectBoxValue';
import useInputValue from '../../../hooks/useInputValue';

interface IPropTypes {
  id: string;
  menuItemId: string;
}

const AddToReview = (props: IPropTypes) => {
  const { id, menuItemId } = props;

  const handleReview = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const reviewer_name = form.reviewerName.value as string;
    if (!reviewer_name) return;

    const rating = parseInt(form.rating.value);
    const comment = form.comment.value as string;

    const payload: IReview = {
      menu_item_id: menuItemId,
      reviewer_name,
      rating,
      comment,
    };

    console.log('payload : ', payload);
  };

  const reviewerName = useInputValue('');
  const comment = useInputValue('');

  const rating = useSelectBoxValue('');

  // sementara pake select dulu, baru pake stars
  return (
    <form id={id} className={styles.form} onSubmit={handleReview}>
      <div className={styles['form-content']}>
        <Input
          id="reviewerName"
          label="Reviewer Name"
          placeholder="Reviewer Name"
          isRequired
          value={reviewerName.inputValue}
          onChange={reviewerName.setInputValue}
        />
        <Select
          id="rating"
          label="Rating"
          options={ratings}
          value={rating.selectBoxValue}
          onChange={rating.setSelectBoxValue}
        />
        <Input
          id="comment"
          label="Comment"
          placeholder="Add a comment (optional)"
          value={comment.inputValue}
          onChange={comment.setInputValue}
        />
      </div>
      <div className={styles['form-footer']}>
        <Button id="submit" type="submit" width="100%">
          Submit a review
        </Button>
      </div>
    </form>
  );
};

export default AddToReview;
