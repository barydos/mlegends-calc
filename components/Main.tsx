import React from 'react'
import Mobs from './Mobs'

const Main = () => {
    return (
        <div className='main'>
            <h1>MapleLegends Stuff</h1>
            <div className='input-tables'>
                <div className="top-container">
                    <div className="character-container"></div>
                    <Mobs />
                    <div className="skill-container"></div>
                </div>
                <div className="bottom-container">
                    <div className="result-container">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
