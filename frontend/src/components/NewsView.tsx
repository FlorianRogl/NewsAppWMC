import { useState } from 'react';
import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNewsData } from '../hooks/useNewsData';
import { NewsCard } from './NewsCard';
import {useLanguage} from "../context/LanguageContext.tsx";

export const NewsView = () => {
    const { t, language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [sourceFilter, setSourceFilter] = useState<string>('all');

    // Diese werden direkt vom Hook verwendet
    const { articles, loading } = useNewsData('all', 10, language);

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.content.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSource = sourceFilter === 'all' || article.source.name === sourceFilter;
        return matchesSearch && matchesSource;
    });

    const sources = ['all', ...Array.from(new Set(articles.map(a => a.source.name)))];

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                {t('news')}
            </Typography>

            <TextField
                fullWidth
                label={t('search')}
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                    startAdornment: <Search />
                }}
                sx={{ mb: 3 }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>{t('source')}</InputLabel>
                <Select
                    value={sourceFilter}
                    label={t('source')}
                    onChange={(e: SelectChangeEvent) => setSourceFilter(e.target.value)}
                >
                    {sources.map(source => (
                        <MenuItem key={source} value={source}>
                            {source === 'all' ? t('all') : source}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography variant="body2" sx={{ mb: 2 }}>
                {t('articleCountLabel')}: {filteredArticles.length}
            </Typography>

            {loading ? (
                <Typography>{t('loading')}</Typography>
            ) : (
                filteredArticles.map((article, index) => (
                    <NewsCard
                        key={index}
                        title={article.title}
                        author={article.author}
                        publishedAt={article.publishedAt}
                        content={article.content}
                        image={article.image}
                        source={article.source.name}
                    />
                ))
            )}
        </Box>
    );
};