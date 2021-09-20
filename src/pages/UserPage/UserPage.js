import React from 'react';
import Container from "../../components/Container/Container";
import styles from './UserPage.module.scss';
import ChatCard from "../../components/ChatCard/ChatCard";

const UserPage = () => {
    return (
        <div className={styles.background}>
            <Container>

                <div className={styles.userPage}>
                    <div>
                        <div className={styles.userImage}></div>

                        <div className={styles.userInfo}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.infoTitle}>User name:</span>
                                <span>etimur</span>
                            </div>

                            <div className={styles.infoWrapper}>
                                <span className={styles.infoTitle}>Email:</span>
                                <span>etimur808@gmail.com</span>
                            </div>

                            <div>
                                <span>About me:</span>
                            </div>
                        </div>
                    </div>


                    <div className={styles.activeChatsWrapper}>
                        {/*<div style={{width: '100%'}}>*/}
                            <span>Active chat</span>
                            <div className={styles.chats}>
                                <ChatCard/>
                                <ChatCard/>
                                <ChatCard/>
                                <ChatCard/>
                                <ChatCard/>
                            </div>
                        {/*</div>*/}
                    </div>
                </div>

            </Container>
        </div>

    );
};

export default UserPage;