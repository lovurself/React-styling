import React from 'react';
import styled from 'styled-components';
import Button from './Button'

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
  if(!visible) return null;
  return (
    <DarkBackground>
      <DialogBlock>
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