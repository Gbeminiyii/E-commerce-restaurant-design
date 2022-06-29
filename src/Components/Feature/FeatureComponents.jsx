import styled from "styled-components";
import imgbg2 from '../../images/featured3.jpg'

export const FeatureContainer = styled.div`
    max-width: 100vw;
    background: linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1)), url(${imgbg2});
    position: relative;
    height: 100vh;
    max-height: 500px;
    margin: 70px 0;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const FeatureContainerText = styled.div`
    position: absolute;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 650px){
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    }
`
export const FeatureContainerHead = styled.h1`
    color: white;
    font-size: 75px;
    @media screen and (max-width: 600px) {
        font-size: 45px;
        margin-left: 0px;
    }
`
export const FeatureContainerDesc = styled.p`
    color: white;
    margin: 15px 0;
    font-size: 20px;
`
export const FeatureContainerButton = styled.button`
    padding: 10px 25px;
    background-color: yellow;
    color: black;
    border: none;
    transition: 0.2s ease-out;
    cursor: pointer;
    margin-top: 10px;
    &:hover{
        background-color: red;
        color: white;
        transition: 0.2s ease-out;
    }
`