import { useEffect, useRef, useState } from "react"
import "./style.css"
import { Link } from "react-router-dom"

export default function Home() {
  const sceneRef = useRef<HTMLElement | null>(null)

  // --- NEW: longuevue overlay state ---
  const [showLonguevue, setShowLonguevue] = useState(false)
  const [longuevueStage, setLonguevueStage] = useState<"video" | "photo">("video")
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Parallax (your existing code)
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

  // --- NEW: when opening, reset to video and autoplay ---
  useEffect(() => {
    if (!showLonguevue) return
    setLonguevueStage("video")

    // Give React time to render the <video>
    requestAnimationFrame(() => {
      const v = videoRef.current
      if (!v) return
      v.currentTime = 0
      // autoplay can be blocked unless muted; we set muted below
      v.play().catch(() => {
        // If autoplay blocked, user can press play (controls enabled)
      })
    })
  }, [showLonguevue])

  // --- NEW: close on ESC ---
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowLonguevue(false)
    }
    if (showLonguevue) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [showLonguevue])

  const openLonguevue = () => {
    setShowLonguevue(true)
  }

  const closeLonguevue = () => {
    setShowLonguevue(false)
  }

  return (
    <main ref={sceneRef} className="scene scene--fx" aria-label="Page d'accueil CAPITNF1">
      {/* Fond */}
      <img src="/assets/background.JPG" className="layer bg bg--fx" alt="" />

      {/* FX dynamiques */}
      <div className="fx fx--sky" aria-hidden="true" />
      <div className="fx fx--clouds" aria-hidden="true" />
      <div className="fx fx--water" aria-hidden="true" />
      <div className="fx fx--sparkles" aria-hidden="true" />

      {/* overlays */}
      <img src="/assets/title.PNG" className="layer overlay overlay--fx" alt="" />
      <img src="/assets/iceberg_layer.PNG" className="layer overlay overlay--fx2" alt="" />
      <div className="fx fx--icebergShadow" aria-hidden="true" />
      {/* objets cliquables */}
      <a className="obj obj--boussole"><img src="/assets/boussole.png" alt="" /></a>

      {/* ✅ Longuevue: button opens overlay */}
      <button
        type="button"
        className="obj obj--longuevue objBtn"
        onClick={openLonguevue}
        aria-label="Ouvrir la longuevue"
      >
        <img src="/assets/longuevue.png" alt="" />
      </button>

      <a className="obj obj--bateau"><img src="/assets/bateau.png" alt="" /></a>
      <a className="obj obj--capitaine"><img src="/assets/capitaine.PNG" alt="" /></a>
      <Link className="obj obj--plusinfo" to="/informations"><img src="/assets/info.png" alt="" /></Link>

      <a className="hotspot hotspot--iceberg" href="/iceberg.html" aria-label="Aller vers l'Iceberg" />

      {/* ✅ Longuevue overlay */}
      {showLonguevue && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Longuevue">
          {/* click outside to close */}
          <div className="modal__backdrop" onClick={closeLonguevue} />

          <div className="modal__content">
            <button className="modal__close" type="button" onClick={closeLonguevue} aria-label="Fermer">
              ✕
            </button>

            {longuevueStage === "video" ? (
              <video
                ref={videoRef}
                className="modal__media"
                src="/assets/4 Second Timer.mp4"
                playsInline
                muted
                // controls optional; keep controls to avoid autoplay issues on some browsers
                controls
                onEnded={() => setLonguevueStage("photo")}
              />
            ) : (
              <img
                className="modal__media"
                src="/assets/BG.png"
                alt="Image après la vidéo"
              />
            )}

            {/* {longuevueStage === "video" ? (
                <iframe
                  className="modal__media"
                  src="https://drive.google.com/file/d/141ahftckJoaJFcpL9rfsKkk29h411Hfu/preview"
                  allow="autoplay"
                  allowFullScreen
                  title="Vidéo Longuevue"
                />
              ) : (
                <img className="modal__media" src="/assets/BG.png" alt="Image après la vidéo" />
              )}
 */}
          </div>
        </div>
      )}
    </main>
  )
}
