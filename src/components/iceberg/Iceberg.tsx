import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import "./style.css"

interface Symptom {
    id: string
    label: string
    icon?: string
    xPct: string
    yPct: string
    above: boolean
    video: string
    description: string
}

const symptoms: Symptom[] = [
    // ── AU-DESSUS (Panneaux en bois) ───────────────────────────
    {
        id: "taches-1", label: "taches", icon: "/assets/IMG_0405.PNG",
        xPct: "30%", yPct: "50%", above: true,
        video: "/assets/4 Second Timer.mp4", description: "Les taches café au lait sur la peau."
    },
    {
        id: "taches-2", label: "taches", icon: "/assets/IMG_0405.PNG",
        xPct: "37%", yPct: "30%", above: true,
        video: "/assets/4 Second Timer.mp4", description: "Les taches."
    },
    {
        id: "taches-3", label: "taches", icon: "/assets/IMG_0405.PNG",
        xPct: "45%", yPct: "43%", above: true,
        video: "/assets/4 Second Timer.mp4", description: "Les taches."
    },
    {
        id: "neurofibromes", label: "neurofibromes", icon: "/assets/IMG_0403.PNG",
        xPct: "51%", yPct: "26%", above: true,
        video: "/assets/4 Second Timer.mp4", description: "Tumeurs bénignes sur les nerfs."
    },
    {
        id: "scoliose-1", label: "Scoliose", icon: "/assets/IMG_0404.PNG",
        xPct: "58%", yPct: "42%", above: true,
        video: "/assets/4 Second Timer.mp4", description: "Déviation de la colonne vertébrale."
    },
    {
        id: "taches-4", label: "taches", icon: "/assets/IMG_0405.PNG",
        xPct: "65%", yPct: "52%", above: true,
        video: "/assets/4 Second Timer.mp4", description: "Les taches."
    },
    // Panneaux sur le 2e iceberg (à droite)
    {
        id: "scoliose-2", label: "Scoliose", icon: "/assets/IMG_0404.PNG",
        xPct: "81%", yPct: "52%", above: true,
        video: "/assets/4 Second Timer.mp4", description: "Déviation de la colonne vertébrale."
    },
    {
        id: "scoliose-3", label: "Scoliose", icon: "/assets/IMG_0404.PNG",
        xPct: "89%", yPct: "52%", above: true,
        video: "/assets/4 Second Timer.mp4", description: "Déviation de la colonne vertébrale."
    },

    // ── EN-DESSOUS (Bulles) ───────────────────────────────────
    // Côté bateau
    {
        id: "troubles-1", label: "troubles",
        xPct: "19%", yPct: "75%", above: false,
        video: "/assets/4 Second Timer.mp4", description: "Troubles cognitifs."
    },
    // Iceberg principal
    {
        id: "ophtalmique", label: "Ophtalmique", icon: "/assets/IMG_0408.PNG",
        xPct: "41%", yPct: "66%", above: false,
        video: "/assets/4 Second Timer.mp4", description: "Manifestations ophtalmiques."
    },
    {
        id: "genetique", label: "génétique", icon: "/assets/IMG_0407.PNG",
        xPct: "49%", yPct: "73%", above: false,
        video: "/assets/4 Second Timer.mp4", description: "L'origine génétique de la maladie."
    },
    {
        id: "troubles-2", label: "troubles", icon: "/assets/IMG_0406.PNG",
        xPct: "58%", yPct: "68%", above: false,
        video: "/assets/4 Second Timer.mp4", description: "Troubles d'apprentissage."
    },
    // Petites bulles 'troubles'
    { id: "troubles-3", label: "troubles", xPct: "34%", yPct: "80%", above: false, video: "/assets/4 Second Timer.mp4", description: "Troubles." },
    { id: "troubles-4", label: "troubles", xPct: "42%", yPct: "85%", above: false, video: "/assets/4 Second Timer.mp4", description: "Troubles." },
    { id: "troubles-5", label: "troubles", xPct: "53%", yPct: "88%", above: false, video: "/assets/4 Second Timer.mp4", description: "Troubles." },
    { id: "troubles-6", label: "troubles", xPct: "61%", yPct: "80%", above: false, video: "/assets/4 Second Timer.mp4", description: "Troubles." },
    { id: "troubles-7", label: "troubles", xPct: "48%", yPct: "95%", above: false, video: "/assets/4 Second Timer.mp4", description: "Troubles." },
    // Côté iceberg droit
    { id: "troubles-8", label: "troubles", xPct: "80%", yPct: "68%", above: false, video: "/assets/4 Second Timer.mp4", description: "Troubles." },
    { id: "troubles-9", label: "troubles", xPct: "88%", yPct: "71%", above: false, video: "/assets/4 Second Timer.mp4", description: "Troubles." },
    { id: "troubles-10", label: "troubles", xPct: "94%", yPct: "68%", above: false, video: "/assets/4 Second Timer.mp4", description: "Troubles." },
]

