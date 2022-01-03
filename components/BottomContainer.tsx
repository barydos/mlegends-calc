import React, {useContext} from 'react'
import { InfoContext } from '../contexts/InfoContext'

const BottomContainer = () => {

    const { info } = useContext(InfoContext)

    const performCalc = () => {
        console.log('TODO: summary calculations')
        console.log(info);
        return { }
    }
    return (
        <div className="bottom-container">
            <button onClick={performCalc}>Calculate</button>
            <div className="damage-container">
                <table>
                    <tbody>
                        <tr><td>Min</td><td>500</td></tr>
                        <tr><td>Max</td><td>1500</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="summary-container">It will take 2 hits to KO the monster</div>
        </div>
    )
}

export default BottomContainer
