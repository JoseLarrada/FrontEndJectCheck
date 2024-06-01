import axios from 'axios';

export const uploadFile = async (verificarExpiracionToken, navigate, file, tuToken, setProgress,setUploadStatus,uploadStatus,clearFileInput,setFileList) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
      return;
    }
    setUploadStatus("uploading");
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("id","2V7N1J7C4S")

    const response = await axios.post("http://localhost:8080/api/v1/assets/Upload", formData, {
      headers: {
        Authorization: `Bearer ${tuToken}`,
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      },
    });
    if (response.status === 200) {
        const key = response.data;
        alert(key);
        setFileList(prevList => [...prevList, key]);
        setUploadStatus("done");
    } else {
        const errorData = response.data;
        alert(errorData.token);
    }
  } catch (error) {
    setUploadStatus("select");
    alert("Error de red:", error);
    console.log(error);
  }
};
//Eliminar Archivos
export const deleteFile = async (verificarExpiracionToken, navigate, key, tuToken,setFileList,index) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
      return;
    }
  
    const response = await axios.delete(`http://localhost:8080/api/v1/assets/deleteKey/${key}`,
    {
      headers: {
        Authorization: `Bearer ${tuToken}`,
      },
    });
    if (response.status === 200) {
        const responseData = response.data;
        alert(responseData);
        setFileList(prevList => prevList.filter((_, i) => i !== index));
    } else {
        const errorData = response.data;
        console.log(errorData)
    }
  } catch (error) {
    alert("Error de red:", error);
    console.log(error);
  }
};

export const uploadRubrics = async (verificarExpiracionToken, navigate, file, tuToken, setProgress,setUploadStatus,uploadStatus,clearFileInput,setFileList) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
      return;
    }
    setUploadStatus("uploading");
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("id","5P0N0V3P9C")

    const response = await axios.post("http://localhost:8080/api/v1/rubrics/Upload", formData, {
      headers: {
        Authorization: `Bearer ${tuToken}`,
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      },
    });
    if (response.status === 200) {
        const key = response.data;
        alert(key);
        setFileList(prevList => [...prevList, key]);
        setUploadStatus("done");
    } else {
        const errorData = response.data;
        alert(errorData.token);
    }
  } catch (error) {
    setUploadStatus("select");
    alert("Error de red:", error);
    console.log(error);
  }
};
export const deleteRubric = async (verificarExpiracionToken, navigate, key, tuToken,setFileList,index) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
      return;
    }
  
    const response = await axios.delete(`http://localhost:8080/api/v1/rubrics/deleteKey/${key}`,
    {
      headers: {
        Authorization: `Bearer ${tuToken}`,
      },
    });
    if (response.status === 200) {
        const responseData = response.data;
        alert(responseData);
        setFileList(prevList => prevList.filter((_, i) => i !== index));
    } else {
        const errorData = response.data;
        console.log(errorData)
    }
  } catch (error) {
    alert("Error de red:", error);
    console.log(error);
  }
};
export const getrubrics = async (verificarExpiracionToken,navigate,tuToken,setListRubricId)=>{
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
      return;
    }
  
    const response = await axios.get(`http://localhost:8080/api/v1/rubrics/getRubrics/${localStorage.getItem('id_avance')}`,
    {
      headers: {
        Authorization: `Bearer ${tuToken}`,
      },
    });
    if (response.status === 200) {
        const responseData = response.data;
        setListRubricId(responseData)
    } else {
        const errorData = response.data;
        console.log(errorData)
    }
  } catch (error) {
    alert("Error de red:", error);
    console.log(error);
  }
}