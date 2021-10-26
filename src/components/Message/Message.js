import React from 'react';
import styles from './Message.module.scss';

const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    let messageWrapper = `${styles.messageWrapper}`;
    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    if (isSentByCurrentUser) {
        messageWrapper = `${styles.messageWrapper} ${styles.msgJustifyEnd}`;
    } else {
        messageWrapper = `${styles.messageWrapper} ${styles.msgJustifyStart}`;
    }

    return (
        <div className={messageWrapper}>
            {console.log('text ' + text)}
            <p className={styles.userName}>{trimmedName}</p>
            <div>
                <p>{text}</p>
            </div>
        </div>
        // <div className={styles.messageWrapper}>
        //     {/*<div className={styles.userIcon}></div>*/}
        //     <div className={styles.messageSection}>
        //         <div className={styles.userName}>
        //             {user}
        //         </div>
        //         <div>
        //             {text}
        //         </div>
        //     </div>
        //
        // </div>
    );
};

export default Message;