import { useState, useRef } from 'react';
import { Container, Box } from '@mui/material';
import { Header } from './components/Header';
import { NewsView } from './components/NewsView';
import { CategoriesView } from './components/CategoriesView';
import { ScrollToTop } from './components/ScrollToTop';
import {LanguageProvider} from "./context/LanguageContext.tsx";

export default function App() {
    const [view, setView] = useState<'news' | 'categories'>('news');
    const topRef = useRef<HTMLDivElement>(null);

    return (
        <LanguageProvider>
            <Box ref={topRef}>
                <Header view={view} setView={setView} />

                <Container sx={{ mt: 4, mb: 4 }}>
                    {view === 'news' ? <NewsView /> : <CategoriesView />}
                </Container>

                <ScrollToTop topRef={topRef} />
            </Box>
        </LanguageProvider>
    );
}