import React from 'react'
import '../../App.css'
export const DashComponent6 = ({datetime,activitycount}) => {
    return (
        <>
            <div className="recent-2" id="1:125">
                <p className="recent-date" id="1:126">
                    {datetime}
                </p>
                <p className="recent-label" id="1:127">
                    You Posted a New Job
                </p>
                <p className="recent-para"
                    id="1:128">
                    Kindly check the requirements and terms of work and make
                    sure everything is right.
                </p>
            </div>
            <div className="recent-bottom" id="1:129">
                <p className="p9" id="1:130">
                    {activitycount}
                </p>
                <button className="button-nus" id="1:131" variant="contained">
                    <label className="btn-nus">See All Activity</label>
                    
                </button>
            </div>
        </>

    )
}
