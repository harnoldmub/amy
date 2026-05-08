export const profile = {
  name: "Arnold Mubuanga Yate",
  shortName: "Arnold M.Y.",
  title: "Consultant IT · Ingénieur logiciel · Chef de projet",
  headline: "Conseil, delivery et produits digitaux pour organisations exigeantes.",
  availability: "Disponible pour missions de conseil",
  location: "Lille, Paris et missions hybrides",
  email: "arnold@mubuanga.com",
  linkedin: "https://www.linkedin.com/in/arnold-mubuanga-yate-149b7b151",
  github: "#",
  summary:
    "J'accompagne entreprises, institutions et structures ambitieuses sur des sujets de conseil, de cadrage, de delivery et de conception de produits digitaux à forte exigence.",
  homeIntro:
    "Je combine vision produit, pilotage projet et exécution technique pour livrer des expériences digitales robustes, élégantes et utiles aux organisations qui ne peuvent pas se permettre l'à-peu-près.",
  resumeIntro:
    "Mon parcours relie engineering, delivery et compréhension produit. J'aime les sujets où il faut articuler performance technique, architecture claire et expérience utilisateur exigeante.",
  yearsExperience: "6+",
} as const;

export const trustedCompanies = [
  "Ville de Lille",
  "Dassault Systèmes",
  "NETVIBES",
  "Capgemini",
  "Decathlon",
  "Hewani",
  "Structures en transformation",
] as const;

export const expertiseAreas = [
  {
    title: "Moteurs de recherche",
    description:
      "Conception d'expériences de recherche, navigation, pertinence et restitution d'information dans des environnements métier complexes.",
  },
  {
    title: "Plateformes data & intelligence",
    description:
      "Assemblage de produits qui fédèrent des flux, des sources et des usages variés autour d'une interface cohérente.",
  },
  {
    title: "Architecture applicative",
    description:
      "Structuration d'applications web robustes, maintenables et orientées produit, du front jusqu'aux services métiers.",
  },
  {
    title: "Delivery & accompagnement",
    description:
      "Travail transverse avec produit, design et équipes techniques pour livrer de façon fiable sur des sujets à forte visibilité.",
  },
] as const;

export const selectedReferences = [
  {
    company: "Ville de Lille",
    mission: "Chef de projet informatique",
    impact:
      "Pilotage de projets informatiques dans un environnement public où la coordination, la fiabilité et la lisibilité des livrables sont essentielles.",
  },
  {
    company: "Dassault Systèmes",
    mission: "3DSearch / 3DEXPERIENCE Platform",
    impact:
      "Travail sur une expérience de recherche transverse au sein d'un écosystème industriel mondial.",
  },
  {
    company: "Capgemini",
    mission: "Mission client retail",
    impact:
      "Intervention sur des sujets de delivery et de plateforme dans un contexte grand compte.",
  },
  {
    company: "Decathlon",
    mission: "Plateforme digitale",
    impact:
      "Contribution à des usages produit où la fluidité et la performance conditionnent l'adoption.",
  },
  {
    company: "Hewani",
    mission: "Lead développeur",
    impact:
      "Pilotage de projets web et accompagnement de structures dans leur transition numérique.",
  },
] as const;

export const services = [
  {
    icon: "Zap",
    title: "Conseil & cadrage",
    description:
      "Clarification du besoin, priorisation, architecture de la réponse et trajectoire de livraison.",
  },
  {
    icon: "Layers",
    title: "Pilotage de projet IT",
    description:
      "Coordination des parties prenantes, suivi d'avancement, qualité de delivery et sécurisation des décisions.",
  },
  {
    icon: "Globe",
    title: "Produits & plateformes web",
    description:
      "Sites premium, outils métier et plateformes sur mesure conçus pour durer et servir l'usage réel.",
  },
  {
    icon: "Users",
    title: "Transformation & accompagnement",
    description:
      "Interface entre métier, technique et produit pour faire avancer les projets sensibles sans friction inutile.",
  },
] as const;

