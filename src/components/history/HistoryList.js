import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import HistorySummary from './HistorySummary';
import { Link } from 'react-router-dom'

const HistoryList = ({history}) => {

    return (
        <div className="section">
            {   history && history.map(history => {
                    return (
                        <Link to={'/history/' + history.id} key={history.id}>
                            <HistorySummary history={history.id} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default HistoryList