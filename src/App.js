import "./App.css";
import FileUploader from "./components/FileUploader";
import Logo from "./content/logo.svg";

const App = () => {
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
                <FileUploader />
            </div>
        </>
    );
};

export default App;
