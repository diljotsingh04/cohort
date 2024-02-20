import { useState } from 'react'
import './style.css'

function Background_change() {

  const [bgColor, setBgColor] = useState("white");

  return (
    <div className='container' style={{ background: bgColor }}>
      <div className="bottom">
        <button onClick={() => setBgColor("red")} id='red'>Red</button>
        <button onClick={() => setBgColor("green")} id='green'>Green</button>
        <button onClick={() => setBgColor("blue")} id='blue'>Blue</button>
        <button onClick={() => setBgColor("yellow")} id='yellow'>Yellow</button>
        <button onClick={() => setBgColor("white")} id='white'>Default</button>
      </div>
    </div>
  )
}

export default Background_change
