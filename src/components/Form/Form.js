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
            onChange={handleLinkedInChange}
            value={linkedInLink}
            required
        ></input>

        <input 
            placeholder="Enter your address"
            onChange={handleAddressChange}
            value={address}
        ></input>

      
       <textarea
            placeholder="Experience"
            onChange={handleExperienceChange}
            value={experience}
        ></textarea>

        <textarea
            placeholder="Experience"
            onChange={handleExperience1Change}
            value={experience1}
        ></textarea>
        
        <input
            placeholder="Education"
            onChange={handleEducationChange}
            value={education}
        ></input>

        <input
            placeholder="Education"
            onChange={handleEducation1Change}
            value={education1}
        ></input>

    
        <button type="submit">Generate CV</button>

    </form>
    
    </>
)
} 

export default Form;