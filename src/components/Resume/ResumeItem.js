import React from 'react'
import {  Column1, Column2, Heading, Img, ImgWrap, ListElement, ListElements, ResumeContainer, ResumeRow, ResumeWrapper, Subtitle, TextWrapper, TopLine } from './ResumeElements'

const ResumeItem = ({lightBg,imgStart,topLine,lightText,darkText,headline,description,img,alt,id}) => {
    return (
        <>
            <ResumeContainer lightBg={lightBg} id={id} key={id}>
                <ResumeWrapper>
                    <ResumeRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>
                                    <ListElements>
                                    {description.length >0?(description.map(skill => 
                                     <ListElement key={skill}>
                                         {skill}
                                     </ListElement>   
                                    )):''}
                                    </ListElements>
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </ResumeRow>
                </ResumeWrapper>
            </ResumeContainer>
        </>
    )
}

export default ResumeItem
