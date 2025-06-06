import { useTranslations } from "next-intl";
import Experience from "@/components/Experience";
import Biography from "@/components/Biography";
import Skills from "@/components/Skills";
import AboutContainer from "@/components/AboutContainer";

const AboutPage = () => {
  const t = useTranslations("About");

  const experiences = [0, 1, 2, 3, 4, 5].map((num) => {
    return {
      title: t(`experience.experience.${num}.title`),
      description: t(`experience.experience.${num}.description`),
      company: t(`experience.experience.${num}.company`),
      years: t(`experience.experience.${num}.years`),
    };
  });

  return (
    <AboutContainer>
      {/* CONTAINER */}

      {/* TEXT CONTAINER */}
      <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-32 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
        {/* BIOGRAPHY  */}
        <Biography
          title={t("biography.title")}
          description={t("biography.description")}
          quote={t("biography.footer")}
        />
        {/* SKILLS  */}
        <Skills title={t("skills.title")}></Skills>
        {/* EXPERIENCE  */}
        <Experience
          title={t("experience.title")}
          experiences={experiences}
        ></Experience>
      </div>
      {/* SVG CONTAINER */}
    </AboutContainer>
  );
};

export default AboutPage;
