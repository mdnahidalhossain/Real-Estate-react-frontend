import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import TestimonialSection from '../components/TestimonialSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Header />
        <AboutSection />
        <ProjectSection />
        <TestimonialSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

export default HomePage