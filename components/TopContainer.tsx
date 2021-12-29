import React from 'react'
import Character from './Character'
import Mobs from './Mobs'
import Skills from './Skills'

const TopContainer = () => {
    return (
        <div className="top-container">
            <Character />
            <Skills />
            <Mobs />
        </div>
    )
}

export default TopContainer
