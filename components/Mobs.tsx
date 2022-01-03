import React, { useState, useContext } from 'react'
import { Mob, mobs } from '../data/mobs'
import { InfoContext } from '../contexts/InfoContext';

const Mobs = () => {
    const {info, setInfo} = useContext(InfoContext);
    const [mobObj, setMobObj] = useState<Mob | null>(null)

    const selectMob = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMob = mobs.find(mob => mob.id === event.target.value) || null
        if (selectedMob) {
            setInfo({...info, monster: {...selectedMob}})
        }
        setMobObj(selectedMob)
    }

    return (
        <div className='mob-container card'>
            <select id="mob-list" onChange={selectMob}>
                <option key={0} value={0} hidden>Select monster</option>
                {mobs && mobs.map(mob => (
                    <option key={mob.id} value={mob.id}>{mob.text}</option>
                ))}
            </select>
            { mobObj && (
                <div className="mob-card">
                    <div className="mob-img" style={{ margin: '15px 0'}}>
                        <img src={`images/${mobObj.id}.png`} alt="" />
                    </div>
                    <div className="mob-details">
                        <table>
                            <tbody>
                                <tr><td><strong>Name</strong></td><td>{mobObj.text}</td></tr>
                                <tr><td><strong>Level</strong></td><td>{mobObj.level}</td></tr>
                                <tr><td><strong>HP</strong></td><td>{mobObj.hp}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Mobs
