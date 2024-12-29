import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import {About, Contact, Home, Project, Skills} from './Pages';
const App = ()=> {

  return (
     <main className='bg-slate-300/20 h-[100vh]'>
     {/* <audio controls autoPlay loop >
        <source src='../../src/Image/Titanic.mp3' type='audio/mp3' />
      </audio> */}
        <Router>
           <Navbar/>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/contact' element={<Contact/>}/>
           </Routes>
        </Router>
     </main>
  );
}

export default App
