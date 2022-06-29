import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";

export const Sidebarcontainer = styled.div`
    
    height: 100vh;
    background-color: #ffbb00;
    width: 25vw;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(${({isOpen})=>(isOpen ? '0%' : '100%')});
    z-index: 99;
    transition: 0.5s ease-in-out;
    @media screen and (max-width: 600px) {
        width: calc(100vw - 150px);
    }
    
`
export const CloseIcon = styled(FaTimes)`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`
export const SidebarList = styled.div`
    background-color: transparent;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 20%;
`
export const SidebarLinks = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 5px auto;
    align-items: center;
    margin-bottom: 40px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{
        color: red;

    }
    
`
export const SidebarButton = styled.button`
    background-color: #e31837;
    cursor: pointer;
    border: none;
    color: white;
    padding: 10px 30px;
    transition: ease-out 0.2s;
    position: absolute;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(100%, -100%);

    &:hover{
    background: #fff;
    transition: ease-out 0.2s;
    color: #000;
    cursor: pointer;
    }
    @media screen and (max-width: 650px) {
        transform: translate(120%, -100%);
    }
`