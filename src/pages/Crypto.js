import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import axios from "axios";
import CryptoTicker from "../components/CryptoTicker";

const Crypto = () => {
    const [data, setData] = useState([]);
    const [idCoin, setIdCoin] = useState('');

    useEffect(() => {
        let id = window.location.pathname.split('/').pop();
        setIdCoin(id)

        axios
            .get('https://api.coincap.io/v2/assets/'+ id +'/markets')
            .then((result) => {
                setData(result.data.data);
                console.log(data)
            });
    }, []);

    return (
        <div className="home">
            <Header />
            <section className="container mx-auto">
                <div>
                    {data
                        .map((market) => (
                            <CryptoTicker market={market} key={market.exchangeId} />
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default Crypto;