import React from 'react'
import '../App.css'
import { SideBar } from './SideBar/SideBar'
import { NavBar } from './NavBar/NavBar'
import { MainPage } from './Dashboard/MainPage'
export const LandingPage = () => {
    return (
        <div className="dashboard-desktop" id="1:112">
            <SideBar />
            <NavBar />
            <MainPage />
        </div>
    );
}
