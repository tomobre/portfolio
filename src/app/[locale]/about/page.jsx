import { useTranslations } from "next-intl";
import Experience from "@/components/Experience";
import Biography from "@/components/Biography";
import Skills from "@/components/Skills";
import AboutContainer from "@/components/AboutContainer";

const AboutPage = () => {
  const t = useTranslations("About");

  return (
    <AboutContainer>
      {/* CONTAINER */}

      {/* TEXT CONTAINER */}
      <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
        {/* BIOGRAPHY  */}
        <Biography
          title={t("biography.title")}
          description={t("biography.description")}
          quote={t("biography.footer")}
        />
        {/* SKILLS  */}
        <Skills></Skills>
        {/* EXPERIENCE  */}
        <Experience></Experience>
      </div>
      {/* SVG CONTAINER */}
    </AboutContainer>
  );
};

export default AboutPage;
