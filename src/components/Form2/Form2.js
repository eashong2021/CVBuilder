import React, { Component, useState } from "react";
import { dataSet } from "../../containers/dataSet";
import { default as ReactSelect } from "react-select";
// import "./styles.css";
import { components } from "react-select";

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

const Form2 = (props) => {
  const [select, setSelect] = useState([]);

  const handleChange = (selected) => {
    setSelect(selected);
  };
  return (
    <form>
      <div className="career-objective">
        <label>Career Objective</label>
        <textarea
          className="input"
          placeholder=" Please Enter Career Objective"
          // onChange={handlePersonalprofileChange}
          // value={personalProfile}
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
            Option,
          }}
          onChange={handleChange}
          allowSelectAll={true}
          value={select}
        />
      </div>
      <div className="career-objective">
        <label>Personal Skills</label>
        <textarea
          className="textarea"
          placeholder="Enter Personal Skills"
         
          // onChange={handlePersonalprofileChange}
          // value={personalProfile}
        ></textarea>
      </div>
    </form>
  );
};
export default Form2;
