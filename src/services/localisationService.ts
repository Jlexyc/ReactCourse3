import React from 'react';

export enum UserLocal {
  EN = 'en',
  UA = 'ua',
}

interface LocalizedStringKeys {
  searchButtonTitle: string;
  movieCardActionTitle: string;
  castDetailsActionTitle: string;
}

interface LocalizedObject {
  [UserLocal.EN]: LocalizedStringKeys;
  [UserLocal.UA]: LocalizedStringKeys;
}

const localizedKeys: LocalizedObject = {
  en: {
    searchButtonTitle: 'Search',
    movieCardActionTitle: 'Learn More',
    castDetailsActionTitle: 'Get details',
  },
  ua: {
    searchButtonTitle: 'Пошук',
    movieCardActionTitle: 'Дізнатись більше',
    castDetailsActionTitle: 'Деталі',
  },
};

const localeToUse = (localStorage.getItem('userLocale') || 'en') as UserLocal;

export type LocalizedStrings = keyof LocalizedStringKeys;

export const getLocalisedString = (key: LocalizedStrings) => {
  return localizedKeys[localeToUse][key];
};

export const getLocalizedStrings = () => {
  return localizedKeys[localeToUse];
}

export const LanguageContext = React.createContext('language');
