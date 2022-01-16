import React, { useContext, useEffect, useState } from 'react'
import Select, { SingleValue } from 'react-select';
import { UncontrolledTooltip } from 'reactstrap';
import { Element, InfoContext, Weapon } from '../contexts/InfoContext';
import { Jobs } from './Character';

interface WeaponOption {
    value: number,
    label: string | JSX.Element,
    element: Element
}
const weapons = [
    { value: 0, label: 'None', element: Element.NEUTRAL },
    { value: 1, label: (
        <>
            <span id='element'>Elemental Staff/Wand 1</span>
            <UncontrolledTooltip target='element' autohide={false} placement='bottom'>Neutral</UncontrolledTooltip>
        </>
    ), element: Element.ICE }
]

const defaultMultiplier = {
    [Element.FIRE]: 1,
    [Element.POISON]: 1,
    [Element.ICE]: 1,
    [Element.LIGHTNING]: 1,
    [Element.HOLY]: 1
}
const Weapon = ({ weapon: weaponProp, loaded }: { weapon: Weapon | null, loaded: boolean }) => {

    const { info, setInfo } = useContext(InfoContext);
    const [weapon, setWeapon] = useState(weaponProp ? weaponProp.id : 0);
    const [multiplier, setMultiplier] = useState(weaponProp ? weaponProp.multiplier : defaultMultiplier);

    useEffect(() => {
        if (weaponProp && loaded) {
            setWeapon(weaponProp.id);
            setMultiplier(weaponProp.multiplier);
        }
    }, [loaded]);

    useEffect(() => {
        setInfo({...info, weapon: { id: weapon, multiplier }});
    }, [weapon, multiplier]);

    const handleWeapon = (e: SingleValue<WeaponOption>) => {
        if (!e) return;

        setWeapon(e.value);
        if (e.value === 1 || e.value === 5) {
            // +25% fire, +10% poison
            setMultiplier({...defaultMultiplier, [Element.FIRE]: 1.25, [Element.POISON]: 1 })
        }
        if (e.value === 2 || e.value === 6) {
            // +25% poison, +10% fire
            setMultiplier({...defaultMultiplier, [Element.POISON]: 1.25, [Element.FIRE]: 1 })
        }
        if (e.value === 3 || e.value === 7) {
            // +25% ice, + 10% lightning
            setMultiplier({...defaultMultiplier, [Element.ICE]: 1.25, [Element.LIGHTNING]: 1 })
        }
        if (e.value === 4 || e.value === 8) {
            // +25% lightning, +10% ice
            setMultiplier({...defaultMultiplier, [Element.LIGHTNING]: 1.25, [Element.ICE]: 1 })
        }
    }
    return (
        <div className='card'>
            <p>Elemental weapons</p>
            <Select options={weapons} value={weapons.find(item => item.value === weapon)} placeholder='For magicians only' 
                onChange={handleWeapon}
                isDisabled={info.character && info.character.job !== Jobs.MAGICIAN}/>
        </div>
    )
}

export default Weapon;
