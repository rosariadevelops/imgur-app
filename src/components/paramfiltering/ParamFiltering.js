import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import Section from '../parameters/Section';
import Sort from '../parameters/Sort';
import Window from '../parameters/Window';
import ShowViral from '../parameters/showViral/ShowViral';
import { showImages } from '../../store/actions';
import styles from './ParamFiltering.module.css';

const ParamFiltering = (props) => {
    // const dispatch = useDispatch();
    const [sectionParam, setSectionParam] = useState();
    const [sortParam, setSortParam] = useState();
    const [windowParam, setWindowParam] = useState();
    const [showViral, setShowViral] = useState();
    const [sectionDisplay, setSectionDisplay] = useState(true);

    /* Sending parameter prop back to parent for rendering of images */
    function sectionCallback(a) {
        setSectionParam(a);
    }

    function sortCallback(b) {
        setSortParam(b);
    }

    function windowCallback(c) {
        setWindowParam(c);
    }

    function viralCallback(d) {
        setShowViral(d);
    }
    /* ---------------------------------------- */

    useEffect(() => {
        // dispatch(showImages(sectionParam, sortParam, windowParam, showViral));
        if (sectionParam === 'top') {
            setSectionDisplay(false);
        } else {
            setSectionDisplay(true);
        }
    }, [sectionParam]);

    props.sendParameters(sectionParam, sortParam, windowParam, showViral);

    return (
        <div className={styles.params}>
            <div className={styles.paramsLeft}>
                <Section parentCallback={(e) => sectionCallback(e)} />
            </div>
            <div className={styles.paramsRight}>
                {sectionDisplay ? <Sort parentCallback={(e) => sortCallback(e)} /> : <Window parentCallback={(e) => windowCallback(e)} />}
                <ShowViral parentCallback={(e) => viralCallback(e)} />
            </div>
        </div>
    );
};

export default ParamFiltering;
