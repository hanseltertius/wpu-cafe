import DataTable, { TableColumn } from 'react-data-table-component';
import styles from './Table.module.css';

interface IPropTypes<T> {
  id: string;
  columns: TableColumn<T>[];
  data: T[];
  isLoading?: boolean;
  paginationDefaultPerPage: number;
  paginationPerPage: number;
  paginationTotalRows: number;
  handleSort: (column: TableColumn<T>, sortDirection: string) => void;
  handlePageChange: (page: number) => void;
  handlePerRowsChange: (newPageSize: number) => void;
}

const Table = <T,>(props: IPropTypes<T>) => {
  const {
    id,
    columns,
    data,
    isLoading = false,
    paginationTotalRows,
    paginationDefaultPerPage,
    paginationPerPage,
    handleSort = () => {},
    handlePageChange = () => {},
    handlePerRowsChange = () => {},
  } = props;

  // set height, will use default from here
  return (
    <section id={id} className={styles['table-layout-container']}>
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
