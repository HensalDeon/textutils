import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
    const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
    const [darkMode, setDarkMode] = useState("Enable dark mode");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(()=>{
            setAlert(null)
        },2000)
    };
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#1b3239";
            setDarkMode("Disable dark mode");
            showAlert("Dark mode has been enabled!", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            setDarkMode("Enable dark mode");
            showAlert("Light mode has been enabled!", "success");
        }
    };
    return (
        <>
            <Navbar title="textUTILS" aboutUs="About Us" mode={mode} toggleMode={toggleMode} enableMode={darkMode} />
            <Alert alert={alert} />
            <div className="container">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze!" mode={mode} />
                <About />
            </div>
        </>
    );
}

export default App;
