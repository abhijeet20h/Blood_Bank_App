import "./App.css";
import Demo from "./Components/Demo";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Demo />
     
      
      <>
        <switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </switch>
      </>
       <Footer />
    </div>
  );
}

export default App;
