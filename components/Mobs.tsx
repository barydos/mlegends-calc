import React, { useState } from 'react'

import { Mob, mobs } from '../data/mobs'

const Mobs = () => {

    const [mobObj, setMobObj] = useState<Mob | null>(null)
    const selectMob = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMob = mobs.find(mob => mob.id === parseInt(event.target.value)) || null
        setMobObj(selectedMob)
    }

    React.useEffect(() => {

        return () => {}
    }, [])

    return (
        <div className='mob-container'>
            <select id="mob-list" onChange={selectMob}>
                <option key={0} value={0} hidden>Select monster</option>
                {mobs && mobs.map(mob => (
                    <option key={mob.id} value={mob.id}>{mob.text}</option>
                ))}
            </select>
            { mobObj && (
                <div className="mob-card">
                    <div className="mob-img">Insert image here..</div>
                    <div className="mob-details">
                        <table>
                            <tr><td><strong>Name</strong></td><td>{mobObj.text}</td></tr>
                            <tr><td><strong>Level</strong></td><td>{mobObj.level}</td></tr>
                            <tr><td><strong>HP</strong></td><td>{mobObj.hp}</td></tr>
                        </table>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Mobs
