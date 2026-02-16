import { Link } from "react-router-dom"

export default function PlusInfo() {
    return (
        <Link className="obj obj--plusinfo" to="/informations">
            <img src="/assets/info.png" alt="" />
        </Link>
    )
}
