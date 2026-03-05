import { useNavigate } from "react-router-dom"
import "./style.css"
import { useState } from "react"

type Head = {
  id: string
  src: string
  left: number
  top: number
  size: number
  isQuestion?: boolean
  aria: string
  delay: number
}

const HEADS: Head[] = [
  { id: "head_7", src: "/assets/head_7.png", left: 50.6, top: 14.3, size: 9.2, aria: "Personnage 7", delay: 1.0 },
  { id: "head_6", src: "/assets/head_6.png", left: 36.8, top: 21.4, size: 9.2, aria: "Personnage 6", delay: 1.2 },
  { id: "head_5", src: "/assets/head_5.png", left: 64.9, top: 21.4, size: 9.2, aria: "Personnage 5", delay: 1.4 },
  { id: "head_2", src: "/assets/head_2.png", left: 27.6, top: 38.4, size: 9.2, aria: "Personnage 2", delay: 1.6 },
  { id: "head_4", src: "/assets/head_4.png", left: 72.8, top: 38.9, size: 9.2, aria: "Personnage 4", delay: 1.8 },
  { id: "head_3", src: "/assets/head_3.png", left: 23.7, top: 61.1, size: 9.2, aria: "Personnage 3", delay: 2.0 },
  { id: "head_1", src: "/assets/head_1.png", left: 75.7, top: 61.6, size: 9.2, aria: "Personnage 1", delay: 2.2 },
  { id: "head_8", src: "/assets/head_8.png", left: 83.0, top: 17.9, size: 11.0, isQuestion: true, aria: "Une question ?", delay: 2.4 },
]

export default function Questions() {
  const navigate = useNavigate()

  const [questionText, setQuestionText]       = useState("")
  const [submitted, setSubmitted]             = useState(false)
  const [showQuestionModal, setShowQuestionModal] = useState(false)
  const [isSending, setIsSending]             = useState(false)

  const onSelect = (id: string) => {
    if (id === "head_8") {
      setShowQuestionModal(true)
    } else {
      console.log("click:", id)
    }
  }

  const handleQuestionSubmit = async () => {
    if (!questionText.trim() || isSending) return
    setIsSending(true)
    try {
      await fetch("http://localhost:3001/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: questionText.trim() }),
      })
    } catch (err) {
      console.error("Erreur envoi question:", err)
    } finally {
      setIsSending(false)
      setSubmitted(true)
      setTimeout(() => {
        setShowQuestionModal(false)
        setSubmitted(false)
        setQuestionText("")
      }, 2500)
    }
  }

  const closeModal = () => {
    if (isSending) return
    setShowQuestionModal(false)
    setSubmitted(false)
    setQuestionText("")
  }

  return (
    <div className="quest-page">

      <button
        className="quest-back"
        onClick={() => navigate("/")}
        aria-label="Retour à l'accueil"
      >
        ← Accueil
      </button>

      <section className="quest-stage" aria-label="Questions scene">

        <img className="quest-bg quest-anim-bg" src="/assets/bg-new.png" alt="" draggable={false} />

        <div className="quest-sea" aria-hidden="true">
          <div className="quest-sea__wave quest-sea__wave--1" />
          <div className="quest-sea__wave quest-sea__wave--2" />
          <div className="quest-sea__wave quest-sea__wave--3" />
        </div>

        <img
          className="quest-captain quest-anim-captain"
          src="/assets/captonice.png"
          alt="Capitaine"
          draggable={false}
        />

        <div className="quest-bubbles-layer">
          {HEADS.map((h) => (
            <button
              key={h.id}
              type="button"
              className={`quest-bubble quest-anim-bubble${h.isQuestion ? " quest-bubble--question" : ""}`}
              style={{
                left:           `${h.left}%`,
                top:            `${h.top}%`,
                width:          `${h.size}%`,
                animationDelay: `${h.delay}s`,
              }}
              onClick={() => onSelect(h.id)}
              aria-label={h.aria}
            >
              <img src={h.src} alt="" draggable={false} />
            </button>
          ))}

          <p className="quest-label quest-anim-label" aria-hidden="true">
            Une Question&nbsp;?
          </p>
        </div>

      </section>

      {/* ── Question Modal ── */}
      {showQuestionModal && (
        <div
          className="qmodal-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
          role="dialog"
          aria-modal="true"
          aria-label="Poser une question"
        >
          <div className="qmodal">

            {/* Close */}
            <button className="qmodal__close" onClick={closeModal} aria-label="Fermer">
              ✕
            </button>

            {/* Captain avatar */}
            <img
              className="qmodal__avatar"
              src="/assets/captonice.png"
              alt="Capitaine"
              draggable={false}
            />

            {submitted ? (
              /* ── Success state ── */
              <div className="qmodal__success">
                <div className="qmodal__success-icon">🎉</div>
                <h2 className="qmodal__title">Merci !</h2>
                <p className="qmodal__subtitle">
                  Ta question a bien été envoyée.<br />
                  Le Capitaine va y répondre très vite&nbsp;⚡
                </p>
              </div>
            ) : (
              /* ── Form state ── */
              <>
                <h2 className="qmodal__title">Pose ta question&nbsp;! 🤔</h2>
                <p className="qmodal__subtitle">
                  Le Capitaine te répondra dès que possible&nbsp;🧭
                </p>

                <div className="qmodal__field">
                  <label className="qmodal__label" htmlFor="qmodal-input">
                    Ta question :
                  </label>
                  <textarea
                    id="qmodal-input"
                    className="qmodal__textarea"
                    placeholder="Écris ta question ici…"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    rows={4}
                    maxLength={500}
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) handleQuestionSubmit()
                    }}
                  />
                  <span className="qmodal__counter">
                    {questionText.length}&nbsp;/ 500
                  </span>
                </div>

                <button
                  className="qmodal__submit"
                  onClick={handleQuestionSubmit}
                  disabled={!questionText.trim() || isSending}
                >
                  {isSending ? (
                    <span className="qmodal__spinner" />
                  ) : (
                    <>Envoyer ma question&nbsp;🚀</>
                  )}
                </button>

                <p className="qmodal__hint">
                  Ctrl&nbsp;+&nbsp;Entrée pour envoyer
                </p>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  )
}