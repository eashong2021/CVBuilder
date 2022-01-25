import React, {useRef} from "react";
import ReactToPrint from 'react-to-print';
import './Cv.css';





const Cv = ({personDetails}) =>{
    const myRef = useRef(null);

    //select last index of personDetails array as data for rendering
    let selector = 0;
    if(personDetails.length > 1){
        selector = personDetails.length - 1;
    }

return(  
    <div className="displayAll">
        <div>
         <div ref={myRef} > </div>
        
         <div className="left-side">
         <section className="profile">
              <div>
             <div className="profileimg-left">
               <img className="profile-img" src=""  alt=""></img>
               </div>
                 <div>
                     <div className="profiledetail-right>" > 
                     <div>
                         <h3>{personDetails[selector].name}</h3>
                         <h4>Current job role</h4>
                     </div>
                         
                         <h4>{personDetails[selector].phoneNumber}</h4>
                         <h4>{personDetails[selector].email}</h4>
                         <h4>{personDetails[selector].linkedInLink}</h4>
                         <h4>{personDetails[selector].address}</h4>
                         
                     </div>
                </div>
             </div>
         </section>
           <div>
            <section className="experience">
                <h2>Experience</h2>
                <p>{personDetails[selector].experience}</p>
                <p>{personDetails[selector].experience1}</p>
            </section>
            </div>
            <div>
            <section className="education">
                <h2>Education</h2>
                <p>{personDetails[selector].education}</p>
                <p>{personDetails[selector].education1}</p>
            </section>
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
        <div>
            <div>
        <ReactToPrint 
        trigger={() => <button> Print/Download </button>}
        content={() => myRef.current}
        documentTitle={`${personDetails[selector].name}`}
            />
            </div>
            <div>
        <button> Share </button>
        </div>
        </div>
    </div>
)
}

export default Cv;