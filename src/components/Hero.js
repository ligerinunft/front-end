import React from 'react';
import "../assets/styles.css";
import NavBar from './NavBar';
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function Hero() {
    return (
        <section className='hero'>
            <NavBar />
            <div className="caption">
                <p className='text-center' style={{ color: "#fff", fontSize: "45px" }}>Mint, Stake And Earn Rewards With Your Liger Inu NFT</p>
                <div className="caption-inner">
                    <a href="/mint-page">
                        <button className="btn btn-danger" style={{ color: "#000" }}>
                            Mint Now
                        </button>
                    </a>
                    <a href="https://twitter.com/" target="_blank"
                        rel="noreferrer">
                        <button className="btn btn-info">
                            Twitter
                            <AiOutlineTwitter size={25} />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
