// "use client";
// import React, { useState, useEffect, Suspense } from "react";
// import { CiFilter } from "react-icons/ci";
// import CourtsSlider from "../component/CourtsSlider";
// import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";
// import { ToastContainer, toast } from "react-toastify";
// import { useAuthToken } from "../customHook/useAuthToken";
// import {
//   addCourt,
//   filterCourts,
//   searchCourt,
// } from "../services/courtsServices";
// import "react-toastify/dist/ReactToastify.css";
// import CourtCarousel from "../component/CourtCarousel";

// const Courts = () => {
//   const { token, decodedToken } = useAuthToken();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const search = searchParams.get("search");

//   const [loggedInUser, setLoggedInUser] = useState();
//   const [showPopup, setShowPopup] = useState(false);
//   const [loader, setLoader] = useState(false);
//   const [updateContent, setUpdateContent] = useState(false);
//   const [searchResults, setSearchResults] = useState([]);
//   const [filteredCourts, setFilteredCourts] = useState([]);

//   // State for filtering courts
//   const [order, setOrder] = useState("");
//   const [courtType, setCourtType] = useState("");

//   // State for form data
//   const [formData, setFormData] = useState({
//     user_id: decodedToken?.id,
//     name: "",
//     location: "",
//     size: "",
//     availability: "",
//     cost: "",
//     type: "",
//     image: [],
//   });

//   useEffect(() => {
//     if (search) {
//       const performSearch = async () => {
//         try {
//           const response = await searchCourt(search);
//           if (response?.data?.success) {
//             setSearchResults(response.data.courts);
//           } else {
//             toast.info("No courts found matching your search.");
//           }
//         } catch (error) {
//           console.error("Search failed:", error);
//           toast.error("An error occurred while searching. Please try again.");
//         }
//       };

//       performSearch();
//     }
//   }, [search]);

//   const getCourts = async () => {
//     try {
//       const data = await filterCourts(order, courtType);
//       setFilteredCourts(data);
//     } catch (error) {
//       console.error("Error fetching courts data", error);
//     }
//   };

//   useEffect(() => {
//     if (order || courtType) {
//       getCourts();
//     }
//   }, [order, courtType]);

//   const handleOrderChange = (e) => {
//     setOrder(e.target.value);
//   };

//   const handleCourtTypeChange = (e) => {
//     setCourtType(e.target.value);
//   };

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoader(true);

//     const updatedFormData = new FormData();
//     for (const key in formData) {
//       updatedFormData.append(key, formData[key]);
//     }

//     try {
//       const response = await addCourt(updatedFormData, token);
//       if (response.status === 201) {
//         toast.success(response.data.message);
//         setFormData({
//           user_id: decodedToken?.id,
//           name: "",
//           location: "",
//           size: "",
//           availability: "",
//           cost: "",
//           type: "",
//           image: [],
//         });
//         setShowPopup(false);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error("Network error: " + error.message);
//     } finally {
//       setLoader(false);
//       setUpdateContent((prev) => !prev);
//     }
//   };

//   return (
//     <div className="relative">
//       <ToastContainer />
//       <div className="md:w-[80%] md:mx-auto mx-5 mt-10 flex items-center justify-between">
//         <div className="flex items-center md:gap-4 gap-1">
//           <h1 className="md:text-3xl text-md">Basketball Courts</h1>
//           <CiFilter
//             className="text-[#FFA500] md:text-3xl text-xl cursor-pointer"
//             onClick={togglePopup}
//           />
//         </div>
//         {loggedInUser && (
//           <button
//             className="bg-[#FFA500] rounded-md md:text-xl text-sm text-black md:px-16 px-3 py-2 shadow"
//             onClick={() => setShowPopup(true)}
//           >
//             Add Court
//           </button>
//         )}
//       </div>

//       {/* <CourtCarousel
//           slide={"box"}
//           // key={updateContent}
//           searchResults={searchResults}
//           filteredCourts={filteredCourts} 
//         /> */}

