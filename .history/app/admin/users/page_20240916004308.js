"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
import DeleteUserPopup from "../../component/admin/DeleteUser"
import BlockUserPopup from "../../component/admin/BlockUser"
import { useAuthToken } from '../../customHook/useAuthToken';
import Image from 'next/image';
import AdminNavbar from "../../component/admin/adminnavbar"
export default function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const [spinner, setSpinner] = useState(false)
  const [users, setUsers] = useState([]) //search filtration
  const [deleteUserPopupVisible, setDeleteUserPopupVisible] = useState(false); // help in open/close delete popup
  const [blockUserPopupVisible, setBlockUserPopupVisible] = useState(false); // help in open/close block popup
  const [selectedUser, setSelectedUser] = useState(null);
  const [remarks, setRemarks] = useState(''); //comment for blocking user
  const { token } = useAuthToken();

  useEffect(() => {
    setSpinner(true);
    const getUsers = async () => {
      try {
        const response = await fetchAllUsers();
        setUsers(response.data.users);
        setAllUsers(response.data.users);
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
      <ToastContainer />
      <AdminNavbar />
      <div className='flex bg-white lg:mt-16 mt-14 lg:w-[81.5%] h-screen float-right text-black'>
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
            <button className='bg-[#FFA500] text-white rounded-xl p-4 text-xl w-60 text-center'>
              <Link href="/admin/add-User"> Add User
              </Link>
            </button>
          </div>

          <div className="card">
            {spinner ? (
              <div className="flex justify-center bg-red-[#FFA500]">
                <span className="loader"></span>
              </div>) : (

              <DataTable
                value={allUsers}
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
                  header="Display Name"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                  body={(rowData) => (
                    <Link
                      href={{
                        pathname: '/admin/user-detail',
                        query: { id: rowData.id }, // Serialize the object
                      }}
                    >
                      {rowData.name}
                    </Link>
                  )}
                />

                <Column
                  field="email"
                  header="Email"
                  headerStyle={{ backgroundColor: '#FFF8B3', textAlign: "center", padding: '14px' }}
                  style={{ width: '15%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                  body={(rowData) => (
                    <Link
                      href={{
                        pathname: '/admin/user-detail',
                        query: { id: rowData.id }, // Serialize the object
                      }}
                    >

                      {rowData.email}
                    </Link>
                  )}
                />
                <Column
                  field="phone_number"
                  header="Phone number"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                />
                <Column
                  field="created_at"
                  header="Created on"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                  body={(rowData) => formatDate(rowData.created_at)}
                />
                <Column
                  field="remarks"
                  header="Remarks"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  style={{ width: '10%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                />
                <Column
                  field="role"
                  header="Role"
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  style={{ width: '6%', textAlign: 'left', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                />

                <Column
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  body={(rowData) => (
                    rowData.isactive ?
                      <div style={{ display: 'flex', color: "#D60000", justifyContent: 'space-around' }}>
                        <Button icon={<FontAwesomeIcon icon={faLock} />} className="p-button-rounded p-button-info text-xl" onClick={() => openBlockUserPopup(rowData)} />
                      </div>
                      : <div style={{ display: 'flex', color: "#0f6e28", justifyContent: 'space-around' }}>
                        <Button icon={<FontAwesomeIcon icon={faLock} />} className="p-button-rounded p-button-info text-xl" onClick={() => blockUser(rowData)} />
                      </div>
                  )}
                  style={{ width: '3%', textAlign: 'center', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                />
                <Column
                  headerStyle={{ backgroundColor: '#FFF8B3', padding: '14px' }}
                  body={(rowData) => (
                    <div style={{ display: 'flex', color: "#818181", justifyContent: 'space-around' }}>
                      <Button icon={<FontAwesomeIcon icon={faTrash} />} className="p-button-rounded p-button-info text-xl" onClick={() => openDeleteUserPopup(rowData)} />
                    </div>
                  )}
                  style={{ width: '3%', textAlign: 'center', border: '1px solid #CACACA', borderLeft: 'transparent', borderRight: 'transparent', padding: '14px' }}
                />

              </DataTable>
            )}

          </div>

        </div>
      </div>
      {deleteUserPopupVisible && (
        <DeleteUserPopup
          user={selectedUser}
          onDeleteUser={deleteUser}
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
