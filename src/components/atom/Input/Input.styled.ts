import styled from 'styled-components';

const BaseComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HelperText = styled.p`
  font-size: 12px;
  margin-bottom: 4px;
  color: #cccccc;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  min-width: 150px;
`;

const StyledInput = styled.input<{ hasIcon?: boolean }>`
  width: 100%;
  padding: 10px 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding-right: ${({ hasIcon }) => (hasIcon ? '30px' : '0')};

  &:focus {
    border-color: #4caf50;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;
StyledInput.shouldForwardProp = (prop) => !['hasIcon'].includes(prop);

const IconContainer = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  right: 0;
  bottom: 0;
  top: 0;
  padding-right: 6px;
`;

const ErrorText = styled.p`
  font-size: 12px;
  margin-top: 4px;
  color: #ff3333;
`;

export { BaseComponent, HelperText, InputContainer, StyledInput, IconContainer, ErrorText };
