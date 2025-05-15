import { useTranslations } from "next-intl";
import PortfolioContainer from "@/components/PortfolioContainer";

const PortfolioPage = ({ params: { locale } }) => {
  const t = useTranslations("Portfolio");
  let projects = [
    {
      id: 23,
      color: "from-red-300 to-blue-300",
      img: "/portfolio/fini.png",
      link: "https://apps.apple.com/es/app/fini/id6743115423",
    },
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      img: "/portfolio/OPTF.png",
      link: "https://optf.ngo/",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",

      img: "/portfolio/OXEN.png",
      link: "https://oxen.io/",
    },
    {
      id: 3,

      color: "from-violet-300 to-purple-300",
      img: "/portfolio/SESSION.png",
      link: "https://getsession.org/",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      img: "/portfolio/LOKINET.png",
      link: "https://lokinet.org/",
    },
    {
      id: 5,
      color: "from-purple-300 to-red-300",
      img: "/portfolio/dashboard.png",
      link: "https://dashboard.oxen.io//",
    },
    {
      id: 6,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/uala-arg.png",
      link: "https://www.uala.com.ar/",
    },
    {
      id: 7,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/uala-co.png",
      link: "https://www.uala.com.co/",
    },
    {
      id: 8,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/uala-mx.png",
      link: "https://www.uala.mx/",
    },
    {
      id: 9,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/uala-abc-mx.png",
      link: "https://www.abccapital.com.mx/Pages/UalaABC.aspx",
    },
    {
      id: 10,
      color: "from-purple-300 to-red-300",
      img: "/portfolio/ualamas-arg.png",
      link: "https://www.ualamas.com.ar/",
    },
    {
      id: 11,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/ualabis-arg.png",
      link: "https://www.ualabis.com.ar/",
    },
    {
      id: 12,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/ualabis-mx.png",
      link: "https://www.ualabis.com.mx/",
    },
    {
      id: 13,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/ualintec-inv.png",
      link: "https://www.ualintecinversiones.com.ar/",
    },
    {
      id: 14,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/ualintec.png",
      link: "https://www.ualintec.com.ar/",
    },
    {
      id: 15,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/cryptotracker.png",
      link: "https://play.google.com/store/apps/details?id=com.cryptotracker_by_to",
    },
    {
      id: 16,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/appashops.png",
      link: "https://www.appashops.com.ar/",
    },
    {
      id: 17,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/coach-training-edu.png",
      link: "https://www.coachtrainingedu.com/",
    },
    {
      id: 18,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/budgapp.png",
      link: "https://tomobre.github.io/budgapp/#/",
    },
    {
      id: 19,
      color: "from-purple-300 to-red-300",
      img: "/portfolio/epayco.png",
      link: "https://tomobre.github.io/epayco-mern-project/#/",
    },
    {
      id: 20,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/pokemon.png",
      link: "https://tomobre.github.io/pokedex/",
    },
    {
      id: 21,
      color: "from-purple-300 to-red-300",

      img: "/portfolio/di-lorenzo.png",
      link: "https://tomobre.github.io/di-lorenzo/",
    },
    {
      id: 22,
      color: "from-purple-300 to-red-300",
      img: "/portfolio/robots-cn.png",
      link: "https://tomobre.github.io/robots-chuck-norris/",
    },
  ];

  projects = projects.map((project, index) => {
    project.title = t(`portfolio.${index}.title`);
    project.description = t(`portfolio.${index}.description`);
    return project;
  });

  return (
    <PortfolioContainer
      locale={locale}
      scrollBtn={t("portfolioButton")}
      scrollTitle={t("title")}
      projects={projects}
      hireTitle={t("contact.title")}
      hireBtn={t("contact.button")}
      hireSubtitle={t("contact.role")}
    />
  );
};

export default PortfolioPage;
