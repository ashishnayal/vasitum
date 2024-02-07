import React from 'react'
import { DashComponents7 } from './DashComponents7'
import '../../App.css'
export const MainPage15 = ({ date2, question4, calender }) => {
  return (
    <div className="upcoming-frame" id="1:152">
      <div className="upcoming-label1">
        <div>
          <label className="upcoming-label11" id="1:153">
            Upcoming Schedule
          </label>
        </div>
        <div className="upcoming-label-dd" id="1:154">
          <div className="today-13-sep-2021-Gc5" id="1:156">
            {date2}
          </div>
          <img className="frame-10-o6D" src="/api/prod-ap-southeast-1-first-cluster/projects/WD..."
            id="1:157" alt="c1" />
        </div>
      </div>

      <label className="priority-label" id="1:150">
        Priority
      </label>
      <DashComponents7 question4="Review Candidate Applications" calender="Today=11:30 AM" />
      <label className="other-label" id="1:151">
        Other
      </label>
      <DashComponents7 question4="Interview with candidates" calender="Today-10:30 AM" />
      <DashComponents7 question4="Short Meeting with Product designer from IT" calender="Today-09:15 AM" />
      <DashComponents7 question4="Interview with candidates" calender="Today-10:30 AM" />
      <button className="btn1" variant="contained">Create a New Schedule</button>
    </div>
  )
}
