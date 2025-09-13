import Footer from "./Components/Footer"
import LeftPanel from "./Components/LeftPanel"
import MainContent from "./Components/MainContent"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-5 p-10">
        <LeftPanel />
        <MainContent />
      </div>
      <Footer />
    </>
  )
}

export default App
