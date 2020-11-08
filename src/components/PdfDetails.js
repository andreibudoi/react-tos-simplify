import React from "react";
import okayIcon from "../content/okayIcon.svg";
import mediocreIcon from "../content/mediocreIcon.svg";
import awfulIcon from "../content/awfulIcon.svg";

const scoresStyles = {
    Okay: {
        icon: okayIcon,
        primaryColor: "#76E2B3",
        secondaryColor: "#2E5745",
    },
    Mediocre: {
        icon: mediocreIcon,
        primaryColor: "#F5B748",
        secondaryColor: "#705421",
    },
    Awful: {
        icon: awfulIcon,
        primaryColor: "#EC536F",
        secondaryColor: "#6C2633",
    },
};

const PdfDetails = ({ details }) => {
    return (
        <>
            <h2 className="score-header mb-4">Privacy score:</h2>
            <div
                className="score-card d-inline-flex align-items-center mb-3"
                style={{
                    backgroundColor: scoresStyles[details.score].primaryColor,
                }}
            >
                <img
                    className="m-2"
                    src={scoresStyles[details.score].icon}
                    width="100"
                    height="100"
                    alt=""
                />
                <h3
                    className="mr-4 score-body"
                    style={{
                        color: scoresStyles[details.score].secondaryColor,
                    }}
                >
                    {details.score}
                </h3>
            </div>
            <hr className="mb-4"/>
            <h2 className="score-header mb-4">Policy details:</h2> 
            {Object.keys(details.agreements).map((agreement) => (
                <div key={agreement} className="alert alert-warning mb-3" ><h4 id={agreement}>{agreement}</h4></div>
            ))}
            {(Object.keys(details.agreements).length === 0 && details.agreements.constructor === Object) && "No warnings to show"}
        </>
    );
};

export default PdfDetails;
