import React from 'react';
import filip from './filip.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr;
    height: auto;
    margin: 3rem 0;
    overflow-x: hidden;
    padding:1rem 0;
    width: 100vw;

     @media only screen and (max-width:700px){
        @media (orientation:portrait){
            grid-template-columns:1fr;
        }
    }
`

const Figure = styled.figure`
    align-items: center;
    background-image:url(${filip});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    display: flex;
    justify-content: center;
    height: 40rem;
    margin:0 auto;
    overflow: hidden;
    position: relative;
    width: 80%;
    
    @media only screen and (max-width:700px){
        @media (orientation:portrait){
            height:25rem;
            width:100%;
        }
        @media (orientation:landscape){
            background-attachment:fixed;
          
        }
    }
`



const Content = styled.div`
    color: #161616;
    overflow: hidden;
    text-align:center;
`
const Heading = styled.h2`
    font-size:4rem;
    font-weight:500;

    @media only screen and (max-width:700px){
        @media (orientation:portrait){
            font-size:2.65rem;
        }
        @media (orientation:landscape){
            font-size:2.65rem;
        }
    }
`

const Text = styled.p`
    font-size:1.6rem;
    padding:1rem;

    @media only screen and (max-width:700px){
        padding:.4rem;

        @media (orientation:portrait){
            font-size:1.2rem;
        }
        @media (orientation:landscape){
            font-size:1.3rem;
        }
    }
`
const Line = styled.span`
    font-weight:300;
`

const Strong = styled.strong`
    font-size:2rem;

    @media only screen and (max-width:700px){
        @media (orientation:portrait){
            font-size:1.5rem;
        }
        @media (orientation:landscape){
            font-size:1.7rem;
        }
    }
   
`

export const About = () => {
    return (
        <Wrapper>
            <Figure/>
            <Content>
                <Heading>O mnie</Heading>
                <Text>
                    <Line>
                        Na co dzień mieszkam w Poznaniu. Od 2019 komercyjnie zajmuję się szeroko pojętym video marketingiem. W mojej ofercie znajdują się nagrania wideo, montaż oraz realizacja transmisji. Oferuję unikalne podejście do tematyki audiowizualnej oraz maksimum zaangażowania przy każdym zleceniu. Do rejestrowania obrazu oraz dźwięku wykorzystuję najnowsze technologie.
                        Moim znakiem rozpoznawczym są szerokie ujęcia. Hobbystycznie zajmuję się tworzeniem krótkich filmów fabularnych.
                    </Line>
                    <br/>
                    <br/>
                    <Strong>Zapraszam do obejrzenia <br/> przykładowych prac.</Strong>
                </Text>
            </Content>
        </Wrapper>
    )
}