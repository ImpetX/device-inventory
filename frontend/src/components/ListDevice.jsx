import React, { useRef, useState, useEffect } from 'react';
import { PageHeader, Table } from './lib';
import { deviceListData } from '../data';

const { columns, rows } = deviceListData;

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
      <Table
        columns={columns}
        rows={rows}
        otherHeights={pageHeaderElHeight}
        orderBy="id"
        onSort={(order, orderBy) =>
          console.log(`order ${order} && orderBy ${orderBy}`)
        }
        onRowEdit={name => console.log(`edit ${name}`)}
        onRowDelete={name => console.log(`delete ${name}`)}
      />
    </>
  );
};

export default ListDevice;
