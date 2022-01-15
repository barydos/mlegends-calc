import React, { ChangeEvent, useState } from 'react'
import { Button, Col, Input, Label, Row } from 'reactstrap'

const Skills = () => {
    const [name, setName] = useState('');
    const [attack, setAttack] = useState(1);
    const [mastery, setMastery] = useState(1);

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleAttack = (e: ChangeEvent<HTMLInputElement>) => {
        setAttack(parseInt(e.target.value));
    }
    const handleMastery = (e: ChangeEvent<HTMLInputElement>) => {
        setMastery(parseInt(e.target.value));
    }
    return (
        <div className='skills-container card'>
            <div className='row-group'>
                <Row>
                    <Label sm={4} for='skill-name'>Skill</Label>
                    <Col sm={8}>
                        <Input id='skill-name' type='text' onChange={handleName}/>
                    </Col>
                </Row>
            </div>
            <div className="row-group">
                <Row>
                    <Label sm={4} for='skill-attack'>Attack</Label>
                    <Col sm={8}>
                        <Input id='skill-attack' type='number' min={1} onChange={handleAttack}/>
                    </Col>
                </Row>
            </div>
            <div className="row-group">
                <Row>
                    <Label sm={4} for='skill-mastery'>Mastery</Label>
                    <Col sm={8}>
                        <Input id='skill-master' type='number' min={1} onChange={handleMastery} />
                    </Col>
                </Row>
            </div>
            <div className='mt-2 d-flex justify-content-end'>
                <Button color='primary' outline size='md' 
                    onClick={()=>console.log('TODO: save skill settings to cache')}>Save</Button>
            </div>
        </div>
    )
}

export default Skills
