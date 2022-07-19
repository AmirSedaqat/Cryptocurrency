import React, { useEffect, useState } from 'react';
import styles from '../styles/Landing.module.css'
//Component
import Loader from './Loader';
//API
import { getCoin } from '../services/API';
import Coins from './Coins';
const LandingPage = () => {
    //Protect info Coin
    const [coins, setCoins] = useState([]);

    //Search coin 
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoins(data);
        }
        fetchAPI();
    }, [])

    //functions 
    const searchHandler = (e) => {
        setSearch(e.target.value)
    }
    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <>
            <div className={styles.container}>
                <h1>Crypto Currency Exchange</h1>
                <input className={styles.searchInput} type="text" placeholder='Search Crypto Name ...' value={search} onChange={searchHandler} />
            </div>
            
            {
                coins.length ?
                    <div className={styles.coinContainer}>
                        {
                            searchedCoins.map(coin => <Coins
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.price_change_percentage_24h}
                            />)

                        }
                    </div> : <Loader  />

            }
            <Coins />
        </>
    );
};

export default LandingPage;