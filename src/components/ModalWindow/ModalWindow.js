import React, {useRef, useState, useEffect} from 'react';
import styles from './ModalWindow.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getIsModalOpen} from "../../store/modal/selectors";
import { closeModalAction } from "../../store/modal/actions";
import {deleteQuestion} from "../../store/question/actions";

const ModalWindow = ({children}) => {
    const dispatch = useDispatch();
    const [modalStyle, setModalStyle] = useState({visibility: 'hidden', opacity: 0})
    const modalRef = useRef(null);
    const closeRef = useRef(null);
    const isModalOpen = useSelector(getIsModalOpen)

    useEffect(() => {
            setModalStyle({visibility: 'visible', opacity: 1})

    }, [isModalOpen])

    const closeModal = e => {
        const modal = modalRef.current;
        // const close = closeRef.current;

        if (!modal.contains(e.target)) {
            setModalStyle({visibility: 'hidden', opacity: 0})
            dispatch(closeModalAction());
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