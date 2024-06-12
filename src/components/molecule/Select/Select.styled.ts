import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  width: 200px;
`;

export const OptionList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  list-style-type: none;
`;

export const StyledOption = styled.li<{ isSelected?: boolean }>`
  color: black;
  background: ${({ isSelected }) => (isSelected ? '#4caf50' : 'white')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#1c1c1c')};
  font-weight: 500;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;

export const ErrorText = styled.p`
  font-size: 12px;
  margin-top: 4px;
  color: #ff3333;
`;
