import React from 'react';
import './form2.css';

const Form2 = () => {
    return(
        <form>
            <textarea 
            placeholder='Personal Profile'
            rows={50}
            cols={10}>
            </textarea>
            <input placeholder='Personal Pofile'
             onChange={handleEducationChange}
             value={personalProfile}>
             </input>
             <textarea 
            placeholder='Professional Skill'
            rows={50}
            cols={10}></textarea>
            <input placeholder='Professional Skills'
             onChange={handleEducationChange}
             value={professionalSkills}>
             </input>
             <textarea 
            placeholder='Personal Skills'
            rows={50}
            cols={10}></textarea>
            <input placeholder='Personal Profile'
             onChange={handleEducationChange}
             value={personalProfile}>
             </input>
        </form>
    )
}

export default Form2;
