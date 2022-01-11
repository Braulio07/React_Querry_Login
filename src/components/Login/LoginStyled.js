import styled from "styled-components";




export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2,1fr);
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
`
export const ContainerLogin = styled.div`
    text-align: left;
    margin:    auto;
    padding: 10%;
    max-width: 1100px;
    max-height: 1000px;
    padding-bottom: 170px;
    border-radius: 10px;
    margin-top: 70px;
    color: #fff;
    background-color: #1f1d1de1; 
`



export const H1Login = styled.h1`
font-size: 14px;
color:  ${props => props.color};
font-size:  ${props => props.size}px;
margin-bottom: 50px;
`

export const ButtonLogin = styled.button`
background-color:  ${props => props.color};
color: white;
font-size: 16px;
box-shadow: rgba(0, 0, 0, 0.55) 0px 1px 0px 0px;
border-radius: 4px;
line-height: 16px;
padding: 10px 100px 10px 100px;
margin-top: 20px;
:hover{
    background-color:  #e50934;
}
`




export const FooterLogin = styled.div`
    width: 100%;
    padding: 100px;
    font-size: 30px;
    color: #fff;
    background-color: #0e0c0cea; 
`
