import { Route, Routes } from 'react-router-dom'
import Color from './components/Color'

import Expression from './components/expression'
import Login from './components/Login'
import Reg from './components/Reg'
import Review from './components/Review'
import Formss from './Formss'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
 const App = () => {
  return (
    <>
    {/* <Color/> */}
    
    {/* <Expression/> */}

   {/* <Login/> */}
   {/* <Reg/> */}

  {/* <Formss/> */}
  {/* <Review/> */}
     <Navbar/>
     <Home/>
    <About/>
    <Contact/>
    <Footer/>
    <Routes>
      <Route>
      
      </Route>
    </Routes>
  

    </>
  )
}
export default App