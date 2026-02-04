import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

const GameFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
`;

interface GameModalProps {
  onClose: () => void;
  url: string;
}

const GameModal: React.FC<GameModalProps> = ({ onClose, url }) => {
  return (
    <Overlay>
      <Header>
        <IconButton 
          onClick={onClose} 
          sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </Header>
      <GameFrame 
        src={url} 
        allow="fullscreen" 
        title="Casino Game"
      />
    </Overlay>
  );
};

export default GameModal;