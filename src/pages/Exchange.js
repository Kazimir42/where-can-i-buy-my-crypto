import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import ExchangeCoin from "../components/ExchangeCoin";

const Exchange = () => {
    const [data, setData] = useState([]);
    const [idExchange, setIdExchange] = useState('');

    useEffect(() => {
        let id = window.location.pathname.split('/').pop();
        setIdExchange(id)

        axios
            .get('https://api.coingecko.com/api/v3/exchanges/'+id+'/tickers')
            .then((result) => {
                setData(result.data.tickers);
            });
    }, []);


    return (
        <div className="">
            <Header />
            <section className="container mx-auto mb-20 min-h-screen">
                <div>
                    {data
                        .filter((coin) => coin.target === 'USD')
                        .map((coin) => (
                            <ExchangeCoin coin={coin} key={coin.base + '/' + coin.target} />
                        ))
                    }
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Exchange;