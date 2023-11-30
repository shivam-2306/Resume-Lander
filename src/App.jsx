import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CareerPage from './Pages/CareerPage/CareerPage'
import test from '../Test'
import Login from './Pages/login/Login'
import ApplyForm from './Pages/ApplyForm/ApplyForm'
import Main from './Pages/Main/Main'
import SignUp from './Pages/SignUp/Signup'
import TrackApplications from './Pages/TrackApplications/TrackApplications'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/main/:role" element={<Main />} />
        <Route path="applyform" element={<ApplyForm/>}/>
        <Route path="careerpage" element={<CareerPage data={test} />}/>
        <Route path="trackapplications" element={<TrackApplications data={test} />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
