import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ImageCard from '../imagecard/ImageCard';
import ParamFiltering from '../paramfiltering/ParamFiltering';
import styles from './Gallery.module.css';
import imgurLogo from './imgur-logo-transparent.png';
import Spinner from 'react-svg-spinner';
import { showImages } from '../../store/actions';
// import { useDispatch } from 'react-redux';

const Gallery = (props) => {
    const dispatch = useDispatch();
    const unfilteredImages = useSelector((state) => state.images);
    const images = unfilteredImages.filter((image) => image.images);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);

    const [sectionParam, setSectionParam] = useState();
    const [sortParam, setSortParam] = useState();
    const [windowParam, setWindowParam] = useState();
    const [showViral, setShowViral] = useState();

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

    function paramsCallback(a, b, c, d) {
        setSectionParam(a);
        setSortParam(b);
        setWindowParam(c);
        setShowViral(d);
        console.log('paramsCallback: ', `${a}, ${b}, ${c}, ${d}`);
    }

    /* window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if (!noData) {
                setPage(page + 1);
                console.log('reached bottom of page');
            }
        }
    }; */

    useEffect(() => {
        dispatch(showImages(sectionParam, sortParam, windowParam, showViral, page));
    }, [dispatch, sectionParam, sortParam, windowParam, showViral, page]);

    return (
        <div className={styles.imgurGallery}>
            <div className={styles.gradientUnderlay}>{/* <div className={styles.bgBanner}></div> */}</div>
            <h1>Imgur Gallery</h1>
            <div className={styles.logo}>
                <img src={imgurLogo} alt="logo" width="90" />
                <h2>The stuff you’ll see everywhere else tomorrow.</h2>
            </div>
            <ParamFiltering sendParameters={(a, b, c, d) => paramsCallback(a, b, c, d)} />
            {/* Non-masonry Grid layout, displays images in correct recent order:
                <div className={styles.gridCtr}>{images && images.map((image) => <ImageCard key={image.id} image={image} />)}</div> */}

            {/* Masonry Grid Hack layout: */}
            <div className={styles.grid}>
                <div className={styles.gridCols}>{firstThird && firstThird.map((image) => <ImageCard key={image.id} image={image} />)}</div>
                <div className={styles.gridCols}>{secondThird && secondThird.map((image) => <ImageCard key={image.id} image={image} />)}</div>
                <div className={styles.gridCols}>{thirdThird && thirdThird.map((image) => <ImageCard key={image.id} image={image} />)}</div>
            </div>
            {/* <div className={styles.spinner} ref={loader}>
                {isFetching && <Spinner color="white" size="64px" thickness={2} />}
            </div> */}
            {loading ? (
                <div className={styles.spinner}>
                    <Spinner color="white" size="64px" thickness={2} />
                </div>
            ) : null}
            {noData ? <div className={styles.noData}>No more images</div> : null}
        </div>
    );
};

export default Gallery;
