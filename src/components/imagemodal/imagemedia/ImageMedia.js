import React from 'react';
import styles from './ImageMedia.module.css';

const ImageDetails = ({ image }) => {
    const imageDetails = image.images[0];
    const hasVideo = imageDetails.type === 'video/mp4' || imageDetails.type === 'image/gif';
    const hasImg = imageDetails.type === 'image/jpeg' || imageDetails.type === 'image/png';
    const allImages = image.images;

    return (
        <div className={styles.modalMedia}>
            {hasVideo ? (
                <div>
                    {allImages &&
                        allImages.map((image) => (
                            <video key={image.id} autoPlay loop muted preload="auto">
                                <source src={image.mp4} type="video/mp4" />
                            </video>
                        ))}
                </div>
            ) : null}
            {hasImg ? <div>{allImages && allImages.map((image) => <img key={image.id} alt={image.id} className={styles.img} src={image.link} />)}</div> : null}
        </div>
    );
};

export default ImageDetails;
