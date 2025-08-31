import api from "./api";

type UploadVideoResponse = {
  filename: string; 
  predicted_text: string;
};

export const sendVideo = async (video: File): Promise<UploadVideoResponse> => {
  const formData = new FormData();
  formData.append("file", video); // Key should match backend field name

  const response = await api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
