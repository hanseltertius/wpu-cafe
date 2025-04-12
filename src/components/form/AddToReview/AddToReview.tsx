import { FormEvent } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import { ratings } from './AddToReview.constants';
import styles from './AddToReview.module.css';
import useSelectBoxValue from '../../../hooks/useSelectBoxValue';
import useInputValue from '../../../hooks/useInputValue';
import { createReview } from '../../../services/review.service';
import { useMutation } from '@tanstack/react-query';
import useLoadingStore from '../../../stores/LoadingStore';
import { toast } from 'react-toastify';
import { ButtonColor } from '../../ui/Button/Button.constants';

interface IPropTypes {
  id: string;
  menuItemId: string;
  handleClosePopup: () => void;
}

const AddToReview = (props: IPropTypes) => {
  const { id, menuItemId, handleClosePopup } = props;

  const { setIsProcessing } = useLoadingStore();

  const createReviewMutation = useMutation({
    mutationFn: async (payload: {
      menuItemId: string;
      reviewerName: string;
      rating: number;
      comment?: string;
    }) => {
      return await createReview(payload);
    },
  });

  const handleReview = async (event: FormEvent) => {
    try {
      event.preventDefault();

      const form = event.target as HTMLFormElement;

      const reviewerName = form.reviewerName.value as string;
      if (!reviewerName) return;

      setIsProcessing(true);

      const rating = parseInt(form.rating.value);
      const comment = form.comment.value as string;

      const payload = {
        menuItemId,
        reviewerName,
        rating,
        comment,
      };

      await createReviewMutation.mutateAsync(payload);
      toast.success('Successfully created review');
      handleClosePopup();
    } catch (error: any) {
      toast.error(error?.message ?? 'Failed to create review');
    } finally {
      setIsProcessing(false);
    }
  };

  const reviewerName = useInputValue('');
  const comment = useInputValue('');

  const rating = useSelectBoxValue('');

  // sementara pake select dulu, baru pake stars
  return (
    <form id={id} className={styles.form} onSubmit={handleReview}>
      <div className="form">
        <div className="form-content">
          <Input
            id="reviewerName"
            label="Reviewer Name"
            placeholder="Reviewer Name"
            width="100%"
            isRequired
            value={reviewerName.inputValue}
            onChange={reviewerName.setInputValue}
          />
          <Select
            id="rating"
            label="Rating"
            width="100%"
            options={ratings}
            value={rating.selectBoxValue}
            onChange={rating.setSelectBoxValue}
          />
          <Input
            id="comment"
            label="Comment"
            placeholder="Add a comment (optional)"
            width="100%"
            value={comment.inputValue}
            onChange={comment.setInputValue}
          />
        </div>
        <div className="form-footer">
          <Button
            id="submit"
            type="submit"
            width="100%"
            color={ButtonColor.SECONDARY}
          >
            Submit a review
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddToReview;
