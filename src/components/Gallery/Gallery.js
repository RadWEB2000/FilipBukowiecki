import React from 'react';
import styled from 'styled-components';
import backstage from './backstage.jpg';
import lusterko from './lusterko.jpg';
import mis from './mis.jpg';
import samochod from './samochod.jpg';

const GalleryStyle = styled.div`
    width:100vw;
    height:auto;
`


const Image = styled.div`
    background:lime;
    background-attachment:fixed;
    background-image:url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter:grayscale(70%);
    width:100%;
    margin:4rem 0;
    height:70rem;
    max-height:60vh;
`

export const Gallery = () => {
    return (
        <GalleryStyle>
            <Image image={backstage}/>
            <Image image={lusterko}/>
            <Image image={mis}/>
            <Image image={samochod}/>
        </GalleryStyle>
    )
}