import React, {useEffect, useState} from 'react';
import styles from './ChatPage.module.scss';
import Container from "../../components/Container/Container";
import Chat from "../../components/Chat/Chat";
import queryString from "query-string";
import io from 'socket.io-client';


const ChatPage = () => {

    const chatWithUser = 'hansus';

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