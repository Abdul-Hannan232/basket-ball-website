"use client";
import React, { useState } from "react";

function FileUpload({ setFile, setPreviewUrl }) {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                const url = reader.result;
                setPreviewUrl(url);
            };
            reader.readAsDataURL(file);
        }
    };

    // const handleUpload = async () => {
    //     if (!selectedFile) return;

    //     const formData = new FormData();
    //     formData.append('file', selectedFile);

    //     try {
    //         const response = await fetch('http://localhost:2023/upload', {
    //             method: 'POST',
    //             body: formData,
    //         });

    //         if (!response.ok) {
    //             throw new Error('Upload failed');
    //         }
    //         const data = await response.json();
    //         console.log("data in file upload",data) // Assuming the API returns the image path in JSON format
    //         return data.file.path;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
    );
}

export default FileUpload;
