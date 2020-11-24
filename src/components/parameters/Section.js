import React, { useEffect, useState } from 'react';
import useDropdown from '../../hooks/dropdown/Dropdown';

const Section = (props) => {
    const [sectionParam, setSectionParam] = useState();

    const paramsObj = {
        hot: 'Most Viral',
        user: 'User Submitted',
        top: 'Highest Scoring',
    };

    const [parameter, SectionDropdown] = useDropdown('Section', 'Most Viral', paramsObj);

    useEffect(() => {
        setSectionParam(parameter);
    }, [parameter]);

    function sendParameter() {
        props.parentCallback(sectionParam);
    }

    return <SectionDropdown sendParameter={sendParameter()} />;
};

export default Section;
