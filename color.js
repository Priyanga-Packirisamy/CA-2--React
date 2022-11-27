
import React, { useState } from 'react'
import './color.css'

export default function Color() {
    const [color,setColor] = useState("white");
  return (
    <div>
    <div className='dropdown'>Colour Changer<br/>
    <select onChange={e=>setColor(e.target.value)}  >
    <option value="lime">Lime</option>
    <option value="lavender">Lavender</option>
    <option value="crimson">Crimson</option>
    <option value="darkblue">Darkblue</option>
    <option value="teal">Teal</option>
    <option value="rebeccapurple">Rebeccapurple</option>
    <option value="ghostwhite">Ghost White</option>
    <option value="aquamarine">Aqua Marine</option>
    <option value="aliceblue">Alice Blue</option>
    </select>
    <br/>
    <button style={{"backgroundColor":color, padding:"100px", margin:"120px", marginLeft:"450px", borderColor:color}}></button>
    </div>
    </div>
  )
}
