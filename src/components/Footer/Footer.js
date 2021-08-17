import React from 'react';
import styled from 'styled-components';
import { FaFacebookF as FacebookIcon, FaYoutube as YoutubeIcon, FaInstagram as InstagramIcon } from "react-icons/fa";

const FooterStyle = styled.footer`
    background:#f5f5f5;
`
    
const Socials = styled.ul`
    display:flex;
    justify-content: space-evenly;
`
const Social = styled.a`
    align-items: center;
    color:#161616;
    display:flex;
    font-size:2.1rem;
    justify-content:center;
    height:4rem;
    margin:.5rem 0;
    transition:.2s linear color;
    width:4rem;

    &:hover:nth-of-type(1){
        color:#1877F2;
    }

    &:hover:nth-of-type(2){
        color:#E4405F;
    }

    &:hover:nth-of-type(3){
        color:#CD201F;
    }
`

const Wrapper = styled.div`
    align-items: center;
    display:flex;
    justify-content: center;
    min-height:25rem;
`
const Form = styled.form`
    align-items: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin:.45rem 0;
`

const Input = styled.input`
    background:#f5f5f5;
    border:none;
    border-bottom:.1rem solid #161616;
    font-size:1.6rem;
    font-weight:300;
    height:3rem;
    margin:.45rem 0;
    max-width:95vw;
    outline:none;
    position:relative;
    text-align:center;
    transition:.2s linear border;
    width:25rem;

    &::placeholder{
        font-size:1.6rem;
        left:50%;
        position:absolute;
        text-transform: uppercase;
        top:50%;
        transform: translate(-50%,-50%);
    }

    &:focus{
        border-bottom:.15rem solid #161616;
        transition:.2s linear border;
    }

    @media only screen and (max-width:700px){
        @media (orientation:portrait){
            font-size:1.2rem;
            height:2rem;
            margin:.25rem 0;
            width:85vw;
            &::placeholder{
                font-size:1rem;
            }
        }
    }

`

const InputNone = styled.input`
    display:none
`

const Textarea = styled.textarea`
    background:#f5f5f5;
    border:.1rem solid #161616;
    font-size:1.5rem;
    height:9rem;
    margin:.75rem 0;
    max-width:95vw;
    outline:none;
    padding:.2rem;
    transition:.2s linear border;
    width:25rem;

    &::-webkit-scrollbar{
        width:0;
    }

    &:focus{
        border:.15rem solid #161616;
        transition:.2s linear border;
    }

    &::placeholder{
        font-size:1.6rem;
        left:50%;
        position:absolute;
        text-transform: uppercase;
        top:50%;
        transform: translate(-50%,-50%);
    }

     @media only screen and (max-width:700px){
        @media (orientation:portrait){
            font-size:1.2rem;
            margin:.25rem 0;
            width:85vw;
            &::placeholder{
                font-size:1rem;
            }
        }
    }

`
const Button = styled.button`
    background:none;
    border:none;
    color:#161616;
    cursor:pointer;
    font-size:2.5rem;
    font-weight:700;
    height:4rem;
    margin:.75rem 0;
    overflow: hidden;
    outline:none;
    position:relative;
    text-transform: uppercase;
    width:12rem;

    &::before{
        border-bottom:.2rem solid #161616;
        border-top:.2rem solid #161616;
        height:90%;
        left:0;
        position:absolute;
        top:50%;
        transform: translateY(-50%);
        transition:.2s linear width;
        width: 0%;
    }

    &::after{
        border-left:.2rem solid #161616;
        border-right:.2rem solid #161616;
        height:0%;
        left:50%;
        position:absolute;
        top:50%;
        transform: translate(-50%,-50%);
        transition:.2s .2s linear height;
        width: 90%;
    }

    &:hover::before{
        width:100%;
    }


    &:hover::after{
        height:90%;
    }

    @media only screen and (max-width:700px){
        @media (orientation:portrait){
            font-size:1.8rem;
            font-weight: 500;
            height:3rem;
            margin:.75rem 0;
            width:10rem;
        }
    }
`

const MyLink = styled.a`
    align-items: center;
    color:#161616;
    display:flex;
    font-size:1.65rem;
    font-weight:900;
    justify-content: center;
    opacity:.6;
    padding:1rem  0;
    text-decoration:none;
    transition:.2s linear opacity;
    width:100vw;

    &:hover{
        opacity:1;
    }
    
    @media only screen and (max-width:700px){
        @media (orientation:portrait){
            font-size:1.1rem;
            padding:.4rem  0;
        }
    }
`

export const Footer = () => {

    const now = new Date().getFullYear();



    return (
        <FooterStyle>
            <Socials>
                <Social href='https://www.facebook.com/filip.bukowiecki.58' target='_blank' rel="noreferrer"><FacebookIcon/></Social>
                <Social href='https://www.instagram.com/zjadacz_seriali/?hl=pl' target='_blank' rel="noreferrer"><InstagramIcon/></Social>
                <Social href='https://youtube.com/channel/UChK4HgsDY8p1kOQfMdAPC0A' target='_blank' rel="noreferrer"><YoutubeIcon/></Social>
            </Socials>
            <Wrapper>
                <Form action="https://formsubmit.co/filip.bukowiecki@gmail.com" method="POST">
                    <InputNone name="_redirect" type="hidden" id="name" value="https://filip-bukowiecki.vercel.app" />
                    <Input placeholder='Imię' type='text' name='firstName' id='firstName' />
                    <Input placeholder='Nazwisko' type='text' name='lastName' id='lastName' />
                    <input type="hidden" name="_captcha" value="false"/>
                    <Input placeholder='Numer telefonu' type='tel' name='phoneNumber' id='phoneNumber'/>
                    <Input placeholder='Adres e-mail' type='email' name='emailAddress' id='emailAddress'/>
                    <InputNone name="_formsubmit_id" type="text"/>

                    <Textarea placeholder='Wiadomość' name="message" id="message" cols="30" rows="10" />
                    <Button>Wyślij</Button>
                </Form>
            </Wrapper>
            <MyLink href="https://github.com/RadoslawAdamczyk2000" target='_blank' rel="noreferrer">
                Radosław Adamczyk &copy; {now}
            </MyLink>
        </FooterStyle>
    )
}

