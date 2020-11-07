import "./App.css";
import FileUploader from "./components/FileUploader";

const App = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-light bg-light mb-3">
                <a className="navbar-brand" href="#">
                    <img
                        className="mr-2"
                        src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
                        width="30"
                        height="30"
                        alt=""
                    />
                    Simplify your Terms and Conditions document!
                </a>
            </nav>


            <div className="container text-center">
                <FileUploader />
            </div>
        </>
    );
};

export default App;
