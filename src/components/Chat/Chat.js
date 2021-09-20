import React, {useEffect} from 'react';
import Messages from "../Messages/Messages";
import styles from './Chat.module.scss';


const Chat = () => {

    useEffect(() => {

    }, [])

    return (
        <div className={styles.chatWrapper}>

            <div className={styles.messagesWrapper}>
                <Messages/>
            </div>

            <div className={styles.inputWrapper}>
                <input type="text" className={styles.input}/>
                <button className={styles.sendMessageBtn}>Send</button>
            </div>

        </div>
    );
};

export default Chat;