import React from 'react'
import '../../App.css'
export const DashComponent2 = ({heading2, num2, men, women}) => {
    return (
        <div className="frame-50-PJD" id="I1:121;244:959">
            <div className="frame-49-w4q" id="I1:121;244:960">
                <p class="total-employees-FbK" id="I1:121;244:961">
                    {heading2}
                </p>
                <div className="item-216-yXK" id="I1:121;244:962">
                    {num2}
                </div>
            </div>
            <div className="frame-48-VVf" id="I1:121;244:963">
                <p className="men-Ey3" id="I1:121;244:964">
                    {men}
                </p>
                <p className="women-an1" id="I1:121;244:965">
                    {women}
                </p>
            </div>
        </div>
    )
}
