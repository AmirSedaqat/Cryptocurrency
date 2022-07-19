import React from 'react';
import styles from '../styles/Coin.module.css'
const Coins = ({ name, image, symbol, price, marketCap, priceChange }) => {
    //Doesn't Run JS
    const textUpper = symbol ? String(symbol).toUpperCase() : '';
    const priceLocale = price ? Number(price).toLocaleString() : '';
    const MarketLocale = marketCap ? Number(marketCap).toLocaleString() : '';

    return (
        <>
            
            <div className={styles.container}>
                {image && <img className={styles.logoCoin} src={image} alt={name} />}
                <span className={styles.nameCoin}>{name}</span>
                <span className={styles.symbolCoin}>{textUpper}</span>
                {price && <span className={styles.priceCoin}>{priceLocale} <span style={{ color: '#00ff00' }}>$</span></span>}

                {priceChange && <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange  }>{priceChange.toFixed(3)}</span>}
                <span className={styles.marketCapCoin}>{MarketLocale}</span>

            </div>
        </>

    );
};

export default Coins;