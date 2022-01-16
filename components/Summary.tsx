import React, { useContext, useRef, useState } from 'react';
import { Button } from 'reactstrap';
import { InfoContext } from '../contexts/InfoContext';
import { SETTINGS } from '../data/constants';

const Summary = () => {

    const { info, setError } = useContext(InfoContext);
    const summaryRef = useRef<HTMLDivElement>(null);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [loading, setLoading] = useState(false);

    const performCalc = () => {
        setError(false);

        if (!info.character || !info.monster || !info.skill) {
            setError(true);
            return;
        }

        if (info.skill && (!info.skill.attack || !info.skill.mastery )) {
            setError(true);
            return
        }
        setLoading(true);
        // console.log(info);
        localStorage.setItem(SETTINGS, JSON.stringify(info));
        const { 
            character: { lvl, str, dex, int, luk, att, magic, acc}, 
            skill: { name, attack, mastery, element }, 
            monster: { text: monsterName, level: monsterLvl, hp, elem: monsterElem, wdef, mdef, avoid, undead }
        } = info;

        let max, min = 0;
        max = ((magic * magic /1000 + magic)/30 + int/200) * attack;
        min = ((magic * magic /1000 + magic * mastery * 0.9)/30 + int/200) * attack;
        console.log(`max: ${max}`)
        console.log(`min: ${min}`)
        setMin(min);
        setMax(max);
        setLoading(false);
        if (summaryRef && summaryRef.current) {
            summaryRef.current.scrollIntoView();
        }
        return {}
    }
    const clearCache = () => {
        localStorage.removeItem(SETTINGS);
    }

    return (
        <div className='summary-container d-flex flex-column align-items-center'>
            <div className="button-group">
                <Button type='button' color='danger' outline onClick={clearCache}>Clear cache</Button>
                <Button type='button' className='ms-2' color='primary' outline onClick={performCalc}>Calculate</Button>
            </div>

            <div className='details-group my-3 d-flex flex-column align-items-center'>
                <div className="damage-table mb-2">
                    <table>
                        <tbody>
                            <tr>
                                <td>Max</td>
                                <td>{parseInt(max.toFixed(2))}</td>
                            </tr>
                            <tr>
                                <td>Min</td>
                                <td>{parseInt(min.toFixed(2))}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div ref={summaryRef} className='summary-description'>{
                    info.monster && max && min ? 
                        `On average, it will take ${(info.monster.hp/((max + min)/2)).toFixed(2)} hits to KO ${info.monster.text}` : 
                        'Please select a monster..'}
                </div>
            </div>
            <div id='loading'>{loading ? 'Loading...' : ''}</div>
        </div>
    )
}

export default Summary;