export const projects = [
  {
    slug: "salon-congo-paris",
    name: "Congo à Paris",
    url: "https://salon.congonaparis.fr/",
    screenshot: "/images/projets/congonaparis/congo-paris-desktop.png",
    screenshotMobile: "/images/projets/congonaparis/congo-paris-mobile.png",
    category: "Événementiel",
    description:
      "Plateforme de présentation pour un rendez-vous de la diaspora congolaise à Paris, avec programme, partenaires et réservation.",
    tags: ["Next.js", "Événement", "Direction artistique"],
    featured: true,
  },
  {
    slug: "mboka-hub",
    name: "Mboka Hub",
    url: "https://mbokahub.com/",
    screenshot: "/screenshots/mbokahub_com.png",
    screenshotMobile: "/screenshots/mbokahub_com_mobile.png",
    category: "Plateforme",
    description:
      "Hub communautaire et digital pour la diaspora congolaise — networking, projets et opportunités.",
    tags: ["React", "Node.js", "Community"],
    featured: true,
  },
  {
    slug: "tselem-rdc",
    name: "Tselem RDC",
    url: "https://tselemrdc.com/",
    screenshot: "/screenshots/tselemrdc_com.png",
    screenshotMobile: "/screenshots/tselemrdc_com_mobile.png",
    category: "Institutionnel",
    description:
      "Site institutionnel pour une ONG engagée pour les droits et le développement en République Démocratique du Congo.",
    tags: ["Next.js", "CMS", "ONG"],
    featured: false,
  },
  {
    slug: "e-visa",
    name: "E-Visa",
    url: "https://e-visa.mubuanga.com/",
    screenshot: "/screenshots/e-visa_mubuanga_com.png",
    screenshotMobile: "/screenshots/e-visa_mubuanga_com_mobile.png",
    category: "Application",
    description:
      "Application de traitement de demandes de visa en ligne — interface sécurisée et fluide pour les usagers.",
    tags: ["React", "TypeScript", "Formulaires"],
    featured: true,
  },
  {
    slug: "bloc-leopards",
    name: "Bloc Léopards",
    url: "https://blocleopards.mubuanga.com/",
    screenshot: "/screenshots/blocleopards_mubuanga_com.png",
    screenshotMobile: "/screenshots/blocleopards_mubuanga_com_mobile.png",
    category: "Communauté",
    description:
      "Plateforme dédiée aux supporters de l'équipe nationale de football de la RDC, Les Léopards.",
    tags: ["Next.js", "Sport", "Communauté"],
    featured: false,
  },
  {
    slug: "momento-wedding",
    name: "Momento Wedding",
    url: "https://momento.wedding/",
    screenshot: "/screenshots/momento_wedding.png",
    screenshotMobile: "/screenshots/momento_wedding_mobile.png",
    category: "Événementiel",
    description:
      "Agence événementielle spécialisée en mariages — vitrine premium avec galerie et demandes de contact.",
    tags: ["Next.js", "Design", "Événementiel"],
    featured: true,
  },
  {
    slug: "u-moja",
    name: "U-Moja",
    url: "https://u-moja.org/",
    screenshot: "/screenshots/u-moja_org.png",
    screenshotMobile: "/screenshots/u-moja_org_mobile.png",
    category: "Associatif",
    description:
      "Site associatif pour une organisation de solidarité africaine — projets, actualités et engagement.",
    tags: ["React", "CMS", "Association"],
    featured: false,
  },
  {
    slug: "dgm",
    name: "DGM",
    url: "https://dgm.mubuanga.com/",
    screenshot: "/screenshots/dgm_mubuanga_com.png",
    screenshotMobile: "/screenshots/dgm_mubuanga_com_mobile.png",
    category: "Application",
    description:
      "Application web pour la Direction Générale de Migration — gestion administrative et procédures en ligne.",
    tags: ["React", "TypeScript", "Gouvernance"],
    featured: false,
  },
  {
    slug: "fondation-noah-sadiki",
    name: "Fondation Noah Sadiki",
    url: "https://fondationnoahsadiki.org/",
    screenshot: "/screenshots/fondationnoahsadiki_org.png",
    screenshotMobile: "/screenshots/fondationnoahsadiki_org_mobile.png",
    category: "Institutionnel",
    description:
      "Site institutionnel d'une fondation caritative — collecte de dons, projets humanitaires et galerie d'actions.",
    tags: ["Next.js", "Fondation", "Dons"],
    featured: false,
  },
  {
    slug: "cozy-interieur",
    name: "Cozy Intérieur",
    url: "https://cozyinterieur.com/",
    screenshot: "/screenshots/cozyinterieur_com.png",
    screenshotMobile: "/screenshots/cozyinterieur_com_mobile.png",
    category: "Site vitrine",
    description:
      "Site vitrine pour une agence de décoration intérieure — galerie de réalisations, services et devis en ligne.",
    tags: ["Next.js", "Design", "Décoration"],
    featured: false,
  },
  {
    slug: "malkya",
    name: "Malkya",
    url: "https://malkya.co/",
    screenshot: "/screenshots/malkya_co.png",
    screenshotMobile: "/screenshots/malkya_co_mobile.png",
    category: "E-commerce",
    description:
      "Plateforme e-commerce et lifestyle pour une marque africaine contemporaine — catalogue et expérience d'achat.",
    tags: ["Next.js", "E-commerce", "Lifestyle"],
    featured: false,
  },
] as const;

