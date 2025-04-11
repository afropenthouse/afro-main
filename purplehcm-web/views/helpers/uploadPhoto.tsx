import { toast } from "react-toastify";
import { postData } from "../apis/apiMethods";
import CONFIG from "./config";
import { apiEndpoints } from "../apis/apiEndpoints";

// Function to upload a photo
export async function uploadPhoto(file: File) {
  const formData = new FormData();
  formData.append("File", file);

  // Display the loader toast
  const toastId = toast("Uploading...", {
    autoClose: false,
    closeButton: false,
    isLoading: true,
    position: "top-right",
  });

  try {
    const response = await postData(
      `${CONFIG.BASE_URL}${apiEndpoints.UPLOAD_IMAGE}`,
      formData
    );

    console.log(response, "real response");

    if (response?.isSuccessful) {
      // If upload is successful, update the toast to display a success message
      toast.update(toastId, {
        render: "Upload successful!",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
      return response.data; // return the server's response
    }
    if (!response?.isSuccessful) {
      toast.update(toastId, {
        render: "Upload failed. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
    }
  } catch (error) {
    // If there's an error, update the toast to display an error message
    toast.update(toastId, {
      render: "Upload failed. Please try again.",
      type: "error",
      isLoading: false,
      autoClose: 5000,
      closeButton: true,
    });

    throw error; // rethrow the error for further handling if needed
  }
}
