import React, { useContext, useState } from 'react';
import { Button } from 'reactstrap';
import { InfoContext } from '../contexts/InfoContext';
import { SETTINGS } from '../data/constants';

const Summary = () => {

    const { info } = useContext(InfoContext)

    const [loading, setLoading] = useState(false);

    const performCalc = () => {
        // TODO: summary calculations
        setLoading(true);
        localStorage.setItem(SETTINGS, JSON.stringify(info));
        console.log(info);
        setLoading(false);
        return {}
    }
    const clearCache = () => {
        localStorage.removeItem(SETTINGS);
    }

    return (
        <div className='summary-container d-flex flex-column align-items-center'>
            <div className="button-group">
                <Button type='button' color='danger' outline onClick={clearCache}>Clear cache</Button>
                <Button type='button' className='ms-2' color='primary' outline onClick={performCalc}>Calculate</Button>
            </div>

            <div className='details-group my-3 d-flex flex-column align-items-center'>
                <div className="damage-table mb-2">
                    <table>
                        <tbody>
                            <tr><td>Min</td><td>500</td></tr>
                            <tr><td>Max</td><td>1500</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className='summary-description'>It will take 2 hits to KO the monster</div>
            </div>
            <div id='loading'>{loading ? 'Loading...' : ''}</div>
        </div>
    )
}

export default Summary;
