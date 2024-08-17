"use client"
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTrash } from '@fortawesome/free-solid-svg-icons';
import ProductService from '../../services/ProductService.json';
import Sidebar from "../../component/adminsidebar";
import Link from 'next/link';
export default function TemplateDemo() {
  const [products, setProducts] = useState(ProductService); // Initialize with ProductService data

  const handleFilter = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    if (searchQuery !== "") {
      const filteredProducts = ProductService.filter(product =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.location.toLowerCase().includes(searchQuery)
      );
      setProducts(filteredProducts);
    } else {
      setProducts(ProductService); // Reset to all products when input is empty
    }
  };

  return (
    <>
      <div className='bg-[#FFA500] p-4 pl-7 fixed top-0 right-0 left-0 flex items-center text-white'>
        <h1 className='text-3xl font-bold'>Basketball</h1>
        <div className='border-2 border-y-transparent border-r-transparent mx-20 pl-5 border-white'>
          <h1 className='text-lg'> User (25)</h1>
        </div>
      </div>
      <div className='flex bg-white mt-16 w-[81.5%] h-screen float-right text-black'>
        <Sidebar />
        <div className='w-screen'>
          <div className='p-5 m-5 rounded-xl border-2 h-24 border-[#CACACA] gap-10 flex items-center'>
            <div className='w-full'>
              <input
                type='text'
                placeholder='Search Users'
                onChange={handleFilter}
                className='border border-[#CACACA] rounded-xl p-4 bg-[#FFF8B3] w-full'
              />
            </div>
            <button className='bg-[#FFA500] text-white rounded-xl p-3 text-xl w-60 text-center'>
              <Link href="/admin/usersDetail">              Add User
              </Link>            </button>
          </div>

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

        </div>
      </div>
    </>
  );
}
