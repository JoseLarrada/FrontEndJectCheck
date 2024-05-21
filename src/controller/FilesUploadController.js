import axios from 'axios';

export const uploadFile = async (verificarExpiracionToken, navigate, file, tuToken, setProgress,setUploadStatus,uploadStatus,clearFileInput) => {
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

    const response = await axios.post("http://localhost:8080/api/v1/assets/Upload", formData, {
      headers: {
        Authorization: `Bearer ${tuToken}`,
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      },
      responseType: 'text'
    });
    if (response.status === 200) {
        const key = response.data;
        alert(key);
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

