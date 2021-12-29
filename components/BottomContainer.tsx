import React from 'react'

const BottomContainer = () => {
    return (
        <div className="bottom-container">
            <div className="damage-container">
                <table>
                    <tr><td>Min</td><td>500</td></tr>
                    <tr><td>Max</td><td>1500</td></tr>
                </table>
            </div>
            <div className="summary-container">It will take 2 hits to KO the monster</div>
        </div>
    )
}

export default BottomContainer
