import { BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./pages/home";
 import About from "./pages/about";
import Contact from "./pages/contact";
import News from "./pages/News/News";
import Navbar from "./common/components/header/Navbar";
import Footer from "./common/components/footer/footer"; // Ensure 'Footer' is correctly capitalized


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
        </Routes> 
        <Footer />
     </BrowserRouter>
    </>

  );
}

export default App;
