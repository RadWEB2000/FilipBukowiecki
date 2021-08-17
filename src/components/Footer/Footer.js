import React from 'react';
import styled from 'styled-components';
import { FaFacebookF as FacebookIcon, FaYoutube as YoutubeIcon, FaInstagram as InstagramIcon } from "react-icons/fa";


    
const Socials = styled.ul`
    background:red;
    display:flex;
    justify-content: space-evenly;
`
const SocialItem = styled.a`
    background:lime;
    width:5rem;
    height:5rem;
`


export const Footer = () => {
    return (
        <footer>
            <Socials>
                <SocialItem href='#' target='_blank' rel="noreferrer"><FacebookIcon/></SocialItem>
                <SocialItem href='#' target='_blank' rel="noreferrer"><InstagramIcon/></SocialItem>
                <SocialItem href='#' target='_blank' rel="noreferrer"><YoutubeIcon/></SocialItem>
            </Socials>
            <div>
                <form>
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </form>
            </div>
            <p><a href="#"> Radosław Adamczyk &copy; 2021 </a></p>

        </footer>
    )
}