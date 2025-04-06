import { JSX } from 'react';
import ReactModal from 'react-modal';
import styles from './Popup.module.css';
import Button from '../../ui/Button';
import { ButtonColor, ButtonIconType } from '../../ui/Button/Button.constants';

interface IPropTypes {
  isOpen: boolean;
  title: string;
  width: string;
  height: string;
  children: string | JSX.Element;
  handleClose: () => void;
  zIndex?: number;
}

const Popup = (props: IPropTypes) => {
  const {
    isOpen,
    title,
    width,
    height,
    children,
    handleClose,
    zIndex = 1,
  } = props;
  // react modal

  // header component (ada title dan juga close button), align justify-content nya itu ke center

  // children

  ReactModal.setAppElement('#root');

  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        content: {
          width: `${width}`,
          height: `${height}`,
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: 0,
          zIndex: zIndex,
        },
      }}
    >
      <div className={styles['modal-container']}>
        <div className={`${styles['modal-header-container']}`}>
          <h1>{title}</h1>
          <Button
            id="close-modal"
            isIcon
            iconType={ButtonIconType.CLOSE}
            isCircularIcon
            color={ButtonColor.DANGER}
            onClick={handleClose}
          />
        </div>
        <div className={styles['modal-content-container']}>{children}</div>
      </div>
    </ReactModal>
  );
};

export default Popup;
