import api from "./api";

export const sendVideo = async (video: File): Promise<{ message: string }> => {
  const formData = new FormData();
  formData.append("video", video); // Key should match backend field name

  const response = await api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
