import { useEffect, useRef, useState } from "react"

export default function Longuevue() {
    const [show, setShow] = useState(false)
    const [stage, setStage] = useState<"video" | "photo">("video")
    const videoRef = useRef<HTMLVideoElement | null>(null)

    // Reset to video and autoplay when opening
    useEffect(() => {
        if (!show) return
        setStage("video")

        requestAnimationFrame(() => {
            const v = videoRef.current
            if (!v) return
            v.currentTime = 0
            v.play().catch(() => { })
        })
    }, [show])

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
                className="obj obj--longuevue objBtn"
                onClick={() => setShow(true)}
                aria-label="Ouvrir la longuevue"
            >
                <img src="/assets/longuevue.png" alt="" />
            </button>

            {show && (
                <div className="modal" role="dialog" aria-modal="true" aria-label="Longuevue">
                    <div className="modal__backdrop" onClick={() => setShow(false)} />
                    <div className="modal__content">
                        <button className="modal__close" type="button" onClick={() => setShow(false)} aria-label="Fermer">
                            ✕
                        </button>

                        {stage === "video" ? (
                            <video
                                ref={videoRef}
                                className="modal__media"
                                src="/assets/4 Second Timer.mp4"
                                playsInline
                                muted
                                controls
                                onEnded={() => setStage("photo")}
                            />
                        ) : (
                            <img
                                className="modal__media"
                                src="/assets/BG.png"
                                alt="Image après la vidéo"
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
