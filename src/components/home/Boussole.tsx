interface BoussoleProps {
    onClick?: () => void;
}

export default function Boussole({ onClick }: BoussoleProps) {
    return (
        <a className="obj obj--boussole" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src="/assets/boussole new.png" alt="" />
        </a>
    )
}
