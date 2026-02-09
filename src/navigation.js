import { getPermalink, getBlogPermalink } from "~/utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Qui sommes nous",
      links: [
        { text: "Equipe", href: getPermalink("/equipe") },
        { text: "Partenaires", href: getPermalink("/partenaires") },
        { text: "FAQ", href: getPermalink("/faq") },
      ],
    },
    {
      text: "Projets & Réalisations",
      links: [
        { text: "Projets en cours", href: getPermalink("/projets") },
        { text: "Projets réalisés", href: getPermalink("/realisations") },
      ],
    },
    { text: "Blog", href: getPermalink("/news") },
    { text: "Magazine", href: getPermalink("/magazines") },
    {
      text: "Médias & Actualités",
      links: [
        { text: "Podcasts", href: getPermalink("/podcasts") },
        { text: "Vidéos", href: getPermalink("videos") },
      ],
    },
    {
      text: "Formations & Ressources",
      href: getPermalink("/formations"),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: "CitizenLab",
      links: [
        {
          text: "Partenaires",
          href: getPermalink("/partenaires"),
        },
        { text: "Equipe", href: getPermalink("/equipe") },
      ],
    },
    {
      title: "Actualités",
      links: [
        { text: "Actualités", href: getPermalink("/news") },
        // { text: "Blog", href: getPermalink("blog", "category") },
        // { text: "Campagnes", href: "#" },
        { text: "Podcasts", href: getPermalink("/podcasts") },
        { text: "Vidéos", href: getPermalink("videos") },
        {
          text: "Formations",
          href: getPermalink("formations/bootcamps-ateliers"),
        },
      ],
    },

    {
      title: "Nous Contacter",
      links: [
        {
          text: "aclbenin@africtivistes.org",
          href: "mailto:aclbenin@africtivistes.org ",
        },
        // { text: "+221 78 018 01 05", href: "tel:+221 78 018 01 05" },
        // { text: " Dakar, Sénégal ", href: "#" },
      ],
    },
  ],
  secondaryLinks: [
    {
      text: "Termes et Conditions",
      href: getPermalink("/termes-et-conditions"),
    },
    //{ text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { icon: "tabler:brand-x", href: "https://x.com/citizenlabsn?s=11" },
    {
      icon: "tabler:brand-instagram",
      href: "https://www.instagram.com/citizenlab_senegal?igsh=MWc4cDYzNGc5em9pcA%3D%3D&utm_source=qr",
    },
    {
      icon: "tabler:brand-facebook",
      href: "https://www.facebook.com/share/1AE5haRBVN/?mibextid=wwXIfr",
    },
    {
      icon: "tabler:brand-linkedin",
      href: "https://www.linkedin.com/company/citizenlab-senegal/",
    },
    {
      icon: "tabler:brand-github",
      href: "https://github.com/AfricTivistes/citizenlabsenegal",
    },
  ],
  footNote: `
  <a href="https://www.africtivistes.com" target= '_blank'>
  <img src="https://update.africtivistes.org/wp-content/uploads/2023/10/Logo-Africtivistes.png" alt="AfricTivistes" class="h-8" />
  </a>
    <a target= '_blank' class="text-green-600 hover:underline dark:text-gray-200" href="https://www.africtivistes.com"> AfricTivistes</a> · All rights reserved.
  `,
};
