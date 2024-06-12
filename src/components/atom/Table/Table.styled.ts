import styled, { css } from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.tableHead};
  color: ${({ theme }) => theme.tableHeaderTextColor};
`;
export const TableBody = styled.tbody`
  background-color: ${({ theme }) => theme.tableBody};
  color: color: ${({ theme }) => theme.tableBodyTextColor};;
`;
export const TableRow = styled.tr<{ isHeader?: boolean }>`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.tableRowEven};
  }
  ${({ isHeader }) =>
    !isHeader &&
    css`
      &:hover {
        background-color: #ddd;
      }
    `}
`;

TableRow.shouldForwardProp = (prop) => !['isHeader'].includes(prop);

export const TableHeaderCell = styled.th<{ width?: string; textAlign?: string }>`
  padding: 12px 15px;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-weight: bold;
  width: ${({ width }) => width};
`;
TableHeaderCell.shouldForwardProp = (prop) => !['textAlign'].includes(prop);

export const TableDataCell = styled.td`
  padding: 12px 15px;
`;
