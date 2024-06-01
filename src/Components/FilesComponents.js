import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/fileComponents.css'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken '


function FilesComponents({uploadFunction,deleteFunction,setList}) {
  const file = useRef();
  const navigate = useNavigate();
  const tuToken = localStorage.getItem("token");
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");
  const [fileList, setFileList] = useState([]);
  const [closeView, setCloseView] = useState(true);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const onChooseFile = () => {
    file.current.click();
  };
  const onCloseForm = () => {
    setCloseView(!closeView)
    setList(fileList)
  };
  const clearFileInput = () => {
    file.current.value = "";
    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
  };
  return (
    <>
      {closeView && <div className="filesHead">
        <span className="tittle_head">
          <h1>Archivos</h1>
          <ion-icon name="close-outline" onClick={()=>{onCloseForm()}}></ion-icon>
        </span>
        
        <section className='header_files'>
            <section className='files_textInfo'>
                <input
                  ref={file}
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />

                {/* Button to trigger the file input dialog */}
                  <button className="file-btn" onClick={onChooseFile}>
                     <span className='files_icon'><ion-icon name="cloud-upload-outline"></ion-icon></span> Upload File
                  </button>
                <p>Archivos soportados: JPEG, PNG, WORD, PDF, PP, EXCEL</p>
            </section>
        </section>
        <div className="upload_file">
            <div className="file-card">
            <span className="material-symbols-outlined icon">
              <ion-icon name="document-text-outline"></ion-icon>
            </span>

            <div className="file-info">
              <div style={{ flex: 1 }}>
                <h6>{selectedFile?.name}</h6>

                <div className="progress-bg">
                  <div className="progress" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {uploadStatus === "select" ? (
                <button onClick={clearFileInput}>
                  <span class="material-symbols-outlined close-icon">
                    <ion-icon name="close-outline"></ion-icon>
                  </span>
                </button>
              ) : (
                <div className="check-circle">
                  {uploadStatus === "uploading" ? (
                    `${progress}%`
                  ) : uploadStatus === "done" ? (
                    <span
                      class="material-symbols-outlined"
                      style={{ fontSize: "20px" }}
                    >
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                    </span>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>

        {/**Espacio para la lista de archivos */}  
        <section className="uploades">
          <p className="text_uploaded">Cargados</p>
          {fileList.map((item, index) => (
            <span className="filename_upload" key={index}>
              <input type="text" disabled value={item.fileName} />
              <ion-icon name="trash-outline" onClick={()=>{deleteFunction(verificarExpiracionToken,navigate,
                  item.key,tuToken,setFileList,index
              )}}></ion-icon>
            </span>
          ))}
        </section>
        <button className="upload-btn" onClick={()=>{uploadFunction(verificarExpiracionToken,navigate,selectedFile,tuToken,
            setProgress,setUploadStatus,uploadStatus,clearFileInput,setFileList)}}>
            {uploadStatus === "select" || uploadStatus === 'uploading' ? "Upload" : "Done"}
        </button>
        {console.log(fileList)}
    </div>}
    </>
  )
}

export default FilesComponents