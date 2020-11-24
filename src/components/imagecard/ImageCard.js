import React from 'react';
import styles from './Imagecard.module.css';
import useModal from '../../hooks/modal/useModal';
import Modal from '../../hooks/modal/Modal';
import { faEye, faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatThousand } from '../../hooks/numberrendering/numberrendering';

const ImageCard = ({ image }) => {
    const views = <FontAwesomeIcon icon={faEye} />;
    const up = <FontAwesomeIcon icon={faArrowAltCircleUp} />;
    const down = <FontAwesomeIcon icon={faArrowAltCircleDown} />;
    const viewK = formatThousand(image.views);
    const upK = formatThousand(image.ups);
    const downK = formatThousand(image.downs);

    const imageDetails = image.images[0];
    const hasDescription = imageDetails.description !== null;
    const { isVisible, openModal, closeModal } = useModal();

    return (
        <React.Fragment>
            <div className={styles.imgurCard} key={image.id} onClick={openModal}>
                <div className={styles.cardTop}>
                    <div className={styles.cardMedia}>
                        {(imageDetails.mp4 && (
                            <video autoPlay loop muted preload="auto">
                                <source src={imageDetails.mp4} type="video/mp4" />
                            </video>
                        )) || <img alt="alt" className={styles.body2} src={imageDetails.link} />}
                    </div>
                </div>
                <div className={styles.cardBottom}>
                    <div className={styles.cardTitle}>
                        {imageDetails.description ? (
                            <p className={styles.cardDesc}>{imageDetails.description}</p>
                        ) : (
                            <p className={styles.cardDesc}>{image.title}</p>
                        )}
                    </div>
                    <div className={styles.cardDetails}>
                        <div className={styles.cardVoteUp}>
                            {up}
                            <span>{upK ? upK : image.ups}</span>
                        </div>
                        <div className={styles.cardVoteDown}>
                            {down}
                            <span>{downK ? downK : image.downs}</span>
                        </div>
                        <div className={styles.cardViews}>
                            {views}
                            <span>{viewK ? viewK : image.views}</span>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isShowing={isVisible} hide={closeModal} image={image} />
        </React.Fragment>
    );
};

export default ImageCard;
