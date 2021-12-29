import React from 'react'
import Character from './Character'
import Mobs from './Mobs'

const TopContainer = () => {
    return (
        <div className="top-container">
            <Character />
            <Mobs />
        <div className="skill-container"></div>
    </div>
    )
}

export default TopContainer
