import { JSX } from 'react';
import ReactModal from 'react-modal';
import styles from './Popup.module.css';
import Button from '../../ui/Button';
import { ButtonColor, ButtonIconType } from '../../ui/Button/Button.constants';
import Text from '../../ui/Text';

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
      <div className="popup-form">
        <div className="header primary">
          <Text id="title" className="form-title">
            {title}
          </Text>
          <Button
            id="close-popup"
            isIcon
            iconType={ButtonIconType.CLOSE}
            isCircularIcon
            color={ButtonColor.TRANSPARENT}
            onClick={handleClose}
          />
        </div>
        <div className="content">{children}</div>
      </div>
    </ReactModal>
  );
};

export default Popup;
