import React, { useState } from "react";
import axios from "axios";

const FileUploader = () => {
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState("Choose your PDF document");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (e) => {
        setFile(e.target.files[0]);
        if(e.target.files[0]){
            setFilename(e.target.files[0].name);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (file && file.type === "application/pdf") {
            setMessage("");
            setIsLoading(true);
            const formData = new FormData();
            formData.append("file", file);

            try {
                const res = await axios.post(
                    "http://localhost:5000/upload",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                if (err.response.status === 500) {
                    setMessage("There was a problem with the server");
                } else {
                    setMessage(err.response.data.msg);
                }
            }
        } else {
            setMessage("Please upload a '.pdf' document");
        }
    };

    return (
        <>
            {message && (
                <div
                    className="alert alert-info alert-dismissible fade show"
                    role="alert"
                >
                    {message}
                    <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}
            <form onSubmit={onSubmit}>
                <div className="custom-file mb-1">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={onChange}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                        {filename}
                    </label>
                </div>
                {isLoading ? (
                    <button
                        className="btn btn-primary btn-block mt-4"
                        type="button"
                        disabled
                    >
                        <span
                            className="spinner-border spinner-border-sm mr-2"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        Loading...
                    </button>
                ) : (
                    <input
                        type="submit"
                        value="Simplify"
                        className="btn btn-primary btn-block mt-4"
                    />
                )}
            </form>
        </>
    );
};

export default FileUploader;
