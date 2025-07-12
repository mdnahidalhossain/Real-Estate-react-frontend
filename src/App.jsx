import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectPage from "./pages/ProjectPage"
import TestimonialPage from "./pages/TestimonialPage"
import ContactUsPage from "./pages/ContactUsPage"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/projects" element={<ProjectPage />}/>
        <Route path="/testimonials" element={<TestimonialPage />}/>
        <Route path="/contacts" element={<ContactUsPage />}/>
      </Routes>
      
    </>
  )
}

export default App
