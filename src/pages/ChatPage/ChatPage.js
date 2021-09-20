import React, {useEffect, useState} from 'react';
import styles from './ChatPage.module.scss';
import Container from "../../components/Container/Container";
import Chat from "../../components/Chat/Chat";
import queryString from "query-string";
import io from 'socket.io-client';

let socket = null;

const ChatPage = ({location}) => {

    const [chatWithUser, setChatWithUser] = useState(null);
    const [chatFromUser, setFromUser] = useState(null);
    // const ENDPOINT = 'https://askme-server.herokuapp.com/';
    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {
        const { userName, withUser } = queryString.parse(location.search);
        setChatWithUser(withUser);
        setFromUser(chatFromUser);
        socket = io(ENDPOINT);

        socket.emit('join', {userName, withUser}, () => {

        })

        // when the component will unmount
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, chatFromUser, location.search])

    return (
        <div className={styles.chatPage}>
            <Container>
                <div className={styles.chatTitle}>
                    Chat with {chatWithUser}
                </div>
                <div className={styles.chatWindow}>
                    <Chat/>
                </div>
            </Container>
        </div>
    );
};

export default ChatPage;