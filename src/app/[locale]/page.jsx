import { useTranslations } from "next-intl";
import Hero from "../../components/Hero";

const Homepage = ({params: { locale },} ) => {
  const t = useTranslations("Index");
  return (
    <div >
      <Hero
        locale={locale}
        title={t("title")}
        description={t("description")}
        contactBtn={t("contactButton")}
        workBtn={t("portfolioButton")}
      />
    </div>
  );
};

export default Homepage;
