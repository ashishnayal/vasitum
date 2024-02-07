import React from 'react'
import '../../App.css'
export const DashComponent5 = ({question1, time}) => {
    return (
        <div className="ann-con">
            <div className="ann-con-1" id="I1:136;244:946">
                <p className="ann-con-11" id="I1:136;244:947">
                    {question1}
                </p>
                <p className="ann-con-12" id="I1:136;244:948">
                    {time}
                </p>
            </div>
            <div className="frame-57-Vch" id="I1:136;244:949">
                <img className="bi-pin-angle-fill-cBX" src="/api/prod-ap-southeast-1-first-cluster/projects/WD..."
                    id="I1:136;244:950" alt="h1" />
                <img className="carbon-overflow-menu-horizontal-LtD"
                    src="/api/prod-ap-southeast-1-first-cluster/projects/WD..." id="I1:136;244:953" alt="h2" />
            </div>
        </div>
    )
}
