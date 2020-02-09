import NextI18Next from "../node_modules/next-i18next/dist/commonjs/index";

const NextI18NextInstance = new NextI18Next({
  localePath: typeof window === "undefined" ? "public/locales" : "locales",
  debug: false,
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  load: "all",
  defaultNS: "global",
  localeSubpaths: {},
  fallbackLng: "hu",
  defaultLanguage: "hu",
  otherLanguages: ["hu"],
  ignoreRoutes: ["/_next", "/static", "/api"]
});

export default NextI18NextInstance;
export const {
  Router,
  withTranslation,
  Link,
  useTranslation,
  appWithTranslation,
  config,
  i18n
} = NextI18NextInstance;
