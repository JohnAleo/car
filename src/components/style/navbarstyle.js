import styled from 'styled-components';

export const NavbarComponent=styled.div`
display:flex;
flex-direction:column;
margin-bottom:300px;
`

export const Navbarwrapper = styled.div`
display: flex;
justify-content:center;
align-items: center;
border:1px solid black;
width:cover;
height: 90px;
flex-shrink: 0;
background: #FFF;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
border:1px solid black;
`


export const Navbarleft=styled.div`
display: flex;
flex: 2;
justify-content: center;
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const Navbarmiddle=styled.div`
display:flex;
flex:5;
justify-content:space-around;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;`

export const Navbarright=styled.div`
display:flex;
flex: 2;
justify-content:center ;
gap: 20px;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const Enwrapper =styled.div`
display:flex;
justify-content:center ;
align-items: center;
display: flex;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

`
export const Homemotors=styled.div`
display:flex;
justify-content: center;
z-index: 2;
flex-direction:column;
justify-content: center;
margin-top: -300px;
p{
display: flex;
justify-content: center;
color: #fff;
font-family: sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
h3{
display: flex;
justify-content: center;
color: #fff;
font-family: sans-serif;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h1{
display: flex;
justify-content: center;
color: #fff;
font-family: sans-serif;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}`
