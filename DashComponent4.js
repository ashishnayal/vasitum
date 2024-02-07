import React from 'react'
import '../../App.css'
export const DashComponent4 = ({heading3,date,image}) => {
  return (
    <div className="frame-74-BHF" id="1:139">
                  <label className="announcement-gUu" id="1:140">
                    {heading3}
                  </label>
                  <div className="frame-64-pzR" id="1:141">
                    <div className="today-13-sep-2021-xqj" id="1:143">
                      {date}
                    </div>
                    <img className="frame-10-V4y" src={image}
                      id="1:144" alt="icon" />
                  </div>
                </div>
  )
}
