import React from 'react';
import "../assets/styles.css";
import 'bootstrap/dist/css/bootstrap.css';

function Faq() {
    return (
        <div class="faq container" id="FAQ">
            <h1 class="faqhead text-center">
                Frequently asked questions
            </h1>
            <div class="faq-questions">
                <details open="">
                    <summary>What is Liger Inu?</summary>
                    <div class="faq__content">
                        <p>Liger Inu is a project within the Shardeum blockchain. Based on a collection of NFTs that can be staked to receive Liger Inu Token rewards.</p>
                    </div>
                </details>
                <details>
                    <summary>When can i buy a Liger Inu?</summary>
                    <div class="faq__content">
                        <p>The NFTs release date is November 3 at 19:00 UTC. Follow our official channels to find out the latest news.</p>
                    </div>
                </details>
                <details>
                    <summary>What wallet can i use?</summary>
                    <div class="faq__content">
                        <p>We currently only support the Metamask wallet.</p>
                    </div>
                </details>
                <details>
                    <summary>What is the price of nft?</summary>
                    <div class="faq__content"><p>The initial price will be 45 SHM.</p>
                    </div>
                </details>
                <details>
                    <summary>Where can I stake my nft?</summary>
                    <div class="faq__content">
                        <p>You can stake your Liger Inu NFT directly from our app in the mint page where you can also manage your whole wallet of NFTs.</p>
                    </div>
                </details>
                <details>
                    <summary>What are the contract address of NFT and Token?</summary>
                    <div class="faq__content">
                         <p>Liger Inu NFT Contract:0x237be39227B714304395f4b1313F698C2044cdd6  <br></br> Liger Inu Token Contract:0xA03B4f86037521299Fe1B6A746d10780A7De95E7</p>
                    </div>
                </details>
            </div>
        </div>
    )
}

export default Faq;
