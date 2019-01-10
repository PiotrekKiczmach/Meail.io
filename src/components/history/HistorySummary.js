import React from 'react';

const HistorySummary = ({history}) => {

    return (
        <div className="card z-depth-0 ">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{history}</span>
                <p>Posted by {history.authorFirstName} {history.authorLastName}</p>
            </div>
        </div>
    )
}
export default HistorySummary