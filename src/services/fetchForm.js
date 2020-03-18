import axios from "axios";

/**
 * Read a form by id
 * @param {string} id
 */
export const fetchForm = async id => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URI}/form/${id}`
    );

    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
