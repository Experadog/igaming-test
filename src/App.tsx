import React, { useState } from 'react';
import styled from 'styled-components';
import { useGeo } from './context/GeoContext';
import GameModal from './components/GameModal';
import { MainContent } from './components/sections/MainContent';
import { Footer } from './components/layout/Footer';


const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow-x: hidden;
`;

const App = () => {
    const { config } = useGeo();
    const [isGameOpen, setIsGameOpen] = useState(false);
    const gameUrl = `
        https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&    channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=${config.lang}
    `;

    return (
        <PageWrapper>
            <MainContent onOpen={() => setIsGameOpen(true)} />
            <Footer />
            {isGameOpen && (
                <GameModal
                    url={gameUrl}
                    onClose={() => setIsGameOpen(false)}
                />
            )}
        </PageWrapper>
    );
};

export default App;