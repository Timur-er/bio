import React from 'react';
import Message from "../Message/Message";
import styles from './Messages.module.scss';

const Messages = () => {
    const messages = [1,2,3,4]
    return (
        <div className={styles.messages}>
            {messages.map(m => <Message/>)}
            {messages.map(m => <Message/>)}
            {messages.map(m => <Message/>)}
            {messages.map(m => <Message/>)}
        </div>
    );
};

export default Messages;