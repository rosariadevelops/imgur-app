import { useState } from 'react';

const useModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [bodyClass, setBodyClass] = useState();

    function openModal() {
        setIsVisible(!isVisible);
        setBodyClass(document.body.classList.add('modalOpen'));
    }

    function closeModal() {
        setIsVisible(false);
        setBodyClass(document.body.classList.remove('modalOpen'));
    }

    return {
        isVisible,
        openModal,
        closeModal,
    };
};

export default useModal;
