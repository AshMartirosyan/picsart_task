import { Fragment, useCallback, useMemo, type FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import LeftArrow from '@/assets/icons/arrowLeft.svg';
import RightArrow from '@/assets/icons/arrowRight.svg';
import { IconButton } from '@/atom/Button';
import { List, PageItem } from './Pagination.styled';
import { type PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({ total, perPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = useMemo(() => Math.ceil(total / perPage), [total, perPage]);
  const pages = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [total]);

  const changePage = useCallback(
    (page: number) => () => {
      searchParams.set('page', page.toString());
      setSearchParams(searchParams);
    },
    [],
  );

  const pagesToRender = useMemo(
    () =>
      pages
        .filter((page) => {
          switch (currentPage) {
            case 1:
              return page <= currentPage + 3;
            case totalPages:
              return page >= currentPage - 3;
            case totalPages - 1:
              return page >= currentPage - 2;
            default:
              return page >= currentPage - 1 && page <= currentPage + 2;
          }
        })
        .map((page) => (
          <Fragment key={page.toString()}>
            <PageItem
              disabled={page === currentPage}
              buttonType={page === currentPage ? 'positive' : 'negative'}
              onClick={changePage(page)}>
              {page}
            </PageItem>
          </Fragment>
        )),
    [pages, currentPage, totalPages, changePage],
  );

  if (!total) {
    return null;
  }

  return (
    <List>
      <li>
        <IconButton onClick={changePage(currentPage - 1)}>
          <LeftArrow />
        </IconButton>
      </li>
      {pagesToRender}
      <li>
        <IconButton onClick={changePage(currentPage + 1)}>
          <RightArrow />
        </IconButton>
      </li>
    </List>
  );
};
