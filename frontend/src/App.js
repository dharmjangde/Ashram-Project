import "./App.css";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import News from "./pages/News/News";
import Event from './pages/Event/Event';
import Valunteer from './pages/Voluntree/Voluntree';
import Navbar from "./common/components/header/Navbar";
import Footer from "./common/components/footer/footer"; // Ensure 'Footer' is correctly capitalizedy
function App() {
  return (
    <>
     <BrowserRouter>
        <Navbar />
         <Routes> 
          <Route path="/" element={<Home />} /> 
           <Route path="/about" element={<About />} />
           <Route path="/news" element={<News />} />  
          <Route path="/contact" element={<Contact />}/>
          <Route path="/event" element={<Event />}/>
          <Route path="/volunteer" element={<Valunteer/>}/>


        </Routes> 
        <Footer />
     </BrowserRouter>
    </>

  );
}

export default App;
