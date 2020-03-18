import axios from "axios";

/**
 * Update a form
 * @param {object} form
 */
export const updateForm = async form => {
  try {
    await axios.put(`${process.env.REACT_APP_API_URI}/form`, form);
  } catch (error) {
    console.log(error);
  }
};
