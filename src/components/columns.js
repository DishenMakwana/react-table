import { format } from 'date-fns';
// import { ColumnFilter } from './ColumnFilter';

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    Footer: 'Id',
    // Filter: ColumnFilter,
    disableFilters: true,
    sticky: 'left',
  },
  {
    Header: 'First Name',
    accessor: 'first_name',
    Footer: 'First Name',
    // Filter: ColumnFilter,
    sticky: 'left',
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
    Footer: 'Last Name',
    // Filter: ColumnFilter,
    sticky: 'left',
  },
  {
    Header: 'Date of Birth',
    accessor: 'date_of_birth',
    Footer: 'Date of Birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
    // Filter: ColumnFilter,
  },
  {
    Header: 'Country',
    accessor: 'country',
    Footer: 'Country',
    // Filter: ColumnFilter,
  },
  {
    Header: 'Phone',
    accessor: 'phone',
    Footer: 'Phone',
    // Filter: ColumnFilter,
  },
  {
    Header: 'Email',
    accessor: 'email',
    Footer: 'Email',
  },
  {
    Header: 'Age',
    accessor: 'age',
    Footer: 'Age',
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
      },
    ],
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
      },
    ],
  },
];
