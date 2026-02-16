import { useEffect, useRef } from "react"
import "./style.css"

import Boussole from "./Boussole"
import Longuevue from "./Longuevue"
import Bateau from "./Bateau"
import Capitaine from "./Capitaine"
import PlusInfo from "./PlusInfo"
import IcebergHotspot from "./IcebergHotspot"

export default function Home() {
  const sceneRef = useRef<HTMLElement | null>(null)

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
      {/* Fond */}
      <img src="/assets/background.JPG" className="layer bg bg--fx" alt="" />

      {/* FX dynamiques */}
      <div className="fx fx--sky" aria-hidden="true" />
      <div className="fx fx--clouds" aria-hidden="true" />
      <div className="fx fx--water" aria-hidden="true" />
      <div className="fx fx--sparkles" aria-hidden="true" />

      {/* Overlays */}
      <img src="/assets/title.PNG" className="layer overlay overlay--fx" alt="" />
      <img src="/assets/iceberg_layer.PNG" className="layer overlay overlay--fx2" alt="" />
      <div className="fx fx--icebergShadow" aria-hidden="true" />

      {/* Objets cliquables — chacun dans son propre composant */}
      <Boussole />
      <Longuevue />
      <Bateau />
      <Capitaine />
      <PlusInfo />
      <IcebergHotspot />
    </main>
  )
}
