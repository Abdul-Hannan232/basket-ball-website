"use client";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image"
function FileUpload({ page, fileControl, previewControl, type, text, color }) {
    const [typeError, setTypeError] = useState(false);
    const fileInputRef = useRef(null); // Reference to the hidden file input

    const validateFileType = (file) => {
        setTypeError(false);
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedTypes.includes(file.type)) {
            setTypeError(true);
            return false;
        }
        return true;
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && validateFileType(file)) {
            fileControl(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                const url = reader.result;
                previewControl(url);
            };
            reader.readAsDataURL(file);
        } else {
            event.target.value = '';
        }
    };

    const handleMultiFile = (event) => {
        const files = Array.from(event.target.files);
        const newPreviews = [...previewControl.previewUrls];
        const newFiles = [...fileControl.files];

        let previewIndex = previewControl.previewUrls.findIndex(preview => preview === null);

        files.forEach((file) => {
            if (validateFileType(file) && previewIndex !== -1 && previewIndex < 6) {
                newPreviews[previewIndex] = URL.createObjectURL(file);
                newFiles[previewIndex] = file;
                previewIndex++;
            }
        });

        fileControl.setFiles(newFiles);
        previewControl.setPreviewUrls(newPreviews);
    };

    // Function to trigger the file input click
    const triggerFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div>
            {/* Text to click for uploading a file */}
            {page === "user-profile" ? (
                <div className="relative w-32   -mt-10 mx-auto flex justify-end ">
                    <Image src="/Vector (1).png" alt="image" width={45} height={45} className="bg-[#333333]    shadow-xl pt-[13px]  px-2 pb-[8px] rounded-full"  onClick={triggerFileUpload} />
                </div>
            ) : (
                <p
                    onClick={triggerFileUpload}
                    className={`cursor-pointer md:text-sm text-xs text-center flex justify-center`}
                    style={{ color: color }}  /* Dynamic color styling */
                >
                    {text}
                </p>
            )}



            {/* Hidden file input */}
            {type && type === "multiple" ? (
                <input
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    required
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleMultiFile}
                />
            ) : (
                <input
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            )}

            {typeError ? (<p className="text-center text-sm  mt-10 font-semibold text-red-500">Only JPG, PNG, and JPEG files are allowed.</p>) : ""}
        </div>
    );
}

export default FileUpload;
