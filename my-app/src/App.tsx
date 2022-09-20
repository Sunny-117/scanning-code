import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ScannerCode } from './ScannerCode'
import { ScannerPath } from './ScannerPath'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/a' element={<ScannerCode />}></Route>
        <Route path='/b' element={<ScannerPath />}></Route>
      </Routes>
    </Router>
  )
}

export default App