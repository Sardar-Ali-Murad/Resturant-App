
import React from "react";
import {BrowserRouter,Route,Routes}  from "react-router-dom"
import {Home, Menu,About,Contact} from "./pages/index"
import {Header,Footer} from "./components/index"
function App() {
  return (
    <div style={{overflow:"hidden"}}>
     <BrowserRouter>
       <Header/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
       </Routes>
       <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
