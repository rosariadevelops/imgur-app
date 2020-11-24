import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import ImageModal from '../../components/imagemodal/ImageModal';

const Modal = ({ isShowing, hide, image }) =>
    isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div className={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
                      <div className={styles.modal}>
                          <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={hide}>
                              <span aria-hidden="true" className={styles.closeModalLeft}></span>
                              <span aria-hidden="true" className={styles.closeModalRight}></span>
                          </button>
                          <ImageModal image={image} />
                      </div>
                  </div>
              </React.Fragment>,
              document.body
          )
        : null;

export default Modal;
