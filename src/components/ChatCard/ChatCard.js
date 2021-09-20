import React from 'react';
import styles from './ChatCard.module.scss';

const ChatCard = () => {
    return (
        <div className={styles.chat}>
            <span>Here will be question later</span>
            <span className={styles.userName}>etimur</span>
        </div>
    );
};

export default ChatCard;