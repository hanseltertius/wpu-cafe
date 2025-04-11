import { TableColumn } from 'react-data-table-component';
import { IReview } from '../../../types/review';
import { useQueries } from '@tanstack/react-query';
import { getReviews } from '../../../services/review.service';
import { useState } from 'react';
import { getMenus } from '../../../services/menu.service';
import { IMenu } from '../../../types/menu';
import Table from '../../table';

const ReviewList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const [reviewQuery, menuQuery] = useQueries({
    queries: [
      {
        queryKey: ['reviews', page, pageSize, sortField, sortOrder],
        queryFn: () => getReviews(page, pageSize, '', 0, sortField, sortOrder),
      },
      {
        queryKey: ['menus'],
        queryFn: () => getMenus(1, 25),
      },
    ],
  });

  const columns: TableColumn<IReview>[] = [
    {
      name: 'Menu',
      selector: (row: IReview) => {
        const menuItemId = row.menu_item_id;

        if (!!menuQuery) {
          const menuDataContainer = menuQuery.data;

          if (!!menuDataContainer) {
            const menuList = menuDataContainer.data;

            if (menuList.length) {
              const menuItem: IMenu = menuList.find(
                (i: IMenu) => i.id === menuItemId,
              );
              if (!!menuItem) return menuItem.name;
              else return menuItemId;
            } else return menuItemId;
          } else return menuItemId;
        } else return menuItemId;
      },
      sortable: false,
    },
    {
      name: 'Reviewer Name',
      selector: (row: IReview) => row.reviewer_name,
      sortable: true,
      sortField: 'reviewer_name',
    },
    {
      name: 'Rating',
      selector: (row: IReview) => row.rating,
      sortable: true,
      sortField: 'rating',
    },
    {
      name: 'Comment',
      selector: (row: IReview) => row.comment ?? '',
      sortable: true,
      sortField: 'comment',
    },
  ];

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handlePerRowsChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  const handleSort = (column: TableColumn<IReview>, sortDirection: string) => {
    if (!!column) {
      setSortField(column.sortField || '');
      setSortOrder(sortDirection);
    }
  };

  const isReviewLoading = () => {
    if (!!reviewQuery) {
      const isLoading = reviewQuery.isLoading;
      return isLoading;
    } else return false;
  };

  const getReviewData: () => IReview[] = () => {
    if (!!reviewQuery) {
      const dataContainer = reviewQuery.data;

      if (!!dataContainer) {
        return dataContainer.data;
      } else return [];
    } else return [];
  };

  const getTotalRows = () => {
    if (!!reviewQuery) {
      const dataContainer = reviewQuery.data;

      if (!!dataContainer) {
        const metaData = dataContainer.metadata;
        if (!!metaData) return metaData.total;
        else return 0;
      } else return 0;
    } else return 0;
  };

  return (
    <main className="layout">
      <Table
        id="reviews"
        columns={columns}
        isLoading={isReviewLoading()}
        data={getReviewData()}
        paginationTotalRows={getTotalRows()}
        handleSort={handleSort}
        handlePageChange={handlePageChange}
        handlePerRowsChange={handlePerRowsChange}
        paginationDefaultPerPage={page}
        paginationPerPage={pageSize}
      />
    </main>
  );
};

export default ReviewList;
