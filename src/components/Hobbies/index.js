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
                        <HobbiesP>I like to watch the NFL games and since 2000 I'm Patriots fan also I like to watch the soccer games from México and I support the America Club.</HobbiesP>
                    </HobbiesCard>
                    <HobbiesCard>
                        <HobbiesIcon src={Icon2}/>
                        <HobbiesH2>Manga/Anime</HobbiesH2>
                        <HobbiesP>I'm big fan of the japanise culture so I started to read manga and then I started to watch their animes , is somerhing that I enjoy doing on the weekend when the new episodes are out.</HobbiesP>
                    </HobbiesCard>
                    <HobbiesCard>
                        <HobbiesIcon src={Icon3}/>
                        <HobbiesH2>Learn</HobbiesH2>
                        <HobbiesP>Most of the language that I have learned has been by my own desicion cause I like to be updated on the new technologies and languages.</HobbiesP>
                    </HobbiesCard>
                </HobbiesWrapper>
            </HobbiesContainer>   
        </>
    )
}

export default Hobbies
