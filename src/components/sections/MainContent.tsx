import React from 'react';
import styled from 'styled-components';
import { Button, Box } from '@mui/material';
import { useGeo } from '../../context/GeoContext';
import roulette from '../../assets/images/roulette.png';
import bgImage from '../../assets/images/bg.png';

const MainWrapper = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;

  background-image: url('${bgImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const GameAssets = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  img.logo {
    max-height: 120px;
    @media (max-width: 768px) { max-height: 80px; }
  }

  img.roulette {
    max-height: 288px;
    @media (max-width: 768px) { max-height: 200px; }
    @media (max-width: 480px) { max-height: 160px; }
  }
`;

export const MainContent = ({ onOpen }: { onOpen: () => void }) => {
    const { config } = useGeo();

    return (
        <MainWrapper>
            <GameAssets>
                <img src={config.gameLogo} alt="game logo" className="logo" />
                <img src={roulette} alt="roulette" className="roulette" />
            </GameAssets>

            <Button
                variant="contained"
                onClick={onOpen}
                sx={{
                    width: '358.5px',
                    height: '56px',
                    padding: '17px 110px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    whiteSpace: 'nowrap',
                    background: `linear-gradient(to right, ${config.primaryColor}, ${config.secondaryColor})`
                }}
            >
                {config.translations.buttonOpen}
            </Button>
        </MainWrapper>
    );
};