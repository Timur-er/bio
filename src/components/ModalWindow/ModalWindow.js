import React, {useRef, useState} from 'react';
import styles from './ModalWindow.module.scss';

const ModalWindow = ({children}) => {
    const [modalStyle, setModalStyle] = useState({visibility: 'visible', opacity: 1})
    const modalRef = useRef(null);
    const closeRef = useRef(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = e => {
        const modal = modalRef.current;
        // const close = closeRef.current;

        if (!modal.contains(e.target)) {
            setModalStyle({})
        }
    }

    return (
        <div onClick={closeModal} className={styles.modalWrapper} style={modalStyle}>
            <div className={styles.modal} ref={modalRef}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;