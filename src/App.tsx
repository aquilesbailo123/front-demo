import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Manager from './pages/Manager/Manager';
import Dashboard from './pages/Dashboard/Dashboard';
import Mekanico from './pages/Mekanico/Mekanico';
import Notifications from './pages/Notifications/Notifications';
import './App.css'

function App() {
      return (
            <div className='App'>
                  <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/admin' element={<Admin />}/>
                        <Route path='/sales-management' element={<Manager />}/>
                        <Route path='/dashboard' element={<Dashboard />}/>
                        <Route path='/mekanico' element={<Mekanico />}/>
                        <Route path='/notifications' element={<Notifications />}/>
                  </Routes>
            </div>
      )
}

export default App;
