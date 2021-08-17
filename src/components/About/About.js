import React from 'react';
import filip from './filip.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr;
    margin: 3rem 0;
    padding:1rem 0;
    height: auto;
    width: 100vw;
    overflow-x: hidden;
`

const Figure = styled.figure`
    align-items: center;
    background:lime;
    background-image:url(${filip});
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
    justify-content: center;
    margin:0 auto;
    display: flex;
    width: 80%;
    height: 40rem;
    overflow: hidden;
    position: relative;
`



const Content = styled.div`
    color: #161616;
    overflow: hidden;
    text-align:center;
`
const Heading = styled.h2`
    font-size:4rem;
    font-weight:500;
`

const Text = styled.p`
    font-size:1.6rem;
    padding:1rem;
`
const Line = styled.span`
    font-weight:300;
`

const Strong = styled.strong`
    font-size:2rem;
   
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