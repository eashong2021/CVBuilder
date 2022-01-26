import React from "react";
import { useState } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";

export const FormPage = ({addPersonDetails}) =>{

    //creating and setting states 
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [linkedInLink, setLinkedInLink] = useState('');
    const [experience, setExperience] = useState('');
    const [experience1, setExperience1] = useState('');
    const [education, setEducation] = useState('');
    const [education1, setEducation1] = useState('');
    const [image, setImage] = useState('');


    //instance of the personDetails state to save and addPersonDetails
    const personDetail ={
        image,
        name,
        phoneNumber,
        email,
        linkedInLink,
        address,
        experience,
        experience1,
        education,
        education1
    }

    let navigate = useNavigate();
    let fileInput = React.createRef();

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
        setExperience('')
        setExperience1('')
        setAddress('')
        setEducation('')
        setEducation1('')

        //navigate to cv component when button is clicked
        navigate('/cv')

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

    const handleImageUpload = () => {
        
        //setImage(URL.createObjectURL(e.target.files));
        setImage(fileInput.current.files[0].name);
    }


    return(
    <>
        <Form
            ref={fileInput}
            handleImageUpload = {handleImageUpload}
            image={image}
            handleSubmit = {handleSubmit}
            name={name}
            handleNameChange={handleNameChange}
            phoneNumber={phoneNumber}
            handlePhoneChange={handlePhoneChange}
            email={email}
            handleEmailChange={handleEmailChange}
            linkedInLink ={linkedInLink}
            handleLinkedInChange={handleLinkedInChange}
            address={address}
            handleAddressChange={handleAddressChange}
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