import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Player from "@vimeo/player"

export default function Bateau() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const iframeRef = useRef<HTMLIFrameElement | null>(null)
    const playerRef = useRef<Player | null>(null)

    const handleNav = (path: string) => {
        handleClose(() => navigate(path))
    }

    const handleClose = (callback?: () => void) => {
        setIsClosing(true)
        setTimeout(() => {
            setShow(false)
            setIsClosing(false)
            if (callback) callback()
        }, 400) // Durée de l'animation CSS
    }

    const open = () => {
        setShow(true)
        setIsClosing(false)
    }

    // Initialize Vimeo Player and auto-close on end
    useEffect(() => {
        if (show && iframeRef.current && !playerRef.current) {
            playerRef.current = new Player(iframeRef.current)

            playerRef.current.on('ended', () => {
                handleClose()
            })

            playerRef.current.play().catch(console.error)
        }

        // Cleanup on unmount or hide
        return () => {
            if (!show && playerRef.current) {
                playerRef.current.destroy()
                playerRef.current = null
            }
        }
    }, [show, isClosing])

    // Close on ESC
    useEffect(() => {
        if (!show || isClosing) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose()
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [show, isClosing])

    return (
        <>
            <button
                type="button"
                className="home-hotspot home-hotspot--bateau"
                onClick={open}
                aria-label="Ouvrir la vidéo du bateau"
            />

            {show && (
                <div className={`modal ${isClosing ? 'modal--closing' : ''}`} role="dialog" aria-modal="true" aria-label="Vidéo Bateau">
                    <button className="global-home-btn bateaudelay" onClick={() => handleNav('/')} style={{ zIndex: 10001, position: 'absolute' }}>🏠</button>
                    <button className="global-boussole bateaudelay" onClick={() => handleNav('/boussole')} style={{ zIndex: 10001, position: 'absolute' }}>
                        <img src="/assets/boussole new.png" alt="Boussole" draggable={false} />
                    </button>
                    <div className="modal__backdrop" onClick={() => handleClose()} />
                    <div
                        className="modal__content modal__content--bateau"
                        style={{
                            width: 'auto',
                            height: 'min(85vh, 800px)',
                            aspectRatio: '9 / 16',
                            maxWidth: '90vw',
                            /* S'assurer que ça ne dépasse jamais l'écran en hauteur non plus */
                            margin: 'auto',
                            display: 'flex',
                        }}
                    >
                        <button className="modal__close" type="button" onClick={() => handleClose()} aria-label="Fermer">
                            ✕
                        </button>
                        <iframe
                            ref={iframeRef}
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
