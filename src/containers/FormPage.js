import React from "react";
import { useState } from "react";
import Form from "../components/Form/Form";
import Cv from '../components/Cv/Cv'

export const FormPage = ({addPersonDetails}) =>{

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [linkedInLink, setLinkedInLink] = useState('');
    const [experience, setExperience] = useState('');
    const [experience1, setExperience1] = useState('');
    const [education, setEducation] = useState('');
    const [education1, setEducation1] = useState('');
    
    const personDetail ={
        name,
        address,
        phoneNumber,
        email,
        linkedInLink,
        experience,
        experience1,
        education,
        education1
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addPersonDetails(personDetail);
        console.log(personDetail);

        setName('');
        setPhoneNumber('');
        setEmail('')
        setLinkedInLink('')
        setExperience('')
        setExperience1('')
        setAddress('')
        setEducation('')
        setEducation1('')

    }

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

    const handleLinkedInChange = (e) => {
        setLinkedInLink(e.target.value);
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


    return(
    <>
        <Form
            handleSubmit = {handleSubmit}
            name={name}
            handleNameChange={handleNameChange}
            address={address}
            handleAddressChange={handleAddressChange}
            phoneNumber={phoneNumber}
            handlePhoneChange={handlePhoneChange}
            email={email}
            handleEmailChange={handleEmailChange}
            linkedInLink ={linkedInLink}
            handleLinkedInChange={handleLinkedInChange}
            experience={experience}
            handleExperienceChange={handleExperienceChange}
            experience1={experience1}
            handleExperience1Change={handleExperience1Change}
            education={education}
            handleEducationChange={handleEducationChange}
            education1={education1}
            handleEducation1Change={handleEducation1Change}

        />
    
    </>
    )

}