export type Project = (typeof projects)[number];

export const experiences = [
  {
    period: "Depuis novembre 2024",
    company: "Ville de Lille",
    role: "Chef de projet informatique",
    summary:
      "Mission actuelle au sein de la collectivité, centrée sur le pilotage de projets informatiques, la coordination des acteurs et la qualité de mise en oeuvre.",
    details: [
      "Pilotage de projets IT au service de besoins métiers et organisationnels de la Ville de Lille.",
      "Coordination entre parties prenantes, équipes techniques et contributeurs externes selon les enjeux du projet.",
      "Suivi du cadrage, de l'avancement, des arbitrages et de la qualité de livraison dans un contexte public exigeant.",
    ],
    stack: ["Gestion de projet", "Pilotage", "Coordination", "Delivery", "Collectivité"],
  },
  {
    period: "2021 — Aujourd'hui",
    company: "Dassault Systèmes",
    role: "Software Engineering Specialist",
    summary:
      "Mission centrée sur l'expérience de recherche et l'évolution d'interfaces produit au sein de la 3DEXPERIENCE Platform (NETVIBES · 3DSearch).",
    details: [
      "Contribution à un moteur de recherche transverse exposé dans un environnement produit multi-marques (CATIA, SOLIDWORKS, ENOVIA...).",
      "Évolution d'interfaces et composants orientés productivité, clarté et adoption côté utilisateurs.",
      "Collaboration dans un contexte exigeant mêlant contraintes produit, dette technique et continuité de service.",
    ],
    stack: ["React", "TypeScript", "Design Systems", "Search UX", "JavaScript"],
  },
  {
    period: "2021",
    company: "Capgemini",
    role: "Consultant & Ingénieur",
    summary:
      "Intervention sur une plateforme digitale dans un contexte client grand groupe, avec exigence de qualité et de delivery.",
    details: [
      "Travail au sein d'équipes pluridisciplinaires avec un rythme de livraison soutenu.",
      "Contribution à l'implémentation et à la stabilisation de fonctionnalités produit.",
    ],
    stack: ["JavaScript", "Agile", "Delivery"],
  },
  {
    period: "2019 — 2021",
    company: "Hewani",
    role: "Lead Développeur",
    summary:
      "Conception et déploiement de solutions web pour accompagner des organisations et entreprises dans leur transformation numérique.",
    details: [
      "Cadrage, développement et pilotage de projets digitaux de bout en bout.",
      "Accompagnement métier pour traduire des besoins terrain en solutions concrètes.",
      "Développement de sites vitrines, plateformes et applications pour des clients variés.",
    ],
    stack: ["Next.js", "Node.js", "React", "UX", "Pilotage"],
  },
  {
    period: "2018 — 2020",
    company: "Dassault Systèmes",
    role: "Ingénieur Front-End",
    summary:
      "Développement d'interfaces utilisateurs complexes dans un environnement produit exigeant à dimension internationale.",
    details: [
      "Travail sur des composants front et des parcours nécessitant rigueur, cohérence et robustesse.",
      "Contribution dans un contexte international avec forte exigence de maintenabilité.",
    ],
    stack: ["JavaScript", "Front-End", "UI Engineering"],
  },
  {
    period: "2017 — 2018",
    company: "Développeur apprenti",
    role: "Formation en alternance",
    summary:
      "Premiers pas dans le développement web en alternance — apprentissage des fondamentaux et premiers projets clients.",
    details: [
      "Découverte du développement web front-end et back-end dans un cadre professionnel.",
      "Premiers projets livrés en autonomie croissante.",
      "Formation aux méthodes agiles et aux bonnes pratiques de code.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Git"],
  },
] as const;

