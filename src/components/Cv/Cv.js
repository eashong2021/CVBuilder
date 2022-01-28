import React, { useState, useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";
import "./Cv.css";

const Cv = ({ personDetails }) => {
  const myRef = useRef(null);
  const [imgUrl, setImgUrl] = useState(null);


  //select last index of personDetails array as data for rendering
  let selector = 0;
  if (personDetails.length > 1) {
    selector = personDetails.length - 1;
  }

  //creating url for the image src with URL.createObjectURL
  let image = personDetails[selector].image;
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
                    <h3 className="heading-left">{personDetails[selector].name}</h3>
                    <h4 className="job-title">{personDetails[selector].job}</h4>
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
                <h2 className="heading-left">Experience</h2>
                <h4>{personDetails[selector].expStartDate}</h4>
                <p>{personDetails[selector].experience}</p>
                <h4>{personDetails[selector].exp1StartDate}</h4>
                <p>{personDetails[selector].experience1}</p>
              </section>
            </div>
            <div>
              <section className="education">
                <h2 className="heading-left">Education</h2>
                <h4>{personDetails[selector].eduStartDate}</h4>
                <p>{personDetails[selector].education}</p>
                <h4>{personDetails[selector].edu1StartDate}</h4>
                <p>{personDetails[selector].education1}</p>
              </section>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div>
            <h2></h2>
          </div>
          <div>
            <h2></h2>
          </div>
          <div>
            <h2></h2>
          </div>
          <div>
            <h2></h2>
          </div>
        </div>
      </div>
      </div>
      <div className="buttons">
        <ReactToPrint
            trigger={() => <button className="share-print"> Print/Download </button>}
            content={() => myRef.current}
            documentTitle={`${personDetails[selector].name}`}
        />
        <button className="share-print"> Share </button>
      </div>
    </div>
  );
};

export default Cv;
