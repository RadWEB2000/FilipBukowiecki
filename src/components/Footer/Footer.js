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
    font-size:2.1rem;
    justify-content:center;
    display:flex;
    margin:.5rem 0;
    width:4rem;
    height:4rem;
    transition:.2s linear color;

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
    margin:.45rem 0;
    justify-content: center;
`


const Input = styled.input`
    background:#f5f5f5;
    border:none;
    border-bottom:.1rem solid #161616;
    outline:none;
    width:25rem;
    height:3rem;
    margin:.45rem 0;
    max-width:70vw;
    position:relative;
    transition:.2s linear border;
    text-align:center;
    font-size:1.6rem;
    font-weight:300;

    &::placeholder{
        text-transform: uppercase;
        font-size:1.6rem;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }

    &:focus{
        transition:.2s linear border;
        border-bottom:.15rem solid #161616;
    }

`

const InputNone = styled.input`
    display:none
`

const Textarea = styled.textarea`
    background:grey;
    width:25rem;
    background:#f5f5f5;
    outline:none;
    border:none;
    transition:.2s linear border;
    border:.1rem solid #161616;
    padding:.2rem;
    max-width:70vw;
    font-size:1.5rem;
    margin:.75rem 0;
    height:9rem;

    &::-webkit-scrollbar{
        width:0;
    }

     &:focus{
        transition:.2s linear border;
        border:.15rem solid #161616;
    }

      &::placeholder{
        text-transform: uppercase;
        font-size:1.6rem;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
`
const Button = styled.button`
    cursor:pointer;
    width:12rem;
    color:#161616;
    border:none;
    background:none;
    outline:none;
    margin:.75rem 0;
    font-size:2.5rem;
    font-weight:700;
    position:relative;
    overflow: hidden;
    text-transform: uppercase;
    height:4rem;



    &::before{
        position:absolute;
        top:50%;
        left:0;
        transform: translateY(-50%);
        width: 0%;
        height:90%;
        transition:.2s linear width;
        border-top:.2rem solid #161616;
        border-bottom:.2rem solid #161616;
    }

    &::after{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        width: 90%;
        height:0%;
        transition:.2s .2s linear height;
        border-left:.2rem solid #161616;
        border-right:.2rem solid #161616;
    }

    &:hover::before{
        width:100%;
    }


    &:hover::after{
        height:90%;
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
`

export const Footer = () => {

    const now = new Date().getFullYear();



    return (
        <FooterStyle>
            <Socials>
                <Social href='#' target='_blank' rel="noreferrer"><FacebookIcon/></Social>
                <Social href='#' target='_blank' rel="noreferrer"><InstagramIcon/></Social>
                <Social href='#' target='_blank' rel="noreferrer"><YoutubeIcon/></Social>
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

