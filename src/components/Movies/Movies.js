import React from 'react';
import styled from 'styled-components';
import backstage from './backstage.jpg';


const Wrapper = styled.div`
    min-height:20rem;
    height:auto;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-row-gap: 1rem;
    grid-auto-rows:15rem;
    width:100vw;
`

const VideoItem = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
`

const Video = styled.iframe`
    width:70%;
    height:15rem;
`



const YouTubeLinks = [
    {link:'https://www.youtube.com/embed/wrd770kZnaE'},
    {link:'https://www.youtube.com/embed/wqcfgE2LAV4'},
    {link:'https://www.youtube.com/embed/DcJ9T3N6m3M'},
    {link:'https://www.youtube.com/embed/xIFhanw-e44'},
    {link:'https://www.youtube.com/embed/uPTmHk9sI0U'}
]



export const Movies = () => {
    return (
        <Wrapper>
            {YouTubeLinks.map(e =>
                <VideoItem>
                    <Video src={e.link} frameBorder='0' allowFullScreen/>
                </VideoItem>
            )}
        </Wrapper>
    )
}

