import React from 'react'
import { DashComponent4 } from './DashComponent4'
import { DashComponent5 } from './DashComponent5'
import '../../App.css'
export const MainPage13 = ({heading3,date,image,question1,time}) => {
    return (
        <div className="announcement-wNu" id="1:134">
            <div className="auto-group-vcvj-fJu" id="WsSxtixQ6amTf7dRNuvcVj">
                <DashComponent4 heading3="Announcement" date="Today,22 Aug 2023" image="img15"/>
            </div>
            <div className="frame-60-BiV" id="1:136">
            <DashComponent5 question1="Outing Schedule for every department" time="2 Second Ago"/>
            <DashComponent5 question1="Meeting HR Department" time="Yesterday,12.30 PM"/>
            <DashComponent5 question1="IT Department need two more talents for UX/UI Designer" time="Yesterday,09.15 AM"/>
            <button variant="contained">See All Announcement</button>
            </div>
            
        </div>
    )
}
