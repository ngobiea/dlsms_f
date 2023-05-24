import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);

      console.log(selectedFile)
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
        formData.append("file", selectedFile);
        console.log('formData', formData.get('file'))
        console.log('selectedFile', selectedFile)
      axios
        .post("http://localhost:8080/upload", formData)
        .then((response) => {
          console.log("File uploaded successfully:", response.data);
          // Handle success response
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          // Handle error response
        });
    } else {
        console.error("Please choose a file to upload");
      }
      
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
