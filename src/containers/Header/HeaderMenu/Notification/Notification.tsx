import { useState, Fragment } from 'react';
import { OpenButton, CloseButton } from './Notification.styled';
import ModalOfNotification from '../ModalOfNotification/ModalOfNotification';

const Notification: React.FC = () => {
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);
  return (
    <Fragment>
      <OpenButton onClick={() => setModal(true)}>
        <img src="./assets/image/notification.svg" alt="notification" />
      </OpenButton>
      <ModalOfNotification
        visible={isModal}
        title="Notification"
        content={<p>Что-то важное</p>}
        footer={<CloseButton onClick={onClose}>Close</CloseButton>}
        onClose={onClose}
      />
    </Fragment>
  );
};

export default Notification;
