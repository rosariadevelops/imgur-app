import React from 'react';
import { useSelector } from 'react-redux';
import ImageCard from '../imagecard/ImageCard';
import ParamFiltering from '../paramfiltering/ParamFiltering';
import styles from './Gallery.module.css';
import imgurLogo from './imgur-logo-transparent.png';

const Gallery = () => {
    const unfilteredImages = useSelector((state) => state.images);
    const images = unfilteredImages.filter((image) => image.images);

    /* ------------------------------------------------------
        Masonry Grid hack - not ideal as it splits the 
        array into thirds without accounting for 
        ordering by most recently posted.
    */
    const thirds = Math.ceil(images.length / 3);
    const firstThird = images.splice(0, thirds);
    const thirdThird = images.splice(-thirds);
    const secondThird = images;
    /* ------------------------------------------------------ */

    return (
        <div className={styles.imgurGallery}>
            <div className={styles.gradientUnderlay}>
                <div className={styles.bgBanner}></div>
            </div>
            <h1>Imgur Gallery</h1>
            <div className={styles.logo}>
                <img src={imgurLogo} alt="logo" width="90" />
                <h2>The stuff you’ll see everywhere else tomorrow.</h2>
            </div>
            <ParamFiltering />
            {/* Non-masonry Grid layout, displays images in correct recent order:
                <div className={styles.gridCtr}>{images && images.map((image) => <ImageCard key={image.id} image={image} />)}</div> */}

            {/* Masonry Grid Hack layout: */}
            <div className={styles.grid}>
                <div className={styles.gridCols}>{firstThird && firstThird.map((image) => <ImageCard key={image.id} image={image} />)}</div>
                <div className={styles.gridCols}>{secondThird && secondThird.map((image) => <ImageCard key={image.id} image={image} />)}</div>
                <div className={styles.gridCols}>{thirdThird && thirdThird.map((image) => <ImageCard key={image.id} image={image} />)}</div>
            </div>
        </div>
    );
};

export default Gallery;
