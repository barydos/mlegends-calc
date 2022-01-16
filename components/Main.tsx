import React, { useEffect, useState } from 'react';
;
import Character from './Character';
import Skills from './Skills';
import Mobs from './Mobs';
import Summary from './Summary';
;
import { InfoContext, InfoContextInterface } from '../contexts/InfoContext';
import { SETTINGS } from '../data/constants';

const Main = () => {

    const [info, setInfo] = useState<InfoContextInterface>({});
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        const settings = localStorage.getItem(SETTINGS);
        if (settings) {
            const settingsJSON: InfoContextInterface = JSON.parse(settings);
            setInfo(settingsJSON);
        }
        setLoaded(true);
    }, []);

    return (
        <div className='main'>
            <h1>MapleLegends Stuff</h1>
            
            <InfoContext.Provider value={{ info, setInfo, error, setError }}>
                <div className="top-container">
                    <Character character={info.character || null} loaded={loaded}/>
                    <Skills skill={info.skill || null} loaded={loaded} />
                    <Mobs mob={info.monster || null} loaded={loaded} />
                </div>
                <Summary />
            </InfoContext.Provider>
        </div>
    )
}

export default Main;
