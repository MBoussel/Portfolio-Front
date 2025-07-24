export type LocaleType = {
  lang: "fr" | "en";
  toggleLocale: () => void;
  translations: TranslationsType;
};

export type TranslationsType = {
  homepage: {
    paragraph: string;
  };
}