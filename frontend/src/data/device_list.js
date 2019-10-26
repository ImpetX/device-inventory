import React from 'react';

function createData(name, code, population, size) {
  return { name, code, population, size };
}

const deviceListData = {
  columns: [
    {
      id: 'id',
      label: 'Id',
      minWidth: 170,
      sortable: true,
      render: row => <span>{row.name}</span>,
    },
    {
      id: 'name',
      label: 'Name',
      minWidth: 100,
      sortable: true,
      render: row => <span>{row.code}</span>,
    },
    {
      id: 'Employee',
      label: 'Employee',
      minWidth: 170,
      sortable: true,
      render: row => <span>{row.population}</span>,
    },
    {
      id: 'Department',
      label: 'Department',
      minWidth: 170,
      sortable: true,
      render: row => <span>{row.size}</span>,
    },
  ],
  rows: [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ],
};

export default deviceListData;
