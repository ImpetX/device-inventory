import React, { useRef, useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { PageHeader, Table } from '../lib';
import { deviceListData } from '../../data';

const history = createBrowserHistory();
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
        onButtonClick={() => {
          history.push('/device/add');
        }}
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
