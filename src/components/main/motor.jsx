import React from 'react'
import { campcar } from '../mock/mockdata';
import { Middle,CarContainer, Carwrapper,Button,Buttonwrapper,Item,CarItemwrapper ,Cost,
Application,Brand,Company,License,Travelers,Location,Line,Line1,Column,Itemright,Itemleft,Center,Line1wrapper, 
Inputwrapper} from '../style/motorstyle';
import star from '../assets/star.png';
import  NavbarComponent from '../navbar/navbar';
const MotorComponent= () => {
    const data=campcar.maindata;
    console.log("data ", data);
  return (
    <>
    <NavbarComponent />
    <Middle>
    <Application>
        <Cost>
            <p>Cost of car</p>
            <Line></Line>
            <div>
                <Column>
                    <label>from</label>
                    <input type="text" />
                </Column>
                <Column>
                    <label>to</label>
                    <input type="text" />
                </Column>
            </div>
        </Cost>
        <Brand>
        <p>Brand</p>
        <Line></Line>
        <div>
            <input type="checkbox" /><label>Aidal</label>
        </div>
        <div>
            <input type="checkbox" /><label>Knal</label>
        </div>
        <div>
            <input type="checkbox" /><label>Escape</label>
        </div>
        </Brand>
        <Company>
        <p>Company</p>
        <Line></Line>
        <Inputwrapper>
            <input type="checkbox" /><label>Escape</label>
        </Inputwrapper>
        <div>
            <input type="checkbox" /><label>Aidal</label>
        </div>
        </Company>
        <License>
        <p>Licensee</p>
        <Line></Line>
        <div>
            <input type="checkbox" /><label>1 year</label>
        </div>
        <div>
            <input type="checkbox" /><label>2 years</label>
        </div>
        <div>
            <input type="checkbox" /><label>1.5 years</label>
        </div>
        </License>
        <Travelers>
        <p>Number of travelers</p>
        <Line></Line>
        <div>
            <input type="checkbox" /><label>2</label>
        </div>
        <div>
            <input type="checkbox" /><label>3-4</label>
        </div>
        <div>
                <input type="checkbox" /><label>5+</label>
        </div>
        </Travelers>
        <Location>
        <p>Location</p>
        <Line></Line>
        <div>
            <input type="checkbox" /><label>Seoul</label>
        </div>
        <div>
            <input type="checkbox" /><label>Korea</label>
        </div>
        <div>
            <input type="checkbox" /><label>Busan</label>
        </div>
        </Location>
    </Application>
    <CarItemwrapper>
    <Item>
        <Itemleft>
            <h5>Item </h5> <h4>25.156</h4>
        </Itemleft>
        <Itemright>
            <label>Sort by</label>
            <select >
                <option>Select</option>
                <option value=""></option>
            </select>
            <select>
                <option>60</option>
                <option></option>
                <option></option>
            </select>
        </Itemright>
        
    </Item>
    <Line1><div></div></Line1>
    <CarContainer>
        {data.map((value, key)=> {
            return(
                <Carwrapper key={key}>
                    <img src={value.car.photo} alt="rasm" />
                    <h2>{value.car.name || "no data"}</h2>
                    <div>
                        <div>{value.car.company || "no company"} </div>
                        <div>
                            <img src={star} alt="star" style={{width:'14px',height:'14px',flexShrink:'0',display:'flex',alignItems:'center'}} />
                            <div>{value.car.rate || "0" }</div>
                        </div>
                    </div>
                    <p>{value.car.cost}</p>
                    <Buttonwrapper>
                        <Button>Order</Button>
                        <Button>Compare</Button>
                    </Buttonwrapper>
                </Carwrapper>
            )
        })}
    </CarContainer>
    </CarItemwrapper>
    </Middle>

    </>
  )
}

export default MotorComponent;