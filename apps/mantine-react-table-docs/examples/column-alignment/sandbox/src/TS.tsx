import React, { FC, useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { data, Person } from './makeData';

const Example: FC = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 100,
        mantineTableHeadCellProps: {
          align: 'center',
        },
        mantineTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 100,
        mantineTableHeadCellProps: {
          align: 'center',
        },
        mantineTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'age',
        header: 'Age',
        mantineTableHeadCellProps: {
          align: 'right',
        },
        mantineTableBodyCellProps: {
          align: 'right',
        },
      },
      {
        accessorKey: 'salary',
        header: 'Salary',
        mantineTableHeadCellProps: {
          align: 'right',
        },
        mantineTableBodyCellProps: {
          align: 'right',
        },
        Cell: ({ cell }) =>
          cell
            .getValue<number>()
            .toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      },
    ],
    [],
  );

  return <MantineReactTable columns={columns} data={data} />;
};

export default Example;
