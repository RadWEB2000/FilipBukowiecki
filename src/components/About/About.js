import React from 'react';
import filip from './filip.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr;
    margin: 3rem 0;
    padding: 1rem;
    height: auto;
    width: 100vw;
    overflow-x: hidden;
`

const Figure = styled.figure`
    align-items: center;
    background:lime;
    background-attachment: fixed;
    background-image:url(${filip});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    justify-content: center;
    display: flex;
    width: 35rem;
    height: 35rem;
    overflow: hidden;
    position: relative;
`



const Content = styled.div`
    background:lime;
    border:2px solid #0ff;
    border-radius:1rem;
    overflow: hidden;
    text-align:center;
`
const Heading = styled.h2`
    background:pink;
    font-size:4rem;
    font-weight:500;
`

const Text = styled.p`
    background:green;
`
const Line = styled.span`
    background:aqua;
`

const Strong = styled.strong`
    background:#f00;
`

export const About = () => {
    return (
        <Wrapper>
            <Figure/>
            <Content>
                <Heading>O mnie</Heading>
                <Text>
                    <Line>
                        Na co dzień mieszkam w Poznaniu. Od 2019 komercyjnie zajmuję się szeroko pojętym wideo marketingiem. W mojej ofercie znajdują się nagrania wideo, montaż oraz realizacja transmisji. Oferuję unikalne podejście do tematyki audiowizualnej oraz maksimum zaangażowania przy każdym zleceniu. Do rejestrowania obrazu oraz dźwięku wykorzystuję najnowsze technologie.
                        Moim znakiem rozpoznawczym są szerokie ujęcia. Hobbystycznie zajmuję się tworzeniem krótkich filmów fabularnych.
                    </Line>
                    <br />
                    <Strong>Zapraszam do obejrzenia przykładowych prac.</Strong>
                </Text>
            </Content>
        </Wrapper>
    )
}