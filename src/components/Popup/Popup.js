import React, {useState} from 'react';
import styles from './Popup.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getPopupMessage, getPopupState} from "../../store/popup/selector";
import {closePopup} from "../../store/popup/actions";

const Popup = () => {

    // const [isOpen, setIsOpen] = useState(true);
    const isOpen = useSelector(getPopupState)
    const message = useSelector(getPopupMessage)
    const dispatch = useDispatch()

    const popupWrapper = isOpen ? styles.popupWrapperActive : styles.popupWrapper

    if (isOpen) {
        setTimeout(() => {
            dispatch(closePopup())
        }, 3000)
    }

    return (
        <div className={popupWrapper}>
            <div className={styles.popup}>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Popup;