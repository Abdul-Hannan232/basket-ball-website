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
import Adminnavbar from '../../component/admin/adminnavbar';
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


      <Adminnavbar />
      <div className='flex bg-white lg:mt-16 mt-14 lg:w-[81.5%] h-screen float-right text-black'>
        <div className='w-screen'>
          <div className='lg:p-5 p-2 m-5 lg:rounded-xl rounded-md border-2 lg:h-24 border-[#CACACA] lg:gap-10 gap-2 flex items-center'>
            <div className='w-full relative'>
              <input
                type='text'
                placeholder='Search Courts'
                onChange={handleFilter}
                className='border border-[#CACACA] lg:text-lg text-sm lg:rounded-xl rounded-md lg:p-4 p-2 bg-[#FFF8B3] relative w-full'
              />
              <Image src="/filter-search.png" alt="filter" width="5" height="5" className="absolute lg:w-[25px] lg:h-[25px] w-4 h-4 lg:top-4 top-3 right-3 lg:right-5" />
            </div>
            <button className='bg-[#FFA500] text-white lg:rounded-xl rounded-md p-3 lg:text-xl text-[10px] lg:w-60 w-28  text-center'>
              <Link href="/admin/add-court"> Add Court
              </Link>            </button>
          </div>

          <div className="card mx-5">
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

                  header="ID"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  style={{ width: '5%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                  body={(rowData, { rowIndex }) => rowIndex + 1}
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
                        <Button icon={<FontAwesomeIcon icon={faLock} />} className="p-button-rounded p-button-info text-md lg:text-lg" onClick={() => openBlockUserPopup(rowData)} />
                      </div>
                      : <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
                        <Button icon={<FontAwesomeIcon icon={faLock} />} className="p-button-rounded p-button-info text-md lg:text-lg" onClick={() => blockUser(rowData)} />
                      </div>
                  )}
                  style={{ width: '3%', textAlign: 'center', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                />
                <Column
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  body={(rowData) => (
                    <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
                      <Button icon={<FontAwesomeIcon icon={faTrash} />} className="p-button-rounded p-button-info text-md lg:text-lg" onClick={() => openDeleteUserPopup(rowData)} />
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
