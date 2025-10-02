import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {useLanguage} from "../context/LanguageContext.tsx";

interface HeaderProps {
    view: 'news' | 'categories';
    setView: (view: 'news' | 'categories') => void;
}

export const Header = ({ view, setView }: HeaderProps) => {
    const { language, setLanguage, t } = useLanguage();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    News App
                </Typography>
                <Button
                    color="inherit"
                    onClick={() => setView('news')}
                    sx={{ fontWeight: view === 'news' ? 'bold' : 'normal' }}
                >
                    {t('news')}
                </Button>
                <Button
                    color="inherit"
                    onClick={() => setView('categories')}
                    sx={{ fontWeight: view === 'categories' ? 'bold' : 'normal' }}
                >
                    {t('categories')}
                </Button>
                <Button
                    color="inherit"
                    onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                >
                    {language === 'en' ? 'DE' : 'EN'}
                </Button>
            </Toolbar>
        </AppBar>
    );
};