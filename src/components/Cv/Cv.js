import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import "./Cv.css";

const Cv = ({ personDetails }) => {
  const myRef = useRef(null);

  //select last index of personDetails array as data for rendering
  let selector = 0;
  if (personDetails.length > 1) {
    selector = personDetails.length - 1;
  }

  return (
    <div className="displayAll">
      <div>
        <div className="print" ref={myRef}> 

        <div className="left-side">
          <section className="personal">
            <div className="profile">
              <div className="profileimg-left">
                <img className="profile-img" src="" alt=""></img>
              </div>
              <div className="profiledetail-right">
                <div >
                  <div>
                    <h3 className="heading-left">{personDetails[selector].name}</h3>
                    <h4 className="job-title">Current job role</h4>
                  </div>

                  <div className="other-personal">
                  <p>{personDetails[selector].phoneNumber}</p>
                  <p>{personDetails[selector].email}</p>
                  <p>{personDetails[selector].linkedInLink}</p>
                  <p>{personDetails[selector].address}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="job-info">
            <div>
              <section className="experience">
                <h2 class="heading-left">Experience</h2>
                <p>{personDetails[selector].experience}</p>
                <p>{personDetails[selector].experience1}</p>
              </section>
            </div>
            <div>
              <section className="education">
                <h2 class="heading-left">Education</h2>
                <p>{personDetails[selector].education}</p>
                <p>{personDetails[selector].education1}</p>
              </section>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div>
            <h2>Personal Profile</h2>
          </div>
          <div>
            <h2>Professional Skill</h2>
          </div>
          <div>
            <h2>Personal Skills</h2>
          </div>
          <div>
            <h2>right side</h2>
          </div>
        </div>
      </div>
      </div>
      <div className="buttons">
        <div>
       
          <ReactToPrint
            trigger={() => <button className="share-print"> Print/Download </button>}
            content={() => myRef.current}
            documentTitle={`${personDetails[selector].name}`}
            />
          <button className="share-print"> Share </button>
        </div> 
      </div>
    </div>
  );
};

export default Cv;
