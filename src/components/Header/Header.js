import React from 'react';
import styled from 'styled-components';
import movie from './backgroundVideo.mp4'

const HeaderStyle = styled.header`
    background:#161616;
    height: 170rem;
    max-height:85vh;
    overflow: hidden;
    position: relative;
`
const MovieWrapper = styled.video`
    align-items: center;
    display: flex;
    justify-content: center;
    max-height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100vw;
    @media only screen and (max-width:700px){
        display:none;
    }
`
const Movie = styled.source`
    height:100%;
    width: 110%;
    
`
const TextWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%,-50%);
`
const Heading = styled.h1`
    color: #f5f5f5;
    font-size: 5rem;
    text-shadow:0 0 15px #000;

    @media only screen and (max-width:700px){
        @media (orientation:portrait){
            font-size:2rem;
        }
        @media (orientation:landscape){
            font-size:3rem;
        }
    }
`
const Button = styled.a`
    background: none;
    border:none;
    bottom: 0;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 700;
    height: 3rem;
    max-width:65vw;
    outline:none;
    position: relative;
    text-decoration:none;
    text-transform: uppercase;
    transition:.2s linear transform;
    width: 15rem;
    &:hover{
        transform: translateY(-.5rem);
    }
    &::before{
        background: #fff;     
        bottom: 0;      
        height: 0.15rem;
        left: 0;
        transition:.2s .2s linear width;                
        width:0%;
    }
    &:hover::before{
        width: 100%;
    }

    @media only screen and (max-width:700px){
        @media (orientation:portrait){
            font-size:1.5rem;
            &:hover{
                transform: translateY(-.2rem);
            }
        }
        @media (orientation:landscape){
            font-size:1.75rem;
            &:hover{
                transform: translateY(-.2rem);
            }
        }
    }
`

export const Header = () => {
    return (
        <HeaderStyle>
            <MovieWrapper autoPlay loop muted>
                <Movie type='video/mp4' src={movie}/>
            </MovieWrapper>
            <TextWrapper>
                <Heading>FilipBukowiecki</Heading>
            </TextWrapper>
        </HeaderStyle>
    )
}
