import { useEffect, useRef, useState } from "react"

export default function Bateau() {
    const [show, setShow] = useState(false)
    const bateauVideoRef = useRef<HTMLVideoElement | null>(null)

    const open = () => {
        setShow(true)
        requestAnimationFrame(() => {
            const v = bateauVideoRef.current
            if (!v) return
            v.currentTime = 0
            v.play().catch(() => { })
        })
    }

    // Close on ESC
    useEffect(() => {
        if (!show) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setShow(false)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [show])

    return (
        <>
            <button
                type="button"
                className="obj obj--bateau objBtn"
                onClick={open}
                aria-label="Ouvrir la vidéo du bateau"
            >
                <img src="/assets/bateau.png" alt="" />
            </button>

            {show && (
                <div className="modal" role="dialog" aria-modal="true" aria-label="Vidéo Bateau">
                    <div className="modal__backdrop" onClick={() => setShow(false)} />
                    <div
                        className="modal__content"
                        style={{
                            width: 'auto',
                            height: 'min(85vh, 700px)',
                            aspectRatio: '9 / 16',
                            maxWidth: '94vw',
                        }}
                    >
                        <button className="modal__close" type="button" onClick={() => setShow(false)} aria-label="Fermer">
                            ✕
                        </button>
                        <iframe
                            className="modal__media"
                            src="https://player.vimeo.com/video/1164332877?autoplay=1&title=0&byline=0&portrait=0"
                            style={{ border: 0, width: '100%', height: '100%' }}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Vidéo du médecin — Professeur Ivechek"
                        />
                    </div>
                </div>
            )}
        </>
    )
}
