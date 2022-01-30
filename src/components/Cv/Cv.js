import React, { useState, useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";
import "./Cv.css";


export const Cv = ({ personDetails }) => {
  const myRef = useRef(null);
  const [imgUrl, setImgUrl] = useState(null);

  const details = Object.keys(personDetails).map(key => personDetails[key]).reduce((old, item) =>(
    {...old , ...item}
  ), {})

    console.log(details)

  //creating url for the image src with URL.createObjectURL
  let image = details.image;
  useEffect(()=>{
      if(image){
          setImgUrl(URL.createObjectURL(image));
      }
  }, [image])

  return (
    <div className="displayAll">
      <div>
        <div className="print" ref={myRef}> 

        <div className="left-side">
          <section className="personal">
            <div className="profile">
              <div className="profileimg-left">
                <img className="profile-img" src={imgUrl} alt=""></img>
              </div>
              <div className="profiledetail-right">
                <div>
                  <div >
                    <h3 className="heading-left">{details.name}</h3>
                    <h4 className="job-title">{details.job}</h4>
                  </div>

                  <div className="other-personal">
                    <p>{details.phoneNumber}</p>
                    <p>{details.email}</p>
                    <p>{details.linkedInLink}</p>
                    <p>{details.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="job-info">
            <div>
              <section className="experience">
                <h2 className="heading-left">Experience</h2>
                <h4>{`${details.expStartDate} - ${details.expEndDate}`}</h4>
                <p>{details.experience}</p>
                <h4>{`${details.exp1StartDate} - ${details.exp1EndDate}`}</h4>
                <p>{details.experience1}</p>
              </section>
            </div>
            <div>
              <section className="education">
                <h2 className="heading-left">Education</h2>
                <h4>{`${details.eduStartDate} - ${details.eduEndDate}`}</h4>
                <p>{details.education}</p>
                <h4>{`${details.edu1StartDate} - ${details.edu1EndDate}`}</h4>
                <p>{details.education1}</p>
              </section>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="own-profile">
            <p>{details.personalProfile}</p>
          </div>
          <div className="professional-skill">
            <h2>Pro Skill</h2>
            {details.professionalSkills.map(element => <p>{element.value}</p>)}
          </div>
          <div className="personal-skill">
            <h2>Personal Skill</h2>
            <p>{details.personalSkills}</p>
          </div>
        </div>
      </div>
      </div>
      <div className="buttons">
        <ReactToPrint
            trigger={() => <button className="share-print"> Print/Download </button>}
            content={() => myRef.current}
            documentTitle={`${details.name}`}
        />
        <button className="share-print"> Share </button>
      </div>
    </div>
  );
};

