import TransitionProviderClient from './TransitionProviderClient'
import { useTranslations } from "next-intl";

const TransitionProvider = ({ children, locale }) => {
    const t = useTranslations("Layout");
    const navbar = {home: t('navBar.home'), 
    about: t('navBar.about'), 
    portfolio: t('navBar.portfolio'), 
    contact: t('navBar.contact'), 
    locales: {
      spanish:  t('navBar.locales.spanish'),  
      english:  t('navBar.locales.english'), 
    }
  }

  return (
<TransitionProviderClient translations={navbar} children={children} locale={locale}/>
  );
};

export default TransitionProvider;
