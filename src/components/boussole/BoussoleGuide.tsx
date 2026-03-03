import { Link } from "react-router-dom"
import "./style.css"

export default function BoussoleGuide() {
    return (
        <div className="bguide">
            {/* ========================= HERO ========================= */}
            <header className="bg-hero">
                <Link className="bg-hero__back" to="/" aria-label="Retour à la page interactive">
                    ← Retour à la page interactive
                </Link>
                <img src="/assets/fond complet.JPG" className="bg-hero__banner" alt="CapitNF1 — Guide" />
                <div className="bg-hero__overlay">
                    <img src="/assets/title.PNG" className="bg-hero__title" alt="CapitNF1" />
                    <p className="bg-hero__hint">🌊 Découvre comment naviguer sur le site ! 🧭</p>
                </div>
            </header>

            {/* ========================= LA BOUSSOLE ========================= */}
            <section className="bg-section">
                <div className="bg-card bg-card--with-icon">
                    <img src="/assets/boussole.png" className="bg-card__icon" alt="" />
                    <h2>🧭 La Boussole <button className="bg-speaker" title="Écouter le texte">🔊</button></h2>
                    <p>Coucou petit explorateur 🌟</p>
                    <p>Moi, je suis la boussole 🧭 ! Je t'aide à comprendre comment utiliser ce site 💻.</p>
                    <p>Chaque dessin que tu vois est une porte 🚪 vers quelque chose d'important. Clique dessus pour découvrir des vidéos 🎬, des explications 📖 ou poser tes questions ❓.</p>
                    <p>Je suis là pour te guider pendant toute ton aventure ❤️ !</p>
                </div>

                <div className="bg-card bg-menu-card">
                    <h3>📋 Ce que tu peux découvrir :</h3>
                    <ul className="bg-menu-list">
                        <li>Est-ce que j'ai le droit de choisir ✅</li>
                        <li>Est-ce que j'ai le droit de savoir 🤔</li>
                        <li>Qui sont les médecins qui me soignent 👨‍⚕️</li>
                        <li>Où vont mes données de santé 🔐</li>
                        <li>Livre ou vidéo 📚🎥</li>
                        <li>Contacter un adulte 👩‍👧</li>
                        <li>Poser des questions ❓</li>
                        <li>D'autres supports 📂</li>
                        <li>Différence 🌈</li>
                    </ul>
                </div>
            </section>

            {/* ========================= LE CAPITAINE ========================= */}
            <section className="bg-section bg-section--alt">
                <div className="bg-card bg-card--with-icon">
                    <img src="/assets/IMG_0399.PNG" className="bg-card__icon bg-card__icon--xlarge" alt="" />
                    <h2>👨‍✈️ Le Capitaine <button className="bg-speaker" title="Écouter le texte">🔊</button></h2>
                    <p>Bonjour ! Je suis CapitNF1 🧑‍✈️ !</p>
                    <p>Ici, je réponds à toutes les questions que se posent les enfants 🧒💬.</p>
                    <p>Si tu cliques sur une bulle 🫧, tu peux écouter la question d'un enfant et ma réponse 🎧.</p>
                    <p>Et tu peux aussi enregistrer ta question 🎙️. J'essayerai d'y répondre vite ⚡ !</p>
                </div>
            </section>

            {/* ========================= LE BATEAU ========================= */}
            <section className="bg-section">
                <div className="bg-card bg-card--with-icon">
                    <img src="/assets/bateau_vf.png" className="bg-card__icon bg-card__icon--xlarge" alt="" />
                    <h2>⛵ Le Bateau <button className="bg-speaker" title="Écouter le texte">🔊</button></h2>
                    <p>La NF1 est une maladie qui restera avec toi toute ta vie 🌍. Cela veut dire qu'elle fait partie de ton voyage, et que tu dois apprendre à vivre avec 💪.</p>
                    <p>Ce bateau représente ton voyage ⛵🌊 !</p>
                    <p>Si tu cliques dessus, tu pourras regarder une vidéo 🎬 de deux médecins 👨‍⚕️👩‍⚕️ qui t'expliquent la NF1.</p>
                    <p>Les médecins et les adultes autour de toi sont là pour t'accompagner et t'aider à avancer en toute confiance 🤝, ne l'oublie jamais !</p>
                </div>
            </section>

            {/* ========================= L'ICEBERG ========================= */}
            <section className="bg-section bg-section--alt">
                <div className="bg-card bg-card--with-icon">
                    <img src="/assets/IMG_0412.PNG" className="bg-card__icon bg-card__icon--xlarge" alt="" />
                    <h2>🧊 L'Iceberg <button className="bg-speaker" title="Écouter le texte">🔊</button></h2>
                    <p>Cet iceberg représente ta NF1 🧊. Dans ta NF1, il y a des choses qui se voient 👀 et des choses qui ne se voient pas 🙈.</p>
                    <p>Comme dans un iceberg où on voit seulement un bout ☝️ (au-dessus de l'eau 🌊) et où on ne voit pas un autre bout (en dessous de l'eau 🤿).</p>
                    <p>Tous les symptômes de la NF1 sont répartis sur cet iceberg et représentés par des pictos 🖼️. Les pictos au-dessus de l'eau représentent les symptômes que tu vois et les pictos en dessous de l'eau représentent les symptômes que tu ne vois pas.</p>
                    <p>Si tu cliques sur un picto, tu auras accès à une vidéo 🎬 qui t'explique ce symptôme avec des mots simples !</p>
                </div>
            </section>

            {/* ========================= PLUS D'INFO ========================= */}
            <section className="bg-section">
                <div className="bg-card bg-card--with-icon">
                    <img src="/assets/info_vf.png" className="bg-card__icon bg-card__icon--large" alt="" />
                    <h2>🪧 Plus d'Info <button className="bg-speaker" title="Écouter le texte">🔊</button></h2>
                    <p>Tu veux en savoir encore plus ? 🤩</p>
                    <p>Ici, tu trouveras des informations 📝 sur toutes les personnes qui travaillent à faire vivre CapitNF1.</p>
                    <p>Il y a aussi d'autres vidéos 🎥, et pleins de liens vers des livres 📚 et d'autres ressources pour en apprendre encore plus sur la NF1.</p>
                    <p>Tu peux les regarder seul(e) ou avec un adulte 👨‍👧‍👦.</p>
                </div>
            </section>

            {/* ========================= FOOTER ========================= */}
            <footer className="bg-footer">
                <p>© CAPITNF1 — Guide du site ⚓</p>
            </footer>
        </div>
    )
}
