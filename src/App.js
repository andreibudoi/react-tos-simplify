import React, { useState } from "react";
import "./App.css";
import FileUploader from "./components/FileUploader";
import PdfDetails from "./components/PdfDetails";
import Logo from "./content/logo.svg";

const App = () => {
    const [details, setDetails] = useState("");
    return (
        <>
            <nav className="navbar sticky-top mb-5 paper-shadow">
                <a className="navbar-brand navbar-title" href="#">
                    <img
                        className="mr-2"
                        src={Logo}
                        width="50"
                        height="50"
                        alt=""
                    />
                    <span className="navbar-title">SimplifyT&C</span>
                </a>
            </nav>

            <div className="container">
                <FileUploader setDetails={setDetails} />

                { details && <PdfDetails details={details} /> } 
            </div>
        </>
    );
};

export default App;
