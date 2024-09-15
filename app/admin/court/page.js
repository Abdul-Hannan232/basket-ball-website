"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { allCourts as fetchAllCourts } from "../../services/courtsServices"
import formatDate from '../../utils/formatData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
const Court = () => {
  const [allCourts, setAllCourts] = useState([]);
  const [spinner, setSpinner] = useState(false)
  const [courts, setCourts] = useState([]) //search filtration
  const [deleteUserPopupVisible, setDeleteUserPopupVisible] = useState(false); // help in open/close delete popup
  const [blockUserPopupVisible, setBlockUserPopupVisible] = useState(false); // help in open/close block popup
  const [selectedUser, setSelectedUser] = useState(null);
  const [remarks, setRemarks] = useState(''); //comment for blocking user

  useEffect(() => {
    setSpinner(true);
    const getCourts = async () => {
      try {
        const response = await fetchAllCourts();
        console.log("courts", response)
        setCourts(response.data.courts);
        setAllCourts(response.data.courts);
      } catch (error) {
        console.error("Failed to fetch courts data:", error);
        toast.error("Network Error")
      } finally {
        setSpinner(false);
      }
    };

    getCourts();
  }, []);
  const handleFilter = useCallback((event) => {
    const searchQuery = event.target.value.toLowerCase();
    setAllCourts(
      searchQuery !== ""
        ? courts.filter(user =>
          user.name.toLowerCase().includes(searchQuery))
        : courts
    );
  }, [courts]);

  return (
    <div>
      <div className='bg-[#FFA500] p-4 pl-7 fixed top-0 right-0 left-0 flex items-center z-40 text-white'>
        <h1 className='text-3xl font-bold'>Basketball</h1>
        <div className='border-2 border-y-transparent border-r-transparent mx-20 pl-5 border-white'>
          <h1 className='text-lg'>Courts (10/17)</h1>

        </div>
      </div>


      <div className='flex bg-white mt-20 w-[81.5%] h-screen float-right text-black'>
        <div className='w-screen'>
          <div className='p-5 m-5 rounded-xl border-2 h-24 border-[#CACACA] gap-10 flex items-center'>
            <div className='w-full relative'>
              <input
                type='text'
                placeholder='Search Courts'
                onChange={handleFilter}
                className='border border-[#CACACA] rounded-xl p-4 bg-[#FFF8B3] relative w-full'
              />
              <Image src="/filter-search.png" alt="filter" width="25" height="25" className="absolute top-4 right-5" />
            </div>
            <button className='bg-[#FFA500] text-white rounded-xl p-3 text-xl w-60 text-center'>
              <Link href="/admin/add-court"> Add Court
              </Link>            </button>
          </div>

          <div className="card">
            {spinner ? (
              <div className="flex justify-center bg-red-[#FFA500]">
                <span className="loader"></span>
              </div>) : (

              <DataTable
                value={allCourts}
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
                  header=" NAME"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                  body={(rowData) => (
                    <Link
                      href={{
                        pathname: '/admin/court-detail',
                        query: { id: rowData.id }, // Serialize the object
                      }}
                    >
                      {rowData.name}
                    </Link>
                  )}
                />

                <Column
                  field="location"
                  header="LOCATION"
                  headerStyle={{ backgroundColor: '#FFF8B3', textAlign: "center", padding: '14px' }}
                  style={{ width: '15%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}

                />
                <Column
                  field="type"
                  header="COURT TYPE"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                />
                <Column
                  field="availibilty"
                  header="AVAILABILITY"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                  body={(rowData) => formatDate(rowData.availability)}
                />
                <Column
                  field="cost"
                  header="PRICE/ hr"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                />
                <Column
                  field="isactive"
                  header="STATUS"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  style={{ width: '6%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                  body={(rowData) => (
                    <span className={rowData.isactive ? 'text-green-600' : 'text-red-600'}>
                      {rowData.isactive ? 'Active' : 'Block'}
                    </span>
                  )}
                />


                <Column
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  body={(rowData) => (
                    rowData.isactive ?
                      <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
                        <Button icon={<FontAwesomeIcon icon={faEye} />} className="p-button-rounded p-button-info text-lg" onClick={() => openBlockUserPopup(rowData)} />
                      </div>
                      : <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
                        <Button icon={<FontAwesomeIcon icon={faEye} />} className="p-button-rounded p-button-info text-lg" onClick={() => blockUser(rowData)} />
                      </div>
                  )}
                  style={{ width: '3%', textAlign: 'center', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                />
                <Column
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  body={(rowData) => (
                    rowData.isactive ?
                      <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
                        <Button icon={<FontAwesomeIcon icon={faLock} />} className="p-button-rounded p-button-info text-lg" onClick={() => openBlockUserPopup(rowData)} />
                      </div>
                      : <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
                        <Button icon={<FontAwesomeIcon icon={faLock} />} className="p-button-rounded p-button-info text-lg" onClick={() => blockUser(rowData)} />
                      </div>
                  )}
                  style={{ width: '3%', textAlign: 'center', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                />
                <Column
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  body={(rowData) => (
                    <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
                      <Button icon={<FontAwesomeIcon icon={faTrash} />} className="p-button-rounded p-button-info text-lg" onClick={() => openDeleteUserPopup(rowData)} />
                    </div>
                  )}
                  style={{ width: '3%', textAlign: 'center', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                />

              </DataTable>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}

export default Court
