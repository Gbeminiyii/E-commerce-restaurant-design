import styled from "styled-components";

export const ProductContainer = styled.div`
    background-color: black;
    width: 100vw;
    min-height: 100vh;
`
export const ProductWrapper = styled.div`
    margin: 50px auto;
`
export const ProductText = styled.h2`
    margin: 40px 0;
    text-align: center;
    color: white;
`
export const Card = styled.div`
   max-width : 300px;
   display: flex;
   flex-direction: column;
   margin: 0 2rem;

   img{
    width: 250px;
    height: 250px;
    object-fit: cover;
    margin: 0 auto;
    box-shadow: 8px 8px 5px yellow;
   }
   h2{
    margin-top: 30px;
    text-align: center;
    color: white;
   }
   p{
    text-align: center;
    color: white;
    width: 220px;
    margin: 10px auto;
    line-height: 2;
   }
   span{
    margin: 10px auto;
    font-size: 20px;
    font-weight: bold;
    color: white;
   }
   button{
    margin: 10px auto;
    width: 170px;
    background-color: red;
    border: none;
    padding: 13px 10px;
    color: white;
    transition: 0.2 ease-out;
    &:hover{
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: black;
    }
   }
   @media screen and (max-width: 600px){
        margin-bottom: 40px;
   }
  
`
export const ProductCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    @media screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        margin-top: 0px;
        align-items: center;
        justify-content: center;
   }
`