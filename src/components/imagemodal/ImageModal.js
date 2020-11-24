import React from 'react';
import styles from './ImageModal.module.css';
import User from './user/User';
import ImageDetails from './imagedetails/ImageDetails';
import ImageMedia from './imagemedia/ImageMedia';

const ImageModal = ({ image }) => {
    const imageDetails = image.images[0];

    return (
        <React.Fragment>
            <div className={styles.modalDetails}>
                <div className={styles.imgTitle}>
                    <h3>{image.title ? image.title : null}</h3>
                </div>
                <User id={image.id} username={image.account_url} />
                <ImageDetails image={image} />
                <div className={styles.imgDesc}>{imageDetails.description ? <p>{imageDetails.description}</p> : null}</div>
            </div>
            <ImageMedia image={image} />
            {image.tags.length > 0 ? (
                <div>
                    <h3>Tags:</h3>
                    <div className={styles.tags}>{image.tags && image.tags.map((tag) => <div key={tag.accent}>{tag.display_name}</div>)}</div>
                </div>
            ) : null}
        </React.Fragment>
    );
};

export default ImageModal;
