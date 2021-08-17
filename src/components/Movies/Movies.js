import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:grid;
    height:auto;
    grid-auto-rows:15rem;
    grid-row-gap: 1rem;
    grid-template-columns:1fr 1fr;
    min-height:20rem;
    width:100vw;

    @media only screen and (max-width:700px){
            grid-template-columns:1fr;
    }
      
`

const VideoItem = styled.div`
    align-items:center;
    display:flex;
    justify-content: center;
`

const Video = styled.iframe`
    height:15rem;
    width:70%;
    
    @media only screen and (max-width:700px){
        @media (orientation:portrait){
            width:95vw;
        }
    }
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

