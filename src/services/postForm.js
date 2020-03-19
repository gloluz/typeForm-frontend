import axios from "axios";

/**
 * Create a form
 * @param {object} form
 */
export const postForm = async form => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URI}/form`,
      form
    );

    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
