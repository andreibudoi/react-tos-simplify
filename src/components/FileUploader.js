import React, { useState } from "react";
import axios from "axios";


const FileUploader = ({ setDetails }) => {
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState("Choose your PDF document");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (e) => {
        setFile(e.target.files[0]);
        if (e.target.files[0]) {
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
                    "https://react-tos-simplify-api.herokuapp.com/upload",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log(res.data);
                setDetails(res.data);
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
        <div className="mb-5">
            {message && (
                <div className="alert alert-primary" role="alert">
                    {message}
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
                        className="btn btn-primary btn-block mt-4 paper-shadow"
                    />
                )}
            </form>
        </div>
    );
};

export default FileUploader;
