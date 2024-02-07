import React from 'react'
import { DashComponent2 } from './DashComponent2'
import { DashComponent3 } from './DashComponent3'
import '../../App.css'
export const MainPage12 = ({heading2,num2,men,women}) => {
  return (
    <div className="talent-request-3k9" id="1:121">
        <DashComponent2 heading2="Toatl Employees" num2="216" men="120 Men" women="96 Women"/>
        <div className="frame-52-idK" id="I1:121;244:966">
            <DashComponent3/>
        </div>
        <DashComponent2 heading2="Talent Request" num2="16" men="6 Men" women="10 Women"/>
        <div className="frame-52-idK" id="I1:121;244:966">
            <DashComponent3/>
        </div>
        
    </div>
  )
}
