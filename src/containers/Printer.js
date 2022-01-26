import React, {useRef} from "react";
import ReactToPrint from 'react-to-print';


const Printer = () => {

    const myRef = useRef(null);

    return(
        <div ref={myRef}>
            <ReactToPrint trigger={() => <button> Print this out </button>}
            content={() => myRef.current}
            />
        </div>
    )
    
}

export default Printer;