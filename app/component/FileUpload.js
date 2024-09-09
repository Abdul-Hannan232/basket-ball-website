"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FileUpload({ fileControl, previewControl, type }) {
const [typeError,setTypeError]=useState(false)
    const validateFileType = (file) => {
        setTypeError(false)
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedTypes.includes(file.type)) {
            setTypeError(true)
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
        }else{
            event.target.value = '';
        }
    };

    // Handle multiple file uploads with validation
    const handleMultiFile = (event) => {
        const files = Array.from(event.target.files);
        const newPreviews = [...previewControl.previewUrls];
        const newFiles = [...fileControl.files];

        let previewIndex = previewControl.previewUrls.findIndex(preview => preview === null);

        files.forEach((file) => {
            if (validateFileType(file) && previewIndex !== -1 && previewIndex < 5) {
                newPreviews[previewIndex] = URL.createObjectURL(file);
                newFiles[previewIndex] = file;
                previewIndex++;
            }
        });

        fileControl.setFiles(newFiles);
        previewControl.setPreviewUrls(newPreviews);
    };

    return (
        <div>
             {/* <ToastContainer /> */}
            {type && type === "multiple" ? (
                <input
                    required
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleMultiFile}
                />
            ) : (
                <input
                    required
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            )}
            {typeError?( <p>"Only JPG, PNG, and JPEG files are allowed."</p>):""}
           
        </div>
    );
}

export default FileUpload;
