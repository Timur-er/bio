import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, variant, onClick}) => {

    let className = '';

    switch (variant) {
        case 'answer':
            className = `${styles.answer} ${styles.default}`
            break
        case 'toTop':
            className = `${styles.toTop} ${styles.default}`
            break
        case 'bad':
            className = `${styles.badQuestion} ${styles.default}`
            break
        case 'default':
            className = `${styles.default}`
            break
        default:
            return className = `${styles.default}`;
    }
    return (
        <button onClick={onClick} className={`${className}`}>
            {children}
        </button>
    );
};

export default Button;