//       <CourtsSlider
//         slide={"box"}
//         key={updateContent}
//         searchResults={searchResults}
//         filteredCourts={filteredCourts}
//       />

//       <div className="mt-10 mb-40">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57939.403949465006!2d67.15371090000001!3d24.8223971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1723305059891!5m2!1sen!2s"
//           width="100%"
//           height="350"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>

//       {/* Filter Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center popup-overlay">
//           <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
//             <h2 className="text-xl mb-4">Add Court</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Court Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="border p-2 w-full mb-2"
//               />
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//                 className="border p-2 w-full mb-2"
//               />
//               <input
//                 type="text"
//                 name="size"
//                 placeholder="Size"
//                 value={formData.size}
//                 onChange={handleChange}
//                 required
//                 className="border p-2 w-full mb-2"
//               />
//               <input
//                 type="text"
//                 name="availability"
//                 placeholder="Availability"
//                 value={formData.availability}
//                 onChange={handleChange}
//                 required
//                 className="border p-2 w-full mb-2"
//               />
//               <input
//                 type="number"
//                 name="cost"
//                 placeholder="Cost"
//                 value={formData.cost}
//                 onChange={handleChange}
//                 required
//                 className="border p-2 w-full mb-2"
//               />
//               <input
//                 type="text"
//                 name="type"
//                 placeholder="Type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 required
//                 className="border p-2 w-full mb-2"
//               />
//               <input
//                 type="file"
//                 name="image"
//                 multiple
//                 onChange={(e) =>
//                   setFormData({ ...formData, image: e.target.files })
//                 }
//                 className="border p-2 w-full mb-2"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#FFA500] text-white p-2 rounded"
//               >
//                 {loader ? "Adding..." : "Add Court"}
//               </button>
//             </form>
//             <button onClick={togglePopup} className="mt-4 text-red-500">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Courts;




"use client";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { CiFilter } from "react-icons/ci";
// import Navbar from '../../component/NavBarComponent';
import CourtsSlider from "../component/CourtsSlider";
// const CourtsSlider = lazy(() => import("../../component/CourtsSlider"));
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { RxCrossCircled } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
// import Carousel from '../../component/CourtCarousel.js';
import { addCourt, filterCourts } from "../services/courtsServices";
import Loader from "../component/LoadingBall";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthToken } from "../customHook/useAuthToken";
import FileUpload from "../component/FileUpload";
import Image from "next/image";
const MAX_FILES = 6;
import { searchCourt } from "../services/courtsServices";

