import React from 'react';
import styled, { keyframes } from 'styled-components';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Define a bounce animation
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

// Define the styled button
const StyledButton = styled.button`
  background-color: #2f363d;
  width: 60px;  /* Slightly larger for better touch interaction */
  height: 60px;
  color: white;
  border: none;
  border-radius: 50%; /* Make it circular */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: fixed; /* Make it fixed position */
  bottom: 20px; /* Adjust bottom position */
  right: 20px; /* Adjust right position */
  box-shadow: 0px 10px 30px rgba(118, 85, 225, 0.3); /* Floating shadow */
  font-size: 24px; /* Adjust icon size */
  z-index: 1000; /* Ensure it stays on top */
  animation: ${bounce} 2s infinite; /* Apply bounce animation */
  touch-action: manipulation; /* Improve touch interactions */
  user-select: none; /* Prevent text selection on double-tap */
  border: 2px solid transparent; /* Increase tappable area */
  
  /* Add a hover effect */
  &:hover {
    background-color: rgba(0, 0, 0, 0); /* Warna hitam dengan transparansi 0% */
  }
`;

// Define the Draggable Button component
const DraggableButton = ({ onClick, icon }) => (
  <Draggable>
    <StyledButton onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </StyledButton>
  </Draggable>
);

export default DraggableButton;
