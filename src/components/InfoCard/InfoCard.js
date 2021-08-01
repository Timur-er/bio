import React from 'react';
import styles from './InfoCard.module.scss';


const InfoCard = () => {
    return (
        <div className={styles.infoCard}>
            <div className={styles.title}>Title</div>
            <div className={styles.description}>
                description
            </div>
        </div>
    );
};

export default InfoCard;