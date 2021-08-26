import React from 'react';
import Messages from "../Messages/Messages";
import styles from './Chat.module.scss';

const Chat = () => {
    return (
        <div className={styles.chatWrapper}>
            <div className={styles.chatAndInfoSection}>

                <div className={styles.messagesWrapper}>
                    <Messages/>
                </div>

                <div>
                    here will be questions cards later
                </div>

            </div>


            <div className={styles.inputWrapper}>
                <input type="text" className={styles.input}/>
                <button className={styles.sendMessageBtn}>Send</button>
            </div>

        </div>
    );
};

export default Chat;