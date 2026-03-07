import { useState, useEffect, useCallback } from "react"
import "./style.css"

/* ── Types ─────────────────────────────────────── */
interface BaseEl {
    id: string
    label: string
    xPct: number   // left %
    yPct: number   // top %
    video: string
    description: string
}

interface Sign extends BaseEl {
    type: "sign"
    signImg?: string
    picto?: string
    rotate?: number
}

interface Bubble extends BaseEl {
    type: "bubble"
    icon?: string
    size: "sm" | "md"
}

type IceItem = Sign | Bubble

/* ──────────────────────────────────────────────────
   DONNÉES — positions calées sur iceburge_vv.jpg
   ────────────────────────────────────────────────── */
const items: IceItem[] = [

    // ═══════ PANCARTES (Hauts) ════════════════════════════════════════════
    {
        type: "sign", id: "scoliose", label: "scoliose",
        xPct: 59, yPct: 20,
        video: "/assets/4 Second Timer.mp4",
        description: "<scoliose>."
    },
    {
        type: "sign", id: "scoliose-1", label: "taches",
        xPct: 62.5, yPct: 32,
        video: "/assets/4 Second Timer.mp4",
        description: "neurofibromes."
    },
    {
        type: "sign", id: "taches-haut-g", label: "taches",
        xPct: 30, yPct: 17,
        video: "/assets/4 Second Timer.mp4",
        description: "Les taches café au lait."
    },
    {
        type: "sign", id: "taches-centre", label: "taches",
        xPct: 48, yPct: 27,
        video: "/assets/4 Second Timer.mp4",
        description: "Les taches café au lait."
    },

    // ═══════ BULLES (Sous l'eau) ═════════════════════════════════════════
    // Groupe gauche
    { type: "bubble", id: "b3", label: "Ophtalmique", size: "md", xPct: 41, yPct: 58, video: "", description: "" },
    // Groupe centre
    { type: "bubble", id: "b5", label: "genetique", size: "md", xPct: 48, yPct: 65, video: "", description: "" },
    // Groupe droite
    { type: "bubble", id: "b4", label: "troubles", size: "md", xPct: 58, yPct: 60, video: "", description: "" },

    // Petites bulles d'ambiance cliquables
    { type: "bubble", id: "b6", label: "troubles", size: "sm", xPct: 34, yPct: 75, video: "", description: "" },
    { type: "bubble", id: "b8", label: "troubles", size: "sm", xPct: 60, yPct: 78, video: "", description: "" },
]

/* ── Composant ─────────────────────────────────── */
export default function Iceberg() {
    const [active, setActive] = useState<IceItem | null>(null)
    const [isClosing, setIsClosing] = useState(false)
    const closeModal = useCallback(() => setActive(null), [])

    const handleVideoEnd = () => {
        setIsClosing(true)
        setTimeout(() => { setActive(null); setIsClosing(false) }, 800)
    }

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal() }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [closeModal])

    return (
        <div className="ice-page">
            {/* ── Fond flouté pour le remplissage ── */}
            <div className="ice-bg-blur" style={{ backgroundImage: 'url("/assets/iceburge_vv.jpg")' }}></div>

            <div className="ice-scene-wrapper">
                {/* ── Image de fond principale ── */}
                <img src="/assets/iceburge_vv.jpg" className="ice-main-bg" alt="Iceberg" draggable={false} />

                {/* ── Zones Cliquables (Hotspots) ── */}
                {items.map(item => (
                    <button
                        key={item.id}
                        className={`ice-hotspot ice-hotspot--${item.type} ice-hotspot--${item.id} ${item.type === 'bubble' ? `ice-hotspot--${item.size}` : ''}`}
                        onClick={() => setActive(item)}
                        aria-label={item.label}
                    />
                ))}
            </div>

            {active && (
                <div className={`ice-modal ${isClosing ? 'ice-modal--closing' : ''}`} role="dialog" aria-modal="true">
                    <div className="ice-modal__backdrop" onClick={closeModal} />
                    <div className="ice-modal__box">
                        <button className="ice-modal__close" onClick={closeModal} aria-label="Fermer">✕</button>
                        <div className="ice-modal__header">
                            {((active as any).icon || (active as any).picto) && (
                                <img src={((active as any).icon || (active as any).picto)} className="ice-modal__hero" alt="" draggable={false} />
                            )}
                            <h2 className="ice-modal__title">{active.label}</h2>
                        </div>
                        <p className="ice-modal__desc">{active.description}</p>
                        <video
                            key={active.video}
                            className="ice-modal__video"
                            src={active.video}
                            controls autoPlay playsInline
                            onEnded={handleVideoEnd}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
