import styled from "styled-components";
import ImgBg from '../../images/pizza-3.jpg'

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`
export const HeroContent = styled.div`
    background-color: transparent;
    width: 100vw;
    display: flex;
    align-items: center;
    margin-top: 100px;
    @media screen and (max-width:650px){
        width: 100%;
    }
    

`
export const HeroItems = styled.div`
   width: 600px;
   margin-left: 50px;
   margin-right: 10px;
`
export const HeroH1 = styled.h1`
    font-size: 70px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    border-right: 2px yellow solid;
    border-bottom: 4px yellow solid;
`
export const HeroP = styled.p`
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
`
export const HeroBtn = styled.button`
    background-color: #e31837;
    color: white;
    border: none;
    padding: 10px 30px;
    transition: ease-out 0.2s;
    cursor: pointer;

    &:hover{
    background: #ffc500;
    transition: ease-out 0.2s;
    color: #000;
    cursor: pointer;
    }
`