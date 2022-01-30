import React from "react";
import { useState } from "react";
import Form2 from "../components/Form2/Form2";
import { useNavigate } from "react-router-dom";
import { components } from "react-select";



export const Form2Page = ({addPersonDetails}) =>{

    const Option = (props) => {
        return (
          <div>
            <components.Option {...props}>
              <input
                type="checkbox"
                checked={props.isSelected}
                onChange={() => null}
              />{" "}
              <label>{props.label}</label>
            </components.Option>
          </div>
        );
      };
  

  //creating and setting states 
  const [personalProfile, setPersonalProfile] = useState('');
  const [professionalSkills, setProfessionalSkills] = useState([]);
  const [personalSkills, setPersonalSkills] = useState('');

//instance of the personDetails state to save and addPersonDetails
const personDetail ={
    personalProfile,
    professionalSkills,
    personalSkills
}

let navigate = useNavigate();

const handleChange = (selected) => {
    setProfessionalSkills(selected);
  };

const handlePersonalProfileChange = (e) => {
    setPersonalProfile(e.target.value);
}


const handlePersonalSkillsChange = (e) => {
    setPersonalSkills(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();

    //add person details to personDetails
    addPersonDetails(personDetail);

    navigate('/cv');
}


return(
    <>
        <Form2
            handleChange = {handleChange}
            option = {Option}
            handlePersonalProfileChange = {handlePersonalProfileChange}
            personalProfile={personalProfile}
            handleSubmit={handleSubmit}
            professionalSkills={professionalSkills}
            handlePersonalSkillsChange={handlePersonalSkillsChange}
            personalSkills={personalSkills}
        />
    </>
)
}









 