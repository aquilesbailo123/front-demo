import { Routes , Route } from 'react-router-dom'
import Cotizator from './pages/Cotizator/Cotizator'
import Result from './pages/Result/Result'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
      return (
            <div className='App'>
                  <Navbar/>
                  <Routes>
                        <Route path='/' element={<Cotizator />}>
                              <Route path='/quotation/:id' element={<Result />}/>
                        </Route>
                  </Routes>
            </div>
      )
}

export default App;
