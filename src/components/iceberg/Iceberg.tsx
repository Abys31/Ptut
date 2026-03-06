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
    signImg: string
    picto?: string
    rotate?: number
}

interface Bubble extends BaseEl {
    type: "bubble"
    icon?: string
    size: "sm" | "md"
}

type IceItem = Sign | Bubble

const STYLE_SNOW = "/assets/sign_v2.png"
const STYLE_BARE = "/assets/Illustration_sans_titre.png"

const PICTO_TACHES = "/assets/IMG_0405.PNG"
const PICTO_CORPS = "/assets/corp.png"
const PICTO_DIG = "/assets/dig.PNG"

/* ──────────────────────────────────────────────────
   DONNÉES — positions calées sur la capture de référence
────────────────────────────────────────────────── */
const items: IceItem[] = [

    // ═══════ PANCARTES ═══════════════════════════════════════════════════

    // 1. "taches" — bas gauche de l'iceberg central
    {
        type: "sign", id: "taches-bas-g", label: "taches",
        signImg: STYLE_SNOW, rotate: -7,
        xPct: 30, yPct: 40,
        video: "/assets/4 Second Timer.mp4",
        description: "Les taches café au lait."
    },
    // 2. "taches" — flanc supérieur gauche de l'iceberg central
    {
        type: "sign", id: "taches-haut-g", label: "taches",
        signImg: STYLE_BARE, picto: PICTO_TACHES, rotate: -4,
        xPct: 39, yPct: 24,
        video: "/assets/4 Second Timer.mp4",
        description: "Les taches café au lait."
    },
    // 3. "taches" — centre de l'iceberg
    {
        type: "sign", id: "taches-centre", label: "taches",
        signImg: STYLE_BARE, rotate: 3,
        xPct: 47, yPct: 35,
        video: "/assets/4 Second Timer.mp4",
        description: "Les taches café au lait."
    },
    // 4. "neurofibromes" — sommet de l'iceberg central
    {
        type: "sign", id: "neurofibromes", label: "neurofibromes",
        signImg: STYLE_BARE, picto: PICTO_CORPS, rotate: 1,
        xPct: 53, yPct: 14,
        video: "/assets/4 Second Timer.mp4",
        description: "Les neurofibromes."
    },
    // 5. "Scoliose" — flanc droit de l'iceberg central
    {
        type: "sign", id: "scoliose-1", label: "Scoliose",
        signImg: STYLE_BARE, picto: PICTO_DIG, rotate: 4,
        xPct: 60, yPct: 30,
        video: "/assets/4 Second Timer.mp4",
        description: "La scoliose."
    },
    // 6. "taches" — bas droit de l'iceberg central
    {
        type: "sign", id: "taches-droite", label: "taches",
        signImg: STYLE_BARE, rotate: -2,
        xPct: 66, yPct: 40,
        video: "/assets/4 Second Timer.mp4",
        description: "Les taches."
    },
    // 7. "Scoliose" — petit iceberg de droite (gauche)
    {
        type: "sign", id: "scoliose-2", label: "Scoliose",
        signImg: STYLE_BARE, rotate: -5,
        xPct: 82, yPct: 34,
        video: "/assets/4 Second Timer.mp4",
        description: "Scoliose."
    },
    // 8. "Scoliose" — petit iceberg de droite (droite)
    {
        type: "sign", id: "scoliose-3", label: "Scoliose",
        signImg: STYLE_SNOW, rotate: 2,
        xPct: 89, yPct: 35,
        video: "/assets/4 Second Timer.mp4",
        description: "Scoliose."
    },

    // ═══════ BULLES (sous l'eau) ═════════════════════════════════════════

    // Groupe extrême gauche
    { type: "bubble", id: "b1", label: "troubles", size: "sm", xPct: 18, yPct: 65, video: "", description: "" },
    { type: "bubble", id: "b2", label: "troubles", size: "sm", xPct: 20, yPct: 76, video: "", description: "" },
    { type: "bubble", id: "b14", label: "troubles", size: "sm", xPct: 18, yPct: 86, video: "", description: "" },

    // Iceberg central — ligne haute
    { type: "bubble", id: "b3", label: "Ophtalmique", icon: "/assets/Groupe 7.png", size: "md", xPct: 41, yPct: 61, video: "", description: "" },
    { type: "bubble", id: "b4", label: "troubles", icon: "/assets/Groupe 6.png", size: "md", xPct: 58, yPct: 64, video: "", description: "" },
    // Centre
    { type: "bubble", id: "b5", label: "genetique", icon: "/assets/Groupe 5.png", size: "md", xPct: 48, yPct: 69, video: "", description: "" },
    // Ligne basse gauche
    { type: "bubble", id: "b6", label: "troubles", size: "sm", xPct: 34, yPct: 75, video: "", description: "" },
    { type: "bubble", id: "b7", label: "troubles", size: "sm", xPct: 42, yPct: 82, video: "", description: "" },
    // Ligne basse droite
    { type: "bubble", id: "b8", label: "troubles", size: "sm", xPct: 60, yPct: 78, video: "", description: "" },
    { type: "bubble", id: "b9", label: "troubles", size: "sm", xPct: 48, yPct: 90, video: "", description: "" },

    // Petit iceberg de droite
    { type: "bubble", id: "b10", label: "troubles", size: "sm", xPct: 80, yPct: 61, video: "", description: "" },
    { type: "bubble", id: "b11", label: "troubles", size: "sm", xPct: 87, yPct: 66, video: "", description: "" },
    { type: "bubble", id: "b12", label: "troubles", size: "sm", xPct: 93, yPct: 60, video: "", description: "" },
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
            <div className="ice-scene-wrapper">
                <img src="public/assets/page_off_iceberg.png" className="ice-bg-full" alt="Iceberg" draggable={false} />

                {items.map(item => {
                    if (item.type === "sign") {
                        return (
                            <button
                                key={item.id}
                                className="ice-sign"
                                style={{
                                    left: `${item.xPct}%`,
                                    top: `${item.yPct}%`,
                                    transform: `translate(-50%, -100%)`,
                                }}
                                onClick={() => setActive(item)}
                                aria-label={item.label}
                            >
                                <span className="ice-sign__label">{item.label}</span>

                                <div className="ice-sign__face">
                                    <div
                                        className="ice-sign__face"
                                        style={{ transform: `rotate(${item.rotate ?? 0}deg)` }}
                                    >
                                        <img src={item.signImg} className="ice-sign__base" alt="" draggable={false} />
                                    </div>

                                    {item.picto && (
                                        <img
                                            src={item.picto}
                                            className={`ice-sign__groundPicto ${item.picto.includes('IMG_0405') ? 'picto-taches' :
                                                item.picto.includes('corp') ? 'picto-corps' :
                                                    item.picto.includes('dig') ? 'picto-dig' : ''
                                                }`}
                                            alt=""
                                            draggable={false}
                                        />
                                    )}
                                </div>
                            </button>
                        )
                    } else {
                        return (
                            <button
                                key={item.id}
                                className={`ice-bubble ice-bubble--${item.size}`}
                                style={{
                                    left: `${item.xPct}%`,
                                    top: `${item.yPct}%`,
                                }}
                                onClick={() => setActive(item)}
                                aria-label={item.label}
                            >
                                {item.icon && <img src={item.icon} className="ice-bubble__icon" alt="" draggable={false} />}
                                <span className="ice-bubble__label">{item.label}</span>
                            </button>
                        )
                    }
                })}
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
