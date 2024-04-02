import { useTranslations } from "next-intl";
import ContactContainer from "@/components/ContactContainer";

const ContactPage = () => {
  const t = useTranslations("Contact");
  return (
    <ContactContainer
      formMessageLabel={t("form.messageLabel")}
      formEmailLabel={t("form.emailLabel")}
      formBye={t("form.bye")}
      formBtn={t("form.button")}
      formSuccess={t("form.success")}
      formErr={t("form.error")}
      textAnim={t("animation")}
    />
  );
};

export default ContactPage;
