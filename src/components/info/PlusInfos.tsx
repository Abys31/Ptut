import { Link } from "react-router-dom"
import "./style.css"

export default function PlusInfos() {
  return (
    <div className="plusinfos">
      {/* ========================= HERO ========================= */}
      <header className="pi-hero">
        <Link className="pi-hero__back" to="/" aria-label="Retour à la page interactive">
          ← Retour à la page interactive
        </Link>
        <img src="/assets/ice_b.png" className="pi-hero__banner" alt="CapitNF1 — Plus d'Info" />
      </header>

      {/* ========================= LE PROJET ========================= */}
      <section className="pi-section pi-projet">
        <div className="pi-card">
          <h2>Le projet</h2>
          <p>
            CapitNF1 est un projet dont l'idée a germé courant 2025. Il s'agit de répondre à un besoin
            d'information de l'enfant atteint de NF1 mais aussi de ses pairs (sa fratrie, ses camarades
            de classe) en expliquant de façon ludique et adaptée la maladie, les symptômes et le parcours
            de soin fréquemment proposé à l'enfant.
          </p>
          <p>
            Nous avons souhaité concevoir un outil disponible et accessible facilement à tous et toutes
            et l'interface numérique s'est rapidement imposée à nous.
          </p>
          <p>
            Ce dispositif éducatif numérique s'articule autour d'un personnage principal, <strong>CapitNF1</strong>{" "}
            (Cap vers l'itinéraire de ma NF1), un petit capitaine atteint de NF1, personnage animé non genré
            pour permettre l'identification de tous les enfants, via une image valorisante de capitaine qui
            largue les amarres dans la découverte autonome de sa maladie.
          </p>
          <p>
            La prise en main de l'interface est simplifiée pour permettre à l'enfant de naviguer seul et de
            façon autonome sur toutes nos propositions de supports.
          </p>
        </div>
      </section>

      {/* ========================= QUI SOMMES-NOUS ========================= */}
      <section className="pi-section pi-team">
        <h2>Qui sommes-nous</h2>
        <div className="pi-card pi-team__intro">
          <p>
            Le contenu des supports a été créé par l'équipe du <strong>CERENEF-Ped</strong>, centre de référence
            des neurofibromatoses France pédiatrique du CHU de Toulouse. Un centre de référence est un centre reconnu
            expert dans la pathologie. Il en existe plusieurs en France.
          </p>
          <p>
            À Toulouse, il est composé d'une équipe pluriprofessionnelle incluant des médecins (neuropédiatres),
            d'une psychologue et d'une neuropsychologue, d'une assistante sociale, d'une secrétaire médicale
            et de personnels de recherche. Les membres de cette équipe sont formés et ont des compétences
            spécifiques dans la NF1 qui leur permettent de coordonner les actrices et acteurs de « seconde ligne »
            disponibles selon les cas pour assurer à l'enfant un parcours de soins personnalisé (ophtalmologues,
            endocrinologues, orthopédistes, neuro-oncologues, généticiens, dermatologues…).
          </p>
          <p>
            Tous ces acteurs ont participé à la création des supports de CapitNF1. Le contenu proposé à l'enfant
            est donc rigoureux, complet, adapté et réalisé par des professionnels experts et compétents qui
            travaillent tous les jours au contact des enfants atteints de NF1.
          </p>
        </div>

        {/* Profils */}
        <div className="pi-profiles">
          <div className="pi-profile">
            <div className="pi-profile__photo" aria-hidden="true" />
            <div className="pi-profile__info">
              <h3>Maëlle Biotteau</h3>
              <p>
                Co-commanditaire du projet CAPITNF1 — chercheuse au sein du laboratoire ToNIC (Toulouse NeuroImaging Center)
                de l'INSERM, spécialisée dans la prise en charge de l'enfant atteint de Neurofibromatose de type 1.
              </p>
            </div>
          </div>

          <div className="pi-profile">
            <div className="pi-profile__photo" aria-hidden="true" />
            <div className="pi-profile__info">
              <h3>Baptiste Vignaud</h3>
              <p>
                Co-commanditaire du projet CAPITNF1 — développeur web freelance.
                Texte de présentation complet à venir.
              </p>
            </div>
          </div>

          <div className="pi-profile">
            <div className="pi-profile__photo" aria-hidden="true" />
            <div className="pi-profile__info">
              <h3>Maxime Moser</h3>
              <p>
                Designer en charge de la charte graphique et des éléments visuels du projet CAPITNF1
                (pictogrammes, illustrations, identité visuelle).
              </p>
            </div>
          </div>
        </div>

        {/* École ISIS */}
        <div className="pi-card" style={{ marginTop: '24px' }}>
          <h3>École ISIS — Ingénierie des Systèmes d'Information en Santé</h3>
          <p>
            Le développement technique de l'interface CapitNF1 a été réalisé dans le cadre d'un projet
            tutoré par des étudiants de l'école ISIS à Castres (promotion 2027), sous la tutelle d'Arnaud Charron :
          </p>
          <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
            <li>Yasmine Belarbi — Communication et coordination</li>
            <li>Ghenima Kadi — Cheffe de projet</li>
            <li>Malek Gabsi — Développeur, implémentation technique</li>
          </ul>
        </div>
      </section>

      {/* ========================= ILS NOUS SOUTIENNENT ========================= */}
      <section className="pi-supporters">
        <h2>Ils nous soutiennent</h2>
        <div className="pi-supporters__grid">
          <a className="pi-supporter" href="https://www.chu-toulouse.fr/" target="_blank" rel="noopener noreferrer">
            <div className="pi-supporter__logo">
              <img src="/assets/CHU.png" alt="CHU Toulouse" />
            </div>
            <span className="pi-supporter__name">CHU de Toulouse</span>
          </a>

          <a className="pi-supporter" href="https://www.inserm.fr/" target="_blank" rel="noopener noreferrer">
            <div className="pi-supporter__logo">
              <img src="/assets/inserm.png" alt="Inserm / ToNIC" />
            </div>
            <span className="pi-supporter__name">Inserm / ToNIC — Toulouse NeuroImaging Center</span>
          </a>

          <a className="pi-supporter" href="https://www.fondation-groupama.com/" target="_blank" rel="noopener noreferrer">
            <div className="pi-supporter__logo">
              <img src="/assets/Groupama.png" alt="Fondation Groupama" />
            </div>
            <span className="pi-supporter__name">Fondation Groupama &laquo;&nbsp;Vaincre les Maladies Rares&nbsp;&raquo;</span>
          </a>

          <a className="pi-supporter" href="https://lesgladiateurs.org/" target="_blank" rel="noopener noreferrer">
            <div className="pi-supporter__logo">
              <img src="/assets/Asso_lesgladiateurs.png" alt="Les Gladiateurs" />
            </div>
            <span className="pi-supporter__name">Association Les Gladiateurs</span>
          </a>

          <a className="pi-supporter" href="https://www.anrfrance.fr/" target="_blank" rel="noopener noreferrer">
            <div className="pi-supporter__logo">
              <img src="/assets/Ose.png" alt="ANR France" />
            </div>
            <span className="pi-supporter__name">Association Neurofibromatoses et Recklinghausen</span>
          </a>

          <a className="pi-supporter" href="https://isis.univ-jfc.fr/" target="_blank" rel="noopener noreferrer">
            <div className="pi-supporter__logo">
              <img src="/assets/isis.png" alt="ISIS" />
            </div>
            <span className="pi-supporter__name">École ISIS — Castres</span>
          </a>
        </div>
      </section>

      {/* ========================= AUTRES RESSOURCES ========================= */}
      <section className="pi-section pi-resources">
        <h2>Autres ressources</h2>
        <div className="pi-card pi-resources__centres">
          <p>
            Le CERENEF-Ped travaille en synergie nationale avec les 3 autres centres de référence maladies
            rares NF1 français et votre enfant est peut-être suivi dans l'un d'entre eux. Nous travaillons
            en tous les cas de concert :
          </p>
          <ul className="pi-resources__list">
            <li>Centre de référence maladies rares constitutif CERENEF de Paris (AP-HP, Hôpital de la Pitié-Salpêtrière)</li>
            <li>Centre de référence maladies rares NF1 de l'enfant de Nantes</li>
            <li>Centre de référence maladies rares NF1 de l'enfant de Toulouse</li>
            <li>Centre de référence maladies rares NF1 de l'enfant de Lyon</li>
          </ul>
          <p style={{ marginTop: '16px' }}>
            Le CERENEF-Ped fait partie de la <strong>Filière santé maladies rares dermatologiques (Fimarad)</strong> qui
            comprend plusieurs centres de référence et de compétence de plusieurs maladies rares dermatologiques.
          </p>
        </div>

        <div className="pi-resources__links">
          <h3>Ressources en ligne</h3>
          <div className="pi-link-grid">
            <a className="pi-link-card" href="https://www.gerneurofibromatosis.ch/brochure-dave-le-brave/" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">Brochure « Dave le Brave »</div>
              <p className="pi-link-card__desc">Ce livre a été écrit pour les enfants sur la NF1. Il a pour but d'aider à mieux comprendre la NF1.</p>
            </a>

            <a className="pi-link-card" href="https://www.gerneurofibromatosis.ch/difficultes-d-apprentissage-chez-les-eleves-atteints-de-nf1/" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">Difficultés d'apprentissage chez les élèves atteints de NF1</div>
              <p className="pi-link-card__desc">Brochure concernant les difficultés d'apprentissage observées chez les élèves atteints de NF de type 1.</p>
            </a>

            <a className="pi-link-card" href="https://anfq.ca/wp-content/uploads/2023/11/guide-sur-la-nf-a-lintention-des-parents.pdf" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">Guide NF à l'intention des parents</div>
              <p className="pi-link-card__desc">Source de soutien et d'information pour les familles touchées par la NF, avec des résultats d'études et de sondages.</p>
            </a>

            <a className="pi-link-card" href="https://anfq.ca/wp-content/uploads/2023/10/nf-guide-pour-educateur.pdf" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">Guide NF pour les éducateurs</div>
              <p className="pi-link-card__desc">Guide pour aider les éducateurs à répondre aux besoins spéciaux des enfants atteints de NF1 en milieu scolaire.</p>
            </a>

            <a className="pi-link-card" href="https://www.anrfrance.fr/" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">ANR France</div>
              <p className="pi-link-card__desc">Association Neurofibromatoses et Recklinghausen — informations, animations et contacts en France et Belgique.</p>
            </a>

            <a className="pi-link-card" href="http://www.anfq.org" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">Association de la neurofibromatose du Québec</div>
              <p className="pi-link-card__desc">Association sans but lucratif qui aide les personnes atteintes de NF et leurs familles.</p>
            </a>

            <a className="pi-link-card" href="https://www.gerneurofibromatosis.ch/documentation/" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">GER-NF (Suisse)</div>
              <p className="pi-link-card__desc">Groupement d'Entraide Romand pour les personnes atteintes de Neurofibromatose — documentation et témoignages.</p>
            </a>

            <a className="pi-link-card" href="https://www.chusj.org/fr/soins-services/N/Neurofibromatose" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">CHU Sainte-Justine — NF1</div>
              <p className="pi-link-card__desc">La clinique NF1 offre une expertise et des soins spécialisés avec une attention particulière au développement de l'enfant.</p>
            </a>

            <a className="pi-link-card" href="https://enseignement.chusj.org/fr/bibliotheques/les-Ressources/Guide-Info-famille?NodeAlias=Neurofibromatose" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">Guide Info-famille — Neurofibromatose</div>
              <p className="pi-link-card__desc">Guide du CHU Sainte-Justine destiné aux familles pour mieux comprendre la neurofibromatose et les ressources disponibles.</p>
            </a>

            <a className="pi-link-card" href="https://www.gerneurofibromatosis.ch/documentation/" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">GER-NF — Documentation complète</div>
              <p className="pi-link-card__desc">Documentation et brochures du Groupement d'Entraide Romand pour les personnes atteintes de Neurofibromatose.</p>
            </a>
          </div>
        </div>
      </section>

      {/* ========================= QUELQUES VIDÉOS ========================= */}
      <section className="pi-section pi-videos">
        <h2>Quelques vidéos</h2>
        <div className="pi-videos__grid">
          <div className="pi-video-card">
            <iframe
              src="https://www.youtube.com/embed/VQEjXCxqR3k"
              title="Vidéo NF1 — 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="pi-video-card">
            <iframe
              src="https://www.youtube.com/embed/_V7DiIzVWd0"
              title="Vidéo NF1 — 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Liens vidéos supplémentaires */}
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
          <a className="pi-video-link" href="https://www.anrfrance.fr/page/2981797-tom-et-son-doudou" target="_blank" rel="noopener noreferrer">
            Tom et son doudou — ANR France
          </a>
          <a className="pi-video-link" href="https://www.youtube.com/results?search_query=la+petite+casserole+d+anatole" target="_blank" rel="noopener noreferrer">
            La Petite Casserole d'Anatole
          </a>
          <a className="pi-video-link" href="https://www.gerneurofibromatosis.ch/cynthia-brousse-temoigne/" target="_blank" rel="noopener noreferrer">
            Cynthia Brousse témoigne — GER-NF
          </a>
          <a className="pi-video-link" href="https://www.gerneurofibromatosis.ch/le-divorce-de-la-jambe-de-guillaume/" target="_blank" rel="noopener noreferrer">
            Le divorce de la jambe de Guillaume — GER-NF
          </a>
        </div>
      </section>

      {/* ========================= QUELQUES LECTURES ========================= */}
      <section className="pi-section pi-books">
        <h2>Quelques lectures</h2>
        <div className="pi-books__grid">
          <a className="pi-book-card" href="https://www.fondation-ipsen.org/fr/book-lab/neurofibromatose-1/" target="_blank" rel="noopener noreferrer">
            <div className="pi-book-card__cover" aria-hidden="true" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">La Neurofibromatose #1</h3>
              <p className="pi-book-card__author">Fondation Ipsen — My Life Beyond — 5-9 ans</p>
              <p className="pi-book-card__desc">
                Léo est atteint de NF1, mais cela ne l'empêche pas de s'amuser et d'avoir des superpouvoirs secrets.
                Une BD gratuite pour découvrir sa vie au-delà de la neurofibromatose.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://www.anrfrance.fr/collect/description/159610-c-librairie-ose" target="_blank" rel="noopener noreferrer">
            <div className="pi-book-card__cover" aria-hidden="true" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">À fleur de peau</h3>
              <p className="pi-book-card__author">Joël Alessandra — Filidalo — 12 ans+</p>
              <p className="pi-book-card__desc">
                Récit de l'enfance et de l'adolescence de Fleur, atteinte de neurofibromatose.
                La difficulté du rapport aux autres, les baisses de moral, les progrès et les joies.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://www.anrfrance.fr/page/2981765-librairie-ose" target="_blank" rel="noopener noreferrer">
            <div className="pi-book-card__cover" aria-hidden="true" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">Gaspard</h3>
              <p className="pi-book-card__author">ANR France — Librairie OSE</p>
              <p className="pi-book-card__desc">
                Petit livre pensé et réalisé au centre de compétence Rhône Alpes pour expliquer la NF1 aux enfants.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://www.lesarenes.fr/livre/les-pansements-invisibles/" target="_blank" rel="noopener noreferrer">
            <div className="pi-book-card__cover" aria-hidden="true" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">Les pansements invisibles</h3>
              <p className="pi-book-card__author">Baptiste Beaulieu, Qin Leng — Les Arènes</p>
              <p className="pi-book-card__desc">
                Un album illustré qui parle de la différence, de la maladie et de la force des enfants avec tendresse et poésie.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://www.lesarenes.fr/livre/les-gens-sont-beaux/" target="_blank" rel="noopener noreferrer">
            <div className="pi-book-card__cover" aria-hidden="true" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">Les gens sont beaux</h3>
              <p className="pi-book-card__author">Baptiste Beaulieu, Qin Leng — Les Arènes</p>
              <p className="pi-book-card__desc">
                Un magnifique album jeunesse qui célèbre la beauté unique de chaque personne, au-delà des apparences.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://www.leslibraires.fr/livre/5694843-la-petite-casserole-d-anatole-isabelle-carrier-bilboquet" target="_blank" rel="noopener noreferrer">
            <div className="pi-book-card__cover" aria-hidden="true" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">La Petite Casserole d'Anatole</h3>
              <p className="pi-book-card__author">Isabelle Carrier — Bilboquet</p>
              <p className="pi-book-card__desc">
                L'histoire touchante d'Anatole qui traîne toujours derrière lui sa petite casserole — une métaphore poétique sur la différence.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://www.gerneurofibromatosis.ch/brochure-dave-le-brave/" target="_blank" rel="noopener noreferrer">
            <div className="pi-book-card__cover" aria-hidden="true" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">Dave le Brave</h3>
              <p className="pi-book-card__author">GER-NF</p>
              <p className="pi-book-card__desc">
                Ce livre a été écrit pour les enfants sur la NF1. Il a pour but d'aider à mieux comprendre la NF1.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://catalogue.santecom.qc.ca/cgi-bin/koha/opac-detail.pl?biblionumber=107108" target="_blank" rel="noopener noreferrer">
            <div className="pi-book-card__cover" aria-hidden="true" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">Faire face à la neurofibromatose</h3>
              <p className="pi-book-card__author">National Neurofibromatosis Foundation — 12 ans+</p>
              <p className="pi-book-card__desc">
                Guide pour les adolescents : diagnostic, effets, croissance, troubles d'apprentissage, génétique et recherche en cours.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* ========================= FOOTER ========================= */}
      <footer className="pi-footer">
        <p>© CAPITNF1 — Projet tutoré 2025–2026</p>
      </footer>
    </div>
  )
}
