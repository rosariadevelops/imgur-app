import React, { useEffect, useState } from 'react';
import useDropdown from '../../hooks/dropdown/Dropdown';

const Window = (props) => {
    const [windowParam, setWindowParam] = useState();

    const paramsObj = {
        day: 'Today',
        week: 'Week',
        month: 'Month',
        year: 'Year',
        all: 'All Time',
    };

    const [parameter, WindowDropdown] = useDropdown('Window', 'Today', paramsObj);

    useEffect(() => {
        setWindowParam(parameter);
    }, [parameter]);

    function sendParameter() {
        props.parentCallback(windowParam);
    }

    return <WindowDropdown sendParameter={sendParameter()} />;
};

export default Window;