export const skillGroups = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    items: ["Node.js", "APIs REST", "Architecture applicative", "Bases de données"],
  },
  {
    name: "Search & Data",
    items: ["Search UX", "Architecture d'information", "Indexation", "Restitution"],
  },
  {
    name: "Produit & méthode",
    items: ["Discovery", "Delivery", "Design Systems", "Travail transverse"],
  },
] as const;

export const education = [
  {
    school: "Master en Ingénierie Informatique",
    degree: "Développement logiciel et produits digitaux",
    period: "2015 — 2018",
  },
] as const;

export const languages = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "Professionnel" },
  { name: "Lingala", level: "Natif" },
] as const;

export const interests = [
  "Expériences produit",
  "Culture web",
  "Transformation numérique",
  "Impact social",
  "Diaspora africaine",
] as const;

export const dassaultMission = {
  company: "Dassault Systèmes",
  role: "Software Engineering Specialist",
  team: "3DSearch · NETVIBES",
  period: "2021 — Aujourd'hui",
  context:
    "Contribution à l'évolution de la recherche transverse au sein de la 3DEXPERIENCE Platform.",
  description:
    "Au sein d'un environnement produit à grande échelle, je participe à la conception et à l'amélioration d'expériences de recherche capables de connecter plusieurs univers métier. Le travail porte autant sur la lisibilité de l'interface que sur la qualité d'intégration et la fiabilité des comportements.",
  brands: ["CATIA", "SOLIDWORKS", "SIMULIA", "DELMIA", "ENOVIA", "BIOVIA", "MEDIDATA"],
  highlights: [
    "Moteur de recherche transverse exposé dans un écosystème produit multi-marques mondial.",
    "Évolution d'interfaces et comportements orientés productivité et adoption.",
    "Collaboration dans un contexte mêlant contraintes produit, dette technique et delivery continu.",
  ],
  stack: ["JavaScript", "TypeScript", "React", "Search UX", "Design Systems", "Product Delivery"],
} as const;

export const lilleMission = {
  company: "Ville de Lille",
  role: "Chef de projet informatique",
  period: "Depuis novembre 2024",
  summary:
    "J'interviens sur le pilotage de projets informatiques avec une attention forte portée au cadrage, à la coordination des parties prenantes et à la fiabilité des livrables.",
  highlights: [
    "Conduite de projets IT dans un environnement institutionnel où la clarté de gouvernance compte autant que l'exécution.",
    "Travail de coordination entre besoins métiers, contraintes opérationnelles et réalités de delivery.",
    "Approche orientée structure, suivi, arbitrage et qualité d'atterrissage des projets.",
  ],
  tags: ["Collectivité", "Pilotage projet", "Coordination", "Delivery", "IT"],
} as const;
