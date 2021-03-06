import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { resumeObjFive, resumeObjFourth, resumeObjOne, resumeObjSix, resumeObjThree, resumeObjTwo } from './Data'
import { ResumeDownloadLink, ResumeH1, ResumeH4, ResumeMainContainer, ResumeWrapper } from './ResumeElements'
import ResumeItem from './ResumeItem'

const ResumeSection = () => {
    return (
        <ResumeMainContainer id="resume">                   
            <ResumeH1>Resume</ResumeH1>
            <ResumeH4>
                <ResumeDownloadLink href="https://rcconsultingmx.com/bootcamp/career_service/CV-German_I_Ramirez_Castanon.pdf" target="_blank" aria-label="StackOverflow">
                    Download my resume <FaFilePdf/>
                </ResumeDownloadLink>                 
            </ResumeH4>
            <ResumeWrapper>
                <ResumeItem {...resumeObjOne}/>
                <ResumeItem {...resumeObjTwo}/>
                <ResumeItem {...resumeObjThree}/>
                <ResumeItem {...resumeObjFourth}/>
                <ResumeItem {...resumeObjFive}/>
                <ResumeItem {...resumeObjSix}/>
            </ResumeWrapper>
        </ResumeMainContainer>
    )
}

export default ResumeSection
