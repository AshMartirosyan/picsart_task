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

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const ErrorText = styled.p`
  font-size: 12px;
  margin-top: 4px;
  color: #ff3333;
`;

export { BaseComponent, HelperText, StyledTextArea, ErrorText };
