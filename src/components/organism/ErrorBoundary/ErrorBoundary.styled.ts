import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  padding: 20px;
  margin: 20px 0;
  background-color: #4caf50;
  color: white;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

export const ErrorMessage = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ErrorDetails = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

export const ReloadButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: white;
  color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;
