interface CapitaineProps {
    onClick?: () => void;
}

export default function Capitaine({ onClick }: CapitaineProps) {
    return (
        <a className="home-hotspot home-hotspot--capitaine" onClick={onClick} style={{ cursor: 'pointer' }} aria-label="Capitaine" />
    )
}
