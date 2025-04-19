import { JSX } from 'react';
import { Sheet } from 'react-modal-sheet';
import useBottomModalStore from '../../../stores/BottomModalStore';

interface IPropTypes {
  title: string;
  children: string | JSX.Element;
  height: string;
}

const BottomModal = (props: IPropTypes) => {
  const { title, children, height } = props;
  const { isBottomModalOpen, setIsBottomModalOpen } = useBottomModalStore();

  return (
    <Sheet
      isOpen={isBottomModalOpen}
      onClose={() => setIsBottomModalOpen(false)}
      detent="content-height"
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Header>
          <div className="modal-header-container">
            <div className="modal-header-title-container">
              <div className="modal-header-title">{title}</div>
            </div>
          </div>
        </Sheet.Header>
        <Sheet.Content>
          <Sheet.Scroller>
            <div style={{ height }}>{children}</div>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setIsBottomModalOpen(false)} />
    </Sheet>
  );
};

export default BottomModal;
