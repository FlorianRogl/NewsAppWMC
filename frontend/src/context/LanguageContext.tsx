import { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => void;
    t: (key: string) => string;
}

const translations = {
    de: {
        news: 'Nachrichten',
        categories: 'Kategorien',
        search: 'Suchen',
        category: 'Kategorie',
        articleCount: 'Artikel Anzahl',
        source: 'Quelle',
        all: 'Alle',
        loading: 'Lädt...',
        author: 'Autor',
        articleCountLabel: 'Anzahl der Artikel',
    },
    en: {
        news: 'News',
        categories: 'Categories',
        search: 'Search',
        category: 'Category',
        articleCount: 'Article Count',
        source: 'Source',
        all: 'All',
        loading: 'Loading...',
        author: 'Author',
        articleCountLabel: 'Number of Articles',
    }
};

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {},
    t: (key) => key
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState('en');

    const t = (key: string) => {
        const lang = language as keyof typeof translations;
        const translationKey = key as keyof typeof translations.en;
        return translations[lang][translationKey] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
    {children}
    </LanguageContext.Provider>
);
};