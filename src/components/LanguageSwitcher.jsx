import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="languageWrapper">
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("uz")}>Uzbek</button>
      <button onClick={() => changeLanguage("ru")}>Russian</button>
    </div>
  );
};

export default LanguageSwitcher;
