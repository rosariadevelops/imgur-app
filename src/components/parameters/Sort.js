import React, { useEffect, useState } from 'react';
import useDropdown from '../../hooks/dropdown/Dropdown';

const Sort = (props) => {
    const [sortParam, setSortParam] = useState();

    const paramsObj = {
        viral: 'Popular',
        time: 'Newest',
        top: 'Best',
        rising: 'Rising',
    };

    const [parameter, SortDropdown] = useDropdown('Sort', 'Popular', paramsObj);

    useEffect(() => {
        setSortParam(parameter);
    }, [parameter]);

    function sendParameter() {
        props.parentCallback(sortParam);
    }

    return <SortDropdown sendParameter={sendParameter()} />;
};

export default Sort;
