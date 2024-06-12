import { FakeData, SkeletonCell, SkeletonRow } from './TableSkeleton.styled';
import { Table, TableBody, TableHead, TableHeaderCell, TableRow } from '../Table';

export const TableSkeleton = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {Array.from({ length: 4 }, (_, index) => (
            <TableHeaderCell key={index}>
              <div style={{ opacity: 0 }}>Header</div>
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: 5 }, (_, rowIndex) => (
          <SkeletonRow key={rowIndex}>
            {Array.from({ length: 4 }, (_, cellIndex) => (
              <SkeletonCell key={cellIndex}>
                <FakeData />
              </SkeletonCell>
            ))}
          </SkeletonRow>
        ))}
      </TableBody>
    </Table>
  );
};
