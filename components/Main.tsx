import React, { useState } from 'react'
import BottomContainer from './BottomContainer'
import TopContainer from './TopContainer'

import { InfoContext, InfoContextInterface } from '../contexts/InfoContext'

const Main = () => {
    const [info, setInfo] = useState<InfoContextInterface>({})
    
    return (
        <div className='main'>
            <h1>MapleLegends Stuff</h1>
            
            <InfoContext.Provider value={{ info, setInfo }}>
                <div className='input-tables'>
                    <TopContainer />
                    <BottomContainer />
                </div>
            </InfoContext.Provider>
        </div>
    )
}

export default Main
