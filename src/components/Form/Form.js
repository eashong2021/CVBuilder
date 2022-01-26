import React from "react";
import './form.css';

const Form = ({
handleSubmit,
name,
handleNameChange,
phoneNumber,
handlePhoneChange,
email,
handleEmailChange,
linkedInLink,
handleLinkedInChange,
address,
handleAddressChange,

handleExpStartChange,
handleExpEndChange,
expStartDate,
expEndDate,
experience,
handleExperienceChange,

experience1,
handleExp1StartChange,
handleExp1EndChange,
exp1StartDate,
exp1EndDate,
handleExperience1Change,

handleEduStartChange,
handleEduEndChange,
education,
eduStartDate,
eduEndDate,
handleEducationChange,

education1,
handleEdu1StartChange,
handleEdu1EndChange,
edu1StartDate,
edu1EndDate,
handleEducation1Change
}) => {

return(
    <>
    
    <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Profile</legend>
            <label>
            Upload Photo<input type="file"></input>
        </label>
        <input 
            placeholder="Enter your name"
            onChange={handleNameChange}
            value={name}
            required
        ></input>

          <input 
            placeholder="Enter your phone number"
            type='tel'
            value={phoneNumber}
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
            onChange={handlePhoneChange}
        ></input>

        <input 
            placeholder="Enter your e-mail" 
            type='email'
            required
            value={email}
            onChange={handleEmailChange}
        ></input>

        <input 
            placeholder="Enter your linkedIn address"
            type='url'
            onChange={handleLinkedInChange}
            value={linkedInLink}
            required
        ></input>

        <input 
            placeholder="Enter your address"
            onChange={handleAddressChange}
            value={address}
        ></input>

        </fieldset>
        
        <fieldset>
            <legend>Experience</legend>
            <label>Start<input type='month' value={expStartDate} onChange={handleExpStartChange}></input></label><br/>
            <label>End<input type='month'value={expEndDate} onChange={handleExpEndChange}></input></label><br/>
            <textarea
                placeholder="Experience"
                onChange={handleExperienceChange}
                value={experience}
                rows={10}
                cols={50}
            ></textarea><br/>
            <label>Start<input type='month' value={exp1StartDate} onChange={handleExp1StartChange}></input></label><br/>
            <label>End<input type='month' value={exp1EndDate} onChange={handleExp1EndChange}></input></label><br/>
            <textarea
                placeholder="Experience"
                onChange={handleExperience1Change}
                value={experience1}
                rows={10}
                cols={50}
            ></textarea>
        </fieldset>
        
        <fieldset>
            <legend>Education</legend>
            <label>Start<input type='month' value={eduStartDate} onChange={handleEduStartChange}></input></label><br/>
            <label>End<input type='month' value={eduEndDate} onChange={handleEduEndChange}></input></label>
            <input
            placeholder="Education"
            onChange={handleEducationChange}
            value={education}
            ></input><br/>
            <label>Start<input type='month' value={edu1StartDate} onChange={handleEdu1StartChange}></input></label><br/>
            <label>End<input type='month' value={edu1EndDate} onChange={handleEdu1EndChange}></input></label>
            <input
            placeholder="Education"
            onChange={handleEducation1Change}
            value={education1}
            ></input>
        </fieldset>
        

    
        <button type="submit">Generate CV</button>

    </form>
    
    </>
)
} 

export default Form;