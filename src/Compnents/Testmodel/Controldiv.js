import React from 'react'
import Togglebutton from './Togglebutton';
import './Control.css'
function Controldiv(){
  return (
    <div className='controls'>
        <div className='control-name'>
            <h3>Controls</h3>
            <img className="control-arrow" src={require("./lefticon.png")} alt={"Down arrow"}/>
        </div>
        <div className='control-div'>
            <Togglebutton label= {'Zoom'} />
        </div>

    </div>
  )
}

export default Controldiv;