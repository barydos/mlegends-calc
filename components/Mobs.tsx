import React, { useState, useContext } from 'react'
import { Mob, mobs } from '../data/mobs'
import { InfoContext } from '../contexts/InfoContext';
import Select, { SingleValue } from 'react-select'


interface Option {
    id: string,
    value: string,
    label: string
}

const Mobs = () => {
    
    const {info, setInfo} = useContext(InfoContext);
    const [mobObj, setMobObj] = useState<Mob | null>(null)

    const handleMob = (e: SingleValue<Option>) => {
        const selectedMob = mobs.find(mob => mob.id === e.id) || null;
        if (selectedMob) {
            setInfo({...info, monster: {...selectedMob}})
        }
        setMobObj(selectedMob)
    }    

    return (
        <div className='mob-container card'>
            <Select className='dropdown' options={mobs.map(mob => ({ id: mob.id, value: mob.text, label: mob.text}))} onChange={handleMob} placeholder='Select monster'/>
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
