import React from 'react'
import { Button } from '../ButtonElements'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, AboutMeContainer, AboutMeRow, AboutMeWrapper, Subtitle, TextWrapper, TopLine } from './AboutMeElements'

const AboutMeSection = ({lightBg,imgStart,topLine,lightText,darkText,headline,description,buttonLabel,img,alt,id,primary,dark,dark2}) => {
    return (
        <>
            <AboutMeContainer lightBg={lightBg} id={id}>
                <AboutMeWrapper>
                    <AboutMeRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                {buttonLabel!==""?( 
                                <BtnWrap>
                                    <Button 
                                    to="home" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact="true" 
                                    offset={-80} 
                                    primary={primary ? 1 : 0} 
                                    dark={dark?1:0} 
                                    dark2={dark2?1:0}>
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                                ):''}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </AboutMeRow>
                </AboutMeWrapper>
            </AboutMeContainer>
        </>
    )
}

export default AboutMeSection
