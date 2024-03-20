import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../layout/styles.css'
import './Landing.tsx'
import Landing from './Landing.tsx'
import About from '../pages/About.tsx'
import ResponsiveAppbar from './AppBar.tsx'
import ResumePortfolio from '../pages/Resume.tsx'
import data from '../layout/TEMPLATE.tsx'
import Footer from '../layout/Footer.tsx'
import Publications from '../pages/Publications.tsx'


function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppbar />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resume" element={<ResumePortfolio profile={data.profile} />}/>
        <Route path="/publications" element={<Publications/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
