import React from 'react'
import '../../App.css'
export const DashComponent6 = ({datetime,activitycount}) => {
    return (
        <>
            <div className="frame-81-CoF" id="1:125">
                <p className="am-fri-10-sept-2021-LuT" id="1:126">
                    {datetime}
                </p>
                <p className="you-posted-a-new-job-H41" id="1:127">
                    You Posted a New Job
                </p>
                <p className="kindly-check-the-requirements-and-terms-of-work-and-make-sure-everything-is-right-cry"
                    id="1:128">
                    Kindly check the requirements and terms of work and make
                    sure everything is right.
                </p>
            </div>
            <div className="frame-80-i9K" id="1:129">
                <p className="today-you-makes-12-activity-sH7" id="1:130">
                    {activitycount}
                </p>
                <button className="button-nus" id="1:131" variant="contained">
                    See All Activity
                </button>
            </div>
        </>

    )
}
