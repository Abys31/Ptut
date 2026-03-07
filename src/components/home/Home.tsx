import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./style.css"
import Bateau from "./Bateau"
import Capitaine from "./Capitaine"
import PlusInfo from "./PlusInfo"
import Boussole from "./Boussole"

export default function Home() {
  const navigate = useNavigate()
  const [showTransition, setShowTransition] = useState(false)

  // Show transition video on captain click
  const handleCaptainClick = () => {
    setShowTransition(true)
  }

  return (
    <main className="home-page">
      {/* ── Fond flouté pour le remplissage ── */}
      <div className="home-bg-blur" style={{ backgroundImage: 'url("/assets/1.jpg")' }}></div>

      <div className="home-scene-wrapper">
        {/* ── Image de fond principale ── */}
        <img src="/assets/1.jpg" className="home-main-bg" alt="Capitaine NF1" draggable={false} />

        {/* ── Zones Cliquables (Hotspots) ── */}
        <Bateau />
        <Capitaine onClick={handleCaptainClick} />
        <PlusInfo />
        <Boussole onClick={() => navigate("/boussole")} />

        <Link to="/iceberg" className="home-hotspot home-hotspot--iceberg" aria-label="Explorer l'iceberg" />
      </div>

      {/* Vidéo de transition vers /questions (en mode Pop-up) */}
      {showTransition && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999999,
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(12px)', // Plus de flou sur le tour
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px'
        }}>
          {/* Conteneur de la vidéo façon "Pop-up" sans bords noirs */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1050px',
            backgroundColor: 'transparent', // Pas de fond noir
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 0 60px rgba(0, 160, 255, 0.3), 0 20px 80px rgba(0, 0, 0, 0.6)',
            aspectRatio: '16/9'
          }}>
            <button
              onClick={() => setShowTransition(false)}
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                zIndex: 10,
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            >✕</button>

            <video
              src="/assets/transition.mp4"
              autoPlay
              playsInline
              onEnded={() => navigate("/questions")}
              onError={(e) => {
                console.error("Video error:", e);
                navigate("/questions");
              }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Cover pour éviter les bandes noires
            />
          </div>
        </div>
      )}
    </main>
  )
}