export default function Iceberg() {
    const navigate = useNavigate()
    const [active, setActive] = useState<Symptom | null>(null)
    const [isClosing, setIsClosing] = useState(false)
    const closeModal = useCallback(() => setActive(null), [])

    const handleVideoEnd = () => {
        setIsClosing(true)
        setTimeout(() => {
            setActive(null)
            setIsClosing(false)
        }, 800)
    }

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal() }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [closeModal])

    const above = symptoms.filter(s => s.above)
    const below = symptoms.filter(s => !s.above)

    return (
        <div className="ice-page">
            <button className="ice-back" onClick={() => navigate("/")} aria-label="Retour à l'accueil">
                ← Accueil
            </button>

            <div className="ice-scene-wrapper">
                {/* ── Fond complet (tient 100% de la largeur) ── */}
                <img src="/assets/fond_vf.jpg" className="ice-bg-full" alt="Fond" draggable={false} />

                {/* ── Iceberg principal complet (ice_page_icebe.png) ── */}
                <img src="/assets/ice_page_icebe.png" className="ice-main" alt="Iceberg Principal" draggable={false} />

                {/* ── Bateau coupée à gauche ── */}
                <img src="/assets/bateau_iceburge.png" className="ice-boat" alt="Bateau" draggable={false} />

                {/* ── 2e Iceberg à droite ── */}
                <img src="/assets/element_iceburg2.png" className="ice-iceberg2" alt="Iceberg 2" draggable={false} />

                {/* ── Baleine ── */}
                <img src="/assets/bon_balaine.png" className="ice-whale" alt="Baleine" draggable={false} />

                {/* ── Superposition eau (mer transparente IMG_0394) ── */}
                {/* On la met ici pour qu'elle passe DEVANT le bas de l'iceberg principal */}
                <img src="/assets/IMG_0394.PNG" className="ice-water-layer" alt="Eau" draggable={false} />

                {/* ── Eau profonde (remplit tout le bas) ── */}
                <div className="ice-deep-water"></div>

                {/* ── Pictos Au-dessus ── */}
                {above.map(s => (
                    <button
                        key={s.id}
                        className="ice-picto ice-picto--above"
                        style={{ left: s.xPct, top: s.yPct }}
                        onClick={() => setActive(s)}
                    >
                        <div className="ice-sign">
                            <img src="/assets/Illustration_sans_titre.png" className="ice-sign__board" alt="" draggable={false} />
                            {s.icon && <img src={s.icon} className="ice-sign__icon" alt="" draggable={false} />}
                        </div>
                        <span className="ice-picto__label">{s.label}</span>
                    </button>
                ))}

                {/* ── Pictos En-dessous (bulles CSS) ── */}
                {below.map(s => (
                    <button
                        key={s.id}
                        className="ice-picto ice-picto--below"
                        style={{ left: s.xPct, top: s.yPct }}
                        onClick={() => setActive(s)}
                    >
                        <div className={`ice-bubble ${s.icon ? 'ice-bubble--main' : 'ice-bubble--small'}`}>
                            {s.icon && <img src={s.icon} className="ice-bubble__icon" alt="" draggable={false} />}
                        </div>
                        <span className="ice-picto__label ice-picto__label--below">{s.label}</span>
                    </button>
                ))}
            </div>

            {/* ── Modale vidéo ── */}
            {active && (
                <div className={`ice-modal ${isClosing ? 'ice-modal--closing' : ''}`} role="dialog" aria-modal="true">
                    <div className="ice-modal__backdrop" onClick={closeModal} />
                    <div className="ice-modal__box">
                        <button className="ice-modal__close" onClick={closeModal} aria-label="Fermer">✕</button>
                        <div className="ice-modal__header">
                            {active.icon && <img src={active.icon} className="ice-modal__hero" alt="" draggable={false} />}
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
