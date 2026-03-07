interface BoussoleProps {
    onClick?: () => void;
}

export default function Boussole({ onClick }: BoussoleProps) {
    return (
        <a className="home-hotspot home-hotspot--boussole" onClick={onClick} style={{ cursor: 'pointer' }} aria-label="Ouvrir la boussole" />
    )
}
