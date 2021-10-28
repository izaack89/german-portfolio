import React from 'react'
import { ProjectsList } from './Data'
import { PortfolioCard, PortfolioContainer, PortfolioH1, PortfolioH2, PortfolioIcon, PortfolioP, PortfolioWrapper,BtnWrap,Button, PortfolioStrong } from './PortfolioElements'

const PortfolioSection = () => {
    return (
        <>
            <PortfolioContainer id="portfolio">
                <PortfolioH1>Portfolio</PortfolioH1>
                <PortfolioWrapper>
                    {ProjectsList.length !== 0 ?( ProjectsList.map(project => 
                        <PortfolioCard id={project.projectName} key={project.projectName}>
                            <PortfolioIcon src={project.img}/>
                            <PortfolioH2>{project.projectName}</PortfolioH2>
                            <PortfolioP><PortfolioStrong> Summary: </PortfolioStrong>{project.description}</PortfolioP>
                            <PortfolioP><PortfolioStrong> Tools: </PortfolioStrong>{project.tools}</PortfolioP>
                            <BtnWrap>
                            {project.githubLink !=="" ?(
                                <Button 
                                href={project.githubLink}  
                                target={'_blank'}
                                >
                                GitHub
                                </Button>
                            ):''}
                                <Button 
                                href={project.liveLink} 
                                target={'_blank'}
                                primary={true}
                                >
                                Live
                                </Button>
                            </BtnWrap>
                        </PortfolioCard>
                    )):'No Projects'}
                </PortfolioWrapper>
            </PortfolioContainer>   
        </>
    )
}

export default PortfolioSection
