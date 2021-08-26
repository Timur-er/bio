import React from 'react';
import styles from './ChatPage.module.scss';
import Container from "../../components/Container/Container";
import Chat from "../../components/Chat/Chat";

const ChatPage = () => {
    return (
        <div className={styles.chatPage}>
            <Container>
                <div className={styles.chatTitle}>
                    Chat with Timur
                </div>
                <div className={styles.chatWindow}>
                    <Chat/>
                </div>
            </Container>
        </div>
    );
};

export default ChatPage;