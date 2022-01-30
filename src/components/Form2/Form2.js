import React from "react";
import {dataSet} from "../../containers/dataSet";
import { default as ReactSelect } from "react-select";
import '../Form/form.css'



const Form2 = ({
  option,
  handleChange,
  professionalSkills,
  handlePersonalProfileChange,
  personalProfile,
  handleSubmit,
  handlePersonalSkillsChange,
  personalSkills
}) => {

  
  return (
  <div className="form-content">
    <form className="main-form" onSubmit={handleSubmit}>
      <div className="career-objective">
        <label>Career Objective</label>
        <textarea
          className="textarea"
          rows={7}
            cols={50}
          placeholder=" Please Enter Career Objective"
          onChange={handlePersonalProfileChange}
          value={personalProfile}
        ></textarea>
      </div>
      <div className="professional-skills">
        <label>Professional Skills</label>
        <ReactSelect
          
          options={dataSet}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            option,
          }}
          onChange={handleChange}
          allowSelectAll={true}
          value={professionalSkills}
        />
      </div>
      <div className="career-objective">
        <label>Personal Skills</label>
        <textarea
          className="textarea"
          rows={7}
            cols={50}
          placeholder="Enter Personal Skills"
         
          onChange={handlePersonalSkillsChange}
          value={personalSkills}
        ></textarea>
      </div>
      <div className="button-div">
        <button className="formbtn" type="submit">{`Generate CV`} </button>
        </div>
    </form>
  </div>
  );
};
export default Form2;
