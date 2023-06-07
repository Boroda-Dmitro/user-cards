import axios from "axios";

const URL = "https://647edf53c246f166da8f890c.mockapi.io/users/user";

export const fetchUsers = async () => {
  try {
    const users = await axios.get(URL);
    return users.data;
  } catch (error) {
    console.log(error);
  }
};

export const putUser = async (id, user) => {
    try {
      const response = await axios.put(`${URL}/${id}`, user);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
