import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Manager from './pages/Manager/Manager';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css'

function App() {
      return (
            <div className='App'>
                  <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/admin' element={<Admin />}/>
                        <Route path='/sales-management' element={<Manager />}/>
                        <Route path='/dashboard' element={<Dashboard />}/>
                  </Routes>
            </div>
      )
}

export default App;
