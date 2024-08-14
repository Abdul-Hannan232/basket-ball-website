"use client"
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../services/ProductService';

export default function TemplateDemo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);


  return (
    <div className="card">
      <DataTable
        value={products}
        tableStyle={{ width: '95%', margin: 'auto', marginTop: '20px', border: '1px solid #CACACA', borderRadius: '20px', fontSize: "12px" }}
        className="custom-data-table custom-paginator"
        paginator
        rows={4}
        showGridlines
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        paginatorClassName="custom-paginator"
      >
        <Column
          field="id"
          header="ID"
          headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
          style={{ width: '5%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
        />
        <Column
          field="name"
          header="Display Name"
          headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
          style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
        />
        <Column
          field="location"
          header="Email"
          headerStyle={{ backgroundColor: '#FFF8B3', textAlign: "center", padding: '14px' }}
          style={{ width: '15%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
        />
        <Column
          field="courttype"
          header="Phone number"
          headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
          style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
        />
        <Column
          field="AVAILABILITY"
          header="Created on"
          headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
          style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
        />
        <Column
          field="PRICEhr"
          header="Remarks"
          headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
          style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
        />
        <Column
          field="POSTEDBY"
          header="Role"
          headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
          style={{ width: '6%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
        />

        {/* Column for actions (e.g., edit, delete) */}
        <Column
          headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
          body={(rowData) => (
            <div style={{ display: 'flex', color: "#D60000", justifyContent: 'space-around' }}>
              <Button icon={<FontAwesomeIcon icon={faLock} />} className="p-button-rounded p-button-info text-xl" onClick={() => editProduct(rowData)} />
            </div>
          )}
          style={{ width: '3%', textAlign: 'center', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
        />
        <Column
          headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
          body={(rowData) => (
            <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
              <Button icon={<FontAwesomeIcon icon={faTrash} />} className="p-button-rounded p-button-info text-xl" onClick={() => editProduct(rowData)} />
            </div>
          )}
          style={{ width: '3%', textAlign: 'center', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
        />

      </DataTable>
    </div>

  );
}
