import React, {useEffect, useState} from 'react';
import Messages from "../Messages/Messages";
import styles from './Chat.module.scss';
import queryString from "query-string";
import io from "socket.io-client";
import {useHistory} from "react-router-dom";
import canUseActiveElement from "react-tabs/lib/components/UncontrolledTabs";

let socket;

const Chat = () => {
    const {location} = useHistory();
    const [chatWithUser, setChatWithUser] = useState(null);
    const [chatFromUser, setFromUser] = useState(null);
    const ENDPOINT = 'https://askme-server.herokuapp.com/';
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState(null)

    useEffect(() => {

        const { userName, askUser } = queryString.parse(location.search);
        setChatWithUser(askUser);
        setFromUser(userName);
        socket = io(ENDPOINT);
        console.log(socket);

        socket.emit('join', {userName, askUser}, (error) => {
            if (error) {
                console.log(error)
            }
        })

        // when the component will unmount
        // return () => {
        //     socket.emit('disconnectSoc');
        //     socket.off();
        // }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
            console.log(message);
        })
    }, [messages])

    const sendMessage= (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
            console.log(message);
        }
    }

    return (
        <div className={styles.chatWrapper}>

            <div className={styles.messagesWrapper}>
                <Messages messages={messages} name={chatFromUser}/>
            </div>

            <div className={styles.inputWrapper}>
                // later i can do input as different component
                <input
                    value={message}
                    placeholder={'Type a message...'}
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                    type="text"
                    className={styles.input}
                />
                <button className={styles.sendMessageBtn}>Send</button>
            </div>

        </div>
    );
};

export default Chat;