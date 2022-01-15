import React, { useState, useEffect, useContext } from 'react'
import { Mob, mobs as importedMobs } from '../data/mobs'
import { InfoContext } from '../contexts/InfoContext';
import Select, { SingleValue } from 'react-select'

interface MobLabeled extends Mob {
    value?: string,
    label?: string
}

let mobs: MobLabeled[] = importedMobs.sort((a,b) => a.level > b.level ? 1 : -1);
for (let i in mobs) {
    mobs[i].label = `(${mobs[i].level}) ${mobs[i].text}`;
    mobs[i].value = mobs[i].text;
}

const MobCard = ({ mobId }: { mobId: string | null }) => {

    const { info, setInfo } = useContext(InfoContext);
    const [mob, setMob] = useState<Mob | null>(null)

    useEffect(() => {
        if (!mobId) return;

        const selectedMob = mobs.find(mob => mob.id === mobId);
        if (selectedMob) {
            setMob(selectedMob);
            setInfo({ ...info, monster: selectedMob });
        }
    }, [mobId])

    return (
        <>
            {mob && (
                <div className="mob-card">
                    <div className="mob-img" style={{ textAlign: 'center', margin: '15px 0' }}>
                        <img src={`images/${mob.id}.png`} alt="" />
                    </div>
                    <div className="mob-details">
                        <table>
                            <tbody>
                                <tr><td><strong>Name</strong></td><td>{mob.text}</td></tr>
                                <tr><td><strong>Level</strong></td><td>{mob.level}</td></tr>
                                <tr><td><strong>HP</strong></td><td>{mob.hp.toLocaleString()}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    )
}

const Mobs = () => {

    const mobs = importedMobs;
    const [mobId, setMobId] = useState<string | null>(null)

    const handleMob = (e: SingleValue<Mob>) => {
        if (!e) return;
        setMobId(e.id);
    }

    return (
        <div className='mob-container card'>
            <Select
                instanceId='mob-dropdown'
                className='dropdown'
                options={mobs}
                onChange={handleMob}
                placeholder='Select monster' />

            {mobId && <MobCard mobId={mobId} />}

        </div>
    )
}

export default Mobs;
