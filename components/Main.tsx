import React from 'react'
import BottomContainer from './BottomContainer'
import TopContainer from './TopContainer'

const Main = () => {
    return (
        <div className='main'>
            <h1>MapleLegends Stuff</h1>
            <div className='input-tables'>
                <TopContainer />
                <BottomContainer />
            </div>
        </div>
    )
}

export default Main
