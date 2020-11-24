import React from 'react';
import styles from './ImageDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye, faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/fontawesome-free';
import { formatThousand } from '../../../hooks/numberrendering/numberrendering';

const ImageDetails = ({ image }) => {
    const star = <FontAwesomeIcon icon={faStar} />;
    const views = <FontAwesomeIcon icon={faEye} />;
    const up = <FontAwesomeIcon icon={faArrowAltCircleUp} />;
    const down = <FontAwesomeIcon icon={faArrowAltCircleDown} />;
    const viewK = formatThousand(image.views);
    const scoreK = formatThousand(image.score);
    const upK = formatThousand(image.ups);
    const downK = formatThousand(image.downs);

    return (
        <div className={styles.imgDetails}>
            <div className={styles.imgScore}>
                {star}
                <span>{scoreK ? scoreK : image.score}</span>
            </div>
            <div className={styles.imgVoteUp}>
                {up}
                <span>{upK ? upK : image.ups}</span>
            </div>
            <div className={styles.imgVoteDown}>
                {down}
                <span>{downK ? downK : image.downs}</span>
            </div>
            <div className={styles.imgViews}>
                {views}
                <span>{viewK ? viewK : image.views}</span>
            </div>
        </div>
    );
};

export default ImageDetails;
