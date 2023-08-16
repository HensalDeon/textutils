import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
    return (
        <>
            <Navbar title="textUtils" aboutUs="About textUtils" />
            <div className="container">
              <TextForm heading ="Enter the text to analyze!" />
            </div>
        </>
    );
}

export default App;
