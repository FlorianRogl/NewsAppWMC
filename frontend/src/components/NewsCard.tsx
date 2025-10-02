import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import {useLanguage} from "../context/LanguageContext.tsx";

interface NewsCardProps {
    title: string;
    author: string;
    publishedAt: string;
    content: string;
    image: string;
    source: string;
}

export const NewsCard = ({
                             title,
                             author,
                             publishedAt,
                             content,
                             image,
                             source
                         }: NewsCardProps) => {
    const { t } = useLanguage();

    return (
        <Card sx={{ mb: 3 }}>
            {image && (
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={title}
                />
            )}
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                    {t('author')}: {author || 'Unknown'} | {new Date(publishedAt).toLocaleDateString()}
                </Typography>
                <Chip label={source} size="small" sx={{ mb: 2 }} />
                <Typography variant="body2">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
};