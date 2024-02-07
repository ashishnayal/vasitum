import React from 'react'
import { Search } from './Search'
import img10 from '../../images/ic_round-notifications.jpg'
import img11 from '../../images/Group.jpg'
import '../../App.css'
import { Profile } from './Profile'
export const NavBar = () => {
  return (
    <div className="navbar" id="1:214">
      <div className="frame1" id="1:215">
        <Search />
        <div className="frame2" id="1:222">
          <div className="auto-group-ky1b-uYR" id="WsT956fMV9S39PmxqbKY1B">
            <div className="auto-group-ky1b-uYR" id="WsT956fMV9S39PmxqbKY1B">
              <img className="icon-alert" src={img10} id="1:223" alt="Alert icon" />
              <img className="icon-message" src={img11} id="1:226" alt="Messege icon" />
            </div>
            <Profile/>
          </div>
        </div>
      </div>
    </div>
  )
}
