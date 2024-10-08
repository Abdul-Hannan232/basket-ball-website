"use client"
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { allUsers as fetchAllUsers, updateUser, deleteUser as removeUser } from "../../services/userServices"
import formatDate from '../../utils/formatData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeletePopUp from "../../component/admin//DeletePopUp"
import BlockUserPopup from "../../component/admin/BlockUser"
import { useAuthToken } from '../../customHook/useAuthToken';
import { NavbarContext } from '../../context/admin/NavbarContext';
 
export default function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const [spinner, setSpinner] = useState(false)
  const [users, setUsers] = useState([]) //search filtration
  const [deleteUserPopupVisible, setDeleteUserPopupVisible] = useState(false); // help in open/close delete popup
  const [blockUserPopupVisible, setBlockUserPopupVisible] = useState(false); // help in open/close block popup
  const [selectedUser, setSelectedUser] = useState(null);
  const [remarks, setRemarks] = useState(''); //comment for blocking user
  const { token } = useAuthToken();
  const { setCount,count } = useContext(NavbarContext);

  useEffect(() => {
    setSpinner(true);
    const getUsers = async () => {
      try {
        const response = await fetchAllUsers();
        setUsers(response.data.users);
        setAllUsers(response.data.users);
        setCount(response.data.users.length)
      } catch (error) {
        console.error("Failed to fetch users data:", error);
        toast.error("Network Error")
      } finally {
        setSpinner(false);
      }
    };

    getUsers();
  }, []);

  const handleFilter = useCallback((event) => {
    const searchQuery = event.target.value.toLowerCase();
    setAllUsers(
      searchQuery !== ""
        ? users.filter(user =>
          user.name.toLowerCase().includes(searchQuery) ||
          user.email.toLowerCase().includes(searchQuery)
        )
        : users
    );
  }, [users]);

 

  // Delete User
  const openDeleteUserPopup = (user) => {
    setSelectedUser(user);
    setDeleteUserPopupVisible(true)
  }
  const closeDeleteUserPopup = () => {
    setDeleteUserPopupVisible(false);
  };
  const deleteUser = async (data,) => {
    try {
      const response = await removeUser(data, token);
      if (response.status === 200) {
        const updatedUsers = allUsers.filter(user => user.id !== data.id);
        closeDeleteUserPopup()
        toast.success(`${data.name} deleted successfully`)
        setAllUsers(updatedUsers);
        setCount(count-1)
      }

    } catch (error) {
      console.error('Error updating user:', error);
      toast.error("Network Error");
    }
  };


  // Block User
  const openBlockUserPopup = (user) => {
    setSelectedUser(user);
    setBlockUserPopupVisible(true);
  };
  const closeBlockUserPopup = () => {
    setBlockUserPopupVisible(false);
    setRemarks(''); // Reset remarks when closing the popup
  };

  const blockUser = async (rowData) => {
    const message = rowData.isactive ? `${rowData.name} blocked successfully` : `${rowData.name} unblocked successfully`;
    const data = { id: rowData.id, isactive: !rowData.isactive, remarks: remarks }
    try {
      const response = await updateUser(data, token);
      if (response.status === 200) {
        const updatedUsers = allUsers.map(user =>
          user.id === rowData.id
            ? { ...user, isactive: !user.isactive, remarks: remarks }
            : user
        );
        closeBlockUserPopup()
        toast.success(message)
        setAllUsers(updatedUsers);
      }

    } catch (error) {
      console.error('Error updating user:', error);
      toast.error("Network Error");
    }
  };


  return (
    <>
       <style jsx>{`
        @media (max-width: 1200px) {
          .column-id, .column-role, .column-created, .column-remarks {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .column-phone, .column-email {
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
      <ToastContainer />

      <div className='flex bg-white lg:mt-16 mt-14 2xl:w-[88.5%] lg:w-[82.5%] h-screen float-right text-black'>
        <div className='w-screen lg:mx-10 lg:mt-2'>
          <div className='lg:p-5 p-2 m-5 rounded-xl border-2 lg:h-24  border-[#CACACA] lg:gap-10 gap-3 flex items-center'>
            <div className='w-full'>
              <input
                type='text'
                placeholder='Search Users'
                onChange={handleFilter}
                className='border border-[#CACACA] lg:rounded-xl rounded-md lg:text-lg text-xs lg:p-4 p-2 bg-[#FFF8B3] w-full'
              />
            </div>
            <button className='bg-[#FFA500] text-white lg:rounded-xl rounded-md lg:p-4 p-2 lg:text-xl text-[10px] lg:w-60 w-28 text-center'>
              <Link href="/admin/add-User"> Add User
              </Link>
            </button>
          </div>

          <div className="card mx-5 ">
            {spinner ? (
              <div className="flex justify-center bg-red-[#FFA500]">
                <span className="loader"></span>
              </div>) : (
                
              <DataTable
                value={allUsers}
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
                  header="DISPLAY NAME"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '10%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-name"
                  body={(rowData) => (
                    <Link
                      href={{
                        pathname: '/admin/user-detail',
                        query: { id: rowData.id }
                      }}
                    >
                      {rowData.name}
                    </Link>
                  )}
                />

                <Column
                  field="email"
                  header="EMAIL"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', textAlign: 'center', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '15%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-email"
                  body={(rowData) => (
                    <Link
                      href={{
                        pathname: '/admin/user-detail',
                        query: { id: rowData.id }
                      }}
                    >
                      {rowData.email}
                    </Link>
                  )}
                />

                <Column
                  field="phone_number"
                  header="PHONE NUMBER"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '10%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-phone"
                />

                <Column
                  field="created_at"
                  header="CREATED ON"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '10%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-created"
                  body={(rowData) => formatDate(rowData.created_at)}
                />

                <Column
                  field="remarks"
                  header="REMARKS"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '10%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-remarks"
                />

                <Column
                  field="role"
                  header="ROLE"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  style={{ width: '6%', textAlign: 'left', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  className="column-role"
                />

                <Column
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px', border: '1px solid #CACACA', borderRight: "transparent", borderLeft: "transparent" }}
                  body={(rowData) => (
                    rowData.isactive ? (
                      <div style={{ display: 'flex', color: '#D60000', justifyContent: 'space-around', }}>
                        <Button
                          icon={<FontAwesomeIcon icon={faLock} />}
                          className="p-button-rounded p-button-info text-lg"
                          onClick={() => openBlockUserPopup(rowData)}
                        />
                      </div>
                    ) : (
                      <div style={{ display: 'flex', color: '#0f6e28', justifyContent: 'space-around' }}>
                        <Button
                          icon={<FontAwesomeIcon icon={faLock} />}
                          className="p-button-rounded p-button-info text-lg"
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
                    <div style={{ display: 'flex', color: '#818181', justifyContent: 'space-around' }}>
                      <Button
                        icon={<FontAwesomeIcon icon={faTrash} />}
                        className="p-button-rounded p-button-info text-lg"
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
      {deleteUserPopupVisible && (
        <DeletePopUp
          title="Are you want to delete this user?"
          description="Do you really want to delete this user? Deleting them will limit their access."
          record={selectedUser}
          onDeleteRecord={deleteUser}
          onClose={closeDeleteUserPopup}
        />
      )}
      {blockUserPopupVisible && (
        <BlockUserPopup
          onClose={closeBlockUserPopup}
          onBlockUser={blockUser}
          user={selectedUser}
          onSetRemarks={setRemarks}
          remarks={remarks}
        />
      )}

    </>
  );
}
