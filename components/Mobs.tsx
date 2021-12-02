import React from 'react'
import { mobListWithId as mobs } from '../data/mobsArr'

const Mobs = () => {
    return (
        <div className='mob-container'>
            <select id="mob-list">
                {mobs && mobs.map(mob => (
                    <option key={mob.id} value={mob.id}>{mob.text}</option>
                ))}
            </select>
        </div>
    )
}

export default Mobs
