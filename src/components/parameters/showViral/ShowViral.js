import React, { useState } from 'react';
import styles from './ShowViral.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const ShowViral = (props) => {
    const flame = <FontAwesomeIcon icon={faFire} />;
    const [showViral, setShowViral] = useState(true);
    const [content, setContent] = useState('Hide Viral');
    const viralButton = document.body.querySelector('#viralButton');

    function handleViral(event) {
        if (showViral) {
            setShowViral(false);
            setContent('Show Viral');
            viralButton.style.color = '#fff';
        } else if (!showViral) {
            setShowViral(true);
            setContent('Hide Viral');
            viralButton.style.color = '#36be7d';
        }
    }

    function sendParameter() {
        props.parentCallback(showViral);
    }

    return (
        <div className={styles.showViral} sendParameter={sendParameter()}>
            <div className={styles.tooltipCtr}>
                <div className={styles.tooltip}>
                    <div>{content}</div>
                </div>
                <div className={styles.arrow}></div>
            </div>
            <button id="viralButton" onClick={(e) => handleViral(e)}>
                {flame}
            </button>
        </div>
    );
};

export default ShowViral;
