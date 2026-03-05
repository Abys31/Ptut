import { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./style.css"
import Bateau from "./Bateau"
import Capitaine from "./Capitaine"
import PlusInfo from "./PlusInfo"
import Boussole from "./Boussole"

export default function Home() {
  const sceneRef = useRef<HTMLElement | null>(null)
  const navigate = useNavigate()

  // Navigate immediately on captain click
  const handleCaptainClick = () => {
    navigate("/questions")
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
    </main>
  )
}