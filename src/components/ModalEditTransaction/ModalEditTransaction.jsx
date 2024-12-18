import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ModalEditTransaction.module.css';
import EditTransactionForm from 'components/EditTransactionForm/EditTransactionForm';

const ModalEditTransaction = ({ closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const addCloseEvent = event => {
      event.key === 'Escape' && closeModal();
    };
    document.addEventListener('keydown', addCloseEvent);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', addCloseEvent);
    };
  });

  const closeOnClickOutside = event => {
    event.target === event.currentTarget && closeModal();
  };

  return (
    <>
      <div
        ref={modalRef}
        className={styles.editModal}
        onClick={closeOnClickOutside}
      >
        <div className={styles.modalBg}>
          <EditTransactionForm closeModal={closeModal} />
        </div>
      </div>
    </>
  );
};

ModalEditTransaction.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ModalEditTransaction;
