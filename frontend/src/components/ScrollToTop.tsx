import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

interface ScrollToTopProps {
    topRef: React.RefObject<HTMLDivElement | null>;
}

export const ScrollToTop = ({ topRef }: ScrollToTopProps) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    if (!showButton) return null;

    return (
        <Button
            variant="contained"
            onClick={scrollToTop}
            sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                minWidth: 56,
                height: 56,
                borderRadius: '50%'
            }}
        >
            <ArrowUpward />
        </Button>
    );
};