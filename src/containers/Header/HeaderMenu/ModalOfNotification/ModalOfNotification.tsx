import { useEffect } from 'react';
import { ModalStyle } from './ModalOfNotification.styled';
import type { IModalProps } from '../../../../types/user';

const ModalOfNotification = ({
  visible = false,
  title = '',
  content = '',
  footer = '',
  onClose,
}: IModalProps) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  if (!visible) return null;

  return (
    <ModalStyle>
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
          </div>
          <div className="modal-body">
            <div className="modal-content">{content}</div>
          </div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </ModalStyle>
  );
};

export default ModalOfNotification;
