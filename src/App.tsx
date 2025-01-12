import { Routes , Route } from 'react-router-dom'
// import Cotizator from './pages/Cotizator/Cotizator'
// import Result from './pages/Result/Result'
// import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Manager from './pages/Manager/Manager';
import './App.css'

function App() {
      return (
            <div className='App'>
                  <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/admin' element={<Admin />}/>
                        <Route path='/sales-management' element={<Manager />}/>
                        {/* <Route path='/quotation/:id' element={<Result />}/> */}
                  </Routes>
            </div>
      )
}

export default App;
