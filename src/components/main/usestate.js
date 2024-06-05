import React, { useState } from 'react'
import { Statewrapper } from '../style/statestyle'

const Usestate = () => {
    const [active, setActive] = useState(false);

    const handleHmenu =() =>{
    setActive(true);
    }
    function handleVmenu () {
    setActive(false);
    }
  return (
    <>
    <div>Usestate</div>
    <Statewrapper>
        <button onClick={handleHmenu}>Hmenu</button>
        <button onClick={handleVmenu}>Vmenu</button>
    </Statewrapper>
    { active ? <p>H menu showen</p> : <p>V menu data</p>}
    </>
  )
}
export default Usestate