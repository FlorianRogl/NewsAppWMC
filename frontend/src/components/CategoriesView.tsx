import { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useNewsData } from '../hooks/useNewsData';
import { NewsCard } from './NewsCard';
import {useLanguage} from "../context/LanguageContext.tsx";

export const CategoriesView = () => {
    const { t, language } = useLanguage();
    const [category, setCategory] = useState<string>('general');
    const [max, setMax] = useState<number>(10);

    // Jetzt werden category und max wirklich verwendet!
    const { articles, loading } = useNewsData(category, max, language);

    const categories = ['general', 'business', 'technology', 'sports', 'health', 'science'];
    const counts = [1, 2, 5, 10];

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                {t('categories')}
            </Typography>

            <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>{t('category')}</InputLabel>
                <Select
                    value={category}
                    label={t('category')}
                    onChange={(e: SelectChangeEvent) => setCategory(e.target.value)}
                >
                    {categories.map(cat => (
                        <MenuItem key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>{t('articleCount')}</InputLabel>
                <Select
                    value={max.toString()}
                    label={t('articleCount')}
                    onChange={(e: SelectChangeEvent) => setMax(Number(e.target.value))}
                >
                    {counts.map(count => (
                        <MenuItem key={count} value={count.toString()}>
                            {count}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography variant="body2" sx={{ mb: 2 }}>
                {t('category')}: {category} - {max} {t('articleCountLabel').toLowerCase()}
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
                {t('articleCountLabel')}: {articles.length}
            </Typography>

            {loading ? (
                <Typography>{t('loading')}</Typography>
            ) : (
                articles.map((article, index) => (
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