export default function Courts() {
  const { token, decodedToken } = useAuthToken();

  const router = useRouter("");
  const [loggedInUser, setloggedInUser] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [loader, setLoader] = useState(false);
  const [updateContent, setUpdateContent] = useState(false);
  const [previewUrls, setPreviewUrls] = useState(Array(MAX_FILES).fill(null));
  const [files, setFiles] = useState(Array(MAX_FILES).fill(null));
  const [isOpen, setIsOpen] = useState(false);

  /////////////////////// SEARCH COURTS START /////////////////////////

  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (search) {
      const performSearch = async () => {
        try {
          const response = await searchCourt(search);
          if (response?.data?.success) {
            setSearchResults(response.data.courts);
          } else {
            toast.info("No courts found matching your search.");
          }
        } catch (error) {
          console.error("Search failed:", error);
          toast.error("An error occurred while searching. Please try again.");
        }
      };

      performSearch();
    }
  }, [search]);

  /////////////////////// SEARCH COURTS END /////////////////////////

  /////////////////////// FILTER COURTS START /////////////////////////

  const [order, setOrder] = useState("");
  const [courtType, setCourtType] = useState("");
  const [filteredCourts, setFilteredCourts] = useState([]);

  const getCourts = async () => {
    try {
      const data = await filterCourts(order, courtType);
      console.log(data);

      setFilteredCourts(data);
    } catch (error) {
      console.error("Error fetching courts data", error);
    }
  };

  useEffect(() => {
    if (order || courtType) {
      getCourts();
    }
  }, [order, courtType]);

  const handleOrderChange = async (e) => {
    setOrder(e.target.value);
  };

  const handleCourtTypeChange = (e) => {
    setCourtType(e.target.value);
  };

  /////////////////////// FILTER COURTS  END /////////////////////////

  // Function to open/close the popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the popup when clicking outside
  const handleClickOutside = (event) => {
    if (event.target.classList.contains("popup-overlay")) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }
    return () => window.removeEventListener("click", handleClickOutside);
    if (token) {
      setloggedInUser(decodedToken);
    }
  }, [router, token, isOpen]);

  const [formData, setFormData] = useState({
    user_id: decodedToken?.id,
    name: "",
    location: "",
    size: "",
    availability: "",
    cost: "",
    type: "",
    image: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
      Array.from(files).forEach((file) =>
        updatedFormData.append("image", file)
      );
    }

    try {
      const response = await addCourt(updatedFormData, token);
      console.log("response", response);
      if (response.status === 201) {
        toast.success(response.data.message);
        setFormData({
          user_id: decodedToken?.id,
          name: "",
          location: "",
          size: "",
          availability: "",
          cost: "",
          type: "",
          image: [],
        });
        setFiles(Array(MAX_FILES).fill(null));
        setPreviewUrls(Array(MAX_FILES).fill(null));
        setShowPopup(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Network error: ");
    } finally {
      setLoader(false);
      setUpdateContent((prev) => !prev);
    }
  };

  return (
    <div className="relative">
      <ToastContainer />
      <div className="md:w-[80%] md:mx-auto mx-5 mt-10 flex items-center justify-between">
        <div className="flex items-center md:gap-4 gap-1">
          <h1 className="md:text-3xl text-md">Basketball Courts</h1>
          <CiFilter
            className="text-[#FFA500] md:text-3xl text-xl cursor-pointer"
            onClick={togglePopup}
          />
        </div>

        {loggedInUser ? (
          <button
            className="bg-[#FFA500] rounded-md md:text-xl text-sm text-black md:px-16 px-3 py-2 shadow"
            onClick={() => setShowPopup(true)}
          >
            Add Court
          </button>
        ) : (
          ""
        )}
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <CourtsSlider
          slide={"box"}
          key={updateContent}
          searchResults={searchResults}
          filteredCourts={filteredCourts} 
        />
      </Suspense> */}

      <CourtsSlider
        slide={"box"}
        key={updateContent}
        searchResults={searchResults}
        filteredCourts={filteredCourts}
      />
      
      <div className="w-[80%] mx-auto mt-40 flex items-center gap-2">
        <h1 className="text-[#FFA500] text-2xl font-bold">Map</h1>
        <h1 className="text-white text-2xl font-bold">View</h1>
      </div>
      <div className="mt-10 mb-40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57939.403949465006!2d67.15371090000001!3d24.8223971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1723305059891!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/*  filter popup   bg-gray-800 bg-opacity-75*/}

      <div
        className={`fixed inset-0 z-50 flex items-center justify-start  popup-overlay transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="lg:w-[35%] w-[80%] relative rounded-lg bg-[#333333] shadow-xl transform">
          <div className="w-[80%] mx-auto py-10">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-white">Sort by:</h1>
              <Image src="/funnel.png" alt="image" width={22} height={22} />
            </div>
            <h1 className="text-xl font-bold text-white mt-5">Order:</h1>
            <hr className="border border-[#808080] w-[90%] mx-auto mt-3 mb-7" />
            <div className="flex items-center mt-3 gap-2">
              <input
                type="radio"
                name="order"
                value="latest"
                onChange={handleOrderChange}
                className="radio-custom w-4 h-4"
              />
              <h1 className="lg:text-sm text-xs text-white">Latest</h1>
            </div>
            <div className="flex items-center mt-3 gap-2">
              <input
                type="radio"
                name="order"
                value="popular"
                onChange={handleOrderChange}
                className="radio-custom w-4 h-4"
              />
              <h1 className="lg:text-sm text-xs text-white">Popular</h1>
            </div>
            <div className="flex items-center mt-3 gap-2">
              <input
                type="radio"
                name="order"
                value="review"
                onChange={handleOrderChange}
                className="radio-custom w-4 h-4"
              />
              <h1 className="lg:text-sm text-xs text-white">Review</h1>
            </div>
            <div className="flex items-center mt-3 gap-2">
              <input
                type="radio"
                name="order"
                value="near_me"
                onChange={handleOrderChange}
                className="radio-custom w-4 h-4"
              />
              <h1 className="lg:text-sm text-xs text-white">Near Me</h1>
            </div>
            <h1 className="text-xl font-bold text-white mt-10">Court Type:</h1>
            <hr className="border border-[#808080] w-[90%] mx-auto mt-3 mb-7" />
            <div className="flex items-center mt-3 gap-2">
              <input
                type="radio"
                name="courtType"
                value="indoor"
                onChange={handleCourtTypeChange}
                className="radio-custom w-4 h-4"
              />
              <h1 className="lg:text-lg text-xs text-white">Indoor</h1>
            </div>
            <div className="flex items-center mt-3 gap-2">
              <input
                type="radio"
                name="courtType"
                value="outdoor"
                onChange={handleCourtTypeChange}
                className="radio-custom w-4 h-4"
              />
              <h1 className="lg:text-lg text-xs text-white">Outdoor</h1>
            </div>
            <div className="flex items-center mt-3 gap-2">
              <input
                type="radio"
                name="courtType"
                value="sheltered"
                onChange={handleCourtTypeChange}
                className="radio-custom w-4 h-4"
              />
              <h1 className="lg:text-lg text-xs text-white">Sheltered</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Courts popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-75 transition-all duration-300 ease-in-out">
          <div className="lg:w-[40%] w-[80%] relative h-[90vh] rounded-lg transform overflow-auto transition-transform duration-500 ease-in-out translate-y-0 bg-[#333333] shadow-xl">
            <div className="flex justify-center relative items-center p-5">
              <h1 className="text-white md:text-3xl text-lg poppins-bold">
                Add Court
              </h1>
              <RxCrossCircled
                className="text-white cursor-pointer float-right absolute right-5 md:text-3xl text-lg"
                onClick={() => setShowPopup(false)}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="w-[80%] mx-auto">
                {loader ? <Loader /> : null}
                <label className="text-sm text-white ">Court Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Main Court"
                  className="rounded-md mb-5 text-sm w-full mt-1 md:p-4 p-3 shadow-xl bg-[#808080] text-white"
                />
                <label className="text-sm text-white  ">Location</label>
                <br />
                <div className="w-full mb-5 relative  mt-1 md:p-4 p-3 shadow-xl bg-[#808080] rounded-md text-white">
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="123 Main Street, Anytown, USA"
                    className="rounded-md bg-[#808080] md:text-sm text-[10px] w-full"
                  />
                  <CiLocationOn className="absolute top-4 md:right-5 right-3 text-xl" />
                </div>
                <label className="text-sm text-white  ">Size</label>
                <div className="flex mt-3 mb-5 items-center justify-between md:w-[70%]">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="size"
                      required
                      value="Half Court"
                      checked={formData.size === "Half Court"}
                      onChange={handleChange}
                      className="radio-custom w-4 h-4"
                    />
                    <h1 className="md:text-sm text-xs text-white">
                      Half Court
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="size"
                      required
                      value="Full Court"
                      checked={formData.size === "Full Court"}
                      onChange={handleChange}
                      className="radio-custom w-4 h-4"
                    />
                    <h1 className="md:text-sm text-xs text-white">
                      Full Court
                    </h1>
                  </div>
                </div>

                <label className="text-sm text-white ">Availability</label>
                <br />
                <input
                  type="text"
                  name="availability"
                  required
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="Monday to Friday, 9:00 AM - 9:00 PM"
                  className="rounded-md mb-5 md:text-sm text-xs w-full mt-1 md:p-4 p-3 shadow-xl bg-[#808080] text-white"
                />
                <label className="text-sm text-white ">Price</label>
                <br />
                <input
                  type="number"
                  name="cost"
                  required
                  value={formData.cost}
                  onChange={handleChange}
                  placeholder="$ 40/hr"
                  className="rounded-md mb-5 text-sm w-full mt-1 md:p-4 p-3 shadow-xl bg-[#808080] text-white"
                />

                <label className="text-sm text-white  ">Type</label>
                <div className="grid grid-cols-2 mt-3 mb-5 items-center md:gap-7 gap-5 justify-between md:w-[70%]">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      required
                      name="type"
                      value="indoor"
                      checked={formData.type === "indoor"}
                      onChange={handleChange}
                      className="radio-custom w-4 h-4" /* Apply custom class */
                    />
                    <label className="text-sm text-white">Indoor</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      required
                      name="type"
                      value="outdoor"
                      checked={formData.type === "outdoor"}
                      onChange={handleChange}
                      className="radio-custom w-4 h-4" /* Apply custom class */
                    />
                    <label className="text-sm text-white">Outdoor</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      required
                      name="type"
                      value="sheltered"
                      checked={formData.type === "sheltered"}
                      onChange={handleChange}
                      className="radio-custom w-4 h-4" /* Apply custom class */
                    />
                    <label className="text-sm text-white">Sheltered</label>
                  </div>
                </div>
              </div>
              <div className="w-[80%] mt-5 mx-auto">
                <label className="text-sm text-white  ">Image</label>
                <div className="w-[100%] mt-3  border-2 border-white rounded-xl   mx-auto">
                  {/* seting image */}
                  <div>
                    <div
                      style={{
                        display: "grid",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {/* First row with one image */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginLeft: "-1px",
                        }}
                      >
                        {previewUrls.length > 0 && (
                          <div
                            key={0}
                            style={{ textAlign: "center" }}
                            className="w-[95%] mx-auto rounded-md"
                          >
                            <Image
                              src={previewUrls[0] || "/courts_placeholder.jpg"} // Default placeholder image if no image is selected
                              alt={`Preview 1`}
                              style={{
                                width: "100%",
                                borderRadius: "7px",
                                height: "200px",
                                objectFit: "cover",
                              }}
                              unoptimized
                              width={500}
                              height={500}
                            />
                          </div>
                        )}
                      </div>

                      {/* Second row with up to four images */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(5, 1fr)",
                        }}
                      >
                        {previewUrls.slice(1, 6).map((preview, index) => (
                          <div
                            key={index + 1}
                            style={{ textAlign: "center" }}
                            className="w-[80%] rounded-md mx-auto "
                          >
                            <Image
                              src={preview || "/courts_placeholder.jpg"} // Default placeholder image if no image is selected
                              alt={`Preview ${index + 2}`}
                              style={{
                                width: "100px",
                                borderRadius: "7px",
                                height: "70px",
                                objectFit: "cover",
                              }}
                              unoptimized
                              width={500}
                              height={500}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* end setting mage */}
                  <p className="md:text-sm text-xs text-center mt-7 text-white">
                    Drop your images here too
                  </p>
                  <FileUpload
                    page={"courts"}
                    color={"#FFA500"}
                    text={"Click here to browse"}
                    fileControl={{ files, setFiles }}
                    previewControl={{ previewUrls, setPreviewUrls }}
                    type="multiple"
                  />
                  <br />
                </div>
              </div>
              <button
                type="submit"
                className="text-black bg-[#FFA500] md:p-4 p-3 md:text-xl text-md text-center flex justify-center w-[80%] mx-auto font-semibold my-10  rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}