import styled from 'styled-components'


export const ResumeMainContainer = styled.div`
    padding-top:50px;
`

export const ResumeContainer = styled.div`
    color:white;
    background:${({lightBg}) =>(lightBg?'#f9f9f9':'#010606')};

    @media screen and (max-width:768px){
        padding:100px 0;
    }
`
export const ResumeWrapper = styled.div`
    display:grid;
    z-index:1;
    min-height:600px;
    width:100%;
    max-width:1100px;
    margin-right:auto;
    margin-left:auto;
    padding:0 24px;
    justify-content:center;
`

export const ResumeH1 = styled.h1`
    font-size:2.5rem;
    color:#920707;
    margin-bottom:14px;
    text-align:center;
    
    @media screen and (max-width:480px){
        font-size:2rem;
    }
`
export const ResumeH4 = styled.h4`
    font-size:1.5rem;
    color:#920707;
    margin-bottom:64px;
    text-align:center;
    
    @media screen and (max-width:480px){
        font-size:0.5rem;
    }
`
export const ResumeDownloadLink = styled.a`    
    color:#920707;
    text-decoration:none;

    &:hover{
        text-decoration:underline;
    }
`

export const ResumeRow = styled.div`
    display:grid;
    grid-auto-columns:minmax(auto, 1fr);
    align-items:center;
    grid-template-areas:${({imgStart}) =>(imgStart?`'col2 col1'`:`'col1 col2'`)};
    
    @media screen and (max-width:768px){
        grid-template-areas: ${({imgStart}) =>(imgStart ? `'col1' 'col2'` : `'col1 col1'  'col2 col2'` )};
    }
`


export const Column1 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col1;
`


export const Column2 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col2;
`

export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:60px;
`


export const TopLine = styled.p`
    color:#01bf71;
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform:uppercase;
    margin-bottom:16px;
`

export const Heading = styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color:${({lightText}) =>(lightText?'#01bf71':'#920707')};
    @media screen and (max-width:480px){
        font-size:32px;
    }
`

export const Subtitle = styled.div`
    max-width:440px;
    margin-bottom:35px;
    font-size:18px;
    line-height:24px;
    color:${({darkText}) =>(darkText?'#010606':'#fff')};
    text-align:justify;
`
export const ListElements = styled.ul`
    display: flex;
    border-radius: 0;    
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: .25rem;
`

export const ListElement = styled.li`
    position: relative;
    display: block;
    padding: .5rem 1rem;
    color: #212529;
    text-decoration: none;
    border: 1px solid rgba(0,0,0,.125);
    border-width: 0 0 1px;
`

export const BtnWrap = styled.div`
    display:flex;
    justify-content:flex-start;
`

export const ImgWrap = styled.div`
    max-width:555px;
    height:100%;
`

export const Img = styled.img`
    width:100%;
    margin:0 0 10px 0;
    padding-right:0;
`