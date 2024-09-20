"use client"
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { allCourts as fetchAllCourts } from "../../services/courtsServices"
import formatDate from '../../utils/formatData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavbarContext } from '../../context/admin/NavbarContext';
import Image from 'next/image';


const Court = () => {
  const [allCourts, setAllCourts] = useState([]);
  const [spinner, setSpinner] = useState(false)
  const [courts, setCourts] = useState([]) //search filtration
  // const [deleteUserPopupVisible, setDeleteUserPopupVisible] = useState(false); // help in open/close delete popup
  // const [blockUserPopupVisible, setBlockUserPopupVisible] = useState(false); // help in open/close block popup
  // const [selectedUser, setSelectedUser] = useState(null);
  // const [remarks, setRemarks] = useState(''); //comment for blocking user
  const { setCount } = useContext(NavbarContext);

  useEffect(() => {
    setSpinner(true);
    const getCourts = async () => {
      try {
        const response = await fetchAllCourts();
        setCourts(response.data.courts);
        setAllCourts(response.data.courts);
        setCount(response.data.courts.length);
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

      <style jsx>{`
        @media (max-width: 1200px) {
          .column-id, .column-type, .column-created, .column-availability {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .column-location, .column-price {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .column-actions {
            display: flex;
            justify-content: center;
          }
          .column-name {
            width: 100%;
          }
        }
      `}</style>


      <div className='flex bg-white lg:mt-16 mt-14 2xl:w-[88.5%] lg:w-[81.5%]  h-screen float-right text-black'>
        <div className='w-screen lg:mx-10 lg:mt-2'>
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
            <button className='bg-[#FFA500] text-white lg:rounded-xl rounded-md p-4 lg:text-xl text-[10px] lg:w-60 w-28  text-center'>
              <Link href="/admin/add-court"> Add Court
              </Link>
            </button>
          </div>

          <div className="card mx-5">
            {spinner ? (
              <div className="flex justify-center bg-red-[#FFA500]">
                <span className="loader"></span>
              </div>) : (
              <DataTable
                value={allCourts}
                tableStyle={{
                  backgroundColor: 'white',
                  width: '99%',
                  margin: 'auto',
                  marginTop: '10px',
                  borderRadius: '20px',
                  fontSize: '12px'
                }}
                className="custom-data-table custom-paginator"
                paginator
                rows={10}
                scrollable
                scrollHeight="55vh"
                showGridlines
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                paginatorClassName="custom-paginator"
              >
                <Column
                  header="ID"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent" }}
                  style={{ width: '5%', textAlign: 'left', padding: '14px', borderBottom: "1px solid #CACACA" }}
                  className="column-id"
                  body={(rowData, { rowIndex }) => rowIndex + 1}
                />

                <Column
                  field="name"
                  header="NAME"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '10%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-name"
                  body={(rowData) => (
                    <Link
                      href={{
                        pathname: '/admin/court-detail',
                        query: { id: rowData.id },
                      }}
                    >
                      {rowData.name}
                    </Link>
                  )}
                />

                <Column
                  field="location"
                  header="LOCATION"
                  headerStyle={{ backgroundColor: '#FFF8B3', textAlign: "center", padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '15%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-location"
                />

                <Column
                  field="type"
                  header="COURT TYPE"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '10%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-type"
                />

                <Column
                  field="availibility"
                  header="AVAILABILITY"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '10%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-availability"
                  body={(rowData) => formatDate(rowData.availibility)}
                />

                <Column
                  field="cost"
                  header="PRICE/ hr"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '10%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-price"
                />

                <Column
                  field="isactive"
                  header="STATUS"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '6%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  body={(rowData) => (
                    <span className={rowData.isactive ? 'text-green-600' : 'text-red-600'}>
                      {rowData.isactive ? 'Active' : 'Block'}
                    </span>
                  )}
                />

                <Column
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  body={(rowData) => (
                    rowData.isactive ? (
                      <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
                        <Button
                          icon={<FontAwesomeIcon icon={faEye} />}
                          className="p-button-rounded p-button-info"
                          onClick={() => openBlockUserPopup(rowData)}
                        />
                      </div>
                    ) : (
                      <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
                        <Button
                          icon={<FontAwesomeIcon icon={faEye} />}
                          className="p-button-rounded p-button-info"
                          onClick={() => blockUser(rowData)}
                        />
                      </div>
                    )
                  )}
                  style={{ width: '3%', textAlign: 'center', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-actions"
                />

                <Column
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', borderRight: '1px solid #CACACA', borderLeft: "transparent" }}
                  body={(rowData) => (
                    <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
                      <Button
                        icon={<FontAwesomeIcon icon={faTrash} />}
                        className="p-button-rounded p-button-info"
                        onClick={() => openDeleteUserPopup(rowData)}
                      />
                    </div>
                  )}
                  style={{ width: '3%', textAlign: 'center', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-actions"
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
