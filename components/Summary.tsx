import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button } from 'reactstrap';
import { InfoContext } from '../contexts/InfoContext';
import { SETTINGS } from '../data/constants';

const Summary = () => {

    const { info, setError } = useContext(InfoContext);
    const summaryRef = useRef<HTMLDivElement>(null);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [loading, setLoading] = useState(false);

    const clearCache = () => {
        if (confirm('Are you sure you want to clear your cache?')) {
            localStorage.removeItem(SETTINGS);
        }
    }

    const submitForm = async () => {
        setError(false);
        setLoading(true);

        if (!info.character || !info.monster || !info.skill) {
            setError(true);
            return;
        }
        if (info.skill && (!info.skill.attack || !info.skill.mastery )) {
            setError(true);
            return
        }
        // console.log(info);
        localStorage.setItem(SETTINGS, JSON.stringify(info));

        // perform calculations
        const {
            character: { lvl, str, dex, int, luk, att, magic, acc},
            skill: { name, attack, mastery, element },
            monster: { text: monsterName, level: monsterLvl, hp, elem: monsterElem, wdef, mdef, avoid, undead }
         } = info;
        
        let calcMax, calcMin = 0;
        calcMax = ((magic * magic /1000 + magic)/30 + int/200) * attack;
        calcMin = ((magic * magic /1000 + magic * mastery * 0.9)/30 + int/200) * attack;
        setMax(calcMax);
        setMin(calcMin);
    }

    useEffect(() => {
        setMin(0);
        setMax(0);
    }, [info.monster]);

    useEffect(() => {
        if (summaryRef && summaryRef.current && max && min && info.monster && !loading) {
            summaryRef.current.scrollIntoView();
        }
        setLoading(false);
    }, [min, max, loading]);

    return (
        <div className='summary-container d-flex flex-column align-items-center'>
            <div className="button-container">
                <div className="button-group">
                    <Button type='button' color='danger' outline onClick={clearCache}>Clear cache</Button>
                    <Button type='button' className='ms-2' color='primary' outline onClick={submitForm}>Calculate</Button>
                </div>
                { loading ? ( <div id='loading'></div> ) : false}
            </div>

            <div className='details-group my-3 d-flex flex-column align-items-center'>
                <div className="damage-table mb-2">
                    { max && min ? (
                        <table>
                            <tbody>
                                <tr>
                                    <td>Max</td>
                                    <td>{parseInt(max.toFixed(2)).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Min</td>
                                    <td>{parseInt(min.toFixed(2)).toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    ) : false }
                </div>
                <div ref={summaryRef} className='summary-description'>{
                    info.monster && max && min ? 
                        `On average, it will take ${(info.monster.hp/((max + min)/2)).toFixed(2)} hits to KO ${info.monster.text}` : 
                        ''}
                </div>
            </div>
        </div>
    )
}

export default Summary;
