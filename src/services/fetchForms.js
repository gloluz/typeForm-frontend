import axios from "axios";

/**
 * Read all forms
 */
export const fetchForms = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URI}/form`);

    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
