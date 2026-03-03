interface CapitaineProps {
    onClick?: () => void;
}

export default function Capitaine({ onClick }: CapitaineProps) {
    return (
        <a className="obj obj--capitaine" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src="/assets/captn_ice.png" alt="" />
        </a>
    )
}
