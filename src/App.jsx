import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainBody from './components/MainBody'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import {Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/page1' element={<Page1/>} />
        <Route path='/page2' element={<Page2/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
