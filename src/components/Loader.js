import React from 'react';
//Gif
import spinner from '../gif/Spin-0.5s-197px.svg'
import styles from '../styles/Loader.module.css'
const Loader = () => {
    return (
        <div className={styles.container}>
            <img src={spinner} alt="Loading"/>
            <h1 >Loading ...</h1>
        </div>
    );
};

export default Loader;