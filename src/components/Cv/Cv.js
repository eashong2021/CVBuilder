

const Cv = ({personDetails}) =>{

    let selector = 0;
    if(personDetails.length > 1){
        selector = personDetails.length - 1;
    }

    return(  
        <>
        <section>
            <h3>{personDetails[selector].name}</h3>
            <h4>{personDetails[selector].address}</h4>
            <h4>{personDetails[selector].phoneNumber}</h4>
            <h4>{personDetails[selector].email}</h4>
            <h4>{personDetails[selector].linkedInLink}</h4>
        </section>
        <section>
            <h2>Education</h2>
            <p>{personDetails[selector].education}</p>
            <p>{personDetails[selector].education1}</p>
        </section>
        <section>
            <h2>Experience</h2>
            <p>{personDetails[selector].experience}</p>
            <p>{personDetails[selector].experience1}</p>
        </section>
        <button onClick={()=> window.print()}> Print/Download CV</button>
        <button> Share </button>

        </>
    )
}

export default Cv;