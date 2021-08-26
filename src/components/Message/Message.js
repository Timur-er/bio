import React from 'react';
import styles from './Message.module.scss';

const Message = () => {

    const message = {
        user: 'timur',
        message: 'Hello Timur'
    }


    return (
        <div className={styles.messageWrapper}>
            <div className={styles.userIcon}></div>
            <div className={styles.messageSection}>
                <div className={styles.userName}>
                    {message.user}
                </div>
                <div>
                    {message.message}
                </div>
            </div>

        </div>
    );
};

export default Message;