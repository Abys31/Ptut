import { useState } from "react"
import "./style.css"

/* ── Données des personnages (bulles) ── */
const heads = [
    { id: "h1", img: "/assets/head_1.png", alt: "Personnage 1" },
    { id: "h2", img: "/assets/head_2.png", alt: "Personnage 2" },
    { id: "h3", img: "/assets/head_3.png", alt: "Personnage 3" },
    { id: "h4", img: "/assets/head_4.png", alt: "Personnage 4" },
    { id: "h5", img: "/assets/head_5.png", alt: "Personnage 5" },
    { id: "h6", img: "/assets/head_6.png", alt: "Personnage 6" },
    { id: "h7", img: "/assets/head_7.png", alt: "Personnage 7" },
]

export default function Questions() {
    const [showQuestionModal, setShowQuestionModal] = useState(false)
    const [questionText, setQuestionText] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleBubbleClick = (id: string) => {
        console.log(`Bulle ${id} cliquée — audio à intégrer plus tard`)
    }

    const handleQuestionSubmit = async () => {
        if (questionText.trim()) {
            try {
                await fetch('http://localhost:3001/api/questions', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question: questionText.trim() })
                })
                setSubmitted(true)
                setTimeout(() => {
                    setShowQuestionModal(false)
                    setSubmitted(false)
                    setQuestionText("")
                }, 2000)
            } catch (err) {
                console.error("Erreur envoi question:", err)
                setSubmitted(true)
                setTimeout(() => {
                    setShowQuestionModal(false)
                    setSubmitted(false)
                    setQuestionText("")
                }, 2000)
            }
        }
    }

    return (
        <div className="quest-page">

            <div className="quest-scene-wrapper">
                {/* ── Fond : dégradé ciel ── */}
                <div className="quest-sky"></div>

                {/* ── Fond eau vibrant : ocean de base + caustiques ── */}
                <div className="quest-ocean">
                    {/* Light caustic rays underwater */}
                    <div className="quest-caustics">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="caustic-ray" />
                        ))}
                    </div>
                </div>

                {/* ── SVG Wave Layer 1 — large slow wave, vivid cyan ── */}
                <svg
                    className="quest-waves quest-wave-1"
                    viewBox="0 0 1800 80"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.9" />
                        </linearGradient>
                    </defs>
                    <path className="wave-path-1"
                        d="M0,40 C200,0 400,80 600,40 C800,0 1000,80 1200,40 C1400,0 1600,80 1800,40 L1800,80 L0,80 Z"
                        fill="url(#waveGrad1)"
                    />
                </svg>

                {/* ── SVG Wave Layer 2 — medium turquoise ── */}
                <svg
                    className="quest-waves quest-wave-2"
                    viewBox="0 0 1800 60"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>
                    <path className="wave-path-2"
                        d="M0,30 C150,55 350,5 550,30 C750,55 950,5 1150,30 C1350,55 1550,5 1800,30 L1800,60 L0,60 Z"
                        fill="url(#waveGrad2)"
                    />
                </svg>

                {/* ── SVG Wave Layer 3 — small bright foam crest ── */}
                <svg
                    className="quest-waves quest-wave-3"
                    viewBox="0 0 1800 45"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#e0f7ff" stopOpacity="0.95" />
                            <stop offset="40%" stopColor="#7dd3fc" stopOpacity="0.85" />
                            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.7" />
                        </linearGradient>
                    </defs>
                    <path className="wave-path-3"
                        d="M0,20 C120,40 280,0 440,20 C600,40 760,0 920,20 C1080,40 1240,0 1400,20 C1560,40 1700,5 1800,20 L1800,45 L0,45 Z"
                        fill="url(#waveGrad3)"
                    />
                </svg>

                {/* ── Foam sparkle dots on the wave crest ── */}
                <div className="quest-foam">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="foam-dot" />
                    ))}
                </div>

                {/* ── Image de fond originale (transparente sur l'eau) ── */}
                <img src="/assets/quest.jpeg" className="quest-water-layer" alt="Eau" draggable={false} />

                {/* ── Capitaine assis sur son petit iceberg (centre) ── */}
                <div className="quest-centerpiece">
                    <img src="/assets/captonice.png" className="quest-capitaine" alt="Capitaine" draggable={false} />
                </div>

                {/* ── 7 bulles de personnages en arc de cercle ── */}
                {heads.map((h, i) => (
                    <button
                        key={h.id}
                        className={`quest-bubble-btn pos-${i + 1}`}
                        onClick={() => handleBubbleClick(h.id)}
                    >
                        <div className="quest-bubble">
                            <img src={h.img} alt={h.alt} className="quest-face-img" draggable={false} />
                        </div>
                    </button>
                ))}

                {/* ── Bulle Géante "Une Question ?" ── */}
                <button className="quest-bubble-btn pos-question" onClick={() => setShowQuestionModal(true)}>
                    <div className="quest-bubble quest-bubble--big">
                        <span className="quest-question-mark">?</span>
                    </div>
                    <span className="quest-question-text">Une Question ?</span>
                </button>
            </div>

            {/* ── Modal pour poser une question ── */}
            {showQuestionModal && (
                <div className="quest-modal-overlay" onClick={() => setShowQuestionModal(false)}>
                    <div className="quest-modal" onClick={e => e.stopPropagation()}>
                        <button className="quest-modal-close" onClick={() => setShowQuestionModal(false)}>✕</button>
                        <h2 className="quest-modal-title">Pose ta question !</h2>
                        {!submitted ? (
                            <>
                                <textarea
                                    className="quest-modal-input"
                                    placeholder="Écris ta question ici..."
                                    value={questionText}
                                    onChange={e => setQuestionText(e.target.value)}
                                    rows={4}
                                />
                                <button
                                    className="quest-modal-submit"
                                    onClick={handleQuestionSubmit}
                                    disabled={!questionText.trim()}
                                >
                                    Envoyer
                                </button>
                            </>
                        ) : (
                            <div className="quest-modal-success">
                                ✅ Merci ! Ta question a bien été envoyée.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}