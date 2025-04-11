import { TableColumn } from 'react-data-table-component';
import { IOrder } from '../../../types/order';
import Button from '../../ui/Button';
import { ButtonColor, ButtonIconType } from '../../ui/Button/Button.constants';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Table from '../../table';
import {
  deleteOrder,
  getOrders,
  updateOrder,
} from '../../../services/order.service';
import { ChangeEvent, useState } from 'react';
import { useAuthRedirectOnError } from '../../../hooks/useAuthRedirectOnError';
import Loading from '../../ui/Loading';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Input from '../../ui/Input';
import useInputValue from '../../../hooks/useInputValue';

const OrderList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [isProcessingData, setIsProcessingData] = useState(false);

  const orderInput = useInputValue('');

  const [keyword, setKeyword] = useState('');

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['orders', page, pageSize, sortField, sortOrder, keyword],
    queryFn: () => getOrders(page, pageSize, keyword, '', sortField, sortOrder),
  });

  const completeOrderMutation = useMutation({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string;
      payload: { status: string };
    }) => {
      return await updateOrder(id, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  // handle delete order
  const deleteOrderMutation = useMutation({
    mutationFn: async (id: string) => {
      return await deleteOrder(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  useAuthRedirectOnError(isError, error);

  const columns: TableColumn<IOrder>[] = [
    {
      name: 'No.',
      cell: (_row, index) => (page - 1) * pageSize + index + 1,
      width: '60px',
      sortable: false,
    },
    {
      name: 'Customer Name',
      selector: (row: IOrder) => row.customer_name,
      sortable: true,
      sortField: 'customer_name',
    },
    {
      name: 'Table Number',
      selector: (row: IOrder) => row.table_number,
      sortable: true,
      sortField: 'table_number',
    },
    {
      name: 'Status',
      selector: (row: IOrder) => row.status,
      sortable: true,
      sortField: 'status',
    },
    {
      name: 'Total',
      selector: (row: IOrder) => row.total,
      sortable: true,
      sortField: 'total',
    },
    {
      name: '',
      cell: () => null,
      grow: 0,
      width: '150px',
      style: {
        paddingRight: '150px',
        margin: 0,
        backgroundColor: 'transparent',
      },
      omit: true,
    },
    {
      name: 'Action',
      id: 'action-button',
      width: '150px',
      cell: (row) => (
        <div className="action-button-container">
          {row.status !== 'COMPLETED' && (
            <Button
              id={`complete-${row.id}`}
              onClick={() => handleComplete(row.id)}
              className="small"
              isIcon
              isCircularIcon
              color={ButtonColor.SUCCESS}
              iconType={ButtonIconType.COMPLETE}
            />
          )}
          <Button
            id={`detail-${row.id}`}
            onClick={() => openOrderDetail(row.id)}
            className="small"
            isIcon
            isCircularIcon
            iconType={ButtonIconType.REDIRECT}
          />
          <Button
            id={`delete-${row.id}`}
            onClick={() => handleDelete(row.id)}
            className="small"
            isIcon
            isCircularIcon
            color={ButtonColor.DANGER}
            iconType={ButtonIconType.DELETE}
          />
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  const handleComplete = async (id: string) => {
    try {
      setIsProcessingData(true);
      const payload = { status: 'COMPLETED' };
      await completeOrderMutation.mutateAsync({ id, payload });
      toast.success('Order marked as completed!');
    } catch (error: any) {
      toast.error(error?.message ?? 'Failed to complete order');
      useAuthRedirectOnError(true, error);
    } finally {
      setIsProcessingData(false);
    }
  };

  const openOrderDetail = (id: string) => {
    navigate(`/orders/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      setIsProcessingData(true);
      const result = await deleteOrderMutation.mutateAsync(id);
      toast.success(result.message);
    } catch (error: any) {
      toast.error(error?.message ?? 'Failed to delete order');
      useAuthRedirectOnError(true, error);
    } finally {
      setIsProcessingData(false);
    }
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handlePerRowsChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  const handleSort = (column: TableColumn<IOrder>, sortDirection: string) => {
    if (!!column) {
      setSortField(column.sortField || '');
      setSortOrder(sortDirection);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    orderInput.setInputValue(e, (newVal: string) => {
      if (!newVal) {
        setKeyword(newVal);
      }
    });
  };

  const handleSearch = () => {
    setKeyword(orderInput.inputValue);
  };

  const handleAddNew = () => {
    navigate('/menus');
  };

  const getOrderData = () => {
    if (!!data) {
      return data.data;
    } else return [];
  };

  const getTotalRows = () => {
    if (!!data) {
      const metadata = data.metadata;
      return !!metadata ? metadata.total : 0;
    } else return 0;
  };

  return (
    <main className="layout">
      {isProcessingData && <Loading />}
      <header className="layout-header">
        <Input
          id="orders-search"
          width="100%"
          value={orderInput.inputValue}
          onChange={onInputChange}
          isSearch
          isRenderSearch
          onSearchClick={handleSearch}
        />
        <Button
          id="add-new-order"
          color={ButtonColor.SECONDARY}
          onClick={handleAddNew}
          isIcon
          iconType={ButtonIconType.PLUS}
        />
      </header>
      <Table
        id="orders"
        columns={columns}
        isLoading={isLoading}
        data={getOrderData()}
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

export default OrderList;
