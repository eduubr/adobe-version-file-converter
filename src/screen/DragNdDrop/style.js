import styled, { css } from 'styled-components'

const dragActive = css`
  border-color: #78e5d5;
`;

export const DropContainer = styled.div.attrs({
  className: 'drp-container'
})`
  flex: 1;
  padding: 16px;
  border: 1px dashed #322d41;
  border-radius: 4px;
  cursor: pointer;
  background: ${props => props.theme.backgrounds.darker};

  ${props => props.isDragActive && dragActive}
`;

const messageColors = {
  default: '#999',
  error: '#e57878',
  success: '#78e5d5'
}

export const UploadMessage = styled.p`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: ${props => messageColors[props.type || 'default']};

  `;
