import React from "react";
import { useState } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";


export const FormPage = ({addPersonDetails}) =>{

    //creating and setting states 
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    const [linkedInLink, setLinkedInLink] = useState('');
    const [exp1StartDate, setExp1StartDate] = useState('');
    const [exp1EndDate, setExp1EndDate] = useState('');
    const [expStartDate, setExpStartDate] = useState('');
    const [expEndDate, setExpEndDate] = useState('');
    const [experience, setExperience] = useState('');
    const [experience1, setExperience1] = useState('');
    const [eduStartDate, setEduStartDate] = useState('');
    const [eduEndDate, setEduEndDate] = useState('');
    const [edu1StartDate, setEdu1StartDate] = useState('');
    const [edu1EndDate, setEdu1EndDate] = useState('');
    const [education, setEducation] = useState('');
    const [education1, setEducation1] = useState('');
    const [image, setImage] = useState(null);
   

    //instance of the personDetails state to save and addPersonDetails
    const personDetail ={

        image,
        name,
        job,
        phoneNumber,
        email,
        linkedInLink,
        address,
        expStartDate,
        expEndDate,
        experience,
        
        exp1StartDate,
        exp1EndDate,
        experience1,
        
        education,
        eduStartDate,
        eduEndDate,
        
        education1,
        edu1StartDate,
        edu1EndDate
    }

    let navigate = useNavigate();

    //function to handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        //add person details to personDetails
        addPersonDetails(personDetail);

        //clear input fields
        setName('');
        setPhoneNumber('');
        setEmail('')
        setLinkedInLink('')
        setAddress('')
        setJob('')

        setExpStartDate('')
        setExpEndDate('')
        setExperience('')

        setExp1StartDate('')
        setExp1EndDate('')
        setExperience1('')
        
        setEduStartDate('')
        setEduEndDate('')
        setEducation('')
    
        setEdu1StartDate('')
        setEdu1EndDate('')
        setEducation1('')

        //navigate to cv component when button is clicked
        navigate('/form2')

    }

    //input handlers
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleJobChange = (e) => {
        setJob(e.target.value)
    }

    const handleLinkedInChange = (e) => {
        setLinkedInLink(e.target.value);
    }

    const handleExpStartChange = (e) => {
        setExpStartDate(e.target.value)
    }

    const handleExpEndChange = (e) => {
        setExpEndDate(e.target.value)
    }

    const handleExp1StartChange = (e) => {
        setExp1StartDate(e.target.value)
    }

    const handleExp1EndChange = (e) => {
        setExp1EndDate(e.target.value)
    }

    const handleEduStartChange = (e) => {
        setEduStartDate(e.target.value)
    }

    const handleEduEndChange = (e) => {
        setEduEndDate(e.target.value)
    }

    const handleEdu1StartChange = (e) => {
        setEdu1StartDate(e.target.value)
    }

    const handleEdu1EndChange = (e) => {
        setEdu1EndDate(e.target.value)
    }

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    }

    const handleExperience1Change = (e) => {
        setExperience1(e.target.value);
    }

    const handleEducationChange = (e) => {
        setEducation(e.target.value);
    }

    const handleEducation1Change = (e) => {
        setEducation1(e.target.value);
    }

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
    }



    return(
    <>
    
        <Form
            handleImageUpload = {handleImageUpload}
            image={image}
            handleSubmit = {handleSubmit}
            name={name}
            handleNameChange={handleNameChange}
            phoneNumber={phoneNumber}
            handlePhoneChange={handlePhoneChange}
            email={email}
            handleEmailChange={handleEmailChange}
            job={job}
            handleJobChange={handleJobChange}
            linkedInLink ={linkedInLink}
            handleLinkedInChange={handleLinkedInChange}
            address={address}
            handleAddressChange={handleAddressChange}

            handleExpStartChange={handleExpStartChange}
            experience={experience}
            expStartDate = {expStartDate}
            expEndDate = {expEndDate}
            handleExpEndChange={handleExpEndChange}
            handleExperienceChange={handleExperienceChange}

            handleExp1StartChange={handleExp1StartChange}
            experience1={experience1}
            exp1StartDate = {exp1StartDate}
            exp1EndDate = {exp1EndDate}
            handleExp1EndChange={handleExp1EndChange}
            handleExperience1Change={handleExperience1Change}

            handleEduStartChange={handleEduStartChange}
            handleEduEndChange={handleEduEndChange}
            education={education}
            eduStartDate={eduStartDate}
            eduEndDate = {eduEndDate}
            handleEducationChange={handleEducationChange}

            handleEdu1StartChange={handleEdu1StartChange}
            handleEdu1EndChange={handleEdu1EndChange}
            edu1StartDate={edu1StartDate}
            edu1EndDate = {edu1EndDate}
            education1={education1}
            handleEducation1Change={handleEducation1Change}
            
        />

    </>
    )

}

export default FormPage;