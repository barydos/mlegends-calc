import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { Button, Col, Input, Label, Row } from 'reactstrap';
import { Character, InfoContext } from '../contexts/InfoContext';

const enum Jobs {
    WARRIOR = 1,
    BOWMAN = 2,
    MAGICIAN = 3,
    THIEF = 4,
    PIRATE = 5
}
interface Job {
    value: number,
    label: string,
    isDisabled: boolean
}

const Character = ({ character, loaded }: { character: Character | null, loaded: boolean }) => {

    const jobs = [
        { value: Jobs.WARRIOR, label: 'Warrior', isDisabled: true },
        { value: Jobs.BOWMAN, label: 'Bowman', isDisabled: true },
        { value: Jobs.MAGICIAN, label: 'Magician', isDisabled: false },
        { value: Jobs.THIEF, label: 'Thief', isDisabled: true },
        { value: Jobs.PIRATE, label: 'Pirate', isDisabled: true }
    ]

    const { info, setInfo } = useContext(InfoContext);

    const [job, setJob] = useState<number | null>(null);
    const [lvl, setLvl] = useState(1);
    const [str, setStr] = useState(4);
    const [dex, setDex] = useState(4);
    const [int, setInt] = useState(4);
    const [luk, setLuk] = useState(4);
    const [att, setAtt] = useState(4);
    const [magic, setMagic] = useState(4);
    const [acc, setAcc] = useState(4);
    
    const handleJob = (e: SingleValue<Job>) => {
        if (e) { setJob(e.value); }
    }
    const handleLvl = (e: ChangeEvent<HTMLInputElement>) => setLvl(parseInt(e.target.value));
    const handleStr = (e: ChangeEvent<HTMLInputElement>) => setStr(parseInt(e.target.value));
    const handleDex = (e: ChangeEvent<HTMLInputElement>) => setDex(parseInt(e.target.value));
    const handleInt = (e: ChangeEvent<HTMLInputElement>) => setInt(parseInt(e.target.value));
    const handleLuk = (e: ChangeEvent<HTMLInputElement>) => setLuk(parseInt(e.target.value));
    const handleAtt = (e: ChangeEvent<HTMLInputElement>) => setAtt(parseInt(e.target.value));
    const handleMagic = (e: ChangeEvent<HTMLInputElement>) => setMagic(parseInt(e.target.value));
    const handleAcc = (e: ChangeEvent<HTMLInputElement>) => setAcc(parseInt(e.target.value));

    useEffect(() => {
        if (character && loaded) {
            setJob(character.job);
            setLvl(character.lvl);
            setStr(character.str);
            setDex(character.dex);
            setInt(character.int);
            setLuk(character.luk);
            setAtt(character.att);
            setMagic(character.magic);
            setAcc(character.acc);
        }
    }, [loaded]);

    useEffect(() => {
        setInfo({ ...info, character: { job, lvl, str, dex, int, luk, att, magic, acc } });
    }, [job, lvl, str, dex, int, luk, att, magic, acc]);

    return (
        <div className='character-container card'>
            <Select instanceId='character-job' value={jobs.find(item => item.value === job)} options={jobs}
                onChange={handleJob} placeholder='Select class' />

            <div className='stats-container'>
                <div className='row-group'>
                    <Row>
                        <Label sm={5} for='char-lvl'>Level</Label>
                        <Col sm={{ offset: 1, size: 6 }}>
                            <Input type='number' min={1} max={200} id='char-lvl' value={lvl} onChange={handleLvl} />
                        </Col>
                    </Row>
                </div>
                <div className='row-group'>
                    <Row>
                        <Label sm={5} for='char-str'>STR</Label>
                        <Col sm={{ offset: 1, size: 6 }}>
                            <Input type='number' min={4} id='char-str' value={str} onChange={handleStr} />
                        </Col>
                    </Row>
                    <Row>
                        <Label sm={5} for='char-dex'>DEX</Label>
                        <Col sm={{ offset: 1, size: 6 }}>
                            <Input type='number' min={4} id='char-dex' value={dex} onChange={handleDex} />
                        </Col>
                    </Row>
                    <Row>
                        <Label sm={5} for='char-int'>INT</Label>
                        <Col sm={{ offset: 1, size: 6 }}>
                            <Input type='number' min={4} id='char-int' value={int} onChange={handleInt} />
                        </Col>
                    </Row>
                    <Row>
                        <Label sm={5} for='char-luk'>LUK</Label>
                        <Col sm={{ offset: 1, size: 6 }}>
                            <Input type='number' min={4} id='char-luk' value={luk} onChange={handleLuk} />
                        </Col>
                    </Row>
                </div>
                <div className='row-group'>
                    <Row>
                        <Label sm={5} for='char-att'>Attack</Label>
                        <Col sm={{ offset: 1, size: 6 }}>
                            <Input type='number' min={4} id='char-att' value={att} onChange={handleAtt} />
                        </Col>
                    </Row>
                    <Row>
                        <Label sm={5} for='char-magic'>Magic</Label>
                        <Col sm={{ offset: 1, size: 6 }}>
                            <Input type='number' min={4} id='char-magic' value={magic} onChange={handleMagic} />
                        </Col>
                    </Row>
                    <Row>
                        <Label sm={5} for='char-acc'>Accuracy</Label>
                        <Col sm={{ offset: 1, size: 6 }}>
                            <Input type='number' min={4} id='char-acc' value={acc} onChange={handleAcc} />
                        </Col>
                    </Row>
                </div>
                <div className='mt-2 d-flex justify-content-end'>
                    <Button type='button' color='primary' outline size='md'
                        onClick={() => console.log('TODO: save character settings to cache')}>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default Character;
