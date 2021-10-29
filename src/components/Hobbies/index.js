import React from 'react'
import Icon1 from '../../images/game-day.svg'
import Icon2 from '../../images/manga.svg'
import Icon3 from '../../images/learn.svg'
import { HobbiesCard, HobbiesContainer, HobbiesH1, HobbiesH2, HobbiesIcon, HobbiesP, HobbiesWrapper } from './HobbyElements'

const Hobbies = () => {
    return (
        <>
            <HobbiesContainer id="portfolio">
                <HobbiesH1>My Hobbies</HobbiesH1>
                <HobbiesWrapper>
                    <HobbiesCard>
                        <HobbiesIcon src={Icon1}/>
                        <HobbiesH2>Sports</HobbiesH2>
                        <HobbiesP>I like to watch the NFL games and since 2000 I'm a Patriot's fan, also I watch Mexico's soccer games (America Club's fan).</HobbiesP>
                    </HobbiesCard>
                    <HobbiesCard>
                        <HobbiesIcon src={Icon2}/>
                        <HobbiesH2>Manga/Anime</HobbiesH2>
                        <HobbiesP>I'm big fan of the japanise culture so I started to read manga and watch anime, it's something I enjoy doing on weekends when new episodes are released.</HobbiesP>
                    </HobbiesCard>
                    <HobbiesCard>
                        <HobbiesIcon src={Icon3}/>
                        <HobbiesH2>Learn</HobbiesH2>
                        <HobbiesP>The languages I have learned have been by my own decision, because I like to be updated on new technologies and languages.</HobbiesP>
                    </HobbiesCard>
                </HobbiesWrapper>
            </HobbiesContainer>   
        </>
    )
}

export default Hobbies
