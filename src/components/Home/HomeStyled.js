import styled from "styled-components";


export const ContainerHome = styled.div`
display: grid;
grid-template-columns: 3fr 1fr;
color: #fff;
background-color: #131212f7; 
width: 100%;
grid-gap: 0;
grid-template-areas: 
    "H2Home sidebarR"
    "body  sidebarR"
    "body  sidebarR"
    "footer footer";
`

export const ContentLef_Home = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, 1fr);
/* height: 100vh; */
margin: 20px;
grid-area: body;
justify-content: center;
text-align: center;
grid-gap: 20px;



/* responsive xs */
@media screen and (min-width: 1px) and (max-width: 767px) {
grid-template-columns: repeat(1, 1fr);

}
/* responsive sm  */
@media screen and (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);

}

/* responsive md  */
@media screen and (min-width: 992px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
}
`


export const ContentRigt_Home = styled.div`
grid-area: sidebarR;
background-color: #323643;
padding: 10px;
border: solid white 0.5px ;
margin-right: 10px;


/* responsive xs */
@media screen and (min-width: 1px) and (max-width: 767px) {
display: none;

}
/* responsive sm  */
@media screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
    
}

`



// COMPONENTES COMUNES MAS UTILES

export const H2Home = styled.h1`
    grid-area: H2Home;
    color: ${props => props.color};
    font-size: ${props => props.size};
    margin-top: 10px;
`    

export const SpanHome = styled.h1`
    grid-area: SpanHome;
    color: ${props => props.color};
    font-size: ${props => props.size};
    margin: 4px;
    margin-top: 10px;
`    













export const ContentFooter = styled.div`
display: grid;
height: 300px;
padding: 20px;
display: flex;
background-color: #212529;
color: #fff;
grid-area: footer;
text-align: center;
justify-content: center;
margin: 0;
`

