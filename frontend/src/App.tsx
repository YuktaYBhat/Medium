
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SignIn'
import { Blogg } from './Pages/Blogg'

function App() {

  return (
      <div>
      <BrowserRouter>
      <Routes>
            <Route path="/Signup" element ={<SignUp/>}></Route>
            <Route path="/Signin" element={<SignIn/>}></Route> 
            <Route path="/Blogg" element={<Blogg/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
