import React from 'react'
import { MainBg, MainContainer, MainContent, MainH1, MainP, VideoBg } from './MainElements'
import Video from '../../videos/video2.mp4'

const MainSection = () => {

    return (
        <MainContainer id="home">
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </MainBg>
            <MainContent>
                <MainH1>Welcome to my Portfolio</MainH1>
                <MainP>
                    "I help smart business owners to develop their scalable, progressive and powerful applications that reflects their value to the clients."
                </MainP>
            </MainContent>
        </MainContainer>
    )
}

export default MainSection
