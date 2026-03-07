import "./style.css"

export default function PlusInfos() {
  return (
    <div className="plusinfos">
      {/* ========================= HERO ========================= */}
      <header className="pi-hero">
        <img src="/assets/ice_b.png" className="pi-hero__banner" alt="CapitNF1 — Plus d'Info" />
      </header>

      <div className="pi-scroll-container">
        <div className="pi-scroll-arrows">
          <span>▼</span>
          <span>▼</span>
        </div>
      </div>

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
        <h2>Qui sommes-nous ?</h2>
        <div className="pi-card pi-team__intro">
          <p>
            Les contenus proposés dans CapitNF1 ont été conçus par l'équipe du <strong>CERENEF-Ped</strong>,
            centre de référence des neurofibromatoses pédiatriques du CHU de Toulouse.
          </p>
          <p>
            Un centre de référence est une structure reconnue pour son expertise dans une maladie spécifique.
            Son rôle est d'accompagner les patients et leurs familles grâce à une prise en charge spécialisée et coordonnée.
          </p>
          <p>
            À Toulouse, le CERENEF-Ped réunit une équipe pluriprofessionnelle composée de neuropédiatres,
            d'une psychologue, d'une neuropsychologue, d'une assistante sociale, d'une assistante médico-administrative
            et de personnels de recherche. Ensemble, ils accompagnent les enfants atteints de neurofibromatose de type 1
            (NF1) en coordonnant les différents professionnels de santé impliqués dans leur suivi : ophtalmologues,
            endocrinologues, orthopédistes, neuro-oncologues, généticiens, dermatologues et bien d'autres.
          </p>
          <p>
            Les supports CapitNF1 ont été élaborés avec ces professionnels afin de proposer un contenu fiable,
            adapté aux enfants et conforme aux connaissances médicales actuelles.
          </p>
          <p>
            Pour concevoir un outil accessible et compréhensible par les plus jeunes, l'équipe du CERENEF-Ped
            s'est également entourée de spécialistes du design, du développement web et de la médiation numérique.
            Cette collaboration a permis de transformer des informations médicales complexes en contenus pédagogiques
            interactifs, pensés pour faciliter la compréhension, rassurer les enfants et accompagner les familles
            au quotidien.
          </p>
        </div>

        {/* Équipe CERENEF-Ped */}
        <div className="pi-card" style={{ marginTop: '24px' }}>
          <h3>L'équipe du CERENEF-Ped</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <img
              src="/assets/Portrait_Maëlle_Biotteau.JPG"
              alt="Maëlle Biotteau"
              style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff', boxShadow: '0 4px 12px rgba(46,95,126,0.2)', flexShrink: 0 }}
            />
            <div>
              <strong style={{ fontSize: '16px' }}>Maëlle Biotteau</strong><br />
              <span style={{ fontSize: '14px', color: '#4a6a7a' }}>Cheffe de projet de recherche, Hôpital des Enfants de Toulouse</span>
            </div>
          </div>
          <ul style={{ marginTop: '8px', paddingLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>Eloïse Baudou</strong> — Neuropédiatre, Hôpital des Enfants de Toulouse</li>
            <li><strong>Nadège Carayon</strong> — Assistante sociale, Hôpital des Enfants de Toulouse</li>
            <li><strong>Yves Chaix</strong> — Neuropédiatre, Hôpital des Enfants de Toulouse</li>
            <li><strong>Capucine Dalby</strong> — Neuropsychologue, Hôpital des Enfants de Toulouse</li>
            <li><strong>Bastien Estublier</strong> — Neuropédiatre, Hôpital des Enfants de Toulouse</li>
            <li><strong>Nathalie Faure Marie</strong> — Psychologue, Hôpital des Enfants de Toulouse</li>
            <li><strong>Danièle Santamaria</strong> — Assistante médico-administrative, Hôpital des Enfants de Toulouse</li>
          </ul>
        </div>

        {/* Équipe graphique & web */}
        <div className="pi-card" style={{ marginTop: '16px' }}>
          <h3>Équipe graphique, webdesign et développement</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <img
                src="/assets/maxime.jpeg"
                alt="Maxime Moser"
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff', boxShadow: '0 4px 12px rgba(46,95,126,0.2)', flexShrink: 0 }}
              />
              <div>
                <strong>Maxime Moser</strong> — Graphiste et dessinateur freelance, diplômé de l'école Condé.<br />
                <span style={{ fontSize: '14px', color: '#4a6a7a' }}>Il a conçu l'univers visuel de CapitNF1, réalisé les illustrations et les animations vidéo afin de rendre les contenus plus accessibles aux enfants.</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <img
                src="/assets/bastide.jpg"
                alt="Baptiste Vignaud"
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff', boxShadow: '0 4px 12px rgba(46,95,126,0.2)', flexShrink: 0 }}
              />
              <div>
                <strong>Baptiste Vignaud</strong> — Développeur web freelance, diplômé de l'Université de Limoges.<br />
                <span style={{ fontSize: '14px', color: '#4a6a7a' }}>Il a développé le site web et réalisé les voix-off pédagogiques du projet, incarnant notamment la voix de CapitNF1.</span>
              </div>
            </div>
          </div>
        </div>

        {/* École ISIS */}
        <div className="pi-card" style={{ marginTop: '16px' }}>
          <h3>Développement pédagogique et technique — École ISIS</h3>
          <p>
            L'intégration technique et le développement de l'interface CapitNF1 ont été réalisés dans le cadre
            d'un projet tutoré mené par des étudiants de l'École ISIS — Ingénierie des Systèmes d'Information
            en Santé (Castres), sous la supervision d'<strong>Arnaud Charron</strong>.
          </p>
          <ul style={{ marginTop: '8px', paddingLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>Belarbi Yasmine</strong> — Développement et Communication et coordination</li>
            <li><strong>Ghenima Kadi</strong> — Cheffe de projet</li>
            <li><strong>Malek Gabsi</strong> — Développement et implémentation technique</li>
          </ul>
        </div>
      </section>

      {/* ========================= ILS NOUS SOUTIENNENT ========================= */}
      <section className="pi-supporters">
        <h2>Ils nous soutiennent</h2>
        <div className="pi-supporters__grid pi-supporters__grid--3x2">
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
            <span className="pi-supporter__name">Inserm / ToNIC</span>
          </a>

          <a className="pi-supporter" href="https://www.fondation-groupama.com/" target="_blank" rel="noopener noreferrer">
            <div className="pi-supporter__logo">
              <img src="/assets/Groupama.png" alt="Fondation Groupama" />
            </div>
            <span className="pi-supporter__name">Fondation Groupama</span>
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
            <span className="pi-supporter__name">Neurofibromatoses et Recklinghausen</span>
          </a>

          <a className="pi-supporter" href="https://isis.univ-jfc.fr/" target="_blank" rel="noopener noreferrer">
            <div className="pi-supporter__logo">
              <img src="/assets/isis.png" alt="ISIS" />
            </div>
            <span className="pi-supporter__name">École ISIS — Castres</span>
          </a>
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
          <div className="pi-video-card">
            <iframe
              src="https://www.youtube.com/embed/RlNOUx9o8Lo"
              title="La Petite Casserole d'Anatole"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="pi-video-card">
            <iframe
              src="https://www.youtube.com/embed/MZxYHEyHYA8"
              title="La différence expliquée aux enfants"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>


      </section>

      {/* ========================= QUELQUES LECTURES ========================= */}
      <section className="pi-section pi-books">
        <h2>Quelques lectures</h2>
        <div className="pi-books__grid">
          <a className="pi-book-card" href="https://www.fondation-ipsen.org/fr/book-lab/neurofibromatose-1/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/neurofibromatose-1.png" className="pi-book-card__cover" alt="Couverture La Neurofibromatose #1" />
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
            <img src="/assets/a-fleur-de-peau.png" className="pi-book-card__cover" alt="Couverture À fleur de peau" />
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
            <img src="/assets/gaspard.png" className="pi-book-card__cover" alt="Couverture Gaspard" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">Gaspard</h3>
              <p className="pi-book-card__author">ANR France — Librairie OSE</p>
              <p className="pi-book-card__desc">
                Petit livre pensé et réalisé au centre de compétence Rhône Alpes pour expliquer la NF1 aux enfants.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://arenes.fr/livre/les-pansements-invisibles/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/les-pansements-invisibles.png" className="pi-book-card__cover" alt="Couverture Les pansements invisibles" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">Les pansements invisibles</h3>
              <p className="pi-book-card__author">Baptiste Beaulieu, Qin Leng — Les Arènes</p>
              <p className="pi-book-card__desc">
                Un album illustré qui parle de la différence, de la maladie et de la force des enfants avec tendresse et poésie.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://arenes.fr/livre/les-gens-sont-beaux/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/les-gens-sont-beaux.png" className="pi-book-card__cover" alt="Couverture Les gens sont beaux" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">Les gens sont beaux</h3>
              <p className="pi-book-card__author">Baptiste Beaulieu, Qin Leng — Les Arènes</p>
              <p className="pi-book-card__desc">
                Un magnifique album jeunesse qui célèbre la beauté unique de chaque personne, au-delà des apparences.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://www.youtube.com/watch?v=RlNOUx9o8Lo" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Anatole.png" className="pi-book-card__cover" alt="Couverture La Petite Casserole d'Anatole" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">La Petite Casserole d'Anatole</h3>
              <p className="pi-book-card__author">Isabelle Carrier — Bilboquet</p>
              <p className="pi-book-card__desc">
                L'histoire touchante d'Anatole qui traîne toujours derrière lui sa petite casserole — une métaphore poétique sur la différence.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://www.gerneurofibromatosis.ch/brochure-dave-le-brave/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/dave_le_brave.jpg" className="pi-book-card__cover" alt="Couverture Dave le Brave" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">Dave le Brave</h3>
              <p className="pi-book-card__author">GER-NF</p>
              <p className="pi-book-card__desc">
                Ce livre a été écrit pour les enfants sur la NF1. Il a pour but d'aider à mieux comprendre la NF1.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://arenes.fr/livre/je-suis-moi-et-personne-dautre/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/je_suis_moi.jpg" className="pi-book-card__cover" alt="Couverture Je suis moi et personne d'autre" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">Je suis moi et personne d’autre</h3>
              <p className="pi-book-card__author">Album jeunesse</p>
              <p className="pi-book-card__desc">
                Un album qui célèbre l’unicité de chaque enfant et l’importance de s’accepter tel que l’on est.
              </p>
            </div>
          </a>

          <a className="pi-book-card" href="https://www.youtube.com/watch?v=QcF4aV5JNKc" target="_blank" rel="noopener noreferrer">
            <img src="/assets/elmer.jpg" className="pi-book-card__cover" alt="Couverture Elmer" />
            <div className="pi-book-card__info">
              <h3 className="pi-book-card__title">Elmer</h3>
              <p className="pi-book-card__author">David McKee — École des Loisirs</p>
              <p className="pi-book-card__desc">
                L’histoire d’Elmer, l’éléphant multicolore, qui apprend que la différence est une force.
              </p>
            </div>
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
            <li><a href="https://cerenef.org/" target="_blank" rel="noopener noreferrer">Centre de référence maladies rares constitutif CERENEF de Paris (AP-HP, Hôpital de la Pitié-Salpêtrière)</a></li>
            <li><a href="https://www.chu-nantes.fr/la-nf1-1" target="_blank" rel="noopener noreferrer">Centre de référence maladies rares NF1 de l'enfant de Nantes</a></li>
            <li><a href="https://www.chu-toulouse.fr/neurofibromatose-de-type-1-nf1" target="_blank" rel="noopener noreferrer">Centre de référence maladies rares NF1 de l'enfant de Toulouse</a></li>
            <li><a href="https://www.chu-lyon.fr/service-neurologie-oncologie" target="_blank" rel="noopener noreferrer">Centre de référence maladies rares NF1 de l'enfant de Lyon</a></li>
          </ul>
          <p style={{ marginTop: '16px' }}>
            Le CERENEF-Ped fait partie de la <a href="https://fimarad.org/" target="_blank" rel="noopener noreferrer"><strong>Filière santé maladies rares dermatologiques (Fimarad)</strong></a> qui
            comprend plusieurs centres de référence et de compétence de several maladies rares dermatologiques.
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

            <a className="pi-link-card" href="https://anfq.ca/wp-content/uploads/2023/11/guide-sur-la-nf-a-lintention-des-parents.pdf" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">Guide sur la NF à l’intention des parents</div>
              <p className="pi-link-card__desc">ANFQ — Comment aider les enfants ayant des difficultés d’apprentissage associées à la neurofibromatose de type 1.</p>
            </a>

            <a className="pi-link-card" href="https://anfq.ca/" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">Association de la Neurofibromatose du Québec</div>
              <p className="pi-link-card__desc">Mission d’améliorer la vie des gens touchés par la NF, favoriser la recherche et diffuser les connaissances.</p>
            </a>

            <a className="pi-link-card" href="https://cancer.ca/fr/cancer-information/resources/glossary/n/neurofibromatosis-type-1" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">Société canadienne du cancer — NF1</div>
              <p className="pi-link-card__desc">Description de la maladie (de von Recklinghausen) et risques reliés au cancer.</p>
            </a>

            <a className="pi-link-card" href="https://www.aboutkidshealth.ca/fr/santeaz/genetics/neurofibromatosis-type-1-nf1/?language=fr" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">AboutKidsHealth — NF1</div>
              <p className="pi-link-card__desc">Apprenez-en davantage sur les anomalies qui sont associées à cette affection.</p>
            </a>

            <a className="pi-link-card" href="https://anfq.ca/wp-content/uploads/2023/10/nf-guide-pour-educateur.pdf" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">NF1 Guide à l'intention des éducateurs</div>
              <p className="pi-link-card__desc">Pour mieux comprendre les besoins spéciaux des enfants atteints de NF1 en milieu scolaire.</p>
            </a>

            <a className="pi-link-card" href="https://www.chumontreal.qc.ca/patients/centre-dexpertise-en-neurofibromatose/je-suis-patient/tout-savoir-neurofibromatose" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">CHUM — Tout savoir sur la neurofibromatose</div>
              <p className="pi-link-card__desc">Qu’est-ce que la neurofibromatose, causes, symptômes et diagnostic etc.</p>
            </a>

            <a className="pi-link-card" href="https://www.gerneurofibromatosis.ch/la-rubrique-scientifique-4-la-douleur-chez-les-patients-nf1/" target="_blank" rel="noopener noreferrer">
              <div className="pi-link-card__title">GER-NF — La douleur chez les patients NF1</div>
              <p className="pi-link-card__desc">Rubrique scientifique sur la douleur chez les patients NF1.</p>
            </a>
          </div>
        </div>
      </section>

      {/* ========================= FOOTER ========================= */}
      <footer className="pi-footer">
        <p>© CAPITNF1 — Projet tutoré 2025–2026</p>
      </footer>
    </div>
  )
}
