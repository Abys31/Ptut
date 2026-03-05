import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./style.css"
import Bateau from "./Bateau"
import Capitaine from "./Capitaine"
import PlusInfo from "./PlusInfo"
import Boussole from "./Boussole"

export default function Home() {
  const sceneRef = useRef<HTMLElement | null>(null)
  const navigate = useNavigate()

  const [showTransition, setShowTransition] = useState(false)
  const [videoFinished, setVideoFinished] = useState(false)

  // Show transition video on captain click
  const handleCaptainClick = () => {
    setShowTransition(true)
    setVideoFinished(false)
  }

  // Parallax mouse tracking
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    let raf = 0
    let tx = 0, ty = 0
    let cx = 0, cy = 0
    const onMove = (e: PointerEvent) => {
      const r = scene.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      tx = (px - 0.5) * 2
      ty = (py - 0.5) * 2
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const tick = () => {
      raf = 0
      cx += (tx - cx) * 0.08
      cy += (ty - cy) * 0.08
      scene.style.setProperty("--mx", cx.toFixed(4))
      scene.style.setProperty("--my", cy.toFixed(4))
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <main ref={sceneRef} className="scene scene--fx" aria-label="Page d'accueil CAPITNF1">
      <img src="/assets/fond_vf.jpg" className="layer bg bg--fx" alt="" />
      <div className="fx fx--sky" aria-hidden="true" />
      <div className="fx fx--water" aria-hidden="true" />
      <div className="fx fx--sparkles" aria-hidden="true" />
      <img src="/assets/title.PNG" className="layer overlay overlay--title" alt="CAPITNF1" />
      <Bateau />
      <Capitaine onClick={handleCaptainClick} />
      <PlusInfo />
      <Boussole onClick={() => navigate("/boussole")} />
      <img src="/assets/bon_balaine.png" className="obj obj--balaine" alt="" />
      <Link to="/iceberg" className="hotspot hotspot--iceberg" aria-label="Explorer l'iceberg" />

      {/* Vidéo de transition vers /questions (en mode Pop-up) */}
      {showTransition && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999999,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          {/* Conteneur de la vidéo façon "Pop-up" */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '800px',
            backgroundColor: '#000',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            aspectRatio: '16/9'
          }}>
            <button
              onClick={() => setShowTransition(false)}
              style={{
                position: 'absolute',
                top: 10,
                right: 15,
                zIndex: 10,
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >✕</button>

            <video
              src="/assets/transition.mp4"
              autoPlay
              playsInline
              onEnded={() => setVideoFinished(true)}
              onError={(e) => {
                console.error("Video error:", e);
                setVideoFinished(true); // Permet de continuer si la vidéo échoue
              }}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />

            {/* Bouton Continuer qui apparaît à la fin de la vidéo */}
            {videoFinished && (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <button
                  onClick={() => navigate("/questions")}
                  style={{
                    padding: '12px 32px',
                    fontSize: '22px',
                    fontFamily: '"Patrick Hand", cursive',
                    backgroundColor: '#1E90FF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Continuer vers les questions
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}