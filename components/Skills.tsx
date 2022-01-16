import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Button, Col, FormFeedback, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import { Element, InfoContext, Skill } from '../contexts/InfoContext';

const Skills = ({ skill, loaded }: { skill: Skill | null, loaded: boolean }) => {
    const { info, setInfo, error } = useContext(InfoContext);

    const [name, setName] = useState('');
    const [attack, setAttack] = useState(0);
    const [mastery, setMastery] = useState(0);
    const [element, setElement] = useState(Element.NEUTRAL)

    const handleName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleAttack = (e: ChangeEvent<HTMLInputElement>) => setAttack(parseInt(e.target.value));
    const handleMastery = (e: ChangeEvent<HTMLInputElement>) => setMastery(parseInt(e.target.value)/100);

    useEffect(() => {
        if (skill && loaded) {
            setName(skill.name);
            setAttack(skill.attack);
            setMastery(skill.mastery);
            setElement(skill.element);
        }
    }, [loaded]);

    useEffect(() => {
        setInfo({ ...info, skill: { name, attack, mastery, element } });
    }, [name, attack, mastery, element]);

    return (
        <div className='skills-container card'>
            <div className='row-group'>
                <Row>
                    <Label sm={4} for='skill-name'>Skill</Label>
                    <Col sm={8}>
                        <Input id='skill-name' value={name} type='text' onChange={handleName} />
                    </Col>
                </Row>
            </div>
            <div className="row-group">
                <Row>
                    <Label sm={4} for='skill-attack'>Attack</Label>
                    <Col sm={8}>
                        <Input id='skill-attack' value={attack} type='number' min={1} onChange={handleAttack} invalid={!attack && error}/>
                        <FormFeedback>Please input a value</FormFeedback>
                    </Col>
                </Row>
            </div>
            <div className="row-group">
                <Row>
                    <Label sm={4} for='skill-mastery'>Mastery</Label>
                    <Col sm={8}>
                        <InputGroup>
                            <Input id='skill-master' value={mastery * 100} type='number' min={1} onChange={handleMastery} />
                            <InputGroupText>%</InputGroupText>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
            <div className="row-group">
                <Row className='mb-2'>
                    <Col sm={4} style={{ textAlign: 'right' }}>Element</Col>
                </Row>
                <Row>
                    <Col sm={{ offset: 1, size: 5 }}>
                        <div>
                            <Input id="ele-neutral" name="element" type="radio" 
                                onChange={() => setElement(Element.NEUTRAL)} 
                                checked={element === Element.NEUTRAL}/> {' '}
                            <Label check for="ele-neutral">Neutral</Label>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Input id="ele-holy" name="element" type="radio" 
                                onChange={() => setElement(Element.HOLY)} 
                                checked={element === Element.HOLY} /> {' '}
                            <Label check for="ele-holy">Holy</Label>
                        </div>
                    </Col>
                </Row>
                <Row className='element-group'>
                    <Col sm={{ offset: 1, size: 5 }}>
                        <div>
                            <Input id="ele-ice" name="element" type="radio" 
                                onChange={() => setElement(Element.ICE)} 
                                checked={element === Element.ICE} /> {' '}
                            <Label check for="ele-ice">Ice</Label>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Input id="ele-lightning" name="element" type="radio" 
                                onChange={() => setElement(Element.LIGHTNING)} 
                                checked={element === Element.LIGHTNING} /> {' '}
                            <Label check for="ele-lightning">Lightning</Label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ offset: 1, size: 5 }}>
                        <div>
                            <Input id="ele-fire" name="element" type="radio" 
                                onChange={() => setElement(Element.FIRE)} 
                                checked={element === Element.FIRE} /> {' '}
                            <Label check for="ele-fire">Fire</Label>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Input id="ele-poison" name="element" type="radio" 
                                onChange={() => setElement(Element.POISON)} 
                                checked={element === Element.POISON} /> {' '}
                            <Label check for="ele-poison">Poison</Label>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='mt-2 d-flex justify-content-end'>
                <Button color='primary' outline size='md'
                    onClick={() => console.log('TODO: save skill settings to cache')}>Save</Button>
            </div>
        </div>
    )
}

export default Skills
