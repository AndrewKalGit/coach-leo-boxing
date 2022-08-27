import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
// import FAQ from './Components/FAQ';
import About from './Components/About';
import Demo  from './Components/Demo';
import Stats from './Components/Stats';
import Review from './Components/Review';
import SignUp from './Components/SignUp';
import Coaches from './Components/Coaches';
import FAQ  from './Components/FAQ';

//To Do: Landing Page with fade in and click anywhere to go to web site with changing text 
//To Do: Get image and people for the boxing website Fighters Tab
//To Do: Enter "and many more fighters and fighters to come" section
//To Do: Make a page not found page for pages without a route 

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
          <Routes>
            <Route path='/' element={<><Demo/><Stats/><Review/></>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/coaches' element={<Coaches/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/FAQ' element={<FAQ/>}></Route> 
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;