import React from 'react';
import Message from "../Message/Message";
import styles from './Messages.module.scss';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({messages, name}) => {
    // const messages = [1,2,3,4]
    return (
        <ScrollToBottom>
            {messages.map((message, i) => {
                return <div key={i}>
                    <Message message={message} name={name}/>
                </div>
            })}
            {/*<div className={styles.messages}>*/}
            {/*    /!*{messages.map(m => <Message/>)}*!/*/}
            {/*    /!*{messages.map(m => <Message/>)}*!/*/}
            {/*    /!*{messages.map(m => <Message/>)}*!/*/}
            {/*    /!*{messages.map(m => <Message/>)}*!/*/}
            {/*</div>*/}
        </ScrollToBottom>

    );
};

export default Messages;