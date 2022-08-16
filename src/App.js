import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import FAQ from './Components/FAQ';
import About from './Components/About';
import Demo  from './Components/Demo';
import Stats from './Components/Stats';
import Review from './Components/Review';
import SignUp from './Components/SignUp';
import Fighters from './Components/Fighters';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
          <Routes>
            <Route path='/' element={<><Demo/><Stats/><Review/></>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/fighters' element={<Fighters/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/FAQ' element={<FAQ/>}></Route>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
