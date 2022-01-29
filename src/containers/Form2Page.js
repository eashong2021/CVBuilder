import React from "react";
import { useState } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";



export const Form2Page = ({addpersonalDetails}) =>{

  //creating and setting states 
  const [personalprofile, setPersonalprofile] = useState('');
  const [professionalskills, setProfessionalskills] = useState('');
  const [personalskills, setPersonalskills] = useState('');

//instance of the personDetails state to save and addPersonDetails
const personalDetails ={
personalProfile,
professionalSkills,
personalSkills
}
let navigate = useNavigate();



const handlepersonalProfileChange = (e) => {
    setPersonalProfile(e.target.value);
}

const handleprofessionalSkillsChange = (e) => {
    setProfessionalSkills(e.target.value);
}

const handlepersonalSkillsChange = (e) => {
    setPersonalSkills(e.target.value);
}


return(
    <>
        <Form2Page
            handlepersonalProfileUpload = {handlePersonalProfileUpload}
            personalProfile={personalProfile}
            handleSubmit={handleSubmit}
            handleprofessionalSkillsChange={handleProfessionalSkillsChange}
            professionalSkills={professionalSkills}
            handlepersonalSkillsChange={handlePersonalSkillsChange}
            personalSkills={personalSkills}
/>
</>
)
}








 