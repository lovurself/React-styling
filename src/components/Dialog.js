import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './Button'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(200px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(200px);
  }
`;

// 알림박스가 뜰 때 배경 설정
const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.8);

  animation: ${fadeIn} 0.25s ease-out forwards;

  ${props => props.disappear && css`
    animation-name: ${fadeOut};
  `}
`;

// 흰색 알림 박스
const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  animation: ${slideUp} 0.25s ease-out forwards;

  ${props => props.disappear && css`
    animation-name: ${slideDown};
  `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ShortMarginButton = styled(Button)`
  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

function Dialog({ title, children, confirmText, cancelText, visible, onConfirm, onCancel }) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible true -> false되는 시점을 캐치하기 위해서 localVisible 사용
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if(!localVisible && !animate) return null;

  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color='gray' onClick={onCancel}>{cancelText}</ShortMarginButton>
          <ShortMarginButton color='pink' onClick={onConfirm}>{confirmText}</ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  )
};

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인'
}

export default Dialog;