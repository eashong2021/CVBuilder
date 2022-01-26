import React from "react";
import './form.css';

const Form = ({
handleImageUpload,
image,
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
experience,
handleExperienceChange,
experience1,
handleExperience1Change,
education,
handleEducationChange,
education1,
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
            <label>From<input type='month'></input></label><br/>
            <label>To<input type='month'></input></label><br/>
            <textarea
                placeholder="Experience"
                onChange={handleExperienceChange}
                value={experience}
                rows={10}
                cols={50}
            ></textarea><br/>
            <label>From<input type='month'></input></label><br/>
            <label>To<input type='month'></input></label><br/>
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
            <label>From<input type='month'></input></label><br/>
            <label>To<input type='month'></input></label>
            <input
            placeholder="Education"
            onChange={handleEducationChange}
            value={education}
            ></input><br/>
            <label>From<input type='month'></input></label><br/>
            <label>To<input type='month'></input></label>
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