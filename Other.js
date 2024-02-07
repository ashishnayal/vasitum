import React from 'react'
import MenuComponent from './MenuComponent'
import '../../App.css'
import img6 from "../../images/ic_support.jpg"
import img7 from "../../images/ic_settings.jpg"
export const Other = () => {
  return (
    <div className="frame-86-jwT" id="1:202">
      <label className="frame-84-TsT" id="1:203">
        OTHER
      </label>
      <div className="frame-5-y57" id="1:205">
        <MenuComponent imgUrl={img6} content="Support" />
        <MenuComponent imgUrl={img7} content="Setting" />
      </div>

    </div>
  )
}
