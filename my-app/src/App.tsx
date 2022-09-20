import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import FormCollect from './FormCollect'
import { ScannerCode } from './ScannerCode'
import { ScannerPath } from './ScannerPath'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/a' element={<ScannerCode />}></Route>
        <Route path='/b' element={<ScannerPath />}></Route>
        <Route path='/FormCollect' element={<FormCollect />}></Route>
      </Routes>
    </Router>
  )
}

export default App