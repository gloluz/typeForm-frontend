import axios from "axios";

/**
 * Delete a form
 * @param {string} id
 */
export const deleteForm = async id => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URI}/form/${id}`
    );

    return response.status === 200;
  } catch (error) {
    console.log("error", error);
  }
};
