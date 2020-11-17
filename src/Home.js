import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img
            className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""
            />
            {/* Product Id, title, prince, rating, image */}
            <div className="home__row">
                <Product
                    id="3215"
                    title="All-new Echo Dot"
                    price={99}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/379x304_Desktop_Card_BE_01._SY304_CB404301999_.jpg"
                />
                <Product
                    id="6987"
                    title="New Echo Dot with clock"
                    price={149}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/07_379x304_Desktop_Card_CR._SY304_CB404302460_.jpg"
                />
            </div>

            <div className="home__row">
            <Product
                    id="6457"
                    title="All-new Fire TV stick"
                    price={249}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/02_379x304_Desktop_Card_SP._SY304_CB404302689_.jpg"
                />
                <Product
                    id="6547"
                    title="All-new Echo"
                    price={299}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/05_379X304_Desktop_Card_SH._SY304_CB404302803_.jpg"
                />
                <Product
                    id="3259"
                    title="Amazon Smart Plug"
                    price={499}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/06_379x304_Desktop_Card_GE._SY304_CB404302721_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="9865"
                    title="Smartify your home"
                    price={49}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/03_379x304_Desktop_Card_LR._SY304_CB404302641_.jpg"
                />
            </div>

            {/* Product*/}

        </div>
    );
}

export default Home;
