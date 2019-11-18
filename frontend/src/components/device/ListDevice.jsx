import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { PageHeader, Table } from '../lib';
import { deviceListData } from '../../data';

const { columns, rows } = deviceListData;

const ListDevice = () => {
  const PageHeaderEl = useRef(null);
  const [pageHeaderElHeight, setPageHeaderElHeight] = useState(0);
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  const handleSwitchChange = event => {
    setChecked(event.target.checked);
  };

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
        checked={checked}
        headerText="Device List"
        buttonLabel={`Add ${checked ? 'Employee' : 'Device'}`}
        switchLabel="New employee?"
        onButtonClick={() => {
          history.push(`/${checked ? 'employee' : 'device'}/add`);
        }}
        onSwitchChange={handleSwitchChange}
      />
      <Table
        columns={columns}
        rows={rows}
        otherHeights={pageHeaderElHeight}
        orderBy="id"
        onSort={(order, orderBy) =>
          console.log(`order ${order} && orderBy ${orderBy}`)
        }
        onRowEdit={name => history.push(`/devices/${name}/edit`)}
        onRowDelete={name => console.log(`delete ${name}`)}
      />
    </>
  );
};

export default ListDevice;
