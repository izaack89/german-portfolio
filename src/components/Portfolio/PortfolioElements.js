import styled from 'styled-components'

export const PortfolioContainer = styled.div`
    min-height:700px;
    display:flex;
    padding-top:50px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#f9f9f9;

    @media screen and (max-width:768px){
        height:100%;
    }

`

export const PortfolioWrapper = styled.div`
    max-width:1000px;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items:center;
    grid-gap:16px;

    @media screen and (max-width:1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding:0 20px;
    }

`



export const PortfolioCard = styled.div`
    background:white;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    border-radius:10px;
    height:450px;
    padding:30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition:all 0.2s ease-in-out;

    &:hover{
        transform:scale(1.02);
        transition:all 0.2s ease-in-out;
        cursor:pointer;
    }
`


export const PortfolioIcon = styled.img`
    height:180px;
    width:400px;
    margin-bottom:10px;
    @media screen and (max-width:768px){
        width:300px;
    }
    @media screen and (max-width:480px){
        width:200px;
    }
`

export const PortfolioH1 = styled.h1`
    font-size:2.5rem;
    color:#920707;
    margin-bottom:64px;
    
    @media screen and (max-width:480px){
        font-size:2rem;
    }
`

export const PortfolioH2 = styled.h2`
    font-size:1.2rem;
    margin-bottom:10px;
`

export const PortfolioP = styled.p`
    font-size:0.8rem;
    text-align:justify;
    padding-top:10px;
`

export const PortfolioStrong = styled.strong`
    font-weight:bold;
`

export const BtnWrap = styled.div`
    display:flex;
    justify-content:flex-start;
    padding:20px;
`

export const Button= styled.a`
    border-radius:50px;
    background:${({primary})=> (primary ? '#01BF71':'#000')};
    white-space:nowrap;
    padding:${({big}) => (big)?'14px 48px':'12px 30px'};
    color:${({dark}) => (dark)?'#010606':'#fff'};
    font-size:${({fontBig}) => (fontBig)?'20px':'16px'};
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.2s ease-in-out;
    margin: 0 10px;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:${({primary})=> (primary ? '#000':'#01BF71')};
        color:${({dark}) => (dark)?'#fff':'#fff'};
        text-decoration:underline;
    }
`