"use client";
import React, { useState, useEffect, Suspense } from "react";
import { CiFilter } from "react-icons/ci";
import CourtsSlider from "../component/CourtsSlider";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useAuthToken } from "../customHook/useAuthToken";
import {
  addCourt,
  filterCourts,
  searchCourt,
} from "../services/courtsServices";
import "react-toastify/dist/ReactToastify.css";
import CourtCarousel from "../component/CourtCarousel";

const Courts = () => {
  const { token, decodedToken } = useAuthToken();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const [loggedInUser, setLoggedInUser] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [loader, setLoader] = useState(false);
  const [updateContent, setUpdateContent] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [filteredCourts, setFilteredCourts] = useState([]);

  // State for filtering courts
  const [order, setOrder] = useState("");
  const [courtType, setCourtType] = useState("");

  // State for form data
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

  const getCourts = async () => {
    try {
      const data = await filterCourts(order, courtType);
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

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const handleCourtTypeChange = (e) => {
    setCourtType(e.target.value);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

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

    const updatedFormData = new FormData();
    for (const key in formData) {
      updatedFormData.append(key, formData[key]);
    }

    try {
      const response = await addCourt(updatedFormData, token);
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
        setShowPopup(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Network error: " + error.message);
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
        {loggedInUser && (
          <button
            className="bg-[#FFA500] rounded-md md:text-xl text-sm text-black md:px-16 px-3 py-2 shadow"
            onClick={() => setShowPopup(true)}
          >
            Add Court
          </button>
        )}
      </div>

      {/* <CourtCarousel
          slide={"box"}
          // key={updateContent}
          searchResults={searchResults}
          filteredCourts={filteredCourts} 
        /> */}

      <CourtsSlider
        slide={"box"}
        key={updateContent}
        searchResults={searchResults}
        filteredCourts={filteredCourts}
      />

      <div className="mt-10 mb-40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57939.403949465006!2d67.15371090000001!3d24.8223971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1723305059891!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Filter Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center popup-overlay">
          <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl mb-4">Add Court</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Court Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                name="size"
                placeholder="Size"
                value={formData.size}
                onChange={handleChange}
                required
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                name="availability"
                placeholder="Availability"
                value={formData.availability}
                onChange={handleChange}
                required
                className="border p-2 w-full mb-2"
              />
              <input
                type="number"
                name="cost"
                placeholder="Cost"
                value={formData.cost}
                onChange={handleChange}
                required
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                name="type"
                placeholder="Type"
                value={formData.type}
                onChange={handleChange}
                required
                className="border p-2 w-full mb-2"
              />
              <input
                type="file"
                name="image"
                multiple
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.files })
                }
                className="border p-2 w-full mb-2"
              />
              <button
                type="submit"
                className="bg-[#FFA500] text-white p-2 rounded"
              >
                {loader ? "Adding..." : "Add Court"}
              </button>
            </form>
            <button onClick={togglePopup} className="mt-4 text-red-500">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courts;
