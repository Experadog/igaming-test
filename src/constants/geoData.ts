import kgMain from '../assets/images/human-KG.png';
import gbMain from '../assets/images/human-GB.png';
import brMain from '../assets/images/human-BR.png';
import trMain from '../assets/images/human-TR.png';
import deMain from '../assets/images/human-DE.png';
import logo from '../assets/images/logo.png';

export type CountryCode = 'KG' | 'GB' | 'BR' | 'TR' | 'DE';

export interface GeoConfig {
    name: string;
    nativeName: string;
    flag: string;
    primaryColor: string;
    secondaryColor: string;
    lang: string;
    footerImage?: string;
    gameLogo?: string;
    translations: {
        title: string;
        description: string;
        ageControl: string;
        socials: string;
        license: string;
        buttonOpen: string;
        buttonClose: string;
        buttonInstall: string;
    };
}

export const GEO_DATA: Record<CountryCode, GeoConfig> = {
    KG: {
        name: 'Kyrgyzstan',
        nativeName: 'Кыргызстан',
        flag: '🇰🇬',
        primaryColor: '#E31E24',
        secondaryColor: '#FFD100',
        lang: 'ky',
        footerImage: kgMain,
        gameLogo: logo,
        translations: {
            title: 'Мыкты казино оюндар',
            description: 'Каалаган убакта, каалаган жерде ойно',
            ageControl: '18+ гана',
            license: 'Казино Anjouan Gaming Authority тарабынан лицензияланган',
            socials: 'Биз социалдык тармактарда:',
            buttonOpen: 'Ойноону баштоо',
            buttonClose: 'Жабуу',
            buttonInstall: 'Колдонмону орнотуу',
        },
    },

    GB: {
        name: 'United Kingdom',
        nativeName: 'English',
        flag: '🇬🇧',
        primaryColor: '#00247D',
        secondaryColor: '#cf142b',
        lang: 'en',
        footerImage: gbMain,
        gameLogo: logo,
        translations: {
            title: 'Download Casino',
            description: 'Play Min anywhere, anytime',
            ageControl: 'Only 18+',
            license: 'Casino is certified by the Anjouan Gaming Authority',
            socials: 'Us on social media:',
            buttonOpen: 'Open Game',
            buttonClose: 'Close',
            buttonInstall: 'Install App',
        },
    },

    BR: {
        name: 'Brazil',
        nativeName: 'Português',
        flag: '🇧🇷',
        primaryColor: '#009C3B',
        secondaryColor: '#FFDF00',
        lang: 'pt',
        footerImage: brMain,
        gameLogo: logo,
        translations: {
            title: 'Baixe o Cassino',
            description: 'Jogue a qualquer hora, em qualquer lugar',
            ageControl: 'Apenas 18+',
            license: 'Cassino licenciado pela Anjouan Gaming Authority',
            socials: 'Estamos nas redes sociais:',
            buttonOpen: 'Abrir Jogo',
            buttonClose: 'Fechar',
            buttonInstall: 'Instalar App',
        },
    },

    TR: {
        name: 'Turkey',
        nativeName: 'Türkçe',
        flag: '🇹🇷',
        primaryColor: '#E30A17',
        secondaryColor: '#FFFFFF',
        lang: 'tr',
        footerImage: trMain,
        gameLogo: logo,
        translations: {
            title: 'Casino İndir',
            description: 'İstediğin zaman, istediğin yerde oyna',
            ageControl: 'Sadece 18+',
            license: 'Casino, Anjouan Gaming Authority tarafından lisanslıdır',
            socials: 'Sosyal medyada biz:',
            buttonOpen: 'Oyunu Aç',
            buttonClose: 'Kapat',
            buttonInstall: 'Uygulamayı Yükle',
        },
    },

    DE: {
        name: 'Germany',
        nativeName: 'Deutsch',
        flag: '🇩🇪',
        primaryColor: '#000000',
        secondaryColor: '#DD0000',
        lang: 'de',
        footerImage: deMain,
        gameLogo: logo,
        translations: {
            title: 'Casino herunterladen',
            description: 'Spiele jederzeit und überall',
            ageControl: 'Nur ab 18+',
            license: 'Casino ist von der Anjouan Gaming Authority lizenziert',
            socials: 'Folge uns in den sozialen Netzwerken:',
            buttonOpen: 'Spiel öffnen',
            buttonClose: 'Schließen',
            buttonInstall: 'App installieren',
        },
    },
};
