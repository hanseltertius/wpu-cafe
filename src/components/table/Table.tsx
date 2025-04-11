import DataTable, { TableColumn } from 'react-data-table-component';
import styles from './Table.module.css';
import Input from '../ui/Input';

interface IPropTypes<T> {
  inputId?: string;
  inputValue?: string;
  columns: TableColumn<T>[];
  data: T[];
  setInputValue?: () => void;
  isLoading?: boolean;
  paginationDefaultPerPage: number;
  paginationPerPage: number;
  paginationTotalRows: number;
  isSearchVisible?: boolean;
  handleSort: (column: TableColumn<T>, sortDirection: string) => void;
  handlePageChange: (page: number) => void;
  handlePerRowsChange: (newPageSize: number) => void;
  handleSearch?: () => void;
}

const Table = <T,>(props: IPropTypes<T>) => {
  const {
    inputId = '',
    inputValue = '',
    columns,
    data,
    setInputValue = () => {},
    isLoading = false,
    isSearchVisible = false,
    paginationTotalRows,
    paginationDefaultPerPage,
    paginationPerPage,
    handleSort = () => {},
    handlePageChange = () => {},
    handlePerRowsChange = () => {},
    handleSearch = () => {},
  } = props;

  return (
    <section className={styles['table-layout-container']}>
      {isSearchVisible && (
        <header className="layout-header">
          <Input
            id={inputId}
            width="100%"
            value={inputValue}
            onChange={setInputValue}
            isSearch
            isRenderSearch
            onSearchClick={handleSearch}
          />
        </header>
      )}
      <section className="layout-content">
        <section className={styles['table-container']}>
          <section className={styles['table-content']}>
            <DataTable
              columns={columns}
              data={data}
              progressPending={isLoading}
              fixedHeader
              pagination
              paginationServer
              paginationTotalRows={paginationTotalRows}
              paginationDefaultPage={paginationDefaultPerPage}
              paginationPerPage={paginationPerPage}
              paginationRowsPerPageOptions={[5, 10, 20, 50]}
              onSort={handleSort}
              onChangePage={handlePageChange}
              onChangeRowsPerPage={handlePerRowsChange}
              fixedHeaderScrollHeight="calc(100vh - 164px)"
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Table;
