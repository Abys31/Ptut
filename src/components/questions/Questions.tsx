import { useState, useRef, useEffect } from "react"
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

    // Référence pour l'audio afin d'éviter les superpositions
    const audioRef = useRef<HTMLAudioElement | null>(null)

    // Nettoyage de l'audio quand on quitte la page
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.currentTime = 0
                audioRef.current = null
            }
        }
    }, [])

    /* Chaque bulle joue un audio avec sécurité anti-double clic */
    const handleBubbleClick = () => {
        // Si un audio est déjà en cours de lecture, on ignore le clic
        if (audioRef.current && !audioRef.current.paused) {
            return
        }

        // Sinon, on lance (ou relance) l'audio
        if (!audioRef.current) {
            audioRef.current = new Audio("/assets/QR1-Taches_v2.mp3")
        }
        audioRef.current.play().catch(err => console.error("Erreur lecture audio:", err))
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
            {/* ── Fond flouté pour le remplissage ── */}
            <div className="quest-bg-blur" style={{ backgroundImage: 'url("/assets/2.jpg")' }}></div>

            <div className="quest-scene-wrapper">
                {/* ── Image de fond principale ── */}
                <img src="/assets/2.jpg" className="quest-main-bg" alt="" draggable={false} />

                {/* ── Capitaine assis sur son petit iceberg (centre) ── */}
                {/* Note : Le capitaine est déjà intégré dans l'image question_vv.jpg, 
                    on garde l'élément au cas où mais on peut le masquer s'il fait doublon */}
                {/* <div className="quest-centerpiece">
                    <img src="/assets/captonice.png" className="quest-capitaine" alt="Capitaine" draggable={false} />
                </div> */}

                {/* ── 7 bulles de personnages en arc de cercle ── */}
                {heads.map((h, i) => (
                    <button
                        key={h.id}
                        className={`quest-bubble-btn pos-${i + 1}`}
                        onClick={() => handleBubbleClick()}
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
                    <div className="quest-bubble-label">Une Question</div>
                </button>
            </div>

            {/* ── Modal pour poser une question ── */}
            {
                showQuestionModal && (
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
                )
            }
        </div >
    )
}
