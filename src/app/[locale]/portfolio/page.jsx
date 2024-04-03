import { useTranslations } from "next-intl";
import PortfolioContainer from "@/components/PortfolioContainer";


const PortfolioPage = () => {
const t = useTranslations("Portfolio");
let projects = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

projects = projects.map((project, index)=>  {
project.title = t(`portfolio.${index}.title`)
project.description = t(`portfolio.${index}.description`)
return project
})

  return (
<PortfolioContainer scrollBtn={t('portfolioButton')} scrollTitle={t('title')} projects={projects} hireTitle={t('contact.title')} hireBtn={t('contact.button')} hireSubtitle={t('contact.role')}/>
  );
};

export default PortfolioPage;
