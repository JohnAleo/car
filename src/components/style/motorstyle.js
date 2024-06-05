import styled from 'styled-components';

export const Middle=styled.div`
display:flex;
justify-content:center; 
background:#fafafa;
//padding:30px;`
export const CarContainer = styled.div`
display:grid;
grid-template-columns:repeat(4, 1fr);
gap:50px;
padding:2% 10%;
img{
    width: 100%;
}
@media only screen and (max-width: 1350px){
display:grid;
grid-template-columns:repeat(3, 1fr);   
}
@media only screen and (max-width: 1000px){
display:grid;
grid-template-columns:repeat(2, 1fr);   
}
@media only screen and (max-width: 700px){
display:grid;
grid-template-columns:repeat(1, 1fr);   
}`

export const Carwrapper = styled.div`
width:100%;
padding:10px;
border-radius:15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
display:flex;
flex-direction:column;
div{
    display: flex;
    justify-content: space-between;
}
p{
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
}`
export const Button=styled.button`
border: 2px solid #006DAB;
color: #006dab;
padding:10px 25px;
font-size: 15px;
background-color:transparent;
border-radius:10px;
cursor:pointer;`

export const Buttonwrapper=styled.div`
display:flex;
:hover{
    background-color: #006DAB;
    color: #fff;;
}`

export const Item= styled.div`
display:flex;
//  border: 1px solid black;
justify-content: center;
align-items: center;

`
export const Itemright=styled.div`
display:flex;
justify-content: center;
flex:3;
gap:20px;
margin-right: -460px;
label{
color: var(--text, #373737);
font-family: sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
}
select{
color: rgba(55, 55, 55, 0.60);
font-family: sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}`

export const Itemleft=styled.div`
display:flex;
flex:1;
justify-content: center;
margin-left:-40px;
gap: 15px;
h5{
display :flex ;
justify-content: center;
color: var(--text, #373737);
font-family: sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
    }
h4{
display:flex;
color: var(--blue, #006DAB);
font-family: sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
}`

export const CarItemwrapper=styled.div`
display:flex;
flex:4;
flex-direction:column;
justify-content:center;`

export const Application =styled.div`
display:flex;
flex:1;
flex-direction:column;
border:1px solid black;
align-items:center;
gap: 50px;`

export const Line =styled.div`
height: 1px;
background: rgba(55, 55, 55, 0.30);
width: 240px;`

export const Line1=styled.div`
height: 1px;
background: rgba(55, 55, 55, 0.30);
width: 1080px;
display:flex;
justify-content:center;

//margin-top:10px;`

export const Line1wrapper=styled.div`
display:flex;
justify-content:center;`

export const Center =styled.div`
display:flex;
justify-content: center;
`

export const Column =styled.div`
display:flex;
flex-direction:column;
label{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}
input{
width: 91px;
height: 36px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(55, 55, 55, 0.60);


}`


export const Cost = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
gap: 10px;

p{
color: var(--text, #373737);
font-family: sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */

}

`
export const Brand=styled.div`
display:flex;
flex-direction:column;
justify-content: center;
gap:10px;
p{
color: #000;
font-family: sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
label{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */}
input{
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
}`

export const Company=styled.div`
display: flex;
flex-direction: column;
justify-content: start;
gap: 10px;
p{
color: #000;
font-family: sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}


`
export const Inputwrapper=styled.div`
display:flex;
align-items:center;
input{
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
}`

export const License=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
gap: 10px;
p{
color: #000;
font-family: sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
input{
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
}
`
export const Travelers=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
gap: 10px;
p{
color: #000;
font-family: sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
input{
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
}
`
export const Location=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
gap: 10px;
p{
color: #000;
font-family: sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
input{
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
}
`



