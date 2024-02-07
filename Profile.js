import React from 'react'
import img12 from '../../images/Mask Group.jpg'
import img13 from '../../images/Vector 1.jpg'
import '../../App.css'
export const Profile = () => {
  return (
    <div className="frame-profile" id="1:230">
              <img className="imageuser" src={img12} id="1:231" alt="User-pic"/>
              <div className="profiledropdown" id="1:234">
                <p className="p1" id="1:235">
                  Admirra John
                </p>
                <button className="pfdp" src={img13} id="1:236" >
                  <div className="drop-down">
                    <a href="#">Link1</a>
                    <a href="#">Link1</a>
                    <a href="#">Link1</a>
                    <a href="#">Link1</a>
                  </div>
                </button>
              </div>
            </div>
  )
}
