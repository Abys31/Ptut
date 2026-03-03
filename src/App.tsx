import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './components/home/Home'
import PlusInfos from './components/info/PlusInfos'
import Iceberg from './components/iceberg/Iceberg'
import Questions from './components/questions/Questions'
import BoussoleGuide from './components/boussole/BoussoleGuide'

function GlobalBoussole() {
  const location = useLocation()
  const navigate = useNavigate()

  // Ne pas afficher sur l'accueil (elle y est déjà) ni sur la page boussole
  if (location.pathname === '/' || location.pathname === '/boussole') return null

  return (
    <button
      className="global-boussole"
      onClick={() => navigate('/boussole')}
      title="Guide du site"
      aria-label="Ouvrir le guide"
    >
      <img src="/assets/boussole.png" alt="Boussole" draggable={false} />
    </button>
  )
}

function RotateOverlay() {
  return (
    <div className="rotate-overlay">
      <div className="rotate-content">
        <div className="rotate-icon">📱</div>
        <p className="rotate-text">Tourne ton téléphone pour une meilleure expérience !</p>
        <div className="rotate-arrow">↻</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <RotateOverlay />
      <GlobalBoussole />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informations" element={<PlusInfos />} />
        <Route path="/iceberg" element={<Iceberg />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/boussole" element={<BoussoleGuide />} />
      </Routes>
    </>
  )
}

export default App

