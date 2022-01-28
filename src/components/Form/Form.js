import React from "react";
import "./form.css";

const Form = ({
  handleImageUpload,
  imgUrl,
  handleSubmit,
  name,
  handleNameChange,
  job,
  handleJobChange,
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
  handleEducation1Change,
}) => {
  return (
    <>
      <div className="form-content">
      <form className="main-form" onSubmit={handleSubmit}>
        <fieldset className="field-1">
          <legend className="profile">Profile</legend>
          <br />
          <br />
          <label className="form-label">Upload Photo </label>
          <input className="file-upload" accept="image/*" type="file" onChange={handleImageUpload}></input>
          
         
          <div className="line-1">
          <input
            placeholder="Enter your full name"
            onChange={handleNameChange}
            value={name}npm
            //required
            className="input"
          ></input>
          <input
            placeholder="Enter your current job"
            onChange={handleJobChange}
            value={job}
            //required
            className="input"
          ></input>
          </div>
          <div className="line-1">
          <input
            placeholder="Phone number"
            type="tel"
            value={phoneNumber}
            pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
            onChange={handlePhoneChange}
            className="input"
          ></input>

          <input
            placeholder="Enter your e-mail"
            type="email"
            //required
            value={email}
            onChange={handleEmailChange}
            className="input"
          ></input>
            </div>
            <div className="line-1">
          <input
            placeholder="Enter your linkedIn address"
            type="url"
            onChange={handleLinkedInChange}
            value={linkedInLink}
            //required
            className="input"
          ></input>

          <input
            placeholder="Enter your address"
            onChange={handleAddressChange}
            value={address}
            className="input"
          ></input>
          </div>
        </fieldset >

        <fieldset className="field-2">
          <legend className="profile">Experience</legend>
          <div className="first-experience">
          <label className="start">
            Start
            </label>
            <input
              type="month"
              value={expStartDate}
              onChange={handleExpStartChange}
              //required
              className="input"
            ></input>
          <br />
          <label className="start">
            End
            </label>
            <input
              type="month"
              value={expEndDate}
              onChange={handleExpEndChange}
              //required
              className="input"
            ></input>
          <br />
          </div>
          <br></br>
          <div className="experience-1">
          <textarea
            placeholder="Experience"
            onChange={handleExperienceChange}
            value={experience}
            rows={7}
            cols={50}
            //required
            className="textarea"
          ></textarea>
          </div>
          <br></br>
          <div className="first-experience">
          <label className="start">
            Start
            </label>
            <input
              type="month"
              value={exp1StartDate}
              onChange={handleExp1StartChange}
              className="input"
            ></input>
         
          <br />
          <label className="start">
            End
            </label>
            <input
              type="month"
              value={exp1EndDate}
              onChange={handleExp1EndChange}
              className="input-2"
            ></input>
          </div>
          <br />
          <div className="experience-1">
          <textarea
            placeholder="Experience"
            onChange={handleExperience1Change}
            value={experience1}
            rows={7}
            cols={50}
            className="textarea"
          ></textarea>
          </div>
        </fieldset>

        <fieldset className="field-3" >
          <legend className="profile">Education</legend>
          <div className="first-experience">
          <label className="start">
            Start
            </label>
            <input
              type="month"
              value={eduStartDate}
              onChange={handleEduStartChange}
              //required
              className="input"
            ></input>
        
          <br />
          <label className="start">
            End
            </label>
            <input
              type="month"
              value={eduEndDate}
              onChange={handleEduEndChange}
              //required
              className="input-2"
            ></input>
         
          </div>
          <div className="institution">
          <input
            type='text'
            placeholder="Institution Attended"
            onChange={handleEducationChange}
            value={education}
            //required
            className="input-school"
          ></input>
          </div>
          <br />
          <br></br>
          <div className="first-experience">
          <label className="start">
            Start
            </label>
            <input
              type="month"
              value={edu1StartDate}
              onChange={handleEdu1StartChange}
              className="input"
            ></input>
          
          <br />
          <label className="start">
            End
            </label>
            <input
              type="month"
              value={edu1EndDate}
              onChange={handleEdu1EndChange}
              className="input-2"
            ></input>
          
          </div>
          <div className="institution">
          <input
           type='text'
           placeholder="Institution Attended"
            onChange={handleEducation1Change}
            value={education1}
            className="input-school"
          ></input>
          </div>
        </fieldset>
        <div className="button-div">
        <button className="formbtn" type="submit">Generate CV</button>
        </div>
      </form>
      </div>
    </>
  );
};

export default Form;
