"use client"
import React,{useState,useEffect} from 'react'
import CourtForm from "../../component/admin/CourtForm"
import Loader from "../../component/LoadingBall";
import { addCourt as addNewCourt } from "../../services/courtsServices";
import { ToastContainer, toast } from 'react-toastify';
import { useAuthToken } from '../../customHook/useAuthToken';
import { useRouter } from 'next/navigation'
 const MAX_FILES = 6;
const AddCourt = () => {
  const [previewUrls, setPreviewUrls] = useState(Array(MAX_FILES).fill(null));
  const [files, setFiles] = useState(Array(MAX_FILES).fill(null));
  const [loggedInUser, setloggedInUser] = useState()
  const { token, decodedToken } = useAuthToken();
  const router = useRouter("");



  useEffect(() => {
    if (token) {
      setloggedInUser(decodedToken)
    }
  }, [router, token])

  const [formData, setFormData] = useState({
    user_id: decodedToken?.id,
    name: '',
    location: '',
    cost: '',
    operating_hours: '',
    description: '',
    phone_number: '',
    facilities: "",
    images: ""
  });
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
 
    // Create a FormData instance
    const updatedFormData = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {

        updatedFormData.append(key, formData[key]);

      }
    }
    if (files && files.length > 0) {
      Array.from(files).forEach(files => updatedFormData.append('image', files));
    }

    try {
      const response = await addNewCourt(formData, token);
      if (response.status === 201) {
        toast.success(response.data.message);
        setFormData({
          user_id: decodedToken?.id,
          name: '',
          location: '',
          cost: '',
          operating_hours: '',
          description: '',
          phone_number: '',
          facilities: [],
          images: []
        })
        setFiles(Array(MAX_FILES).fill(null))
        setPreviewUrls(Array(MAX_FILES).fill(null))
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message)
      toast.error("Network error: ");
    } finally {
      setLoader(false);
     }

  }

  return (
    <div>
      <CourtForm {...{ handleSubmit, formData, setFormData, files, setFiles, previewUrls, setPreviewUrls }} />
      <ToastContainer />
      {loader ? <Loader /> : null}
    </div>
  )
}

export default AddCourt
