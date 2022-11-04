import React from 'react'
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { RiTelegramFill } from "react-icons/ri";

function Footer() {
    return (
        <div className='footer container'>
            <p>Liger Inu&#169; All Rights Reserved</p>
            <div className='social'>
                <a href='https://twitter.com/' >
                    <AiOutlineTwitter size={24} color="#000" />
                </a>
                <a href='https://telegram.me/' >
                    <RiTelegramFill size={24} color="#000" />
                </a>
            </div>
        </div>
    )
}

export default Footer
