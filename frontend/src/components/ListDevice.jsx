import React, { useRef, useState, useEffect } from 'react';
import { PageHeader, Table } from './lib';

const columns = [
  {
    id: 'name',
    label: 'Name',
    minWidth: 170,
    align: 'right',
    render: row => <span>{row.name}</span>,
  },
  {
    id: 'code',
    label: 'ISO\u00a0Code',
    minWidth: 100,
    align: 'right',
    render: row => <span>{row.code}</span>,
  },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    render: row => <span>{row.population}</span>,
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    render: row => <span>{row.size}</span>,
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    render: row => <span>{row.density}</span>,
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
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
];

const ListDevice = () => {
  const PageHeaderEl = useRef(null);
  const [pageHeaderElHeight, setPageHeaderElHeight] = useState(0);

  useEffect(() => {
    const el = document.getElementById('PageHeader');
    const elMarginBottom = parseInt(
      window.getComputedStyle(el).getPropertyValue('margin-bottom'),
      10
    );

    setPageHeaderElHeight(PageHeaderEl.current.offsetHeight + elMarginBottom);
  }, []);

  return (
    <>
      <PageHeader
        ref={PageHeaderEl}
        headerText="Device List"
        buttonLabel="Add Device"
        onButtonClick={() => console.log('add device')}
      />
      <Table columns={columns} rows={rows} otherHeights={pageHeaderElHeight} />
    </>
  );
};

export default ListDevice;
