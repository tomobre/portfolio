import { useTranslations } from "next-intl";
import Hero from "../../components/Hero";

const Homepage = () => {
  const t = useTranslations("Index");
  return (
    <div>
      <Hero
        title={t("title")}
        description={t("description")}
        contactBtn={t("contactButton")}
        workBtn={t("portfolioButton")}
      />
    </div>
  );
};

export default Homepage;
