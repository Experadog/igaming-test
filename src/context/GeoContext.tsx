import React, { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GEO_DATA, CountryCode, GeoConfig } from '../constants/geoData';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;
        wide: true;
    }
}

interface GeoContextType {
    country: CountryCode;
    setCountry: (code: CountryCode) => void;
    config: GeoConfig;
}

const GeoContext = createContext<GeoContextType | undefined>(undefined);

export const GeoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [country, setCountry] = useState<CountryCode>('KG');

    const config = useMemo(() => GEO_DATA[country], [country]);

    const muiTheme = useMemo(() => createTheme({
        breakpoints: {
            values: {
                xs: 0,
                mobile: 480,
                tablet: 768,
                laptop: 1200,
                desktop: 1440,
                wide: 1920,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
        palette: {
            primary: {
                main: config.primaryColor,
            },
            secondary: {
                main: config.secondaryColor,
            },
        },
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
        },
    }), [config]);

    return (
        <GeoContext.Provider value={{ country, setCountry, config }}>
            <MuiThemeProvider theme={muiTheme}>
                <StyledThemeProvider theme={muiTheme}>
                    {children}
                </StyledThemeProvider>
            </MuiThemeProvider>
        </GeoContext.Provider>
    );
};

export const useGeo = () => {
    const context = useContext(GeoContext);
    if (!context) throw new Error('useGeo must be used within GeoProvider');
    return context;
};