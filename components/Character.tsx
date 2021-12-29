import React from 'react'

const Stats = () => {

    return (
        <div style={{width:'200px'}}>
            <label htmlFor="">
                STR<input type="number" name="" id="" />
            </label>
            <label htmlFor="">
                DEX<input type="number" name="" id="" />
            </label>
            <label htmlFor="">
                INT<input type="number" name="" id="" />
            </label>
            <label htmlFor="">
                LUK<input type="number" name="" id="" />
            </label>

            <label htmlFor="">
                Attack<input type="number" name="" id="" />
            </label>
            <label htmlFor="">
                Magic<input type="number" name="" id="" />
            </label>
            <label htmlFor="">
                Accuracy<input type="number" name="" id="" />
            </label>
        </div>
    )
}

const Character = () => {
    const jobs = [
        { id: 1, title: 'Warrior', disabled: true },
        { id: 2, title: 'Bowman', disabled: true },
        { id: 3, title: 'Magician', disabled: false },
        { id: 4, title: 'Thief', disabled: true },
        { id: 5, title: 'Pirate', disabled: true }
    ]
    return (
        <div className='character-container'>
            <select name="job" id="job">
                <option value="0" key="0" hidden>Select class</option>
                {jobs.map(job => (
                    <option value={job.id} key={job.id} disabled={job.disabled}>{job.title}</option>
                ))}
            </select>
            <label htmlFor="character-level">Level <input id="character-level" type="number" min={1} max={200} /></label>
            <Stats />
        </div>
    )
}

export default Character
