"use client";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FileUpload({ fileControl, previewControl, type, text,color }) {
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
            <p onClick={triggerFileUpload} className={`cursor-pointer md:text-sm text-xs text-center  text-[${color}] flex justify-center`}>
                {text}
            </p>

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

            {typeError ? (<p>Only JPG, PNG, and JPEG files are allowed.</p>) : ""}
        </div>
    );
}

export default FileUpload;
