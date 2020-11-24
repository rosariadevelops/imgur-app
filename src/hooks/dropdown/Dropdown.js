import React, { useState } from 'react';
import styles from './Dropdown.module.css';

const useDropdown = (label, defaultTitle, paramsObj) => {
    const defaultParam = Object.keys(paramsObj)[0];
    const optionsList = Object.values(paramsObj);

    const [dropContent, setDropContent] = useState(defaultTitle);
    const [parameter, setParameter] = useState(defaultParam);

    function getParamByValue(eventObj, eventVal) {
        return Object.keys(eventObj).find((key) => eventObj[key] === eventVal);
    }

    function changeState(newParam, newTitle) {
        setParameter(newParam);
        setDropContent(newTitle);
    }

    function handleChangeParam(event) {
        const newParam = getParamByValue(paramsObj, `${event.target.value}`);
        changeState(newParam, event.target.value);
    }

    const DropdownComponent = () => (
        <div className={styles.drpCtr}>
            {/* <div className={styles.drpTitle}>{dropContent}</div> */}
            <label htmlFor={label}>
                <select value={dropContent} name="drpSelect" className={styles.dropdown} onChange={(e) => handleChangeParam(e)}>
                    {optionsList &&
                        optionsList.map((item) => {
                            return (
                                <option key={item} className={styles.drpOpt}>
                                    {item}
                                </option>
                            );
                        })}
                </select>
            </label>
        </div>
    );
    return [parameter, DropdownComponent, setParameter];
};

export default useDropdown;
