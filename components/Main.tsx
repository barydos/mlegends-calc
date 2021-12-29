import React from 'react'
import TopContainer from './TopContainer'

const Main = () => {
    return (
        <div className='main'>
            <h1>MapleLegends Stuff</h1>
            <div className='input-tables'>
                <TopContainer />
                <div className="bottom-container">
                    <div className="result-container">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
