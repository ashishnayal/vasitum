import React from 'react'
import { MainMenu } from './MainMenu'
import { Logo } from './Logo'
import { Other } from './Other'
import '../../App.css'
import img8 from '../../images/Vasitum Logo.jpg'
export const SideBar = () => {
  return (
    <div className="sidebar" id="1:165">
        <Logo imgUrl={img8}/>
        <div className="frame-87-kMT" id="1:168">
        <MainMenu/>
        </div>
        <Other/>
    </div>
  );
}
