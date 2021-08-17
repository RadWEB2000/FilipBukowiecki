import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height:20rem;
    height:auto;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:.5rem;
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

export const Movies = () => {
    return (
        <Wrapper>
            <VideoItem>
                <Video src="https://www.youtube.com/embed/wrd770kZnaE" frameBorder='0' allowFullScreen className="video"/>
            </VideoItem>

            <VideoItem>
                <Video src="https://www.youtube.com/embed/wqcfgE2LAV4" frameBorder='0' allowFullScreen className="video"/>
            </VideoItem>

            <VideoItem>
                <Video src="https://www.youtube.com/embed/DcJ9T3N6m3M" frameBorder='0' allowFullScreen className="video"/>
            </VideoItem>

            <VideoItem>
                <Video src="https://www.youtube.com/embed/xIFhanw-e44" frameBorder='0' allowFullScreen className="video"/>
            </VideoItem>

            <VideoItem>
                <Video src="https://www.youtube.com/embed/uPTmHk9sI0U" frameBorder='0' allowFullScreen className="video"/>
            </VideoItem>
        </Wrapper>
    )
}

