import { createPortal } from 'react-dom';
import classes from './InfoModal.module.css';

const InfoModal = ({ showModal, onClose, description }) => {
  return createPortal(
    showModal ? (
      <div className={classes['modal']}>
        <div className={classes['backdrop']}></div>
        <div className={classes['container']}>
          <div className={classes['remove']} onClick={onClose}>
            X
          </div>
          <div className={classes['description__box']}>
            <p className={classes['description']}>{description}</p>
          </div>
        </div>
      </div>
    ) : (
      <></>
    ),
    document.getElementById('modals')
  );
};

export default InfoModal;
